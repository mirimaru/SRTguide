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

function initDb() {
    const grid = document.getElementById('grid');
    const maxStats = {}; 
    ["PG", "SG", "SF", "PF", "C"].forEach(p => { 
        maxStats[p] = Array(15).fill(0); 
        rawData.filter(c => c.pos === p).forEach(c => { 
            c.s.forEach((v, i) => { if (v > maxStats[p][i]) maxStats[p][i] = v; }); 
        }); 
    });
    
    rawData.forEach(c => {
        const card = document.createElement('div'); 
        card.className = 'char-card'; 
        card.dataset.name = c.名前.toLowerCase(); 
        card.dataset.pos = c.pos;
        const cName = currentLang === 'ja' ? c.名前 : c.en;
        let sHtml = '<div class="stat-grid">'; 
        c.s.forEach((v, i) => { 
            const isMax = v === maxStats[c.pos][i];
            const label = currentLang === 'ja' ? statNames[i] : (termsDict[currentLang] && termsDict[currentLang][statNames[i]]) || termsDict['en'][statNames[i]];
            sHtml += `<div class="stat-box"><div class="stat-lbl">${label}</div><div class="stat-val ${isMax ? 'is-max' : ''}">${v}</div></div>`; 
        }); 
        sHtml += '</div>';
        card.innerHTML = `<div class="char-content"><div class="text-3xl font-black italic mb-2">${cName}</div><div class="text-[#ff4e00] font-black italic text-2xl mb-6">${c.pos}</div>${sHtml}</div><img src="${charImages[c.en] || ''}" class="char-img">`;
        grid.appendChild(card);
    });
    filterCards();
}

function initPBuff() {
    const container = document.getElementById('pbuff-grid-container');
    if(!container) return;
    container.innerHTML = '';
    const posFilter = document.getElementById('pbuffPosFilter').value;
    for (const [posName, chars] of Object.entries(pBuffData)) {
        if (posFilter !== 'All' && !posName.startsWith(posFilter)) continue;
        const title = document.createElement('h3'); 
        title.className = 'text-4xl font-black italic text-white mb-6 mt-12 border-b-2 border-orange-500 inline-block pb-2'; 
        title.innerText = posName; 
        container.appendChild(title);
        const grid = document.createElement('div'); 
        grid.className = 'grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8';
        chars.forEach(char => {
            const card = document.createElement('div'); 
            card.className = 'pbuff-card';
            const cName = currentLang === 'ja' ? char.name : char.en;
            let bHtml = `<div class="char-content"><h3 class="text-4xl font-black italic text-orange-500 mb-8">${cName}</h3><div class="space-y-4">`;
            char.buffs.forEach(b => { 
                const effect = currentLang === 'ja' ? b[0] : (termsDict[currentLang] && termsDict[currentLang][b[0]]) || (termsDict['en'][b[0]] || b[0]);
                bHtml += `<div class="pbuff-item"><span class="pbuff-name">${effect}</span><span class="pbuff-val">${b[1]}</span></div>`; 
            }); 
            bHtml += `</div></div><img src="${charImages[char.en] || ''}" class="char-img">`;
            card.innerHTML = bHtml; 
            grid.appendChild(card);
        });
        container.appendChild(grid);
    }
}

function filterCards() {
    const search = document.getElementById('nameInput').value.toLowerCase();
    const pos = document.getElementById('posFilter').value;
    document.querySelectorAll('.char-card').forEach(card => {
        const nameMatch = card.dataset.name.includes(search);
        const posMatch = pos === 'All' || card.dataset.pos === pos;
        card.style.display = (nameMatch && posMatch) ? 'block' : 'none';
    });
}

window.onload = () => {
    switchLanguage('ja');
    showPage('home');
};

document.addEventListener('touchstart', function() {
    const vids = document.querySelectorAll('video');
    vids.forEach(v => {
        if (v.paused) {
            v.play().catch(err => console.log("Video play failed:", err));
        }
    });
}, { once: true });
