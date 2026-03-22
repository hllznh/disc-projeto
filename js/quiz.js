// ─── Quiz Engine ──────────────────────────────────────────────────────────────

const STORAGE_KEY = 'disc_quiz_result';

let current = 0;
let answers = []; // [{most: 'D', least: 'I'}, ...]

function initQuiz() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    const data = JSON.parse(saved);
    if (data.completed) {
      showBanner();
      return;
    }
  }
  renderQuestion(0);
  updateProgress();
}

function showBanner() {
  document.getElementById('quiz-wrapper').innerHTML = `
    <div class="text-center py-16">
      <p class="text-2xl font-bold text-gray-800 mb-3">Você já realizou o quiz!</p>
      <p class="text-gray-500 mb-8">Seu perfil está salvo. Veja o resultado ou refaça o quiz.</p>
      <a href="resultado.html" class="inline-block bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition mr-3">Ver Resultado</a>
      <button onclick="resetQuiz()" class="inline-block border border-gray-300 text-gray-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition">Refazer Quiz</button>
    </div>`;
}

function resetQuiz() {
  localStorage.removeItem(STORAGE_KEY);
  current = 0;
  answers = [];
  document.getElementById('quiz-wrapper').innerHTML = `
    <div id="question-card" class="bg-white rounded-2xl shadow-lg p-8"></div>
    <div class="flex justify-between mt-6">
      <button id="btn-prev" onclick="prevQuestion()" class="hidden px-6 py-3 border border-gray-300 rounded-xl text-gray-600 hover:bg-gray-50 transition">← Anterior</button>
      <div class="flex-1"></div>
    </div>`;
  renderQuestion(0);
  updateProgress();
}

function renderQuestion(idx) {
  const q = QUIZ_QUESTIONS[idx];
  const card = document.getElementById('question-card');
  const prev = document.getElementById('btn-prev');
  if (prev) prev.classList.toggle('hidden', idx === 0);

  const saved = answers[idx] || {};

  card.innerHTML = `
    <p class="text-xs uppercase tracking-widest text-indigo-500 font-semibold mb-2">Grupo ${idx + 1} de ${QUIZ_QUESTIONS.length}</p>
    <h2 class="text-xl font-bold text-gray-800 mb-1">Qual palavra <span class="text-indigo-600">mais</span> representa você?</h2>
    <p class="text-sm text-gray-500 mb-5">Escolha também qual <span class="text-rose-500 font-medium">menos</span> representa.</p>

    <div class="grid grid-cols-2 gap-3 mb-6" id="options-most">
      ${q.options.map(o => `
        <button data-factor="${o.factor}" onclick="selectMost('${o.factor}', ${idx})"
          class="option-most border-2 rounded-xl px-4 py-3 text-left font-medium transition
            ${saved.most === o.factor ? 'border-indigo-500 bg-indigo-50 text-indigo-700' : 'border-gray-200 text-gray-700 hover:border-indigo-300'}">
          <span class="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-0.5">Mais</span>
          ${o.text}
        </button>`).join('')}
    </div>

    <h2 class="text-xl font-bold text-gray-800 mb-5">Qual palavra <span class="text-rose-500">menos</span> representa você?</h2>
    <div class="grid grid-cols-2 gap-3" id="options-least">
      ${q.options.map(o => `
        <button data-factor="${o.factor}" onclick="selectLeast('${o.factor}', ${idx})"
          class="option-least border-2 rounded-xl px-4 py-3 text-left font-medium transition
            ${saved.least === o.factor ? 'border-rose-500 bg-rose-50 text-rose-700' : 'border-gray-200 text-gray-700 hover:border-rose-300'}">
          <span class="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-0.5">Menos</span>
          ${o.text}
        </button>`).join('')}
    </div>

    <div id="next-area" class="mt-6 text-right ${(saved.most && saved.least) ? '' : 'hidden'}">
      <button onclick="nextQuestion(${idx})" class="bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition">
        ${idx === QUIZ_QUESTIONS.length - 1 ? 'Ver Resultado →' : 'Próximo →'}
      </button>
    </div>`;
}

function selectMost(factor, idx) {
  if (!answers[idx]) answers[idx] = {};
  if (answers[idx].most === factor) return; // already selected
  answers[idx].most = factor;
  // ensure most ≠ least
  if (answers[idx].least === factor) answers[idx].least = null;
  renderQuestion(idx);
}

function selectLeast(factor, idx) {
  if (!answers[idx]) answers[idx] = {};
  if (answers[idx].least === factor) return;
  answers[idx].least = factor;
  if (answers[idx].most === factor) answers[idx].most = null;
  renderQuestion(idx);
}

function nextQuestion(idx) {
  const a = answers[idx];
  if (!a || !a.most || !a.least) return;
  if (idx === QUIZ_QUESTIONS.length - 1) {
    finishQuiz();
  } else {
    current = idx + 1;
    renderQuestion(current);
    updateProgress();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function prevQuestion() {
  if (current > 0) {
    current--;
    renderQuestion(current);
    updateProgress();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function updateProgress() {
  const pct = Math.round((current / QUIZ_QUESTIONS.length) * 100);
  const bar = document.getElementById('progress-bar');
  const label = document.getElementById('progress-label');
  if (bar) bar.style.width = pct + '%';
  if (label) label.textContent = `${current} / ${QUIZ_QUESTIONS.length}`;
}

function finishQuiz() {
  const scores = { D: 0, I: 0, S: 0, C: 0 };
  answers.forEach(a => {
    if (a.most)  scores[a.most]  += 1;
    if (a.least) scores[a.least] -= 1;
  });

  // Normalize to 0-100 range for display
  const min = Math.min(...Object.values(scores));
  const offset = min < 0 ? -min : 0;
  const normalized = {};
  Object.keys(scores).forEach(k => { normalized[k] = scores[k] + offset; });
  const max = Math.max(...Object.values(normalized));
  const pct = {};
  Object.keys(normalized).forEach(k => { pct[k] = max > 0 ? Math.round((normalized[k] / max) * 100) : 25; });

  // Dominant profile(s) = highest raw score
  const maxRaw = Math.max(...Object.values(scores));
  const dominant = Object.keys(scores).filter(k => scores[k] === maxRaw);

  // Find closest talent
  const talent = findTalent(dominant[0], dominant[1] || null);

  const result = { scores, pct, dominant, talent: talent ? talent.id : null, completed: true, date: new Date().toISOString() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(result));
  window.location.href = 'resultado.html';
}

function findTalent(primary, secondary) {
  // Try to match primary + secondary combination, fallback to primary only
  if (secondary) {
    const combo = TALENTS.find(t => t.primary === primary || t.primary === secondary);
    if (combo) return combo;
  }
  return TALENTS.find(t => t.primary === primary) || TALENTS[0];
}
