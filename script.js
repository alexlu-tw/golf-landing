// ───────────────────────── i18n ─────────────────────────
const I18N = {
  en: {
    nav_modes: 'Modes', nav_features: 'Features', nav_betting: 'Betting', nav_how: 'Get started', nav_try: 'Try free',

    hero_pill: '🏌️ Runs 100% inside LINE · No download',
    hero_title: 'Score, bet & handicap<br>right inside LINE',
    hero_sub: 'Bring your whole golf outing into a LINE Official Account. Live scorecards, automatic bet settlement and handicap leaderboards — your buddies just open LINE, no extra app to install.',
    hero_cta1: 'Get started free', hero_cta2: 'See features ↓',
    hero_trust1: '✓ No install', hero_trust2: '✓ Bilingual', hero_trust3: '✓ Real-time sync',
    phone_round: 'June Outing · 18 holes',

    modes_title: 'Two kinds of golf, one system',
    modes_sub: 'From formal tournaments to weekend casual rounds.',
    mode_t_tag: 'Tournament Team',
    mode_t_title: 'Multi-flight team competition',
    mode_t_desc: 'The manager sets up multi-flight games scored across the field with New New Peoria handicaps. Report scores straight in LINE chat, or via the scorecard.',
    mode_t_1: 'Flight & tee-off order management', mode_t_2: 'Field-wide handicap leaderboard', mode_t_3: 'Manager / player roles', mode_t_4: 'Score entry via LINE chat',
    mode_c_tag: 'Casual Group',
    mode_c_title: 'Grab a game, focus on the bets',
    mode_c_desc: 'Any member can start a single-flight game and invite friends by QR. Live scorecard, automatic bet settlement, and push results when the round ends.',
    mode_c_1: 'Anyone can start a game', mode_c_2: 'QR-code invites', mode_c_3: 'Auto bet settlement & push', mode_c_4: 'Virtual players / guests',

    feat_title: 'Built for golf outings',
    feat_sub: 'Every detail from scoring to settlement, thought through.',
    feat_1_t: 'Native LINE experience', feat_1_d: 'Runs on a LINE Official Account and LIFF — your buddies open LINE and score, no app download needed.',
    feat_2_t: 'Pro scorecard', feat_2_d: 'Masters-style markers — birdie circles, bogey squares at a glance. Live-synced so everyone sees every hole.',
    feat_3_t: 'Auto bet settlement', feat_3_d: 'Skin, 1-on-1, 2-on-2 — points and money calculated automatically, with per-hole nets, carry and birdie bonuses.',
    feat_4_t: 'AI custom bet rules', feat_4_d: 'Describe your house rule in plain words — the AI understands it and generates the settlement logic. Any weird format works.',
    feat_5_t: 'Handicap & leaderboard', feat_5_d: 'Built-in New New Peoria handicap with a field-wide net-score leaderboard.',
    feat_6_t: 'Bilingual', feat_6_d: 'Interface and push messages fully support Traditional Chinese and English — one tap to switch.',

    bet_title: 'Let the system keep score',
    bet_sub: 'Common formats built in, special rules handled by AI.',
    bet_skin_t: 'Skin', bet_skin_d: '2–8 players. Sole low score wins the hole; ties carry to the next. Optional birdie / eagle bonuses.',
    bet_one_t: '1-on-1 Scratch', bet_one_d: 'Head to head, strokes spread by stroke index, hole winner scores, set money per point.',
    bet_best_t: '2-on-2 Best Total', bet_best_d: 'Teams of two — low-vs-low and total-vs-total each hole, single carry bucket.',
    bet_ai_t: 'AI custom rules', bet_ai_d: 'Describe your special bet in natural language; the AI builds the settlement logic. Las Vegas, custom carry… all fine.',

    how_title: 'Three steps to tee off',
    how_sub: 'Get your whole group going in minutes.',
    how_1_t: 'Add the LINE OA', how_1_d: 'Add the dedicated LINE Official Account to your group; menus configure automatically.',
    how_2_t: 'Create a game, invite friends', how_2_d: 'Pick a course, start a game, share a QR code for friends to join with one scan.',
    how_3_t: 'Play, score, auto-settle', how_3_d: 'Enter scores hole by hole; bets and handicaps compute themselves and push results at the end.',

    cta_title: 'Ready to level up your outings?',
    cta_sub: 'To bring TinTin Golf to your group or learn about plans, get in touch.',
    cta_btn1: 'Contact us', cta_btn2: 'View the system',

    footer_tag: 'LINE golf scoring · betting · handicap system',
  },
};

let currentLang = localStorage.getItem('golf_landing_lang') || 'zh';

// Capture the original zh-Hant text the first time, so we can restore it.
const zhCache = {};
function cacheZh() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    zhCache[el.getAttribute('data-i18n')] = el.innerHTML;
  });
}

function applyLang(lang) {
  const dict = lang === 'en' ? I18N.en : null;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict && dict[key] != null) el.innerHTML = dict[key];
    else if (zhCache[key] != null) el.innerHTML = zhCache[key];
  });
  document.documentElement.lang = lang === 'en' ? 'en' : 'zh-Hant';
  const zhEl = document.querySelector('.lang-zh');
  const enEl = document.querySelector('.lang-en');
  if (zhEl && enEl) {
    zhEl.classList.toggle('active', lang === 'zh');
    enEl.classList.toggle('active', lang === 'en');
  }
  currentLang = lang;
  localStorage.setItem('golf_landing_lang', lang);
}

// ───────────────────────── Init ─────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  cacheZh();
  applyLang(currentLang);

  // Language toggle
  document.getElementById('langToggle').addEventListener('click', () => {
    applyLang(currentLang === 'zh' ? 'en' : 'zh');
  });

  // Mobile nav
  const burger = document.getElementById('navBurger');
  const links = document.getElementById('navLinks');
  burger.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => links.classList.remove('open'))
  );

  // Year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Scroll reveal
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
});
