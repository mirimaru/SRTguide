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
    // DBとPバフを再描画
    if (document.getElementById('grid').children.length > 0) {
        document.getElementById('grid').innerHTML = '';
        initDb();
    }
    if (document.getElementById('pbuff-grid-container').children.length > 0) {
        initPBuff(); // フィルタ変更時と同じように呼び出す
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
    if (id === 'db') initDb();
    if (id === 'pbuff') initPBuff();
    window.scrollTo(0,0);
}

function initDb() {
    const grid = document.getElementById('grid');
    if (grid.children.length > 0) return;
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
        
        // ★修正点：カード全体の余白を広げる
        card.style.padding = '2.5rem';

        const cName = currentLang === 'ja' ? c.名前 : c.en;
        let sHtml = '<div class="stat-grid">'; 
        c.s.forEach((v, i) => { 
            const isMax = v === maxStats[c.pos][i];
            const label = currentLang === 'ja' ? statNames[i] : (termsDict[currentLang] && termsDict[currentLang][statNames[i]]) || termsDict['en'][statNames[i]];
            sHtml += `<div class="stat-box"><div class="stat-lbl">${label}</div><div class="stat-val ${isMax ? 'is-max' : ''}">${v}</div></div>`; 
        }); 
        sHtml += '</div>';
        
        // ★修正点：imgタグに直接スタイルを書き込んでキャラを大きく(140px)する
        card.innerHTML = `<div class="char-content"><div class="text-3xl font-black italic mb-2">${cName}</div><div class="text-[#ff4e00] font-black italic text-2xl mb-6">${c.pos}</div>${sHtml}</div><img src="${charImages[c.en] || ''}" class="char-img" style="width: 140px; height: 140px; object-fit: contain; margin: 1.5rem auto 0 auto; display: block;">`;
        grid.appendChild(card);
    });
    filterCards();
}

function initPBuff() {
    const container = document.getElementById('pbuff-grid-container');
    if(!container) return;
    
    // 毎回コンテナの中身を空にする
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
            
            // ★修正点：はみ出し防止と基準位置の設定
            card.style.position = 'relative';
            card.style.overflow = 'hidden';

            const cName = currentLang === 'ja' ? char.name : char.en;
            
            // ★修正点：カードの余白(padding)をしっかり取り、文字が画像と被らないよう右側を空ける(padding-right:150px)
            let bHtml = `
                <div class="char-content" style="padding: 2.5rem; min-height: 220px;">
                    <h3 class="text-3xl font-black italic text-orange-500 mb-6 relative z-10">${cName}</h3>
                    <div class="space-y-3 relative z-10" style="padding-right: 150px;">
            `;
            
            char.buffs.forEach(b => { 
                const effect = currentLang === 'ja' ? b[0] : (termsDict[currentLang] && termsDict[currentLang][b[0]]) || (termsDict['en'][b[0]] || b[0]);
                bHtml += `<div class="pbuff-item" style="font-size: 1.1rem;"><span class="pbuff-name">${effect}</span><span class="pbuff-val">${b[1]}</span></div>`; 
            }); 
            
            // ★修正点：キャラ画像を絶対配置で右下に大きく(180px)配置し、少し透過させる
            bHtml += `
                    </div>
                </div>
                <img src="${charImages[char.en] || ''}" class="char-img" style="position: absolute; bottom: 0px; right: -10px; height: 180px; width: auto; opacity: 0.85; z-index: 1;">
            `;
            
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
        if (v.paused) v.play().catch(e => {});
    });
}, { once: true });
