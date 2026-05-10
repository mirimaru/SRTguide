// 動かなくなった原因を解消するため、エラー防止と全翻訳キーを完備
let currentLang = 'ja';

// ★ Guide・Q&Aも含めたすべての翻訳辞書。
// redeclareエラーを避けるため、windowオブジェクトに紐付けます。
window.i18n = {
    'ja': {
        'nav-home': 'HOME', 'nav-guide': 'GUIDE', 'nav-db': 'DATABASE', 'nav-pbuff': 'P-BUFF', 'nav-qa': 'Q&A', 'nav-bbs': 'BBS', 'nav-about': 'ABOUT ME',
        'about-title': 'ABOUT ME', 'about-p1': '2016年頃からこのコートを見守ってきました。一度引退しましたが、2024年に戻ってきました。', 'about-p2': '攻略ガイド等を公開中。コミュニティを盛り上げましょう！',
        'home-recommended': 'RECOMMENDED', 'home-map': 'プレゼントMAP',
        'guide-title': 'ROAD TO HIGH TIER', 'guide-s1-title': 'ポジションの特徴',
        'guide-s1-pg': 'パスと機動力。守備の要。', 'guide-s1-sg': '最高得点能力。多彩なスキル。', 'guide-s1-sf': '攻守に貢献する万能型。', 'guide-s1-big': 'ゴール下の番人。リバウンド。',
        'guide-s2-title': 'おすすめキャラ', 'guide-s2-free-t': '無課金・初期のおすすめ', 'guide-s2-free-d': 'Murdock (PF): ブロック力が高く、最高の選択肢です。', 'guide-s2-best-t': '最強キャラ (Premium)',
        'guide-s3-title': '育成手順', 'guide-s3-p1': '強者のピラミッド。P5昇級が基盤です。', 'guide-s3-p2': 'P-BUFFはカードより圧倒的に効率が良いです。',
        'guide-s4-title': 'チームプレイ', 'guide-s4-l12-t': 'Level 1 & 2: 基礎', 'guide-s4-l12-d': '味方の邪魔をしない。スペースを空ける。ドライブコースを塞がないのが鉄則です。',
        'guide-s4-l34-t': 'Level 3 & 4: 応用', 'guide-s4-l34-d': 'ミスを責めず、ポジティブなエモートでチームを鼓舞しましょう。',
        'qa-q1': 'Q: 数値の「▲」は何？', 'qa-a1': 'A: バフ値（強化分）です。', 'qa-q2': 'Q: 育成はP-Buffとカードどちらが先？', 'qa-a2': 'A: P-Buffが先です。'
    },
    'en': {
        'nav-home': 'HOME', 'nav-guide': 'GUIDE', 'nav-db': 'DATABASE', 'nav-pbuff': 'P-BUFF', 'nav-qa': 'Q&A', 'nav-bbs': 'BBS', 'nav-about': 'ABOUT ME',
        'about-title': 'ABOUT ME', 'about-p1': 'Watching the court since 2016. Retired once, returned in 2024.', 'about-p2': 'Publishing strategy guides. Let\'s boost the community!',
        'home-recommended': 'RECOMMENDED', 'home-map': 'Village Map',
        'guide-title': 'ROAD TO HIGH TIER', 'guide-s1-title': 'Position Roles',
        'guide-s1-pg': 'Pass & Speed. Defense key.', 'guide-s1-sg': 'Best scoring. Diverse skills.', 'guide-s1-sf': 'All-rounder for Offense/Defense.', 'guide-s1-big': 'Paint protector. Rebounding.',
        'guide-s2-title': 'Recommended Characters', 'guide-s2-free-t': 'F2P / Starter Picks', 'guide-s2-free-d': 'Murdock (PF): High block power, best choice.', 'guide-s2-best-t': 'Top Tier (Premium)',
        'guide-s3-title': 'Upgrade Path', 'guide-s3-p1': 'Pyramid of Power. P5 is the foundation.', 'guide-s3-p2': 'P-BUFF is far more efficient than cards.',
        'guide-s4-title': 'Team Play', 'guide-s4-l12-t': 'Level 1 & 2: Basics', 'guide-s4-l12-d': 'Don\'t crowd teammates. Open space. Don\'t block drive lanes.',
        'guide-s4-l34-t': 'Level 3 & 4: Advanced', 'guide-s4-l34-d': 'Don\'t blame for mistakes. Encourage with positive emotes.',
        'qa-q1': 'Q: What does "▲" mean?', 'qa-a1': 'A: Buff value (Stat increase).', 'qa-q2': 'Q: Upgrade P-Buff or Cards first?', 'qa-a2': 'A: P-Buff first.'
    },
    'ko': {
        'nav-home': '홈', 'nav-guide': '가이드', 'nav-db': '데이터베이스', 'nav-pbuff': 'P-버프', 'nav-qa': '질문답변', 'nav-bbs': '게시판', 'nav-about': '소개',
        'about-title': '저에 대하여', 'about-p1': '2016년부터 코트를 지켜왔습니다. 은퇴 후 2024년에 복귀했습니다.', 'about-p2': '공략 가이드를 공유합니다. 커뮤니티를 활성화합시다!',
        'home-recommended': '추천 영상', 'home-map': '마을 지도',
        'guide-title': '하이 티어로 가는 길', 'guide-s1-title': '포지션 특징',
        'guide-s1-pg': '패스와 기동력. 수비의 핵심.', 'guide-s1-sg': '최고의 득점력. 다채로운 스킬.', 'guide-s1-sf': '공수 양면의 만능형.', 'guide-s1-big': '골밑의 수호자. 리바운드.',
        'guide-s2-title': '추천 캐릭터', 'guide-s2-free-t': '무과금 / 초기 추천', 'guide-s2-free-d': 'Murdock (PF): 블록 능력이 뛰어나 최고의 선택입니다.', 'guide-s2-best-t': '최강 캐릭터 (Premium)',
        'guide-s3-title': '육성 순서', 'guide-s3-p1': '강자의 피라미드. P5 승급이 기본입니다.', 'guide-s3-p2': 'P-버프는 카드보다 압도적으로 효율이 좋습니다.',
        'guide-s4-title': '팀 플레이', 'guide-s4-l12-t': 'Level 1 & 2: 기초', 'guide-s4-l12-d': '아군의 공간을 방해하지 마세요. 스페이스 확보가 철칙입니다.',
        'guide-s4-l34-t': 'Level 3 & 4: 응용', 'guide-s4-l34-d': '실수를 비난하지 말고, 긍정적인 이모트로 팀을 격려하세요.',
        'qa-q1': 'Q: 수치의 "▲"는 무엇인가요?', 'qa-a1': 'A: 버프 수치 (강화분) 입니다.', 'qa-q2': 'Q: P-버프와 카드 중 무엇을 먼저 하나요?', 'qa-a2': 'A: P-버프가 먼저입니다.'
    },
    'zh': {
        'nav-home': '首页', 'nav-guide': '攻略', 'nav-db': '资料库', 'nav-pbuff': 'P-BUFF', 'nav-qa': '问答', 'nav-bbs': '论坛', 'nav-about': '关于',
        'about-title': '关于我', 'about-p1': '自2016年起关注球场。曾一度退役，2024年回归。', 'about-p2': '分享攻略指南。让我们活跃社区！',
        'home-recommended': '推荐视频', 'home-map': '村庄地图',
        'guide-title': '迈向高阶之路', 'guide-s1-title': '位置特点',
        'guide-s1-pg': '传球与机动性。防守的核心。', 'guide-s1-sg': '最强得分能力。多样化的技能。', 'guide-s1-sf': '攻守兼备的全能型。', 'guide-s1-big': '篮下守护者。篮板球。',
        'guide-s2-title': '推荐角色', 'guide-s2-free-t': '零氪 / 初始推荐', 'guide-s2-free-d': 'Murdock (PF): 盖帽能力极强，是不二之选。', 'guide-s2-best-t': '最强角色 (Premium)',
        'guide-s3-title': '养成步骤', 'guide-s3-p1': '强者金字塔。P5晋级是基础。', 'guide-s3-p2': 'P-BUFF的效果远高于卡片。',
        'guide-s4-title': '团队配合', 'guide-s4-l12-t': 'Level 1 & 2: 基础', 'guide-s4-l12-d': '不要阻碍队友。保持拉开空间。不堵塞突破路线。',
        'guide-s4-l34-t': 'Level 3 & 4: 应用', 'guide-s4-l34-d': '不要责怪失误。使用积极的表情鼓励团队。',
        'qa-q1': 'Q: 数值中的 "▲" 是什么？', 'qa-a1': 'A: 增益值（强化部分）。', 'qa-q2': 'Q: 应该先培养 P-Buff 还是卡片？', 'qa-a2': 'A: 先培养 P-Buff。'
    }
};

const posColors = {
    "PG": "bg-green-950/40 border-green-700/50",
    "SG": "bg-orange-950/40 border-orange-700/50",
    "SF": "bg-cyan-950/40 border-cyan-700/50",
    "PF": "bg-indigo-950/40 border-indigo-700/50",
    "C":  "bg-red-950/40 border-red-700/50"
};

function switchLanguage(lang, btnElement = null) {
    currentLang = lang;
    if(btnElement) {
        document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('text-orange-500'));
        btnElement.classList.add('text-orange-500');
    }
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (window.i18n[lang] && window.i18n[lang][key]) el.innerHTML = window.i18n[lang][key];
    });
    if (document.getElementById('grid').children.length > 0) {
        document.getElementById('grid').innerHTML = '';
        initDb();
    }
    if (document.getElementById('pbuff-grid-container').children.length > 0) initPBuff();
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
        card.className = 'char-card p-10 relative overflow-hidden'; 
        card.dataset.name = c.名前.toLowerCase(); card.dataset.pos = c.pos;
        if(posColors[c.pos]) card.classList.add(...posColors[c.pos].split(' '));
        const cName = currentLang === 'ja' ? c.名前 : c.en;
        let sHtml = '<div class="stat-grid">'; 
        c.s.forEach((v, i) => { 
            const isMax = v === maxStats[c.pos][i];
            const label = currentLang === 'ja' ? statNames[i] : (termsDict[currentLang] && termsDict[currentLang][statNames[i]]) || termsDict['en'][statNames[i]];
            sHtml += `<div class="stat-box"><div class="stat-lbl">${label}</div><div class="stat-val ${isMax ? 'is-max' : ''}">${v}</div></div>`; 
        }); 
        sHtml += '</div>';
        card.innerHTML = `<div class="char-content relative z-10"><div class="text-3xl font-black italic mb-2">${cName}</div><div class="text-[#ff4e00] font-black italic text-2xl mb-6">${c.pos}</div>${sHtml}</div><img src="${charImages[c.en] || ''}" class="char-img" style="position: absolute !important; bottom: -10px !important; right: -10px !important; height: 240px !important; width: auto !important; opacity: 0.4 !important; z-index: 1 !important; pointer-events: none !important;">`;
        grid.appendChild(card);
    });
    filterCards();
}

function initPBuff() {
    const container = document.getElementById('pbuff-grid-container');
    if(!container) return; container.innerHTML = '';
    const posFilter = document.getElementById('pbuffPosFilter').value;
    for (const [posName, chars] of Object.entries(pBuffData)) {
        if (posFilter !== 'All' && !posName.startsWith(posFilter)) continue;
        const pCode = posName.split(' ')[0];
        const title = document.createElement('h3'); 
        title.className = `text-4xl font-black italic text-white mb-6 mt-12 border-b-2 border-orange-500 inline-flex items-center gap-4 pb-2`; 
        title.innerHTML = `<span class="w-6 h-6 rounded-full ${posColors[pCode] ? posColors[pCode].split(' ')[0] : 'bg-white'} border border-white/20"></span> ${posName}`; 
        container.appendChild(title);
        const grid = document.createElement('div'); 
        grid.className = 'grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8';
        chars.forEach(char => {
            const card = document.createElement('div'); 
            card.className = 'pbuff-card p-10 relative overflow-hidden';
            if(posColors[pCode]) card.classList.add(...posColors[pCode].split(' '));
            const cName = currentLang === 'ja' ? char.name : char.en;
            let bHtml = `<div class="char-content relative z-10 min-h-[220px]"><h3 class="text-3xl font-black italic text-orange-500 mb-6">${cName}</h3><div class="space-y-3">`;
            char.buffs.forEach(b => { 
                const effect = currentLang === 'ja' ? b[0] : (termsDict[currentLang] && termsDict[currentLang][b[0]]) || (termsDict['en'][b[0]] || b[0]);
                bHtml += `<div class="pbuff-item text-lg"><span class="pbuff-name">${effect}</span><span class="pbuff-val">${b[1]}</span></div>`; 
            }); 
            bHtml += `</div></div><img src="${charImages[char.en] || ''}" class="char-img" style="position: absolute !important; bottom: -5px !important; right: -10px !important; height: 200px !important; width: auto !important; opacity: 0.5 !important; z-index: 1 !important; pointer-events: none !important;">`;
            card.innerHTML = bHtml; grid.appendChild(card);
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

// スマホ対応
document.addEventListener('touchstart', function() {}, {passive: true});

window.onload = () => { switchLanguage('ja'); showPage('home'); };
