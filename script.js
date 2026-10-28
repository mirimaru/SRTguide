// ==========================================
// ★ キャラクター紹介動画のID管理リスト ★
// ==========================================
const charVideoIds = {
    "Giant G": "", 
    "牛魔王": "C8Shm4jd028",
    "Ox Queen": "C8Shm4jd028",
    "ルーサー": "ZDOSlNUUNGQ",
    "Luther": "ZDOSlNUUNGQ",
    "ビッグドッグ": "6MoEgbtd32Q",
    "Big Dog": "6MoEgbtd32Q",
    "ネイサン": "t6RT7MBjJ2I",
    "Nathan": "t6RT7MBjJ2I",
    "ルル": "b-01v1HsFDY",
    "Lulu": "b-01v1HsFDY",
    "マードック": "XGzjCnhXK3M",
    "Murdock": "XGzjCnhXK3M",
    "クラーク": "qQHoLNlMKNE",
    "Clarke": "qQHoLNlMKNE",
    "リー": "qNas3J33Bls",
    "Lee": "qNas3J33Bls",
    "ウィリアム": "OtulvdR3c6M",
    "William": "OtulvdR3c6M",
    "キム": "f5kAJLVytuo",
    "Kim": "f5kAJLVytuo",
    "ペドロ": "-7gSy0DTjmI",
    "Pedro": "-7gSy0DTjmI",
    "シンディー": "bHWSbqJiGRA",
    "Cindy": "bHWSbqJiGRA",
    "カミラ": "-evPwHt46o4",
    "Camila": "-evPwHt46o4",
    "ヘレナ": "9xP5823jTWQ",
    "Helena": "9xP5823jTWQ",
    "ミカ": "uEhANr3fS6E",
    "Mika": "uEhANr3fS6E",
    "ウォーカー": "Sbj-9Ltwx2c",
    "Walker": "Sbj-9Ltwx2c",
    "サル": "FMmpcJ0-mHI",
    "Saru": "FMmpcJ0-mHI",
    "ジャック": "VS_E1f1IIm4",
    "Jack": "VS_E1f1IIm4",
    "リウ": "z79N8GXwWSk",
    "Liu": "z79N8GXwWSk",
    "ジンジャー": "FQ6P-tpPzx0",
    "Ginger": "FQ6P-tpPzx0",
    "ビッグジョー": "11NHcI7kenQ",
    "Big Joe": "11NHcI7kenQ",
    "ナディア": "dPs5Y_KYNws",
    "Nadia": "dPs5Y_KYNws",
    "バスキー(C)": "", "Basky(C)": "",
    "バスキー(PF)": "", "Basky(PF)": "",
    "バスキー(SF)": "", "Basky(SF)": "",
    "バスキー(SG)": "", "Basky(SG)": "",
    "バスキー(PG)": "", "Basky(PG)": ""
};

// ==========================================
// ★ 新キャラクター＆P-BUFF自動インジェクション ★
// ==========================================
function injectNewCharacters() {
    if (typeof charImages === 'undefined') window.charImages = {};
    charImages["Lavieta"] = "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/ravieta/chr_b.png";
    charImages["Luna"] = "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/luna/chr_b.png";
    
    const baskyImg = "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/basky/chr_b.png";
    charImages["Basky(C)"] = baskyImg;
    charImages["Basky(PF)"] = baskyImg;
    charImages["Basky(SF)"] = baskyImg;
    charImages["Basky(SG)"] = baskyImg;
    charImages["Basky(PG)"] = baskyImg;

    if (typeof rawData !== 'undefined') {
        const hasLavieta = rawData.some(c => c.en === 'Lavieta' || c.名前 === 'ラビエタ');
        if (!hasLavieta) {
            rawData.push({
                "名前": "ラビエタ", "en": "Lavieta", "pos": "SG",
                "s": [127, 178, 229, 140, 204, 89, 89, 165, 152, 153, 102, 89, 89, 229, 191]
            });
        }
        const hasLuna = rawData.some(c => c.en === 'Luna' || c.名前 === 'ルナ');
        if (!hasLuna) {
            rawData.push({
                "名前": "ルナ", "en": "Luna", "pos": "SF",
                "s": [153, 204, 153, 127, 165, 114, 165, 140, 114, 178, 140, 114, 140, 153, 178]
            });
        }

        const baskyStats = [
            { pos: "C", s: [145, 145, 125, 145, 145, 145, 145, 145, 125, 145, 175, 175, 175, 125, 145] },
            { pos: "PF", s: [145, 145, 130, 145, 145, 145, 170, 145, 130, 170, 145, 145, 170, 130, 145] },
            { pos: "SF", s: [135, 165, 145, 145, 165, 145, 145, 145, 135, 165, 145, 135, 145, 145, 145] },
            { pos: "SG", s: [125, 175, 175, 145, 145, 145, 145, 145, 145, 145, 145, 125, 125, 175, 145] },
            { pos: "PG", s: [145, 145, 145, 145, 145, 145, 145, 175, 175, 145, 125, 125, 125, 175, 145] }
        ];
        
        baskyStats.forEach(b => {
            const hasBasky = rawData.some(c => c.en === `Basky(${b.pos})` || c.名前 === `バスキー(${b.pos})`);
            if (!hasBasky) {
                rawData.push({
                    "名前": `バスキー(${b.pos})`, "en": `Basky(${b.pos})`, "pos": b.pos, "s": b.s
                });
            }
        });
    }

    if (typeof pBuffData !== 'undefined') {
        const sgKey = Object.keys(pBuffData).find(k => k.startsWith("SG"));
        if (sgKey) {
            const hasLavietaBuff = pBuffData[sgKey].some(c => c.en === 'Lavieta' || c.名前 === 'ラビエタ');
            if (!hasLavietaBuff) {
                pBuffData[sgKey].push({
                    "名前": "ラビエタ", "en": "Lavieta",
                    "buffs": [ ["スティールの速度", "+8.4%"], ["持久力", "+14"], ["ランニング", "+14"], ["ロングレイアップ", "+12"], ["当たり強さ", "+14"] ]
                });
            }
        }
        
        const sfKey = Object.keys(pBuffData).find(k => k.startsWith("SF"));
        if (sfKey) {
            const hasLunaBuff = pBuffData[sfKey].some(c => c.en === 'Luna' || c.名前 === 'ルナ');
            if (!hasLunaBuff) {
                pBuffData[sfKey].push({
                    "名前": "ルナ", "en": "Luna",
                    "buffs": [ ["パス", "+14"], ["持久力", "+14"], ["ランニング", "+14"], ["ロングダンク", "+14"], ["3点シュート", "+14"] ]
                });
            }
        }
        
        const baskyBuffs = [
            ["3点シュート", "+12"],
            ["ミドルシュート", "+12"],
            ["Dインシュート ブロック", "+12"],
            ["当たり強さ", "+12"],
            ["ロングダンク", "+12"]
        ];
        
        ["C", "PF", "SF", "SG", "PG"].forEach(pos => {
            const posKey = Object.keys(pBuffData).find(k => k.startsWith(pos));
            if (posKey) {
                const hasBaskyBuff = pBuffData[posKey].some(c => c.en === `Basky(${pos})` || c.名前 === `バスキー(${pos})`);
                if (!hasBaskyBuff) {
                    pBuffData[posKey].push({
                        "名前": `バスキー(${pos})`, "en": `Basky(${pos})`,
                        "buffs": baskyBuffs
                    });
                }
            }
        });
    }
}

// ==========================================
// ★ 多言語対応 (i18n) 辞書 ★
// ==========================================
window.i18n = {
    'ja': {
        'nav-home': 'HOME', 'nav-guide': 'GUIDE', 'nav-db': 'DATABASE', 'nav-pet': 'PET', 'nav-ranking': 'RANKING', 'nav-videos': 'VIDEOS', 'nav-pbuff': 'P-BUFF', 'nav-qa': 'Q&A', 'nav-bbs': 'BBS', 'nav-about': 'ABOUT ME', 'nav-survey': 'SURVEY', 'nav-ping': 'PING MAP', 'nav-music': 'MUSIC',
        'about-title': 'ABOUT ME', 'about-p1': '2016年頃からこのコートを見守ってきました。一度引退しましたが、2024年に戻ってきました。', 'about-p2': '攻略ガイド等を公開中。コミュニティを盛り上げましょう！',
        'home-recommended': 'RECOMMENDED', 'home-map': 'プレゼントMAP',
        'pet-title': 'PET SYSTEM UPDATE', 'pet-subtitle': 'ペットシステムのアップデート情報とグレード仕様',
        'videos-desc': 'キャラクターアイコンをクリックすると紹介動画を再生します。',
        'guide-title': 'ROAD TO HIGH TIER', 'guide-s1-title': 'ポジションの特徴',
        'guide-s1-pg': 'パスと機動力。守備の要。', 'guide-s1-sg': '最高得点能力。多彩なスキル。', 'guide-s1-sf': '攻守に貢献する万能型。', 'guide-s1-big': 'ゴール下の番人。リバウンド。',
        'guide-s2-title': 'おすすめキャラ', 'guide-s2-free-t': '無課金・初期のおすすめ', 'guide-s2-free-d': 'Murdock (PF): ブロック力が高く、最高の選択肢です。', 'guide-s2-best-t': '最強キャラ (Premium)',
        'guide-s3-title': '育成手順', 'guide-s3-p1': '強者のピラミッド。P5昇級が基盤です。', 'guide-s3-p2': 'P-BUFFはカードより圧倒的に効率が良いです。',
        'guide-s4-title': 'チームプレイ', 'guide-s4-l12-t': 'Level 1 & 2: 基礎', 'guide-s4-l12-d': '味方の邪魔をしない。スペースを空ける。ドライブコースを塞がないのが鉄則です。',
        'guide-s4-l34-t': 'Level 3 & 4: 応用', 'guide-s4-l34-d': 'ミスを責めず、ポジティブなエモートでチームを鼓舞しましょう。'
    },
    'en': {
        'nav-home': 'HOME', 'nav-guide': 'GUIDE', 'nav-db': 'DATABASE', 'nav-pet': 'PET', 'nav-ranking': 'RANKING', 'nav-videos': 'VIDEOS', 'nav-pbuff': 'P-BUFF', 'nav-qa': 'Q&A', 'nav-bbs': 'BBS', 'nav-about': 'ABOUT ME', 'nav-survey': 'SURVEY', 'nav-ping': 'PING MAP', 'nav-music': 'MUSIC',
        'about-title': 'ABOUT ME', 'about-p1': 'Watching the court since 2016. Retired once, returned in 2024.', 'about-p2': 'Publishing strategy guides. Let\'s boost the community!',
        'home-recommended': 'RECOMMENDED', 'home-map': 'Village Map',
        'pet-title': 'PET SYSTEM UPDATE', 'pet-subtitle': 'Pet System Update & Grade Specifications',
        'videos-desc': 'Click a character icon to play their introduction video.',
        'guide-title': 'ROAD TO HIGH TIER', 'guide-s1-title': 'Position Roles',
        'guide-s1-pg': 'Pass & Speed. Defense key.', 'guide-s1-sg': 'Best scoring. Diverse skills.', 'guide-s1-sf': 'All-rounder for Offense/Defense.', 'guide-s1-big': 'Paint protector. Rebounding.',
        'guide-s2-title': 'Recommended Characters', 'guide-s2-free-t': 'F2P / Starter Picks', 'guide-s2-free-d': 'Murdock (PF): High block power, best choice.', 'guide-s2-best-t': 'Top Tier (Premium)',
        'guide-s3-title': 'Upgrade Path', 'guide-s3-p1': 'Pyramid of Power. P5 is the foundation.', 'guide-s3-p2': 'P-BUFF is far more efficient than cards.',
        'guide-s4-title': 'Team Play', 'guide-s4-l12-t': 'Level 1 & 2: Basics', 'guide-s4-l12-d': 'Don\'t crowd teammates. Open space. Don\'t block drive lanes.',
        'guide-s4-l34-t': 'Level 3 & 4: Advanced', 'guide-s4-l34-d': 'Don\'t blame for mistakes. Encourage with positive emotes.'
    },
    'ko': {
        'nav-home': '홈', 'nav-guide': '가이드', 'nav-db': '데이터베이스', 'nav-pet': '펫', 'nav-ranking': '랭킹', 'nav-videos': '비디오', 'nav-pbuff': 'P-버프', 'nav-qa': '질문답변', 'nav-bbs': '게시판', 'nav-about': '소개', 'nav-survey': '설문조사', 'nav-ping': 'PING MAP', 'nav-music': 'MUSIC',
        'about-title': '저에 대하여', 'about-p1': '2016년부터 코트를 지켜왔습니다. 은퇴 후 2024년에 복귀했습니다.', 'about-p2': '공략 가이드를 공유합니다. 커뮤니티를 활성화합시다!',
        'home-recommended': '추천 영상', 'home-map': '마을 지도',
        'pet-title': '펫 시스템 업데이트', 'pet-subtitle': '펫 시스템 업데이트 정보 및 등급 상세',
        'videos-desc': '캐릭터 아이콘을 클릭하면 소개 영상이 재생됩니다.',
        'guide-title': '하이 티어로 가는 길', 'guide-s1-title': '포지션 특징',
        'guide-s1-pg': '패스와 기동력. 수비의 핵심.', 'guide-s1-sg': '최고의 득점력. 다채로운 스킬.', 'guide-s1-sf': '공수 양면의 만능형.', 'guide-s1-big': '골밑의 수호자. 리바운드.',
        'guide-s2-title': '추천 캐릭터', 'guide-s2-free-t': '무과금 / 초기 추천', 'guide-s2-free-d': 'Murdock (PF): 블록 능력이 뛰어난 최고의 선택입니다.', 'guide-s2-best-t': '최강 캐릭터 (Premium)',
        'guide-s3-title': '육성 순서', 'guide-s3-p1': '강자의 피라미드. P5 승급이 기본입니다.', 'guide-s3-p2': 'P-버프는 카드보다 압도적으로 효율이 좋습니다.',
        'guide-s4-title': '팀 플레이', 'guide-s4-l12-t': 'Level 1 & 2: 기초', 'guide-s4-l12-d': '아군의 공간을 방해하지 마세요. 스페이스 확보가 철칙입니다.',
        'guide-s4-l34-t': 'Level 3 & 4: 응용', 'guide-s4-l34-d': '실수를 비난하지 말고, 긍정적인 이모트로 팀을 격려하세요.'
    },
    'zh': {
        'nav-home': '首页', 'nav-guide': '攻略', 'nav-db': '资料库', 'nav-pet': '宠物', 'nav-ranking': '排名', 'nav-videos': '视频', 'nav-pbuff': 'P-BUFF', 'nav-qa': '问答', 'nav-bbs': '论坛', 'nav-about': '关于', 'nav-survey': '问卷调查', 'nav-ping': 'PING MAP', 'nav-music': 'MUSIC',
        'about-title': '关于我', 'about-p1': '自2016年起关注球场。曾一度退役，2024年回归。', 'about-p2': '分享攻略指南。让我们活跃社区！',
        'home-recommended': '推荐视频', 'home-map': '村庄地图',
        'pet-title': '宠物系统更新', 'pet-subtitle': '宠物系统更新内容与等级详解',
        'videos-desc': '点击角色图标播放介绍视频。',
        'guide-title': '迈向高阶之路', 'guide-s1-title': '位置特点',
        'guide-s1-pg': '传球与机动性。防守的核心。', 'guide-s1-sg': '最强得分能力。多样化的技能。', 'guide-s1-sf': '攻守兼备的全能型。', 'guide-s1-big': '篮下守护者。篮板球。',
        'guide-s2-title': '推荐角色', 'guide-s2-free-t': '零氪 / 初始推荐', 'guide-s2-free-d': 'Murdock (PF): 盖帽能力极强，是不二之选。', 'guide-s2-best-t': '最强角色 (Premium)',
        'guide-s3-title': '养成步骤', 'guide-s3-p1': '强者金字塔。P5晋级是基础。', 'guide-s3-p2': 'P-BUFF的效果远高于卡片。',
        'guide-s4-title': '团队配合', 'guide-s4-l12-t': 'Level 1 & 2: 基础', 'guide-s4-l12-d': '不要阻碍队友。保持拉开空间。不堵塞突破路线。',
        'guide-s4-l34-t': 'Level 3 & 4: 应用', 'guide-s4-l34-d': '不要责怪失误。使用积极的表情鼓励团队。'
    }
};

window.termsDict = {
    'en': {
        'ノーマーク': 'Open', 'シュートタッチ': 'Shooting Touch',
        '3点シュート': '3pt', 'ミドルシュート': 'Mid', 'ゴール下シュート': 'Post Shot', 'ジャンプシュート': 'Jump Shot',
        '遠距離ダンク': 'Long Dunk', '近距離ダンク': 'Short Dunk', '遠距離レイアップ': 'Long Lay', '近距離レイアップ': 'Short Lay',
        'Sダンク': 'S-Dunk', 'Lダンク': 'L-Dunk', 'Sレイアップ': 'S-Lay', 'Lレイアップ': 'L-Lay',
        'ドライブイン': 'Drive-in', 'フェイスアップ': 'Face-up', 'アリウープ': 'Alley-oop',
        'ブロック': 'Block', 'スティール': 'Steal', 'リバウンド': 'Rebound', 'パス': 'Pass',
        '一般の移動速度': 'Normal Move Speed', '移動速度': 'Move Speed', '持久力': 'Stamina',
        '回復量': 'Recovery', '最大値': 'Max', '最大': 'Max',
        '成功率': 'Success', '発動確率': 'Rate', '守備抵抗': 'Def Resist', '抵抗': 'Resist',
        'ポスト': 'Post', 'ミドル': 'Mid', '3点': '3pt', 'Dインシュート ブロック': 'Drive-in Blk', '当たり強さ': 'Toughness'
    },
    'ko': {
        'ノーマーク': '노마크', 'シュートタッチ': '슛 터치',
        '3点シュート': '3점슛', 'ミドルシュート': '미들슛', 'ゴール下シュート': '골밑슛', 'ジャンプシュート': '점프슛',
        '遠距離ダンク': '원거리 덩크', '近距離ダンク': '근거리 덩크', '遠距離レイアップ': '원거리 레이업', '近距離レイアップ': '근거리 레이업',
        'ブロック': '블록', 'スティール': '스틸', 'リバウンド': '리바운드', 'パス': '패스',
        '移動速度': '이동 속도', '持久力': '지구력', '当たり強さ': '몸싸움'
    },
    'zh': {
        'ノーマーク': '空位', 'シュートタッチ': '投篮手感',
        '3点シュート': '三分球', 'ミドルシュート': '中投', 'ゴール下シュート': '篮下投篮', 'ジャンプシュート': '跳投',
        '遠距離ダンク': '远距离扣篮', '近距離ダンク': '近距离扣篮', '遠距離レイアップ': '远距离上篮', '近距離レイアップ': '近距离上篮',
        'ブロック': '盖帽', 'スティール': '抢断', 'リバウンド': '篮板', 'パス': '传球',
        '移動速度': '移动速度', '持久力': '体力', '当たり強さ': '对抗'
    }
};

let currentLang = 'ja';
const posColors = { "PG": "bg-green-950/40", "SG": "bg-orange-950/40", "SF": "bg-cyan-950/40", "PF": "bg-indigo-950/40", "C": "bg-red-950/40" };

function autoFixKoreanData() {
    const krFix = {
        "리": "リー", "윌리엄": "ウィリアム", "머독": "マードック", "조이": "ジョイ", "신디": "シンディー",
        "헬레나": "ヘレナ", "페드로": "ペドロ", "크리스타": "クリスタ", "프로페서": "プロフェッサー",
        "아만다": "アマンダ", "킴": "キム", "카롤리나": "カロリーナ", "린": "リン", "카터": "カーター",
        "제이슨": "ジェイソン", "맥스": "マックス", "클라크": "クラーク", "룰루": "ルル", "빅독": "ビッグドッグ",
        "레베카": "レベッカ", "사루": "サル", "진저": "ジンジャー", "페이": "フェイ", "폭스": "フォックス",
        "리틀폭스": "リトルフォックス", "미카": "ミカ", "워커": "ウォーカー", "카밀라": "カミラ",
        "나디아": "ナディア", "잭": "ジャック", "디콘": "ディーコン", "노아": "ノア", "클로이": "クロエ",
        "아일라": "アイラ", "로이드": "ロイド", "하울": "ハウル", "리우": "リウ", "옥스 퀸": "牛魔王",
        "제시": "ジェシー", "자이언트 G": "ジャイアントG", "블레어": "ブレア", "제네사": "ジェネーザ",
        "카지": "カジ", "켄쇼": "ケンショウ", "더블 D": "ダブルD", "지미": "ジミー", "프레드": "フレッド",
        "바스키": "バスキー", "Basky": "Basky"
    };

    const sortedKeys = Object.keys(krFix).sort((a, b) => b.length - a.length);

    const replaceKr = (str) => {
        if (!str || typeof str !== 'string') return str;
        let res = str;
        for (const kr of sortedKeys) {
            if (res.includes(kr)) { res = res.split(kr).join(krFix[kr]); }
        }
        return res;
    };

    if (typeof rawData !== 'undefined') {
        rawData.forEach(c => {
            if (c.名前) c.名前 = replaceKr(c.名前);
            if (c.name) c.name = replaceKr(c.name);
        });
    }
    
    if (typeof pBuffData !== 'undefined') {
        for (const pos in pBuffData) {
            pBuffData[pos].forEach(c => {
                if (c.名前) c.名前 = replaceKr(c.名前);
                if (c.name) c.name = replaceKr(c.name);
                if (c.buffs) { c.buffs.forEach(b => { if (b[0]) b[0] = replaceKr(b[0]); }); }
            });
        }
    }
}

function getTranslatedText(text, lang) {
    if (lang === 'ja') return text;
    const dict = window.termsDict[lang];
    if (!dict) return text;
    if (dict[text]) return dict[text];
    let normalizedText = text.replace(/\s+/g, '');
    let result = normalizedText;
    const keys = Object.keys(dict).sort((a, b) => b.length - a.length);
    keys.forEach(k => { if (result.includes(k)) result = result.split(k).join(` ${dict[k]} `); });
    return result.replace(/\s+/g, ' ').trim();
}

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
    if (document.getElementById('grid') && document.getElementById('grid').children.length > 0) {
        document.getElementById('grid').innerHTML = ''; initDb();
    }
    if (document.getElementById('pbuff-grid-container') && document.getElementById('pbuff-grid-container').children.length > 0) {
        initPBuff();
    }
    initRanking();
    if (document.getElementById('video-grid') && document.getElementById('video-grid').children.length > 0) {
        if(typeof initVideos === 'function') initVideos();
    }
    if (document.getElementById('music-grid') && document.getElementById('music-grid').children.length > 0) {
        if(typeof initMusic === 'function') initMusic();
    }
}

// ==========================================
// ★ ページ切替制御（全ページ非表示の完全修正版） ★
// ==========================================
window.showPage = function(pageId) {
    const split = document.getElementById('home-split-wrapper');
    const standard = document.getElementById('standard-content');
    
    if (pageId === 'home') {
        if (split) split.style.display = 'flex';
        if (standard) standard.classList.add('hidden');
    } else {
        if (split) split.style.display = 'none';
        if (standard) standard.classList.remove('hidden');
    }
    
    // 全ての page-container を一括非表示
    document.querySelectorAll('.page-container').forEach(p => {
        p.classList.add('hidden');
        p.classList.remove('active-page');
    });

    const target = document.getElementById('page-' + pageId);
    if (target) {
        target.classList.remove('hidden');
        target.classList.add('active-page');
    }
    
    // ナビゲーション表示の制御
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    
    if (pageId === 'home') {
        const navHome = document.querySelector('[data-i18n="nav-home"]');
        if (navHome) navHome.classList.add('active');
    } else {
        const navEl = document.querySelector(`[onclick*="'${pageId}'"]`);
        if (navEl) navEl.classList.add('active');
    }

    if (pageId === 'pet' && typeof initPetPage === 'function') initPetPage();
    if (pageId === 'db') initDb();
    if (pageId === 'pbuff') initPBuff();
    if (pageId === 'ranking') initRanking();
    if (pageId === 'videos' && typeof initVideos === 'function') initVideos();
    if (pageId === 'music' && typeof initMusic === 'function') initMusic();
    if (pageId === 'ping' && typeof initPingVisualizer === 'function') setTimeout(initPingVisualizer, 50);
    
    window.scrollTo(0, 0);
};

// ==========================================
// ★ ペットページ初期化・描画 ★
// ==========================================
function initPetPage() {
    const container = document.getElementById('pet-container');
    if (!container || !window.petData) return;
    
    const data = window.petData;
    
    container.innerHTML = `
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white/5 p-6 md:p-8 rounded-3xl border border-white/10 shadow-2xl">
            <div class="w-full aspect-video rounded-2xl overflow-hidden border border-white/20">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${data.videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="flex flex-col justify-center">
                <h3 class="text-2xl font-black text-orange-500 italic mb-4">${data.title}</h3>
                <ul class="space-y-3 text-gray-200">
                    ${data.overview.map(item => `<li class="flex items-center gap-2"><i class="fas fa-check-circle text-orange-500"></i>${item}</li>`).join('')}
                </ul>
            </div>
        </div>

        <div class="bg-white/5 p-6 md:p-8 rounded-3xl border border-white/10 shadow-2xl overflow-x-auto">
            <h3 class="text-2xl font-black text-orange-500 italic mb-6">ペットグレード（等級）仕様一覧</h3>
            <table class="w-full text-left text-sm text-gray-300">
                <thead class="bg-white/10 text-orange-400 font-bold uppercase">
                    <tr>
                        <th class="p-3">グレード</th>
                        <th class="p-3">最大Lv</th>
                        <th class="p-3">サブ能力スロット</th>
                        <th class="p-3">能力強化可能数</th>
                        <th class="p-3">獲得方法</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-white/10">
                    ${data.grades.map(g => `
                        <tr class="hover:bg-white/5">
                            <td class="p-3 font-bold text-white">${g.grade}</td>
                            <td class="p-3">Lv.${g.maxLv}</td>
                            <td class="p-3">${g.subSlots} 個</td>
                            <td class="p-3">${g.subUpgrades} 回</td>
                            <td class="p-3 text-orange-300">${g.howToGet}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-white/5 p-6 rounded-3xl border border-white/10 shadow-2xl">
                <h3 class="text-xl font-black text-cyan-400 italic mb-4"><i class="fas fa-layer-group mr-2"></i>ペット合成システム</h3>
                <p class="text-sm text-gray-300 mb-2">${data.combineInfo.method}</p>
                <p class="text-xs text-gray-400 mb-1">・費用: ${data.combineInfo.cost}</p>
                <p class="text-xs text-gray-400 mb-1">・Platinum獲得確率: ${data.combineInfo.platinumChance}</p>
                <p class="text-xs text-gray-400">・一括合成: ${data.combineInfo.maxBatch}</p>
            </div>
            <div class="bg-white/5 p-6 rounded-3xl border border-white/10 shadow-2xl">
                <h3 class="text-xl font-black text-orange-500 italic mb-4"><i class="fas fa-info-circle mr-2"></i>既存ペット保持者への案内</h3>
                <ul class="space-y-2 text-sm text-gray-300">
                    ${data.existingOwnersInfo.map(info => `<li>・${info}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
}

function initRanking() {
    const container = document.getElementById('ranking-container');
    if (!container || typeof rawData === 'undefined') return;

    const rankedData = rawData.map(char => {
        return {
            ...char,
            total: char.s.reduce((sum, val) => sum + val, 0)
        };
    }).sort((a, b) => b.total - a.total);

    let html = `
    <table class="w-full text-left border-collapse">
        <thead>
            <tr class="border-b-2 border-orange-500 text-orange-500">
                <th class="py-4 px-4 font-black italic text-xl w-24">RANK</th>
                <th class="py-4 px-4 font-black italic text-xl">CHARACTER</th>
                <th class="py-4 px-4 font-black italic text-xl">POS</th>
                <th class="py-4 px-4 font-black italic text-xl text-right">TOTAL STATS</th>
            </tr>
        </thead>
        <tbody>
    `;

    rankedData.forEach((char, idx) => {
        const cName = currentLang === 'ja' ? char.名前 : (char.en || char.名前);
        const rankNum = idx + 1;
        
        let rankStyle = "text-gray-400 font-bold";
        let rowBg = "hover:bg-white/5";
        if (rankNum === 1) { rankStyle = "text-yellow-400 font-black text-2xl drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]"; rowBg = "bg-yellow-500/10 border-yellow-500/30"; }
        else if (rankNum === 2) { rankStyle = "text-gray-300 font-black text-xl drop-shadow-[0_0_8px_rgba(209,213,219,0.8)]"; rowBg = "bg-white/10 border-white/20"; }
        else if (rankNum === 3) { rankStyle = "text-orange-400 font-black text-xl drop-shadow-[0_0_8px_rgba(251,146,60,0.8)]"; rowBg = "bg-orange-500/10 border-orange-500/20"; }

        html += `
        <tr class="border-b border-white/5 transition ${rowBg}">
            <td class="py-3 px-4 ${rankStyle}">#${rankNum}</td>
            <td class="py-3 px-4 flex items-center gap-4">
                <img src="${charImages[char.en] || ''}" class="w-10 h-10 rounded-full object-cover bg-black/50 border border-white/10">
                <span class="font-bold text-lg">${cName}</span>
            </td>
            <td class="py-3 px-4">
                <span class="text-xs font-bold tracking-widest ${posColors[char.pos] ? posColors[char.pos].split('/')[0] : ''} px-3 py-1.5 rounded-full border border-white/10 text-white">${char.pos}</span>
            </td>
            <td class="py-3 px-4 text-right font-black text-2xl text-[#ff4e00]">${char.total}</td>
        </tr>
        `;
    });

    html += `</tbody></table>`;
    container.innerHTML = html;
}

function initDb() {
    const grid = document.getElementById('grid');
    if (!grid || grid.children.length > 0 || typeof rawData === 'undefined') return;
    
    const maxStats = {}; 
    ["PG", "SG", "SF", "PF", "C"].forEach(p => { 
        maxStats[p] = Array(15).fill(0); 
        rawData.filter(c => c.pos === p).forEach(c => { 
            c.s.forEach((v, i) => { if (v > maxStats[p][i]) maxStats[p][i] = v; }); 
        }); 
    });
    rawData.forEach(c => {
        const card = document.createElement('div'); 
        card.className = `char-card p-6 relative overflow-hidden ${posColors[c.pos] || 'bg-white/5'} border border-white/10`;
        const searchName = ((c.名前 || '') + ' ' + (c.en || '')).toLowerCase(); 
        card.dataset.name = searchName; card.dataset.pos = c.pos || 'All';
        const cName = c.en || c.名前;
        let sHtml = '<div class="stat-grid">';
        c.s.forEach((v, i) => {
            const isMax = maxStats[c.pos] && v === maxStats[c.pos][i];
            const label = getTranslatedText(statNames[i], currentLang);
            sHtml += `<div class="stat-box"><div class="stat-lbl">${label}</div><div class="stat-val ${isMax ? 'is-max' : ''}">${v}</div></div>`;
        });
        sHtml += '</div>';

        const totalStat = c.s.reduce((sum, val) => sum + val, 0);

        card.innerHTML = `
            <div class="char-content relative z-10">
                <div class="flex justify-between items-end mb-4 border-b border-white/20 pb-2">
                    <div class="flex items-center gap-3">
                        <div class="text-2xl font-black italic tracking-tighter leading-none">${cName}</div>
                        <div class="bg-orange-500/20 border border-orange-500 text-orange-500 text-xs font-black px-2 py-0.5 rounded-full tracking-tighter italic whitespace-nowrap">TOTAL: ${totalStat}</div>
                    </div>
                    <div class="text-[#ff4e00] font-black italic text-xl leading-none">${c.pos}</div>
                </div>
                ${sHtml}
            </div>
            <img src="${charImages[c.en] || ''}" class="char-img" style="position: absolute; bottom: -5px; right: -5px; height: 180px; opacity: 0.35; pointer-events: none;">
        `;
        grid.appendChild(card);
    });
    filterCards();
}

function filterCards() {
    const searchInput = document.getElementById('nameInput');
    const posFilter = document.getElementById('posFilter');
    if (!searchInput || !posFilter) return;
    const search = searchInput.value.toLowerCase();
    const pos = posFilter.value;
    document.querySelectorAll('.char-card').forEach(card => {
        const nameMatch = (card.dataset.name || '').includes(search);
        const posMatch = pos === 'All' || (card.dataset.pos || '') === pos;
        card.style.display = (nameMatch && posMatch) ? 'block' : 'none';
    });
}

function initPBuff() {
    const container = document.getElementById('pbuff-grid-container');
    if (!container || typeof pBuffData === 'undefined') return;
    container.innerHTML = '';
    
    const posFilter = document.getElementById('pbuffPosFilter').value;
    
    for (const [posName, chars] of Object.entries(pBuffData)) {
        if (posName.startsWith("ALL")) continue;
        
        const pCode = posName.split(' ')[0];
        if (posFilter !== 'All' && pCode !== posFilter) continue;
        
        const title = document.createElement('h3'); 
        title.className = `text-4xl font-black italic text-white mb-6 mt-12 border-b-2 border-orange-500 pb-2`; 
        title.innerText = posName;
        container.appendChild(title);
        
        const grid = document.createElement('div'); 
        grid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6';
        
        chars.forEach(char => {
            const card = document.createElement('div'); 
            card.className = `pbuff-card p-4 relative overflow-hidden ${posColors[pCode] || 'bg-white/5'} border border-white/10`;
            const cName = char.en || char.name;
            let bHtml = `<div class="char-content relative z-10 min-h-[180px]">
                <h3 class="text-2xl font-black italic text-orange-500 mb-4">${cName}</h3>
                <div class="space-y-1.5">`;
            
            char.buffs.forEach(b => { 
                const effect = getTranslatedText(b[0], currentLang);
                bHtml += `<div class="pbuff-item flex justify-between border-b border-white/5 py-1 text-sm lg:text-base"><span class="pbuff-name">${effect}</span><span class="pbuff-val font-black text-[#ff4e00]">${b[1]}</span></div>`; 
            }); 
            
            bHtml += `</div></div><img src="${charImages[char.en] || ''}" class="char-img" style="position: absolute; bottom: -10px; right: -15px; height: 210px; opacity: 0.45; pointer-events: none;">`;
            card.innerHTML = bHtml; grid.appendChild(card);
        });
        container.appendChild(grid);
    }
}

function initVideos() {
    const grid = document.getElementById('video-grid');
    const posFilter = document.getElementById('videoPosFilter');
    if (!grid || !posFilter || typeof rawData === 'undefined') return;

    grid.innerHTML = '';
    const filterVal = posFilter.value;

    rawData.forEach(char => {
        if (filterVal !== 'All' && char.pos !== filterVal) return;

        const cName = currentLang === 'ja' ? char.名前 : (char.en || char.名前);
        const imgUrl = charImages[char.en] || 'placeholder.png';
        
        const videoId = charVideoIds[char.en] || charVideoIds[char.名前];
        const isGiantG = (char.en === 'Giant G' || char.名前 === 'ジャイアントG');

        let badge = '';
        let opacityClass = '';
        if (videoId) {
            badge = `<span class="absolute top-2 right-2 bg-orange-600 text-white text-[9px] font-black px-2 py-0.5 rounded shadow z-20">WATCH</span>`;
        } else if (isGiantG) {
            badge = `<span class="absolute top-2 right-2 bg-red-600 text-white text-[9px] font-black px-2 py-0.5 rounded shadow z-20 animate-pulse">WIP(制作中)</span>`;
        } else {
            badge = `<span class="absolute top-2 right-2 bg-gray-600 text-white text-[9px] font-black px-2 py-0.5 rounded shadow z-20">準備中</span>`;
            opacityClass = 'opacity-50 grayscale hover:grayscale-0 hover:opacity-100';
        }

        const card = document.createElement('div');
        card.className = `group relative bg-[#0f0f0f] border border-white/10 rounded-2xl p-4 shadow-xl cursor-pointer hover:border-orange-500 transition duration-300 flex flex-col items-center gap-3 ${opacityClass}`;
        card.onclick = () => {
            if (videoId) {
                openYtModal(videoId);
            } else if (isGiantG) {
                alert(cName + ' の紹介動画は現在、絶賛制作中です！もうしばらくお待ちください！');
            } else {
                alert(cName + ' の紹介動画は準備中です。公開をお楽しみに！');
            }
        };

        card.innerHTML = `
            ${badge}
            <div class="relative w-20 h-20 rounded-full overflow-hidden border-2 border-transparent group-hover:border-orange-500 transition duration-300 z-10">
                <img src="${imgUrl}" class="w-full h-full object-cover bg-black/50">
                <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <i class="fab fa-youtube text-3xl text-orange-500 drop-shadow-md"></i>
                </div>
            </div>
            <div class="text-center z-10">
                <h4 class="font-black text-sm tracking-tighter">${cName}</h4>
                <span class="text-[10px] text-gray-500 font-bold">${char.pos}</span>
            </div>
        `;
        grid.appendChild(card);
    });
}

const musicData = [
    { id: "GXqLuwYKZmc", title: "re.bound" },
    { id: "GtwfPW4aFNg", title: "unstoppable（ポップ）" },
    { id: "SFbfs9j4Q3Y", title: "最高のコンビネーション" },
    { id: "O-SW_ID2Kuw", title: "ミラーフェイク" },
    { id: "pHBtBIqk9mg", title: "チェックメイト" },
    { id: "viz_d3NVNxU", title: "ミッドレンジマエストロ" },
    { id: "Y_4E92eHyew", title: "체크메이트（チェックメ이트 韓国ver）" },
    { id: "zIiZ_qu2BcI", title: "re.bound（韓国ver）" }
];

function initMusic() {
    const grid = document.getElementById('music-grid');
    if (!grid) return;

    grid.innerHTML = '';
    musicData.forEach((music, index) => {
        const thumbUrl = `https://i.ytimg.com/vi/${music.id}/hqdefault.jpg`;
        const card = document.createElement('div');
        card.className = "group relative bg-[#0f0f0f] border border-white/10 rounded-2xl p-4 shadow-xl cursor-pointer hover:border-orange-500 transition duration-300 flex flex-col gap-3";
        card.onclick = () => openYtModal(music.id);

        card.innerHTML = `
            <span class="absolute top-2 right-2 bg-[#ff4e00] text-white text-[9px] font-black px-2 py-0.5 rounded shadow z-20">TRACK 0${index + 1}</span>
            <div class="relative w-full aspect-video rounded-xl overflow-hidden border-2 border-transparent group-hover:border-orange-500 transition duration-300 z-10">
                <img src="${thumbUrl}" class="w-full h-full object-cover bg-black/50">
                <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <i class="fab fa-youtube text-4xl text-orange-500 drop-shadow-md"></i>
                </div>
            </div>
            <div class="text-left z-10 mt-2">
                <h4 class="font-black text-sm tracking-tighter text-gray-200 line-clamp-2">${music.title}</h4>
                <span class="text-[10px] text-orange-500 font-bold">クリックして再生</span>
            </div>
        `;
        grid.appendChild(card);
    });
}

function openYtModal(videoId) {
    const modal = document.getElementById('yt-modal');
    const iframe = document.getElementById('yt-iframe');
    if(iframe) iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    if(modal) {
        modal.classList.remove('hidden');
        setTimeout(() => modal.classList.remove('opacity-0'), 10);
    }
}

function closeYtModal() {
    const modal = document.getElementById('yt-modal');
    const iframe = document.getElementById('yt-iframe');
    if(modal) modal.classList.add('opacity-0');
    setTimeout(() => {
        if(modal) modal.classList.add('hidden');
        if(iframe) iframe.src = ''; 
    }, 300);
}

function changeBackground() {
    const bgWrapper = document.getElementById('home-split-wrapper');
    if (bgWrapper) {
        bgWrapper.style.backgroundImage = 'none';
        bgWrapper.style.backgroundColor = 'transparent';
    }
}

function openImageModal(src) {
    const modal = document.getElementById('image-modal');
    const img = document.getElementById('modal-image');
    if(!modal || !img) return;
    img.src = src;
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.remove('opacity-0'), 10);
}

function closeImageModal() {
    const modal = document.getElementById('image-modal');
    if(!modal) return;
    modal.classList.add('opacity-0');
    setTimeout(() => modal.classList.add('hidden'), 300);
}

// =====================================
// ★ PING MAP ビジュアライザー (D3.js) ★
// =====================================
const pingNodes = [
    { id: "Hokkaido", label: "北海道", x: 850, y: 120, type: "client" },
    { id: "Tohoku", label: "東北", x: 810, y: 220, type: "client" },
    { id: "Tokyo", label: "東京", x: 770, y: 320, type: "server" },
    { id: "Kansai", label: "関西", x: 670, y: 370, type: "client" },
    { id: "Kyushu", label: "九州", x: 550, y: 410, type: "client" },
    { id: "Okinawa", label: "沖縄", x: 420, y: 550, type: "client" },
    { id: "Seoul", label: "ソウル", x: 470, y: 280, type: "server" },
    { id: "Taiwan", label: "台湾", x: 300, y: 580, type: "client" },
    { id: "HongKong", label: "香港", x: 160, y: 610, type: "client" },
    { id: "Manila", label: "フィリピン", x: 340, y: 720, type: "client" },
    { id: "Singapore", label: "シンガポール", x: 80, y: 840, type: "client" }
];

const pingDataMap = {
    Hokkaido: { tokyo: 20, seoul: 50 },
    Tohoku: { tokyo: 15, seoul: 45 },
    Tokyo: { tokyo: 5, seoul: 40 },
    Kansai: { tokyo: 12, seoul: 30 },
    Kyushu: { tokyo: 22, seoul: 15 },
    Okinawa: { tokyo: 40, seoul: 65 },
    Seoul: { tokyo: 40, seoul: 5 },
    Taiwan: { tokyo: 35, seoul: 60 },
    HongKong: { tokyo: 45, seoul: 70 },
    Manila: { tokyo: 75, seoul: 85 },
    Singapore: { tokyo: 85, seoul: 95 }
};

let currentTarget = "tokyo";
let isPingInitialized = false;
let packetAnimations = [];

function initPingVisualizer() {
    if (typeof d3 === 'undefined') return;
    const svg = d3.select("#map-svg");
    if (svg.empty()) return;
    
    svg.attr("viewBox", "0 0 1000 950")
       .attr("preserveAspectRatio", "xMidYMid meet");

    if (!isPingInitialized) {
        const bgLayer = svg.append("g").attr("class", "bg-labels opacity-10 font-black text-6xl tracking-widest pointer-events-none");
        bgLayer.append("text").attr("x", 650).attr("y", 250).attr("fill", "#fff").attr("transform", "rotate(25, 650, 250)").text("JAPAN");
        bgLayer.append("text").attr("x", 350).attr("y", 200).attr("fill", "#fff").text("KOREA");
        bgLayer.append("text").attr("x", 20).attr("y", 500).attr("fill", "#fff").text("EAST ASIA");
        bgLayer.append("text").attr("x", 100).attr("y", 750).attr("fill", "#fff").text("SEA");

        svg.append("g").attr("class", "links");
        svg.append("g").attr("class", "nodes");
        svg.append("g").attr("class", "packets");
        svg.append("g").attr("class", "labels");

        isPingInitialized = true;

        d3.timer((elapsed) => {
            const svgMap = d3.select("#map-svg");
            if (!svgMap.empty()) {
                svgMap.selectAll(".pulse-ring")
                    .attr("r", function() {
                        const parentData = d3.select(this.parentNode).datum();
                        if(!parentData || parentData.id.toLowerCase() !== currentTarget) return 0;
                        return 14 + (elapsed % 1500) / 1500 * 20;
                    })
                    .attr("opacity", function() {
                        const parentData = d3.select(this.parentNode).datum();
                        if(!parentData || parentData.id.toLowerCase() !== currentTarget) return 0;
                        return 1 - (elapsed % 1500) / 1500;
                    });
            }
        });
        
        const btnTokyo = document.getElementById('btn-tokyo');
        const btnSeoul = document.getElementById('btn-seoul');
        if(btnTokyo && btnSeoul) {
            btnTokyo.addEventListener('click', function() {
                this.classList.add('active');
                this.classList.remove('text-slate-300');
                btnSeoul.classList.remove('active');
                btnSeoul.classList.add('text-slate-300');
                renderMap('tokyo');
            });

            btnSeoul.addEventListener('click', function() {
                this.classList.add('active');
                this.classList.remove('text-slate-300');
                btnTokyo.classList.remove('active');
                btnTokyo.classList.add('text-slate-300');
                renderMap('seoul');
            });
        }
    }
    renderMap(currentTarget);
}

function getColorByPing(ping) {
    if (ping <= 30) return "#34d399";
    if (ping <= 60) return "#38bdf8";
    if (ping <= 90) return "#fbbf24";
    return "#f43f5e";
}

function renderMap(targetServerId) {
    currentTarget = targetServerId;
    const targetNode = pingNodes.find(n => n.id.toLowerCase() === targetServerId);
    const svg = d3.select("#map-svg");
    if(svg.empty()) return;
    
    packetAnimations.forEach(timer => timer.stop());
    packetAnimations = [];
    svg.select(".packets").selectAll("*").remove();

    const linksData = pingNodes.filter(n => n.id.toLowerCase() !== targetServerId).map(n => {
        return {
            source: n,
            target: targetNode,
            ping: pingDataMap[n.id][targetServerId]
        };
    });

    const serverNode = pingNodes.find(n => n.type === 'server' && n.id.toLowerCase() !== targetServerId);
    if(serverNode) {
         linksData.push({
            source: serverNode,
            target: targetNode,
            ping: pingDataMap[serverNode.id][targetServerId]
         });
    }

    const linkLayer = svg.select(".links");
    const links = linkLayer.selectAll("path")
        .data(linksData, d => d.source.id);

    links.enter()
        .append("path")
        .attr("class", "link-line")
        .attr("fill", "none")
        .attr("stroke-width", 2)
        .merge(links)
        .attr("d", d => {
            const dx = d.target.x - d.source.x;
            const dy = d.target.y - d.source.y;
            const dr = Math.sqrt(dx * dx + dy * dy) * 1.5;
            return `M${d.source.x},${d.source.y}A${dr},${dr} 0 0,1 ${d.target.x},${d.target.y}`;
        })
        .attr("stroke", d => getColorByPing(d.ping))
        .attr("stroke-opacity", 0.4)
        .attr("id", d => `path-${d.source.id}`);

    links.exit().remove();

    const nodeLayer = svg.select(".nodes");
    const nodeElements = nodeLayer.selectAll("g.node")
        .data(pingNodes, d => d.id);
    
    const nodeEnter = nodeElements.enter().append("g").attr("class", "node")
        .attr("transform", d => `translate(${d.x},${d.y})`);

    nodeEnter.append("circle")
        .attr("r", d => d.type === "server" ? 14 : 8)
        .attr("fill", d => d.type === "server" ? "#1e293b" : "#334155")
        .attr("stroke", d => d.type === "server" ? "#38bdf8" : "#94a3b8")
        .attr("stroke-width", d => d.type === "server" ? 4 : 2)
        .attr("class", d => d.type === "server" ? "node-server" : "node-client");
        
    nodeEnter.filter(d => d.type === "server").append("circle")
        .attr("class", "pulse-ring")
        .attr("r", 20)
        .attr("fill", "none")
        .attr("stroke", "#38bdf8")
        .attr("stroke-width", 2)
        .attr("opacity", 0);

    nodeElements.selectAll(".node-server")
        .attr("stroke", d => d.id.toLowerCase() === targetServerId ? "#34d399" : "#38bdf8");

    const labelLayer = svg.select(".labels");
    const labels = labelLayer.selectAll("g.label-group")
        .data(pingNodes, d => d.id);
        
    const labelsEnter = labels.enter().append("g").attr("class", "label-group")
        .attr("transform", d => `translate(${d.x},${d.y})`);

    labelsEnter.append("text")
        .attr("dy", -16)
        .attr("text-anchor", "middle")
        .attr("fill", "#f8fafc")
        .attr("class", "text-sm font-bold glow-text")
        .text(d => d.label);

    const pingLabels = labelLayer.selectAll("text.ping-text")
        .data(linksData, d => d.source.id);
        
    pingLabels.enter().append("text")
        .attr("class", "ping-text text-xs font-bold")
        .attr("text-anchor", "middle")
        .attr("dy", -5)
        .merge(pingLabels)
        .attr("fill", d => getColorByPing(d.ping))
        .text(d => `${d.ping}ms`)
        .attr("transform", function(d) {
            const path = document.getElementById(`path-${d.source.id}`);
            if(path) {
                const midPoint = path.getPointAtLength(path.getTotalLength() / 2);
                return `translate(${midPoint.x},${midPoint.y})`;
            }
            return "";
        });
        
    pingLabels.exit().remove();

    const packetLayer = svg.select(".packets");
    linksData.forEach(link => {
        const pathEl = document.getElementById(`path-${link.source.id}`);
        if(!pathEl) return;
        
        const pathLength = pathEl.getTotalLength();
        const duration = Math.max(400, link.ping * 30); 
        
        function spawnPacket() {
            if (currentTarget !== targetServerId) return;
            
            const packet = packetLayer.append("circle")
                .attr("r", 4)
                .attr("fill", getColorByPing(link.ping))
                .attr("class", "packet");
                
            packet.transition()
                .duration(duration)
                .ease(d3.easeLinear)
                .attrTween("transform", function() {
                    return function(t) {
                        const p = pathEl.getPointAtLength(t * pathLength);
                        return `translate(${p.x},${p.y})`;
                    }
                })
                .on("end", function() {
                    d3.select(this).remove();
                });
        }

        spawnPacket();
        const spawnRate = Math.max(400, link.ping * 15);
        const timer = d3.interval(spawnPacket, spawnRate);
        packetAnimations.push(timer);
    });

    updateInfoPanel(targetServerId);
}

function updateInfoPanel(server) {
    const titleEl = document.getElementById('info-title');
    const descEl = document.getElementById('info-desc');
    const kyushuPingEl = document.getElementById('kyushu-ping-text');
    const taiwanPingEl = document.getElementById('taiwan-ping-text');
    
    if(!titleEl || !descEl || !kyushuPingEl || !taiwanPingEl) return;

    const pingVal = pingDataMap["Kyushu"][server];
    kyushuPingEl.textContent = pingVal;
    kyushuPingEl.className = `text-2xl font-black ${pingVal <= 30 ? 'text-emerald-400' : 'text-sky-400'}`;
    
    const taiwanPingVal = pingDataMap["Taiwan"][server];
    taiwanPingEl.textContent = taiwanPingVal;
    taiwanPingEl.className = `text-2xl font-black ${taiwanPingVal <= 40 ? 'text-emerald-400' : 'text-amber-400'}`;
    
    if (server === 'tokyo') {
        titleEl.textContent = "東京サーバー接続時";
        titleEl.className = "text-xl font-bold text-sky-400 mb-3 border-b border-slate-700 pb-2";
        descEl.innerHTML = "日本国内からは一貫して低いPing（遅延）で接続可能です。<br><br>特に関東周辺からは1桁msの極めて快適な環境でプレイできます。<br><br><span class='text-sky-300 font-bold'>【注目: 台湾】</span>物理的な距離は韓国の方が近いですが、日本との間に極めて太く直通の海底ケーブルがあるため、東京サーバーの方がPingが低くなる逆転現象が起きます。";
    } else {
        titleEl.textContent = "韓国(ソウル)サーバー接続時";
        titleEl.className = "text-xl font-bold text-emerald-400 mb-3 border-b border-slate-700 pb-2";
        descEl.innerHTML = "韓国国内は数msの世界ですが、日本からも比較的快適にアクセスできます。<br><br><span class='text-amber-300 font-bold'>【注目: 九州】</span>九州地方は東京よりも釜山（韓国南端）を経由する海底ケーブルに近いため、<strong>東京サーバーへ繋ぐよりもPingが低くなる</strong>逆転現象が発生しています。";
    }
}

// ==========================================
// ★ 初期化起動 ★
// ==========================================
window.onload = () => { 
    injectNewCharacters(); 
    autoFixKoreanData();   
    switchLanguage('ja');  
    changeBackground();    
    showPage('home');      
    initRanking();         
    if(typeof initMusic === 'function') initMusic();
};
