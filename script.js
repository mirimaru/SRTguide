let currentLang = 'ja';

function switchLanguage(lang, btnElement = null) {
    currentLang = lang;
    if(btnElement) {
        document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('text-orange-500'));
        btnElement.classList.add('text-orange-500');
    }
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (i18n[lang] && i18n[lang][key]) {
            el.innerHTML = i18n[lang][key];
        }
    });
    if (document.getElementById('grid').children.length > 0) {
        document.getElementById('grid').innerHTML = ''; initDb();
    }
    if (document.getElementById('pbuff-grid-container').children.length > 0) {
        document.getElementById('pbuff-grid-container').innerHTML = ''; initPBuff();
    }
}

function showPage(id) {
    const split = document.getElementById('home-split-wrapper');
    const standard = document.getElementById('standard-content');
    if (id === 'home') {
        split.style.display = 'flex';
        standard.classList.add('hidden');
    } else {
        split.style.display = 'none';
        standard.classList.remove('hidden');
    }
    document.querySelectorAll('.page-container').forEach(p => p.classList.remove('active-page'));
    const target = document.getElementById('page-' + id);
    if(target) target.classList.add('active-page');
    document.querySelectorAll('.nav-link').forEach(l => {
        l.classList.remove('active');
        if (l.getAttribute('onclick').includes(id)) l.classList.add('active');
    });
    if (id === 'db' && document.getElementById('grid').children.length === 0) initDb();
    if (id === 'pbuff' && document.getElementById('pbuff-grid-container').children.length === 0) initPBuff();
    window.scrollTo(0,0);
}

// データベース・Pバフの描画関数、フィルタ関数は前回と同様

window.onload = () => {
    switchLanguage('ja');
    showPage('home');
};

// 動画の自動再生をサポート（スマホ対策）
document.addEventListener('touchstart', function() {
    const vids = document.querySelectorAll('video');
    vids.forEach(v => {
        v.play().catch(e => console.log("Video Play Error:", e));
    });
}, { once: true });
