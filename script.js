let currentLang = 'ja';

// ★追加：ポジションごとの背景色定義（Tailwindクラス）
const posColors = {
    "PG": "bg-green-950/40 border-green-700/50",    // 緑
    "SG": "bg-orange-950/40 border-orange-700/50",  // オレンジ
    "SF": "bg-cyan-950/40 border-cyan-700/50",    // 水色
    "PF": "bg-indigo-950/40 border-indigo-700/50",  // 濃い青
    "C":  "bg-red-950/40 border-red-700/50"       // 赤
};

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
        initPBuff();
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
        
        // ★修正点：余白の調整、画像を右下に絶対配置、そしてポジションカラーの適用
        card.style.padding = '2.5rem';
        card.style.position = 'relative';
        card.style.overflow = 'hidden';
        
        // ポジションごとのクラスを追加（背景色とボーダー色）
        if(posColors[c.pos]) {
            // style.cssの bg-white/5 などを上書きするため、classListではなくstyle.cssを編集するか、
            // ここで直接classNameを上書きする必要があります。
            // 既存の Tailwind クラス（bg-white/5 border border-white/10）を削除し、新しいクラスを入れる
            card.className = card.className.replace('bg-white/5', '').replace('border-white/10', '');
            card.classList.add(...posColors[c.pos].split(' '));
        }

        const cName = currentLang === 'ja' ? c.名前 : c.en;
        let sHtml = '<div class="stat-grid">'; 
        c.s.forEach((v, i) => { 
            const isMax = v === maxStats[c.pos][i];
            const label = currentLang === 'ja' ? statNames[i] : (termsDict[currentLang] && termsDict[currentLang][statNames[i]]) || termsDict['en'][statNames[i]];
            sHtml += `<div class="stat-box"><div class="stat-lbl">${label}</div><div class="stat-val ${isMax ? 'is-max' : ''}">${v}</div></div>`; 
        }); 
        sHtml += '</div>';
        
        // ★修正点：DB側画像をさらに超巨大化（height: 230px）し、右下に配置。透過度は0.5に下げて文字を優先。
        card.innerHTML = `
            <div class="char-content relative z-10">
                <div class="text-3xl font-black italic mb-2">${cName}</div>
                <div class="text-[#ff4e00] font-black italic text-2xl mb-6">${c.pos}</div>
                ${sHtml}
            </div>
            <img src="${charImages[c.en] || ''}" class="char-img" style="position: absolute; bottom: -20px; right: -20px; height: 230px; width: auto; opacity: 0.5; z-index: 1;">
        `;
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
        
        // ★修正点：ポジション名の横に、指定された色の丸いアイコンを追加
        const pCode = posName.substring(0, 2); // PG, SG, etc.
        const titleColor = posColors[pCode] ? posColors[pCode].split(' ')[0].replace('bg-', 'text-').replace('950', '500') : 'text-white';

        const title = document.createElement('h3'); 
        title.className = `text-4xl font-black italic text-white mb-6 mt-12 border-b-2 border-orange-500 inline-flex items-center gap-4 pb-2`; 
        // ポジションカラーの丸
        const colorCircle = `<span class="w-6 h-6 rounded-full ${posColors[pCode] ? posColors[pCode].split(' ')[0] : 'bg-white'} border border-white/20"></span>`;
        title.innerHTML = `${colorCircle} ${posName}`; 
        container.appendChild(title);

        const grid = document.createElement('div'); 
        grid.className = 'grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8';
        
        chars.forEach(char => {
            const card = document.createElement('div'); 
            card.className = 'pbuff-card';
            
            // はみ出し防止と基準位置の設定
            card.style.position = 'relative';
            card.style.overflow = 'hidden';

            // ★修正点：ポジションカラーの適用
            const cardPos = char.en ? chars[0].en === char.en ? pCode : pCode : pCode; // charにpos属性がないので、親のposNameから推測
            if(posColors[pCode]) {
                card.className = card.className.replace('bg-white/5', '').replace('border-white/10', '');
                card.classList.add(...posColors[pCode].split(' '));
            }

            const cName = currentLang === 'ja' ? char.name : char.en;
            
            // 文字が画像に被ってもOKな仕様に（右paddingなし）
            let bHtml = `
                <div class="char-content" style="padding: 2.5rem; min-height: 220px;">
                    <h3 class="text-3xl font-black italic text-orange-500 mb-6 relative z-10">${cName}</h3>
                    <div class="space-y-3 relative z-10">
            `;
            
            char.buffs.forEach(b => { 
                const effect = currentLang === 'ja' ? b[0] : (termsDict[currentLang] && termsDict[currentLang][b[0]]) || (termsDict['en'][b[0]] || b[0]);
                bHtml += `<div class="pbuff-item" style="font-size: 1.1rem;"><span class="pbuff-name">${effect}</span><span class="pbuff-val">${b[1]}</span></div>`; 
            }); 
            
            // ★キャラ画像を右下に大きく(180px)配置し、文字が読みやすいように透過度を0.6に設定
            bHtml += `
                    </div>
                </div>
                <img src="${charImages[char.en] || ''}" class="char-img" style="position: absolute; bottom: -5px; right: -10px; height: 180px; width: auto; opacity: 0.6; z-index: 1;">
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
