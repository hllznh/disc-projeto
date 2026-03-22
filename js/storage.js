// ─── Storage Service ──────────────────────────────────────────────────────────
// Usa Firebase Firestore quando configurado; localStorage como fallback.

const Storage = (() => {
  let _db = null;
  let _ready = false;
  const LOCAL_KEY = 'disc_all_results';
  const COLLECTION = 'disc_results';

  function init() {
    try {
      const cfg = FIREBASE_CONFIG;
      if (!cfg || cfg.apiKey === 'YOUR_API_KEY') return;
      if (!firebase.apps.length) firebase.initializeApp(cfg);
      _db = firebase.firestore();
      _ready = true;
    } catch (e) {
      console.warn('[Storage] Firebase indisponível — usando localStorage.', e.message);
    }
  }

  function uuid() {
    return Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 9);
  }

  // ── Local helpers ─────────────────────────────────────────────────────────

  function localAll() {
    try { return JSON.parse(localStorage.getItem(LOCAL_KEY) || '[]'); } catch { return []; }
  }

  function localSave(record) {
    const all = localAll();
    all.unshift(record);
    localStorage.setItem(LOCAL_KEY, JSON.stringify(all));
  }

  function localByEmail(email) {
    return localAll().filter(r => r.email?.toLowerCase() === email.toLowerCase());
  }

  function localById(id) {
    return localAll().find(r => r.id === id) || null;
  }

  // ── Public API ────────────────────────────────────────────────────────────

  async function save(payload) {
    const record = {
      id: uuid(),
      ...payload,
      email: payload.email?.toLowerCase().trim(),
      createdAt: new Date().toISOString(),
    };

    if (_ready) {
      const ref = await _db.collection(COLLECTION).add(record);
      record._firestoreId = ref.id;
    } else {
      localSave(record);
    }
    return record;
  }

  async function getByEmail(email) {
    if (!email) return [];
    const e = email.toLowerCase().trim();

    if (_ready) {
      const snap = await _db.collection(COLLECTION)
        .where('email', '==', e)
        .orderBy('createdAt', 'desc')
        .get();
      return snap.docs.map(d => ({ _firestoreId: d.id, ...d.data() }));
    }
    return localByEmail(e);
  }

  async function getById(id) {
    if (_ready) {
      // try by local id field first
      const snap = await _db.collection(COLLECTION).where('id', '==', id).limit(1).get();
      if (!snap.empty) return { _firestoreId: snap.docs[0].id, ...snap.docs[0].data() };
      return null;
    }
    return localById(id);
  }

  function isFirebase() { return _ready; }

  return { init, save, getByEmail, getById, isFirebase };
})();
