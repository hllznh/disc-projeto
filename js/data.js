// ─── DISC Core Profiles ───────────────────────────────────────────────────────

const DISC_PROFILES = {
  D: {
    letter: 'D',
    name: 'Dominância',
    color: 'red',
    hex: '#DC2626',
    light: '#FEE2E2',
    element: 'Fogo',
    humour: 'Colérico',
    jung: 'Produtor',
    axis: 'Atividade + Controle',
    emotion: 'Força de caráter, independência, irritação',
    basicFear: 'Falhar, não conseguir realizar',
    bodyLanguage: 'Tenta assumir as rédeas, interrompe, incansável, impaciente',
    seek: 'Domínio, independência, diretividade, poder',
    traits: ['Iniciativa própria','Competitiva','Orientada a resultados','Alta autoestima','Objetiva','Pioneira','Empreendedora','Criativa','Decidida','Arrojada'],
    weaknesses: ['Arrogante','Agressiva','Individualista','Exigente','Dominadora'],
    motivations: ['Ausência de controle','Independência de pessoas e regras','Competição e vencer','Mudança','Diversidade','Desafio','Sucesso','Autoridade'],
    develop: ['Iniciativa própria','Assertividade / Comunicação','Pioneirismo','Tomada de decisões'],
    resize: ['Diplomacia','Flexibilidade','Consenso','Moderação'],
    leaderDo: ['Deixá-lo descobrir as coisas por ele mesmo','Foco nos negócios e nos fatos','Discutir dados concretos','Negociar metas e compromissos'],
    leaderDont: ['Dizer-lhes o que fazer','Dar muitos detalhes ou usar muitas regras','Demorar para tomar decisões'],
    idealLeader: 'Direto, objetivo, negocia compromissos pessoalmente com ele',
    mustLearn: ['Empatia não é fraqueza','Relaxar não é crime','Alguns controles são necessários','Todos têm um chefe'],
    limitations: ['Passa por cima de prerrogativas','Age impacientemente','Inspira medo nos outros','Desatento a pequenas coisas','Fica insatisfeito com trabalho rotineiro'],
    description: 'Pessoas com alta Dominância são orientadas a resultados, diretas e assertivas. Elas prosperam diante de desafios e preferem ambientes onde podem tomar decisões com autonomia.',
  },
  I: {
    letter: 'I',
    name: 'Influência',
    color: 'amber',
    hex: '#D97706',
    light: '#FEF3C7',
    element: 'Água',
    humour: 'Sanguíneo',
    jung: 'Sensitivo',
    axis: 'Atividade + Abertura',
    emotion: 'Confiança, entusiasmo, afetividade, relacionamento interpessoal',
    basicFear: 'Não agradar, ser rejeitado',
    bodyLanguage: 'Entusiasmado, amigável, mexe as mãos, conta histórias',
    seek: 'Prestígio, persuasão, aprovação, popularidade',
    traits: ['Empática','Confiante','Otimista','Afável','Persuasiva','Participativa','Articulada','Positiva','Emotiva','Amiga'],
    weaknesses: ['Inconstante','Começa mas não termina','Superficial em avaliações','Fala demais','Desatenta a detalhes'],
    motivations: ['Reconhecimento público','Renda psicológica','Atividades de grupo','Relacionamentos amigáveis','Liberdade de expressão','Pessoas e mais pessoas'],
    develop: ['Persuasão','Interação e participação','Empatia','Confiança','Fluência verbal'],
    resize: ['Autocontrole','Lógica','Reflexão analítica','Distanciamento','Reserva e formalidade'],
    leaderDo: ['Falar sobre ideias e opiniões','Resumir por escrito o que foi acordado','Reconhecer suas ideias','Construir relacionamentos'],
    leaderDont: ['Discutir','Falar de fatos sem sentimentos'],
    idealLeader: 'Democrático, amigo, reconhece o trabalho publicamente',
    mustLearn: ['Administração do tempo ajuda','Popularidade não é tudo','Embasamento técnico é importante','Existe excesso de otimismo'],
    limitations: ['Mais preocupado com popularidade do que resultados','Pode tirar conclusões precipitadas','Superficial ao avaliar pessoas','Desatento a detalhes','Age impulsivamente'],
    description: 'Pessoas com alta Influência são comunicativas, entusiasmadas e orientadas a relacionamentos. Elas prosperam em ambientes sociais e têm grande capacidade de motivar e persuadir.',
  },
  S: {
    letter: 'S',
    name: 'Estabilidade',
    color: 'green',
    hex: '#16A34A',
    light: '#DCFCE7',
    element: 'Terra',
    humour: 'Melancólico',
    jung: 'Intuitivo',
    axis: 'Passividade + Abertura',
    emotion: 'Moderação, consistência, previsibilidade',
    basicFear: 'Perder a segurança',
    bodyLanguage: 'Bom ouvinte, relaxado e gentil, resiste a mudanças, não agressivo',
    seek: 'Persistência, consistência, status quo, continuidade, organização',
    traits: ['Formal','Calma','Firme','Autocontrolada','Paciente','Amável','Previsível','Tenaz','Deliberada','Leal'],
    weaknesses: ['Resistente a mudanças','Teimosia','Conservadorismo','Indolência em situações novas'],
    motivations: ['Segurança','Elogios','Sinceridade','Especialização','Reconhecimento por lealdade','Ambiente estável e familiar'],
    develop: ['Tenacidade','Energia','(ver material completo)'],
    resize: ['(ver material completo)'],
    leaderDo: ['Usar ritmo pausado','Fazer perguntas e ouvir','Mostrar-se interessado na pessoa','Dar tempo para mudanças'],
    leaderDont: ['Introduzir mudanças rápidas','Mudar rotina seguidamente','Apressá-lo'],
    idealLeader: 'Amigável, toma tempo para conhecê-lo como pessoa e profissional',
    mustLearn: ['Segurança vem dos resultados','Há oportunidades nas mudanças','Amizade é importante, mas cuidado com excesso de confiança'],
    limitations: ['Luta para manter o status quo','Pode ter problemas em cumprir prazos','Pode guardar rancor','Tende a esperar ordens para agir'],
    description: 'Pessoas com alta Estabilidade são pacientes, leais e consistentes. Elas prosperam em ambientes estruturados e previsíveis, sendo excelentes jogadores de equipe.',
  },
  C: {
    letter: 'C',
    name: 'Conformidade',
    color: 'blue',
    hex: '#2563EB',
    light: '#DBEAFE',
    element: 'Ar',
    humour: 'Fleumático',
    jung: 'Analítico',
    axis: 'Passividade + Controle',
    emotion: 'Evita confronto, postura defensiva, expressão contida',
    basicFear: 'Errar, não estar certo',
    bodyLanguage: 'Toma notas, preciso, cuidadoso ao expressar sentimentos, quer mais informações',
    seek: 'Exatidão, controles, resultados com perfeição',
    traits: ['Autodisciplinada','Bom senso','Precisa','Ortodoxa','Precavida','Meticulosa','Perfeccionista','Orientada a procedimentos','Adaptável'],
    weaknesses: ['Prolixo','Indecisão crônica','Exige demais de si e dos outros','Insônia por não largar problemas'],
    motivations: ['Ambiente em ordem','Segurança','Todos os fatos','Regras e políticas','Atenção pessoal','Trabalho especializado de alto nível'],
    develop: ['(ver material completo)'],
    resize: ['(ver material completo)'],
    leaderDo: ['Ser sistemático e organizado','Listar vantagens e desvantagens','Dar coisas por escrito','Dar provas sólidas'],
    leaderDont: ['Acelerar decisões','Fazer mudanças súbitas','Esquecer detalhes','Ser muito genérico'],
    idealLeader: 'Dá apoio, discute decisões importantes, especifica informações com clareza',
    mustLearn: ['O bom é inimigo do ótimo','Deadlines precisam ser cumpridos mesmo com dupla checagem','Explicações detalhadas não são tudo'],
    limitations: ['Pode ser excessivamente ligado a regras','Pode resistir a responsabilidades','Defensivo quando ameaçado','Pode se atrapalhar com detalhes'],
    description: 'Pessoas com alta Conformidade são analíticas, precisas e orientadas a qualidade. Elas prosperam em ambientes estruturados com regras claras e padrões elevados.',
  },
};

// ─── Comparison Table ─────────────────────────────────────────────────────────

const DISC_TABLE = {
  emotion:   { D: 'Raiva',           I: 'Otimismo',          S: 'Medo',                C: 'Não demonstra' },
  need:      { D: 'Dirigir e controlar', I: 'Interagir e verbalizar', S: 'Servir os outros', C: 'Conformidade com altos padrões' },
  goal:      { D: 'Desafios pessoais', I: 'Reconhecimento social', S: 'Práticas tradicionais', C: 'Perfeição' },
  fear:      { D: 'Ser passado para trás', I: 'Rejeição social', S: 'Perda da estabilidade', C: 'Crítica ao trabalho' },
};

// ─── 40 Natural Talents ───────────────────────────────────────────────────────

const TALENTS = [
  { id:1,  name:'O Comandante',    summary:'Realiza pela imposição de suas ideias',                 primary:'D', traits:['Gosta de estar no comando','Altamente competitivo','Empreendedor','Criativo','Decidido','Arrojado'],           motivations:['Ausência de controle','Independência','Competição','Desafio','Autoridade'] },
  { id:2,  name:'O Empreendedor',  summary:'Realiza pela adesão das pessoas',                       primary:'D', traits:['Precisa realizar','Sempre insatisfeito','Influencia e persuade','Assertivo','Comunica-se de forma direta'],    motivations:['Diversidade','Novidades','Poder','Prestígio','Autoridade','Liberdade de expressão'] },
  { id:3,  name:'O Solucionador',  summary:'Realiza aliando flexibilidade à organização',           primary:'D', traits:['Adora resolver problemas','Flexibilidade eficiente','Organizado','Firme','Amistoso','Persistente'],            motivations:['Obter resultado por meio das pessoas','Agir independentemente','Pertencer a um grupo'] },
  { id:4,  name:'O Julgador',      summary:'Realiza com base na justiça',                           primary:'D', traits:['Assertivo','Empreendedor','Trata todos com igualdade','Competitivo','Autoconfiante','Imaginativo'],             motivations:['Necessidade de estar certo','Prestígio','Autoridade','Respeito dos colegas'] },
  { id:5,  name:'O Organizador',   summary:'Realiza pela persistência e pelo foco',                 primary:'D', traits:['Meticuloso','Organizado','Estabelece metas','Mantém o foco','Deliberado','Resoluto'],                          motivations:['Atribuições desafiantes','Operar sozinho','Independência','Autoridade para investigar'] },
  { id:6,  name:'O Normatizador',  summary:'Realiza o que pesquisou e descobriu, sem admitir erros', primary:'D', traits:['Lógico','Sistemático','Preciso','Adora atividades mentais','Cauteloso','Assertivo'],                          motivations:['Sentir-se independente','Ter dados históricos','Ambiente planejado'] },
  { id:7,  name:'O Estrategista',  summary:'Realiza definindo as metas e organizando o caos',       primary:'D', traits:['Estrategista','Vê padrões onde outros veem complexidade','Toma decisões','Competitivo','Lógico','Preciso'],     motivations:['Realizações pessoais','Tarefas diversificadas','Liberdade de expressão'] },
  { id:8,  name:'O Inovador',      summary:'Impõe mudanças e uma nova ordem',                       primary:'D', traits:['Lógico','Sistemático','Não gosta de surpresas','Arrojado nas ideias','Cauteloso na ação'],                    motivations:['Independência','Desafios analíticos','Poder','Autoridade'] },
  { id:9,  name:'O Instrutor',     summary:'Valoriza as pessoas e investe no aprimoramento delas',  primary:'I', traits:['Valoriza cada pessoa','Elogia no momento certo','Alcança resultados de forma constante','Não esmorece'],      motivations:['Oportunidade de dirigir e aconselhar','Reconhecimento público','Trabalhar com metas'] },
  { id:10, name:'O Competidor',    summary:'Enfrenta os desafios com técnica e arte',               primary:'D', traits:['Garra','Perseverança','Persistente','Foca na meta','Remove obstáculos','Cuida de si mesmo'],                  motivations:['Vitória','Reconhecimento','Condições de preparar-se adequadamente'] },
  { id:11, name:'O Carismático',   summary:'Faz a festa e desperta o prazer — é comunicação em ação', primary:'I', traits:['Fácil contato','Explica e fala em público','Autoconfiante','Influenciador','Otimista','Persuasivo'],         motivations:['Ser popular e estimado','Status','Variedade e mobilidade','Liberdade'] },
  { id:12, name:'O Gerenciador',   summary:'Realiza por intermédio das pessoas, potencializando talentos', primary:'I', traits:['Busca o excepcional','Motiva e influencia','Assertivo','Positivo','Persistente','Competitivo'],         motivations:['Desafio','Contatos variados','Prestígio','Reconhecimento público'] },
  { id:13, name:'O Comprometido',  summary:'Realiza pelo comprometimento e pelo exemplo',           primary:'I', traits:['Ética implacável','Participativo','Autoconfiante','Consistente','Autodisciplinado','Flexível'],               motivations:['Reconhecimento público','Variedade em ambiente estruturado','Ser estimado'] },
  { id:14, name:'O Harmonizador',  summary:'Realiza pela convergência de interesses entre as pessoas', primary:'I', traits:['Preocupado em gerar harmonia','Procura concordância','Amistoso','Metódico','Organizado'],                  motivations:['Prestígio','Liberdade de expressão','Reconhecimento por serviços prestados'] },
  { id:15, name:'O Professoral',   summary:'Realiza preparando e informando as pessoas',            primary:'I', traits:['Cuidadoso','Diplomático','Absorve e compartilha informações','Meticuloso','Confiante','Entusiasmado'],         motivations:['Segurança','Ser aceito','Ambiente amigável','Contato com as pessoas'] },
  { id:16, name:'O Estimulador',   summary:'Ajuda as pessoas a progredirem e a se desenvolverem',  primary:'S', traits:['Valores permanentes','Altruísta','Espiritual','Capaz de dar conselhos','Sabe ajudar'],                        motivations:['Ambiente isento de antagonismos','Ser membro integrante da equipe','Aprovação'] },
  { id:17, name:'O Integrador',    summary:'Motiva pela integração e persuade pela convicção',      primary:'I', traits:['Preza justiça','Capacidade de influenciar','Comunica-se logicamente','Obsequioso','Cooperativo'],             motivations:['Aceitação do público','Ambiente livre de conflitos','Informações exatas'] },
  { id:18, name:'O Aprendiz',      summary:'Tem sede de aprender sempre — o mundo é uma grande escola', primary:'S', traits:['Adora aprender','Interesse por quase tudo','Gosta de conhecer o novo em profundidade'],                  motivations:['Sentir-se aceito pelo grupo','Reconhecimento social','Variedade de pessoas e tarefas'] },
  { id:19, name:'O Aconselhador',  summary:'Tem capacidade de convencer as pessoas e faz adeptos para suas ideias', primary:'I', traits:['Boa ouvinte','Fluente','Carismático','Todos confiam nele'],                                   motivations:['Relacionamento','Ouvir as pessoas','Comunicação','Trabalhar com e para as pessoas'] },
  { id:20, name:'O Articulador',   summary:'Identifica os talentos dos outros e os coloca em contato', primary:'S', traits:['Estabelece conexões','Confia nas pessoas','Gosta de ajudar','Vai até o fim no que se propôs'],            motivations:['Solucionar problemas','Dar segurança aos outros','Conhecer as pessoas de perto'] },
  { id:21, name:'O Protetor',      summary:'Protege e consola as pessoas — gosta de cuidar',        primary:'S', traits:['Conectado com as outras pessoas','Sensível','Organizado','Presta bom atendimento'],                          motivations:['Segurança','Afetos','Ambiente estruturado','Recompensa por lealdade'] },
  { id:22, name:'O Recuperador',   summary:'Tem prazer especial em restaurar o que não está perfeito', primary:'C', traits:['Autodidata','Concentra-se facilmente','Meticuloso','Estruturado','Tenaz','Reservado'],                    motivations:['Ambiente estruturado','Contrato de trabalho','Independência de estrutura e tempo'] },
  { id:23, name:'O Pacificador',   summary:'Estabelece a paz nas situações conflitantes',           primary:'S', traits:['Não suporta desavenças','Pacifica os ânimos','Paciente','Metódico','Sensível','Diplomático'],                motivations:['Ambiente amigável','Status quo','Segurança','Honestidade e sinceridade'] },
  { id:24, name:'O Observador',    summary:'Observa para entender e se orientar — sábio sobre o futuro', primary:'S', traits:['Busca no passado a compreensão do presente','Precisa de tempo','Constrói visão','Aconselha'],          motivations:['Segurança','Sinceridade','Ambiente constante e calmo','Saber onde pisa'] },
  { id:25, name:'O Cauteloso',     summary:'É cauteloso para não precisar remediar',                primary:'S', traits:['Reflexivo','Sem pressa para decidir','Desconfiado','Calmo','Tranquilo','Sabe esperar'],                      motivations:['Ambiente estruturado','Segurança','Objetivos definidos','Mudanças explicadas'] },
  { id:26, name:'O Estruturador',  summary:'Organiza e distribui tarefas com eficiência',           primary:'C', traits:['Organiza tudo a serviço da produtividade','Exigente','Fiscaliza','Flexível','Eficiente'],                     motivations:['Ambiente estruturado e previsível','Finalizar uma coisa de cada vez','Segurança'] },
  { id:27, name:'O Coordenador',   summary:'Faz tudo funcionar num clima alegre e descontraído',   primary:'I', traits:['Olhar gentil e entusiasmado','Coordena mantendo motivação','Generoso nos elogios','Celebra cada realização'],  motivations:['Estar em grupo','Coordenar','Contato com pessoas','Decidir conjuntamente'] },
  { id:28, name:'O Diplomata',     summary:'Gosta de fazer novas amizades e não se intimida com estranhos', primary:'I', traits:['Adora conhecer novas pessoas','Boa fluência verbal','Sabe quebrar o gelo','Simpático'],               motivations:['Ambiente amigável','Honestidade','Sinceridade','Estruturar o novo'] },
  { id:29, name:'O Supervisor',    summary:'Chega ao final e avalia com precisão — um filtro que aperfeiçoa', primary:'C', traits:['Lógico','Rigoroso','Apaixonado','Dedica-se à perfeição','Sério','Compenetrado'],                  motivations:['Precisa de tempo','Autoridade','Não gosta de mudanças','Parâmetros definidos'] },
  { id:30, name:'O Compreensivo',  summary:'Capaz de se colocar no lugar dos outros e entender como se sentem', primary:'S', traits:['Vê o que os outros sentem','Amigo','Fluência verbal','Conforta','Estimula'],                    motivations:['Contato com pessoas','Ambiente estruturado','Reconhecimento público'] },
  { id:31, name:'O Sonhador',      summary:'Tem na mente um mundo de possibilidades — gosta de pensar e arquitetar', primary:'C', traits:['Intuição à flor da pele','Faz conexões','Vida interior rica','Gosta do desconhecido'],      motivations:['Trabalhar sozinho','Tempo para aprofundar conhecimento','Estar certo'] },
  { id:32, name:'O Idealizador',   summary:'Tem sempre uma ideia nova à mão e busca formas de torná-la realidade', primary:'C', traits:['Fascinado por ideias','Valoriza fórmulas e lógicas','Assertivo','Quer resultado prático'],     motivations:['Ampliar conhecimento','Criar e desenvolver novos conceitos e produtos'] },
  { id:33, name:'O Precavido',     summary:'Acredita que se antecipar evita sofrimentos',           primary:'C', traits:['Fascinado por tradições','O passado explica o presente','Gosta de rotina','Coleta informações'],             motivations:['Evitar problemas','Reputação','Detalhes','Instruções e diretrizes'] },
  { id:34, name:'O Regente',       summary:'Acredita que tudo é regido por leis e as coloca a serviço da ordem', primary:'C', traits:['A vida é um relógio','Tudo tem uma ordem','É preciso de leis','Ordem e padrões'],              motivations:['Segurança','Convenção','Tradição','Regras','Objetivos definidos'] },
  { id:35, name:'O Especialista',  summary:'Concentra energia para obter detalhe e precisão no longo prazo', primary:'C', traits:['Natureza técnica e especializada','Perfeccionista','Meticuloso','Persistente','Previsível'],        motivations:['Ambiente estruturado','Trabalhar sozinho','Ampliar conhecimento','Parâmetros definidos'] },
  { id:36, name:'O Inventivo',     summary:'Podendo fazer diferente, não faz igual — inova em conjunto', primary:'C', traits:['Gosta do desconhecido','Perfeccionista','Lógico','Sistemático','Persistente'],                          motivations:['Oportunidade de novos conhecimentos','Fazer do seu jeito','Inovar'] },
  { id:37, name:'O Futurista',     summary:'Tem visão de futuro e vê oportunidades onde existem ameaças', primary:'C', traits:['Fascina-se com o futuro','Enxerga adiante','Aumenta as percepções de todos','Esperançoso'],          motivations:['Acesso ao conhecimento','Contato com pessoas','Reconhecimento'] },
  { id:38, name:'O Ordenado',      summary:'Vê uma ordem sequencial em tudo e é guiado por normas',  primary:'C', traits:['Obedece normas e metodologias','Exato','Coloca coisas em sequência','Entende tabelas e gráficos'],         motivations:['Ordem','Relações entre pesos e medidas','Desafios sistemáticos'] },
  { id:39, name:'O Educador',      summary:'Gosta de educar, orientar e transmitir conhecimentos',   primary:'S', traits:['Aprofunda e sistematiza conhecimento','Facilita o aprendizado','Sabe ouvir','Diplomático'],                motivations:['Transmitir conhecimentos','Lidar com pessoas','Reconhecimento'] },
  { id:40, name:'O Criterioso',    summary:'Sua vida é pautada por critérios — o bom senso é seu termômetro', primary:'C', traits:['Guiado pelo bom senso','Justo','Ouve todos antes de julgar','Usa razão e coração'],              motivations:['Exercer capacidade de julgamento','Aplicar normas, regras e procedimentos'] },
];

// ─── Quiz Questions (10 sets × 4 adjectives) ──────────────────────────────────

const QUIZ_QUESTIONS = [
  { set: 1,  options: [{ text: 'Decidido',       factor: 'D' }, { text: 'Entusiasmado',  factor: 'I' }, { text: 'Paciente',      factor: 'S' }, { text: 'Preciso',       factor: 'C' }] },
  { set: 2,  options: [{ text: 'Competitivo',    factor: 'D' }, { text: 'Persuasivo',    factor: 'I' }, { text: 'Leal',          factor: 'S' }, { text: 'Analítico',     factor: 'C' }] },
  { set: 3,  options: [{ text: 'Direto',         factor: 'D' }, { text: 'Otimista',      factor: 'I' }, { text: 'Calmo',         factor: 'S' }, { text: 'Detalhista',    factor: 'C' }] },
  { set: 4,  options: [{ text: 'Desafiador',     factor: 'D' }, { text: 'Inspirador',    factor: 'I' }, { text: 'Estável',       factor: 'S' }, { text: 'Organizado',    factor: 'C' }] },
  { set: 5,  options: [{ text: 'Assertivo',      factor: 'D' }, { text: 'Comunicativo',  factor: 'I' }, { text: 'Cooperativo',   factor: 'S' }, { text: 'Meticuloso',    factor: 'C' }] },
  { set: 6,  options: [{ text: 'Resultados',     factor: 'D' }, { text: 'Reconhecimento',factor: 'I' }, { text: 'Segurança',     factor: 'S' }, { text: 'Perfeição',     factor: 'C' }] },
  { set: 7,  options: [{ text: 'Independente',   factor: 'D' }, { text: 'Popular',       factor: 'I' }, { text: 'Persistente',   factor: 'S' }, { text: 'Disciplinado',  factor: 'C' }] },
  { set: 8,  options: [{ text: 'Rápido',         factor: 'D' }, { text: 'Animado',       factor: 'I' }, { text: 'Pacífico',      factor: 'S' }, { text: 'Cauteloso',     factor: 'C' }] },
  { set: 9,  options: [{ text: 'Pioneiro',       factor: 'D' }, { text: 'Carismático',   factor: 'I' }, { text: 'Confiável',     factor: 'S' }, { text: 'Sistemático',   factor: 'C' }] },
  { set: 10, options: [{ text: 'Dominador',      factor: 'D' }, { text: 'Participativo', factor: 'I' }, { text: 'Moderado',      factor: 'S' }, { text: 'Conservador',   factor: 'C' }] },
];

// ─── Special Cases ────────────────────────────────────────────────────────────

const SPECIAL_CASES = [
  { name: 'Perfil Achatado',       desc: 'Todos os fatores próximos à linha média. Pode indicar: preenchimento incorreto, tentativa de distorcer o resultado, ou confusão sobre o papel a desempenhar.' },
  { name: 'Perfil Overshifted',    desc: 'Todos os fatores muito altos — pessoa tenta se mostrar como "superman", com todas as forças e nenhuma fraqueza. Extremamente raro.' },
  { name: 'Perfil Undershifted',   desc: 'Todos os fatores muito baixos — representa um indivíduo infeliz ou deprimido, com baixa autoestima. Também raro.' },
  { name: 'Perfil Não Processado', desc: 'Fatores se invertem sem coerência entre os gráficos. Indica falta de entendimento do questionário ou tentativa de manipular os resultados.' },
];

// ─── Análise de Perfil Pessoal — 32 Questions (official instrument) ──────────
// Source: "Análise de Perfil Pessoal.pdf"
// Each question is rated 0–5 by the respondent.
// Scoring formula per factor (range −20 to +20):
//   A (Dominância):  (Q3+Q8+Q19+Q31) − (Q20+Q23+Q26+Q32)
//   B (Influência):  (Q5+Q6+Q7+Q11)  − (Q1+Q24+Q27+Q30)
//   C (Estabilidade):(Q2+Q15+Q18+Q25)− (Q9+Q12+Q16+Q29)
//   D (Conformidade):(Q4+Q10+Q17+Q21)− (Q13+Q14+Q22+Q28)

const PERFIL_QUESTIONS = [
  { id:1,  text:'Gosto de trabalhar sozinho',                                                   factor:'B', sign:-1 },
  { id:2,  text:'Sou calmo, pacato e sereno',                                                   factor:'C', sign: 1 },
  { id:3,  text:'Costumo atingir meus objetivos, não importam os obstáculos',                   factor:'A', sign: 1 },
  { id:4,  text:'Sou meticuloso e detalhista',                                                  factor:'D', sign: 1 },
  { id:5,  text:'Sou extrovertido e falante',                                                   factor:'B', sign: 1 },
  { id:6,  text:'Sempre participo ativamente nas reuniões de trabalho',                         factor:'B', sign: 1 },
  { id:7,  text:'Gosto de estar cercado de pessoas e ser o centro das atenções',                factor:'B', sign: 1 },
  { id:8,  text:'Tomo sempre a iniciativa e sou muito impaciente',                              factor:'A', sign: 1 },
  { id:9,  text:'Sou muito curioso. Gosto sempre de saber tudo.',                               factor:'C', sign:-1 },
  { id:10, text:'Gosto de fazer um trabalho perfeito, não importa quanto tempo demore',         factor:'D', sign: 1 },
  { id:11, text:'Falo pelos cotovelos, não consigo ficar calado',                               factor:'B', sign: 1 },
  { id:12, text:'Sou extremamente ambicioso. Vou ficar rico.',                                  factor:'C', sign:-1 },
  { id:13, text:'Estruturas muito rígidas me aborrecem, gosto da liberdade de ação',            factor:'D', sign:-1 },
  { id:14, text:'Considero-me um indivíduo teimoso',                                            factor:'D', sign:-1 },
  { id:15, text:'Cedo a vez ao outro sem problema',                                             factor:'C', sign: 1 },
  { id:16, text:'Tenho coragem de me arriscar sempre',                                          factor:'C', sign:-1 },
  { id:17, text:'Sou disciplinado e organizado',                                                factor:'D', sign: 1 },
  { id:18, text:'Considero-me uma pessoa de índole calma e moderada',                           factor:'C', sign: 1 },
  { id:19, text:'Aprecio desafios. Adoro competir.',                                            factor:'A', sign: 1 },
  { id:20, text:'Penso várias vezes antes de tomar uma decisão',                                factor:'A', sign:-1 },
  { id:21, text:'Sou uma pessoa cumpridora das regras e da política da empresa',                factor:'D', sign: 1 },
  { id:22, text:'Sou brincalhão. Estou sempre rindo.',                                          factor:'D', sign:-1 },
  { id:23, text:'Sou calmo e paciente.',                                                        factor:'A', sign:-1 },
  { id:24, text:'Sou bastante reservado. Tenho poucos amigos de verdade.',                      factor:'B', sign:-1 },
  { id:25, text:'Estou sempre em casa com a minha família',                                     factor:'C', sign: 1 },
  { id:26, text:'Recebo bem as normas e procedimentos. Respeito as regras.',                    factor:'A', sign:-1 },
  { id:27, text:'Sou bastante cuidadoso. Não me arrisco muito.',                                factor:'B', sign:-1 },
  { id:28, text:'Gosto de agradar os outros e ser popular',                                     factor:'D', sign:-1 },
  { id:29, text:'Aprecio atividades variadas, não gosto de detalhes',                           factor:'C', sign:-1 },
  { id:30, text:'Sou calado, tímido e reservado',                                               factor:'B', sign:-1 },
  { id:31, text:'Sou corajoso e decidido. Arrisco sempre que o prêmio for alto.',               factor:'A', sign: 1 },
  { id:32, text:'Costumo aceitar os reveses da vida com paciência e serenidade.',               factor:'A', sign:-1 },
];

// Factor labels map: A→D, B→I, C→S, D→C
const FACTOR_TO_DISC = { A:'D', B:'I', C:'S', D:'C' };

function calcPerfilScores(answers) {
  // answers: array of 32 values (index 0 = Q1, index 31 = Q32), each 0-5
  const raw = { A:0, B:0, C:0, D:0 };
  PERFIL_QUESTIONS.forEach((q, i) => {
    const val = answers[i] ?? 0;
    raw[q.factor] += val * q.sign;
  });
  // Map A/B/C/D → D/I/S/C
  return {
    D: raw.A,
    I: raw.B,
    S: raw.C,
    C: raw.D,
    raw,
  };
}

// ─── Key Points ───────────────────────────────────────────────────────────────

const KEY_POINTS = [
  'Um padrão comportamental NÃO é melhor do que outro.',
  'Um gráfico DISC adequado a um cargo não é garantia de sucesso — apenas aumenta a probabilidade de alta performance.',
  'A finalidade do modelo DISC é criar um relacionamento ganha-ganha, nunca manipular ou rotular uma pessoa.',
  'Este instrumento não é classificado como um "teste de personalidade".',
  'Traz informações a respeito da facilidade ou dificuldade de realizar algo.',
];
