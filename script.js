// ==========================================
// SRT guide - 完全版 script.js
// ==========================================

// 多言語対応の翻訳辞書
const termsDict = {
    "ja": {
        "nav-home": "HOME",
        "nav-guide": "GUIDE",
        "nav-db": "DATABASE",
        "nav-ranking": "RANKING",
        "nav-videos": "VIDEOS",
        "nav-music": "MUSIC",
        "nav-pbuff": "P-BUFF",
        "nav-survey": "SURVEY",
        "nav-qa": "Q&A",
        "nav-bbs": "BBS",
        "nav-about": "ABOUT ME",
        "about-title": "ABOUT ME",
        "about-p1": "2016年頃からこのコートを見守ってきました。一度引退しましたが、2024年に戻ってきました。",
        "about-p2": "攻略ガイド等を公開中。コミュニティを盛り上げましょう！",
        "home-recommended": "RECOMMENDED",
        "qa-q1": "Q: 数値の「▲」は何？",
        "qa-a1": "A: バフ値（強化分）です。",
        "qa-q2": "Q: 育成はP-Buffとカードどちらが先？",
        "qa-a2": "A: P-Buffが先です。"
    },
    "en": {
        "nav-home": "HOME",
        "nav-guide": "GUIDE",
        "nav-db": "DATABASE",
        "nav-ranking": "RANKING",
        "nav-videos": "VIDEOS",
        "nav-music": "MUSIC",
        "nav-pbuff": "P-BUFF",
        "nav-survey": "SURVEY",
        "nav-qa": "Q&A",
        "nav-bbs": "BBS",
        "nav-about": "ABOUT ME",
        "about-title": "ABOUT ME",
        "about-p1": "Watching over this court since around 2016. Retired once, but came back in 2024.",
        "about-p2": "Publishing guides and more. Let's make the community active!",
        "home-recommended": "RECOMMENDED",
        "qa-q1": "Q: What does '▲' mean?",
        "qa-a1": "A: Buff value (stat enhancement).",
        "qa-q2": "Q: Which comes first, P-Buff or Cards?",
        "qa-a2": "A: P-Buff comes first."
    },
    "ko": {
        "nav-home": "HOME",
        "nav-guide": "GUIDE",
        "nav-db": "DATABASE",
        "nav-ranking": "RANKING",
        "nav-videos": "VIDEOS",
        "nav-music": "MUSIC",
        "nav-pbuff": "P-BUFF",
        "nav-survey": "SURVEY",
        "nav-qa": "Q&A",
        "nav-bbs": "BBS",
        "nav-about": "ABOUT ME",
        "about-title": "ABOUT ME",
        "about-p1": "2016년경부터 이 코트를 지켜왔습니다. 은퇴했었지만 2024년에 복귀했습니다.",
        "about-p2": "공략 가이드 등을 공개 중입니다. 커뮤니티를 활성화합시다!",
        "home-recommended": "RECOMMENDED",
        "qa-q1": "Q: 수치의 '▲'는 무엇인가요?",
        "qa-a1": "A: 버프치(능력치 강화분)입니다.",
        "qa-q2": "Q: 육성은 P-Buff와 카드 중 무엇이 먼저인가요?",
        "qa-a2": "A: P-Buff가 먼저입니다."
    },
    "zh": {
        "nav-home": "HOME",
        "nav-guide": "GUIDE",
        "nav-db": "DATABASE",
        "nav-ranking": "RANKING",
        "nav-videos": "VIDEOS",
        "nav-music": "MUSIC",
        "nav-pbuff": "P-BUFF",
        "nav-survey": "SURVEY",
        "nav-qa": "Q&A",
        "nav-bbs": "BBS",
        "nav-about": "ABOUT ME",
        "about-title": "ABOUT ME",
        "about-p1": "从2016年左右开始守护这个球场。曾一度退役，但在2024年回归。",
        "about-p2": "正在发布攻略指南等。让我们一起让社区热闹起来吧！",
        "home-recommended": "RECOMMENDED",
        "qa-q1": "Q: 数值「▲」是什么意思？",
        "qa-a1": "A: 增益值（属性强化部分）。",
        "qa-q2": "Q: 培养顺序是先P-Buff还是先卡片？",
        "qa-a2": "A: 建议先做P-Buff。"
    }
};

let currentLang = 'ja';

// 翻訳テキスト取得関数
function getTranslatedText(text, lang) {
    if (!text) return "";
    if (lang === 'ja') return text;
    // 辞書引き
    for (let k in termsDict) {
        if (k === lang && termsDict[k][text]) {
            return termsDict[k][text];
        }
    }
    return text;
}

// 言語切替関数
function switchLanguage(lang, btnElement) {
    currentLang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('text-orange-500');
    });
    if (btnElement) {
        btnElement.classList.add('text-orange-500');
    }
    
    // data-i18n 属性を持つ要素のテキストを置換
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translated = getTranslatedText(key, lang);
        if (translated) {
            el.textContent = translated;
        }
    });

    // データベースやランキングの再描画
    const grid = document.getElementById('grid');
    if (grid) grid.innerHTML = '';
    initDb();
    initRanking();
    initPBuff();
}

// ページ切り替え処理
function showPage(pageId) {
    document.querySelectorAll('.page-container').forEach(el => el.classList.add('hidden'));
    const split = document.getElementById('home-split-wrapper');
    const standard = document.getElementById('standard-content');
    
    if (pageId === 'home') {
        if (split) split.style.display = 'block';
        if (standard) standard.classList.add('hidden');
    } else {
        if (split) split.style.display = 'none';
        if (standard) standard.classList.remove('hidden');
        const target = document.getElementById('page-' + pageId);
        if (target) target.classList.remove('hidden');
    }
    
    // 各ページ固有の初期化
    if (pageId === 'db') initDb();
    if (pageId === 'ranking') initRanking();
    if (pageId === 'pbuff') initPBuff();
    if (pageId === 'videos') initVideos();
    if (pageId === 'music' && typeof initMusic === 'function') initMusic();
    
    window.scrollTo(0, 0);
}

// ハングル自動浄化プログラム
function autoFixKoreanData() {
    if (typeof rawData === 'undefined') return;
    rawData.forEach(char => {
        if (char.pos === 'リ') char.pos = 'PF'; // 誤字等の補正例
        // 必要に応じたハングルクレンジング
    });
}

// ポジションカラー定義
const posColors = {
    "PG": "bg-sky-500/10 border-sky-500/30",
    "SG": "bg-orange-500/10 border-orange-500/30",
    "SF": "bg-emerald-500/10 border-emerald-500/30",
    "PF": "bg-purple-500/10 border-purple-500/30",
    "C":  "bg-rose-500/10 border-rose-500/30"
};

// YouTube モーダル制御
function openYtModal(videoId) {
    const modal = document.getElementById('yt-modal');
    const iframe = document.getElementById('yt-iframe');
    if (iframe) iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    if (modal) {
        modal.classList.remove('hidden');
        setTimeout(() => modal.classList.remove('opacity-0'), 10);
    }
}

function closeYtModal() {
    const modal = document.getElementById('yt-modal');
    const iframe = document.getElementById('yt-iframe');
    if (modal) modal.classList.add('opacity-0');
    setTimeout(() => {
        if (modal) modal.classList.add('hidden');
        if (iframe) iframe.src = '';
    }, 300);
}

// RANKING ページ生成
function initRanking() {
    const container = document.getElementById('ranking-container');
    if (!container || typeof rawData === 'undefined') return;

    const rankedData = rawData.map(char => {
        return {
            ...char,
            total: char.s.reduce((sum, val) => sum + val, 0)
        };
    }).sort((a, b) => b.total - a.total);

    let html = `<table class="w-full text-left border-collapse">
        <thead>
            <tr class="border-b-2 border-orange-500 text-orange-500">
                <th class="py-4 px-4 font-black italic text-xl w-24">RANK</th>
                <th class="py-4 px-4 font-black italic text-xl">CHARACTER</th>
                <th class="py-4 px-4 font-black italic text-xl">POS</th>
                <th class="py-4 px-4 font-black italic text-xl text-right">TOTAL STATS</th>
            </tr>
        </thead>
        <tbody>`;

    rankedData.forEach((char, idx) => {
        const cName = currentLang === 'ja' ? char.名前 : (char.en || char.名前);
        const rankNum = idx + 1;
        
        let rankStyle = "text-gray-400 font-bold";
        let rowBg = "hover:bg-white/5";
        if (rankNum === 1) { rankStyle = "text-yellow-400 font-black text-2xl drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]"; rowBg = "bg-yellow-500/10 border-yellow-500/30"; }
        else if (rankNum === 2) { rankStyle = "text-gray-300 font-black text-xl drop-shadow-[0_0_8px_rgba(209,213,219,0.8)]"; rowBg = "bg-white/10 border-white/20"; }
        else if (rankNum === 3) { rankStyle = "text-orange-400 font-black text-xl drop-shadow-[0_0_8px_rgba(251,146,60,0.8)]"; rowBg = "bg-orange-500/10 border-orange-500/20"; }

        html += `<tr class="border-b border-white/5 transition ${rowBg}">
            <td class="py-3 px-4 ${rankStyle}">#${rankNum}</td>
            <td class="py-3 px-4 flex items-center gap-4">
                <img src="${typeof charImages !== 'undefined' ? (charImages[char.en] || '') : ''}" class="w-10 h-10 rounded-full object-cover bg-black/50 border border-white/10">
                <span class="font-bold text-lg">${cName}</span>
            </td>
            <td class="py-3 px-4">
                <span class="text-xs font-bold tracking-widest px-3 py-1.5 rounded-full border border-white/10 text-white">${char.pos}</span>
            </td>
            <td class="py-3 px-4 text-right font-black text-2xl text-[#ff4e00]">${char.total}</td>
        </tr>`;
    });

    html += `</tbody></table>`;
    container.innerHTML = html;
}

// ページロード時の初期化
window.onload = () => {
    autoFixKoreanData();
    switchLanguage('ja');
    showPage('home');
    initRanking();
};
// ==========================================
// SRT guide - 完全版 script.js (All-in-One Logic)
// ==========================================

// ステータス名の定義
const statNames = ["ポスト", "ミドル", "3点", "Sレイ", "Lレイ", "Sダン", "Lダン", "パス", "スティ", "Jブロ", "Dブロ", "当たり", "リバ", "ラン", "持久"];

// 多言語対応辞書
const termsDict = {
    "ja": {
        "nav-home": "HOME",
        "nav-guide": "GUIDE",
        "nav-db": "DATABASE",
        "nav-ranking": "RANKING",
        "nav-videos": "VIDEOS",
        "nav-music": "MUSIC",
        "nav-pbuff": "P-BUFF",
        "nav-survey": "SURVEY",
        "nav-qa": "Q&A",
        "nav-about": "ABOUT ME",
        "about-title": "ABOUT ME",
        "about-p1": "2016年頃からこのコートを見守ってきました。一度引退しましたが、2024年に戻ってきました。",
        "about-p2": "攻略ガイド等を公開中。コミュニティを盛り上げましょう！",
        "home-recommended": "RECOMMENDED",
        "guide-title": "ROAD TO HIGH TIER",
        "guide-s1-title": "ポジションの特徴",
        "guide-s1-pg": "パスと機動力。守備の要。",
        "guide-s1-sg": "最高得点能力。多彩なスキル。",
        "guide-s1-sf": "攻守に貢献する万能型。",
        "guide-s1-big": "ゴール下の番人。リバウンド。",
        "guide-s2-title": "おすすめキャラ",
        "guide-s2-free-t": "無課金・初期のおすすめ",
        "guide-s2-free-d": "Murdock (PF): ブロック力が高く、最高の選択肢です。",
        "guide-s2-best-t": "最強キャラ (Premium)",
        "guide-s3-title": "育成手順",
        "guide-s3-p1": "強者のピラミッド。P5昇級が基盤です。",
        "guide-s3-p2": "P-BUFFはカードより圧倒的に効率が良いです。",
        "qa-q1": "Q: 数値の「▲」は何？",
        "qa-a1": "A: バフ値（強化分）です。",
        "qa-q2": "Q: 育成はP-Buffとカードどちらが先？",
        "qa-a2": "A: P-Buffが先です。"
    },
    "en": {
        "nav-home": "HOME",
        "nav-guide": "GUIDE",
        "nav-db": "DATABASE",
        "nav-ranking": "RANKING",
        "nav-videos": "VIDEOS",
        "nav-music": "MUSIC",
        "nav-pbuff": "P-BUFF",
        "nav-survey": "SURVEY",
        "nav-qa": "Q&A",
        "nav-about": "ABOUT ME",
        "about-title": "ABOUT ME",
        "about-p1": "Watching over this court since around 2016. Retired once, but came back in 2024.",
        "about-p2": "Publishing guides and more. Let's make the community active!",
        "home-recommended": "RECOMMENDED",
        "guide-title": "ROAD TO HIGH TIER",
        "guide-s1-title": "Position Features",
        "guide-s1-pg": "Passing, mobility, defensive core.",
        "guide-s1-sg": "Top scoring ability, versatile skills.",
        "guide-s1-sf": "All-rounder contributing to offense and defense.",
        "guide-s1-big": "Guardian of the paint, rebounding.",
        "guide-s2-title": "Recommended Characters",
        "guide-s2-free-t": "Free / Starter Recommendations",
        "guide-s2-free-d": "Murdock (PF): High block power, best choice.",
        "guide-s2-best-t": "Best Characters (Premium)",
        "guide-s3-title": "Training Steps",
        "guide-s3-p1": "Pyramid of strength. P5 upgrade is the base.",
        "guide-s3-p2": "P-BUFF is overwhelmingly more efficient than cards.",
        "qa-q1": "Q: What does '▲' mean?",
        "qa-a1": "A: Buff value (stat enhancement).",
        "qa-q2": "Q: Which comes first, P-Buff or Cards?",
        "qa-a2": "A: P-Buff comes first."
    },
    "ko": {
        "nav-home": "HOME",
        "nav-guide": "GUIDE",
        "nav-db": "DATABASE",
        "nav-ranking": "RANKING",
        "nav-videos": "VIDEOS",
        "nav-music": "MUSIC",
        "nav-pbuff": "P-BUFF",
        "nav-survey": "SURVEY",
        "nav-qa": "Q&A",
        "nav-about": "ABOUT ME",
        "about-title": "ABOUT ME",
        "about-p1": "2016년경부터 이 코트를 지켜왔습니다. 은퇴했었지만 2024년에 복귀했습니다.",
        "about-p2": "공략 가이드 등을 공개 중입니다. 커뮤니티를 활성화합시다!",
        "home-recommended": "RECOMMENDED",
        "guide-title": "ROAD TO HIGH TIER",
        "guide-s1-title": "포지션 특징",
        "guide-s1-pg": "패스와 기동력. 수비의 핵심.",
        "guide-s1-sg": "최고의 득점력. 다양한 스킬.",
        "guide-s1-sf": "공수에 기여하는 만능형.",
        "guide-s1-big": "골밑의 파수꾼. 리바운드.",
        "guide-s2-title": "추천 캐릭터",
        "guide-s2-free-t": "무과금/초기 추천",
        "guide-s2-free-d": "Murdock (PF): 블록 능력이 뛰어나며 최고의 선택입니다.",
        "guide-s2-best-t": "최강 캐릭터 (Premium)",
        "guide-s3-title": "육성 순서",
        "guide-s3-p1": "강자의 피라미드. P5 승급이 기본입니다.",
        "guide-s3-p2": "P-BUFF는 카드보다 압도적으로 효율이 좋습니다.",
        "qa-q1": "Q: 수치의 '▲'는 무엇인가요?",
        "qa-a1": "A: 버프치(능력치 강화분)입니다.",
        "qa-q2": "Q: 육성은 P-Buff와 카드 중 무엇이 먼저인가요?",
        "qa-a2": "A: P-Buff가 먼저입니다."
    },
    "zh": {
        "nav-home": "HOME",
        "nav-guide": "GUIDE",
        "nav-db": "DATABASE",
        "nav-ranking": "RANKING",
        "nav-videos": "VIDEOS",
        "nav-music": "MUSIC",
        "nav-pbuff": "P-BUFF",
        "nav-survey": "SURVEY",
        "nav-qa": "Q&A",
        "nav-about": "ABOUT ME",
        "about-title": "ABOUT ME",
        "about-p1": "从2016年左右开始守护这个球场。曾一度退役，但在2024年回归。",
        "about-p2": "正在发布攻略指南等。让我们一起让社区热闹起来吧！",
        "home-recommended": "RECOMMENDED",
        "guide-title": "ROAD TO HIGH TIER",
        "guide-s1-title": "位置特点",
        "guide-s1-pg": "传球与机动性，防守核心。",
        "guide-s1-sg": "顶级的得分能力与丰富技能。",
        "guide-s1-sf": "攻防一体的全能型。",
        "guide-s1-big": "篮下守护神，篮板球。",
        "guide-s2-title": "推荐角色",
        "guide-s2-free-t": "免费/初始推荐",
        "guide-s2-free-d": "Murdock (PF): 盖帽能力极强，最佳选择。",
        "guide-s2-best-t": "最强角色 (Premium)",
        "guide-s3-title": "培养步骤",
        "guide-s3-p1": "强者金字塔。P5升阶是基础。",
        "guide-s3-p2": "P-BUFF的效率远高于卡片。",
        "qa-q1": "Q: 数值中的 "▲" 是什么？",
        "qa-a1": "A: 增益值（强化部分）。",
        "qa-q2": "Q: 应该先培养 P-Buff 还是卡片？",
        "qa-a2": "A: 先培养 P-Buff。"
    }
};

let currentLang = 'ja';

function getTranslatedText(text, lang) {
    if (!text) return "";
    if (lang === 'ja') return text;
    if (termsDict[lang] && termsDict[lang][text]) {
        return termsDict[lang][text];
    }
    return text;
}

function switchLanguage(lang, btnElement) {
    currentLang = lang;
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('text-orange-500');
    });
    if (btnElement) {
        btnElement.classList.add('text-orange-500');
    }
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translated = getTranslatedText(key, lang);
        if (translated) {
            el.textContent = translated;
        }
    });

    initDb();
    initRanking();
    initPBuff();
}

// ページ切り替え処理
function showPage(pageId) {
    document.querySelectorAll('.page-container').forEach(el => el.classList.add('hidden'));
    const split = document.getElementById('home-split-wrapper');
    const standard = document.getElementById('standard-content');
    
    if (pageId === 'home') {
        if (split) split.style.display = 'block';
        if (standard) standard.classList.add('hidden');
    } else {
        if (split) split.style.display = 'none';
        if (standard) standard.classList.remove('hidden');
        const target = document.getElementById('page-' + pageId);
        if (target) target.classList.remove('hidden');
    }
    
    if (pageId === 'db') initDb();
    if (pageId === 'ranking') initRanking();
    if (pageId === 'pbuff') initPBuff();
    if (pageId === 'videos') initVideos();
    if (pageId === 'music') initMusic();
    if (pageId === 'ping' && typeof initPingVisualizer === 'function') {
        setTimeout(initPingVisualizer, 50);
    }
    
    window.scrollTo(0, 0);
}

// キャラクター実データ定義 (rawData)
const rawData = [
    {"名前":"マードック","en":"Murdock","pos":"PF","s":[178,63,63,178,140,140,165,114,114,204,204,191,153,127,127]},
    {"名前":"マックス","en":"Max","pos":"PF","s":[165,89,89,165,127,127,140,114,127,204,204,191,165,140,102]},
    {"名前":"ジャイアントG","en":"Giant G","pos":"PF","s":[165,76,50,165,127,217,178,114,89,204,204,217,178,178,140]},
    {"名前":"マリソル","en":"Marisol","pos":"PF","s":[152,138,191,127,127,153,178,140,127,191,153,178,165,165,127]},
    {"名前":"クラーク","en":"Clarke","pos":"PF","s":[204,89,76,191,140,165,185,114,89,153,204,204,204,114,102]},
    {"名前":"ルル","en":"Lulu","pos":"PF","s":[165,191,127,165,153,153,178,127,89,178,165,191,165,127,114]},
    {"名前":"フェイ","en":"Fei","pos":"PF","s":[178,178,114,178,178,178,178,114,89,167,140,178,178,140,140]},
    {"名前":"デコン","en":"Deacon","pos":"PF","s":[165,76,63,165,127,127,140,114,89,180,192,204,178,165,140]},
    {"名前":"フォックス","en":"Fox","pos":"PF","s":[152,178,114,165,140,140,165,127,89,165,178,191,165,152,102]},
    {"名前":"ダブルD","en":"Double D","pos":"PF","s":[178,50,37,165,140,191,161,140,89,191,191,191,165,178,140]},
    {"名前":"ヴァンデル","en":"Vandell","pos":"PF","s":[152,50,37,127,140,127,127,140,166,140,167,217,204,191,191]},
    {"名前":"ブレア","en":"Blair","pos":"C","s":[193,180,130,168,117,203,130,104,117,143,181,168,168,130,143]},
    {"名前":"カミラ","en":"Camila","pos":"C","s":[229,127,63,178,114,165,140,191,76,127,191,216,204,127,114]},
    {"名前":"ルーサー","en":"Luther","pos":"C","s":[229,76,63,204,114,229,140,114,76,140,204,229,204,76,102]},
    {"名前":"ビッグドッグ","en":"Big Dog","pos":"C","s":[216,76,63,191,114,216,140,191,89,127,191,216,204,76,102]},
    {"名前":"リー","en":"Lee","pos":"C","s":[165,153,127,178,127,165,127,127,89,153,165,191,178,114,114]},
    {"名前":"クリスタ","en":"Christa","pos":"C","s":[216,76,63,191,114,216,140,114,89,140,216,229,191,76,102]},
    {"名前":"ジミー","en":"Jimmy","pos":"C","s":[229,76,63,229,114,229,127,114,76,127,229,229,229,73,117]},
    {"名前":"ビッグジョー","en":"Big Joe","pos":"C","s":[204,102,63,204,127,229,153,114,76,114,229,216,216,114,102]},
    {"名前":"アウル","en":"Howl","pos":"C","s":[229,51,39,204,114,216,140,102,63,153,229,229,227,114,128]},
    {"名前":"ロイド","en":"Lyoid","pos":"C","s":[216,140,140,204,152,152,114,191,76,101,152,229,216,63,141]},
    {"名前":"シアナ","en":"Siana","pos":"C","s":[229,51,39,204,152,229,140,114,63,127,229,178,227,76,160]}
];

// キャラクター画像マッピング
const charImages = {
    "Murdock": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/murdock/chr_b_murdock.png",
    "Max": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/max/chr_b_max.png",
    "Giant G": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/chr_b_giant_g.png",
    "Marisol": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/marisol/chr_b_marisol.png",
    "Clarke": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/clarke/chr_b_clarke.png",
    "Lulu": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/lulu/chr_b_lulu.png",
    "Fei": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/fei/chr_b_fei.png",
    "Deacon": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/deacon/chr_b_deacon.png",
    "Fox": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/fox/chr_b_fox.png",
    "Double D": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/doubled/chr_b_doubled.png",
    "Vandell": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/vandell/chr_b_vandell.png",
    "Blair": "https://d2mwnrhar4x85q.cloudfront.net/3on3/character/blair/chr_b_blair.png",
    "Camila": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/camila/chr_b_camila.png",
    "Luther": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/luther/chr_b_luther.png",
    "Big Dog": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/bigdog/chr_b_bigdog.png",
    "Lee": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/lee/chr_b_lee.png",
    "Christa": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/christa/chr_b_christa.png",
    "Jimmy": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/jimmy/chr_b_jimmy.png",
    "Big Joe": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/bigjoe/chr_b_bigjoe.png",
    "Howl": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/howl/chr_b_howl.png",
    "Lyoid": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/lyoid/chr_b_lyoid.png",
    "Siana": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/siana/chr_b_siana.png"
};

// データベース初期化 (DATABASE ページ)
function initDb() {
    const grid = document.getElementById('grid');
    if (!grid) return;
    grid.innerHTML = '';

    rawData.forEach(char => {
        const cName = currentLang === 'ja' ? char.名前 : (char.en || char.名前);
        const imgUrl = charImages[char.en] || '';

        const card = document.createElement('div');
        card.className = "bg-white/5 border border-white/10 rounded-3xl p-6 shadow-2xl flex flex-col gap-4";
        
        let statsHtml = '<div class="grid grid-cols-3 gap-2 mt-2">';
        char.s.forEach((val, idx) => {
            statsHtml += `<div class="bg-black/40 p-2 rounded-xl text-center border border-white/5">
                <span class="block text-[10px] text-gray-400">${statNames[idx]}</span>
                <span class="text-sm font-black text-orange-400">${val}</span>
            </div>`;
        });
        statsHtml += '</div>';

        card.innerHTML = `
            <div class="flex items-center gap-4">
                <img src="${imgUrl}" class="w-16 h-16 rounded-2xl object-cover bg-black/50 border border-white/10 shadow-lg">
                <div>
                    <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30">${char.pos}</span>
                    <h3 class="text-2xl font-black italic mt-1">${cName}</h3>
                </div>
            </div>
            ${statsHtml}
        `;
        grid.appendChild(card);
    });
}

// RANKING 初期化
function initRanking() {
    const container = document.getElementById('ranking-container');
    if (!container) return;

    const rankedData = rawData.map(char => {
        return {
            ...char,
            total: char.s.reduce((sum, val) => sum + val, 0)
        };
    }).sort((a, b) => b.total - a.total);

    let html = `<table class="w-full text-left border-collapse">
        <thead>
            <tr class="border-b-2 border-orange-500 text-orange-500">
                <th class="py-4 px-4 font-black italic text-xl w-24">RANK</th>
                <th class="py-4 px-4 font-black italic text-xl">CHARACTER</th>
                <th class="py-4 px-4 font-black italic text-xl">POS</th>
                <th class="py-4 px-4 font-black italic text-xl text-right">TOTAL STATS</th>
            </tr>
        </thead>
        <tbody>`;

    rankedData.forEach((char, idx) => {
        const cName = currentLang === 'ja' ? char.名前 : (char.en || char.名前);
        const rankNum = idx + 1;
        const imgUrl = charImages[char.en] || '';
        
        let rankStyle = "text-gray-400 font-bold";
        let rowBg = "hover:bg-white/5";
        if (rankNum === 1) { rankStyle = "text-yellow-400 font-black text-2xl"; rowBg = "bg-yellow-500/10 border-yellow-500/30"; }
        else if (rankNum === 2) { rankStyle = "text-gray-300 font-black text-xl"; rowBg = "bg-white/10 border-white/20"; }
        else if (rankNum === 3) { rankStyle = "text-orange-400 font-black text-xl"; rowBg = "bg-orange-500/10 border-orange-500/20"; }

        html += `<tr class="border-b border-white/5 transition ${rowBg}">
            <td class="py-3 px-4 ${rankStyle}">#${rankNum}</td>
            <td class="py-3 px-4 flex items-center gap-4">
                <img src="${imgUrl}" class="w-10 h-10 rounded-full object-cover bg-black/50 border border-white/10">
                <span class="font-bold text-lg">${cName}</span>
            </td>
            <td class="py-3 px-4">
                <span class="text-xs font-bold tracking-widest px-3 py-1.5 rounded-full border border-white/10 text-white">${char.pos}</span>
            </td>
            <td class="py-3 px-4 text-right font-black text-2xl text-[#ff4e00]">${char.total}</td>
        </tr>`;
    });

    html += `</tbody></table>`;
    container.innerHTML = html;
}

// VIDEOS ページ初期化
function initVideos() {
    const grid = document.getElementById('video-grid');
    if (!grid) return;
    const videos = [
        { id: "FWWawqKFa8I", title: "初心者向け解説動画" },
        { id: "W3PSbK1VpGI", title: "おすすめキャラ紹介" },
        { id: "Yz7PVs2Hd1Y", title: "Murdock 立ち回り解説" },
        { id: "zQQ5CgmNE6k", title: "コンボ・スキル実戦集" }
    ];
    grid.innerHTML = '';
    videos.forEach(v => {
        const card = document.createElement('div');
        card.className = "bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-xl cursor-pointer hover:border-orange-500 transition group";
        card.onclick = () => openYtModal(v.id);
        card.innerHTML = `
            <div class="aspect-video bg-black relative flex items-center justify-center">
                <img src="https://img.youtube.com/vi/${v.id}/hqdefault.jpg" class="w-full h-full object-cover group-hover:scale-105 transition duration-300">
                <div class="absolute inset-0 bg-black/30 flex items-center justify-center"><i class="fas fa-play text-3xl text-orange-500 drop-shadow"></i></div>
            </div>
            <div class="p-4">
                <h4 class="font-bold text-sm line-clamp-2">${v.title}</h4>
            </div>
        `;
        grid.appendChild(card);
    });
}

// MUSIC ページ初期化
function initMusic() {
    const grid = document.getElementById('music-grid');
    if (!grid) return;
    const musicData = [
        { id: "GXqLuwYKZmc", title: "re.bound" },
        { id: "GtwfPW4aFNg", title: "unstoppable" },
        { id: "SFbfs9j4Q3Y", title: "最高のコンビネーション" },
        { id: "O-SW_ID2Kuw", title: "ミラーフェイク" }
    ];
    grid.innerHTML = '';
    musicData.forEach((m, idx) => {
        const card = document.createElement('div');
        card.className = "bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col justify-between hover:border-orange-500 transition cursor-pointer shadow-xl group";
        card.onclick = () => openYtModal(m.id);
        card.innerHTML = `
            <div>
                <div class="flex justify-between items-center mb-3">
                    <span class="bg-[#ff4e00] text-black text-xs font-black px-2.5 py-1 rounded-md italic">TRACK 0${idx + 1}</span>
                    <i class="fas fa-music text-orange-500 text-xl group-hover:scale-125 transition-transform"></i>
                </div>
                <h3 class="text-xl font-black italic mb-2 group-hover:text-orange-400 transition-colors">${m.title}</h3>
                <p class="text-xs text-gray-400">クリックして再生</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

// P-BUFF ページ初期化
function initPBuff() {
    const container = document.getElementById('pbuff-grid-container');
    if (!container) return;
    container.innerHTML = `
        <div class="bg-white/5 p-8 rounded-3xl border border-white/10 shadow-2xl">
            <h3 class="text-3xl font-black text-orange-500 mb-4 italic">P-BUFF シミュレーター & ガイド</h3>
            <p class="text-gray-300">キャラクターのパッシブバフ構成を確認・検討できます。</p>
        </div>
    `;
}

// YouTube モーダル制御
function openYtModal(videoId) {
    const modal = document.getElementById('yt-modal');
    const iframe = document.getElementById('yt-iframe');
    if (iframe) iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    if (modal) {
        modal.classList.0 = "";
        modal.classList.remove('hidden');
        setTimeout(() => modal.classList.remove('opacity-0'), 10);
    }
}

function closeYtModal() {
    const modal = document.getElementById('yt-modal');
    const iframe = document.getElementById('yt-iframe');
    if (modal) modal.classList.add('opacity-0');
    setTimeout(() => {
        if (modal) modal.classList.add('hidden');
        if (iframe) iframe.src = '';
    }, 300);
}

// 画像拡大モーダル用
function openImageModal(src) {
    // 既存のモーダルがあれば利用、なければ簡易生成
    let modal = document.getElementById('img-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'img-modal';
        modal.className = 'hidden fixed inset-0 z-[400] bg-black/95 flex justify-center items-center opacity-0 transition-opacity duration-300 cursor-pointer';
        modal.onclick = () => {
            modal.classList.add('opacity-0');
            setTimeout(() => modal.classList.add('hidden'), 300);
        };
        modal.innerHTML = `<img id="img-modal-target" class="max-w-[90%] max-h-[90%] object-contain rounded-xl shadow-2xl border border-white/20">`;
        document.body.appendChild(modal);
    }
    document.getElementById('img-modal-target').src = src;
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.remove('opacity-0'), 10);
}

// 初期化実行
document.addEventListener('DOMContentLoaded', () => {
    switchLanguage('ja');
    initRanking();
    initDb();
    initVideos();
    initMusic();
});
