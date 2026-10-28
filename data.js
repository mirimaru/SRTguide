// ==========================================
// ★ ステータス項目定義 ★
// ==========================================
const statNames = [
    "ポストショット", "ミドルシュート", "3点シュート", 
    "近距離レイアップ", "遠距離レイアップ", "近距離ダンク", "遠距離ダンク", 
    "パス", "スティール", "ブロック", "リバウンド", 
    "Oリバウンド能力", "Dリバウンド能力", "ランニング", "持久力"
];

// ==========================================
// ★ キャラクター基本ステータス一覧 ★
// ==========================================
const rawData = [
    {"名前":"クララ","en":"Clara","pos":"PG","s":[102,178,165,127,229,63,76,229,216,127,89,76,76,229,204]},
    {"名前":"カジ","en":"Kaji","pos":"PG","s":[113,153,178,114,140,114,191,178,178,178,89,127,153,140,204]},
    {"名前":"ジェネーザ(フラッシュ)","en":"Genesa (Flash)","pos":"PG","s":[153,153,178,102,178,127,164,165,231,140,127,114,114,224,191]},
    {"名前":"ジェネーザ(ダイナミック)","en":"Genesa (Dynamic)","pos":"PG","s":[153,193,138,102,178,127,204,165,191,180,127,114,114,184,191]},
    {"名前":"アイラ","en":"Ayla","pos":"PG","s":[127,203,178,127,178,63,76,229,216,114,89,101,76,191,178]},
    {"名前":"ペドロ","en":"Pedro","pos":"PG","s":[127,140,127,127,165,63,76,114,229,127,114,89,89,191,191]},
    {"名前":"シンディー","en":"Cindy","pos":"PG","s":[140,191,191,140,178,76,89,191,191,114,89,76,89,204,178]},
    {"名前":"ヘレナ","en":"Helena","pos":"PG","s":[127,178,178,127,178,63,76,229,216,114,89,76,89,204,178]},
    {"名前":"プロフェッサー","en":"Professor","pos":"PG","s":[140,178,165,140,229,76,76,191,178,114,89,89,89,191,178]},
    {"名前":"リトルフォックス","en":"Little Fox","pos":"PG","s":[140,153,130,140,204,76,76,229,165,153,89,89,89,216,191]},
    {"名前":"ジンジャー","en":"Ginger","pos":"PG","s":[102,191,191,102,204,63,76,229,191,114,89,76,89,216,204]},
    {"名前":"ミカ","en":"Mika","pos":"PG","s":[140,191,140,127,204,63,76,229,165,114,89,76,76,216,216]},
    {"名前":"クロイ","en":"Chloe","pos":"PG","s":[113,203,216,127,191,63,89,191,203,101,89,76,76,216,216]},
    {"名前":"アンパン","en":"ANPAN","pos":"PG","s":[102,216,178,127,229,63,76,229,178,127,89,76,76,229,216]},
    {"名前":"ユナ","en":"Yuna","pos":"SG","s":[127,191,225,127,204,89,102,178,204,115,89,89,89,229,204]},
    {"名前":"GENA","en":"Gena","pos":"SG","s":[127,140,216,127,165,102,102,178,140,140,102,127,89,191,178]},
    {"名前":"牛魔王","en":"Ox Queen","pos":"SG","s":[127,217,229,127,165,89,153,165,140,140,114,89,89,216,204]},
    {"名前":"キム","en":"Kim","pos":"SG","s":[153,204,217,127,178,89,114,153,178,140,114,89,102,191,114]},
    {"名前":"カロリーナ","en":"Carolina","pos":"SG","s":[165,191,191,165,216,89,127,140,178,140,114,76,89,191,204]},
    {"名前":"フレッド","en":"Fred","pos":"SG","s":[140,191,204,140,191,89,102,178,191,127,102,76,89,178,153]},
    {"名前":"リン","en":"Rin","pos":"SG","s":[140,191,204,127,178,89,102,178,191,140,102,76,89,178,178]},
    {"名前":"ジェイソン","en":"Jason","pos":"SG","s":[127,178,191,127,153,178,178,127,140,127,102,89,89,191,178]},
    {"名前":"ウォーカー","en":"Walker","pos":"SG","s":[140,191,229,140,191,89,102,153,140,153,114,89,89,191,204]},
    {"名前":"ナディア","en":"Nadia","pos":"SG","s":[140,191,114,140,216,178,127,127,204,140,114,76,89,216,178]},
    {"名前":"ノア","en":"Noah","pos":"SG","s":[127,178,229,178,216,127,153,203,140,127,102,76,89,165,179]},
    {"名前":"MC.CC","en":"MC.CC","pos":"SG","s":[127,178,216,127,178,89,204,140,140,127,102,127,102,178,204]},
    {"名前":"ラビエタ","en":"Lavieta","pos":"SG","s":[127,178,229,140,204,89,89,165,152,153,102,89,89,229,191]},
    {"名前":"リウ","en":"Liu","pos":"SF","s":[153,204,127,165,140,114,178,115,140,165,153,153,153,140,153]},
    {"名前":"ジェシー","en":"Jessie","pos":"SF","s":[140,229,178,140,178,102,127,165,153,153,127,127,114,178,165]},
    {"名前":"アマンダ","en":"Amanda","pos":"SF","s":[153,229,178,153,178,102,127,153,127,153,140,127,127,153,127]},
    {"名前":"ジョイ","en":"Joey","pos":"SF","s":[153,191,127,165,191,114,127,140,114,153,127,127,127,165,165]},
    {"名前":"ウィリアム","en":"William","pos":"SF","s":[165,204,127,153,178,114,153,127,102,178,153,165,140,140,127]},
    {"名前":"カーター","en":"Carter","pos":"SF","s":[153,191,127,153,191,102,127,191,165,153,140,127,127,140,165]},
    {"名前":"ルナ","en":"Luna","pos":"SF","s":[153,204,153,127,165,114,165,140,114,178,140,114,140,153,178]}
];

// ==========================================
// ★ P-BUFF データ ★
// ==========================================
const pBuffData = {
    "PG (ポイントガード)": [
        { "名前": "ペドロ", "buffs": [ ["スティール成功率", "+14%"], ["ランニング", "+14"] ] },
        { "名前": "シンディー", "buffs": [ ["3点シュート 成功率", "+14%"], ["移動速度", "+14"] ] },
        { "名前": "ヘレナ", "buffs": [ ["パス", "+14"], ["3点シュート 成功率", "+14%"] ] }
    ],
    "SG (シューティングガード)": [
        { "名前": "キム", "buffs": [ ["3点シュート 成功率", "+14%"], ["ミドルシュート 成功率", "+14%"] ] },
        { "名前": "牛魔王", "buffs": [ ["3点シュート 成功率", "+14%"], ["ランニング", "+14"] ] },
        { "名前": "ラビエタ", "buffs": [ ["スティールの速度", "+8.4%"], ["持久力", "+14"], ["ランニング", "+14"], ["ロングレイアップ", "+12"], ["当たり強さ", "+14"] ] }
    ],
    "SF (スモールフォワード)": [
        { "名前": "ウィリアム", "buffs": [ ["ミドルシュート 成功率", "+14%"], ["ランニング", "+14"] ] },
        { "名前": "ルナ", "buffs": [ ["パス", "+14"], ["持久力", "+14"], ["ランニング", "+14"], ["ロングダンク", "+14"], ["3点シュート", "+14"] ] }
    ]
};

// ==========================================
// ★ キャラクター画像URL管理 ★
// ==========================================
window.charImages = {
    "Lavieta": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/ravieta/chr_b.png",
    "Luna": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/luna/chr_b.png",
    "Ox Queen": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/oxqueen/chr_b.png",
    "Kim": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/kim/chr_b.png",
    "Pedro": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/pedro/chr_b.png",
    "Cindy": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/cindy/chr_b.png",
    "Helena": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/helena/chr_b.png",
    "William": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/william/chr_b.png"
};

// ==========================================
// ★ YouTube 動画ID管理リスト ★
// ==========================================
const charVideoIds = {
    "牛魔王": "C8Shm4jd028",
    "Ox Queen": "C8Shm4jd028",
    "ルーサー": "ZDOSlNUUNGQ",
    "Luther": "ZDOSlNUUNGQ",
    "ビッグドッグ": "6MoEgbtd32Q",
    "Big Dog": "6MoEgbtd32Q",
    "ネイサン": "t6RT7MBjJ2I",
    "Nathan": "t6RT7MBjJ2I",
    "ペドロ": "-7gSy0DTjmI",
    "Pedro": "-7gSy0DTjmI",
    "キム": "f5kAJLVytuo",
    "Kim": "f5kAJLVytuo",
    "ウィリアム": "OtulvdR3c6M",
    "William": "OtulvdR3c6M",
    "シンディー": "bHWSbqJiGRA",
    "Cindy": "bHWSbqJiGRA"
};

// ==========================================
// ★ 背景動画設定（新動画差し替え対応） ★
// ==========================================
const bgMedia = [
    'top_video.mp4' // 新しい背景動画ファイル
];

const mainTrailerVideo = "https://www.youtube.com/embed/z-Fux-nU-g4"; // Pet System Update 新動画

// ==========================================
// ★ ペットシステム アップデートデータ (Oct 28) ★
// ==========================================
const petData = {
    title: "ペットシステム アプデ情報 (Oct 28)",
    videoUrl: "https://youtu.be/z-Fux-nU-g4",
    videoId: "z-Fux-nU-g4",
    overview: [
        "4段階のグレード設定（BRONZE, SILVER, GOLD, PLATINUM）",
        "全ペットがレベルに応じて成長する固有能力（Unique Ability）を保持",
        "コイン（Coins）またはポイント（Points）で採用（Adopt）可能"
    ],
    grades: [
        { grade: "BRONZE", maxLv: 3, subSlots: 0, subUpgrades: 0, howToGet: "採用 (Adopt)" },
        { grade: "SILVER", maxLv: 6, subSlots: 1, subUpgrades: 0, howToGet: "採用 (Adopt)" },
        { grade: "GOLD", maxLv: 12, subSlots: 2, subUpgrades: 1, howToGet: "採用 (Adopt)" },
        { grade: "PLATINUM", maxLv: 15, subSlots: 3, subUpgrades: 2, howToGet: "合成限定 (Combine Only)" }
    ],
    combineInfo: {
        method: "同等級のペット同士を合成して高ランクペットを獲得",
        cost: "コイン合成: 5匹 / ポイント合成: 2匹",
        platinumChance: "Gold + Gold 合成時 25% の確率で Platinum 獲得（失敗時はランダムGoldペット）",
        maxBatch: "一度に最大 200匹 まで一括合成可能"
    },
    existingOwnersInfo: [
        "既存ペットの等級と見た目をそのまま保持",
        "レベル上限が Max Lv.15 に拡張され、固有能力も引き継ぎ",
        "不要になった旧ペット用アイテム（Kennel等）は売却可能"
    ]
};

// ==========================================
// ★ 多言語対応 (i18n) 辞書 ★
// ==========================================
window.i18n = {
    'ja': {
        'nav-home': 'HOME', 'nav-guide': 'GUIDE', 'nav-db': 'DATABASE', 'nav-ranking': 'RANKING', 
        'nav-videos': 'VIDEOS', 'nav-pbuff': 'P-BUFF', 'nav-pet': 'PET', 'nav-qa': 'Q&A', 
        'nav-bbs': 'BBS', 'nav-about': 'ABOUT ME', 'nav-survey': 'SURVEY', 'nav-ping': 'PING MAP', 'nav-music': 'MUSIC',
        'about-title': 'ABOUT ME', 'about-p1': '2016年頃からこのコートを見守ってきました。一度引退しましたが、2024年に戻ってきました。', 
        'about-p2': '攻略ガイド等を公開中。コミュニティを盛り上げましょう！',
        'home-recommended': 'RECOMMENDED', 'home-map': 'プレゼントMAP',
        'pet-title': 'PET SYSTEM UPDATE', 'pet-subtitle': 'ペットシステムのアップデート情報とグレード仕様'
    },
    'en': {
        'nav-home': 'HOME', 'nav-guide': 'GUIDE', 'nav-db': 'DATABASE', 'nav-ranking': 'RANKING', 
        'nav-videos': 'VIDEOS', 'nav-pbuff': 'P-BUFF', 'nav-pet': 'PET', 'nav-qa': 'Q&A', 
        'nav-bbs': 'BBS', 'nav-about': 'ABOUT ME', 'nav-survey': 'SURVEY', 'nav-ping': 'PING MAP', 'nav-music': 'MUSIC',
        'about-title': 'ABOUT ME', 'about-p1': 'Watching the court since 2016. Retired once, returned in 2024.', 
        'about-p2': 'Publishing strategy guides. Let\'s boost the community!',
        'home-recommended': 'RECOMMENDED', 'home-map': 'Village Map',
        'pet-title': 'PET SYSTEM UPDATE', 'pet-subtitle': 'Pet System Update & Grade Specifications'
    },
    'ko': {
        'nav-home': '홈', 'nav-guide': '가이드', 'nav-db': '데이터베이스', 'nav-ranking': '랭킹', 
        'nav-videos': '비디오', 'nav-pbuff': 'P-버프', 'nav-pet': '펫', 'nav-qa': '질문답변', 
        'nav-bbs': '게시판', 'nav-about': '소개', 'nav-survey': '설문조사', 'nav-ping': 'PING MAP', 'nav-music': 'MUSIC',
        'about-title': '저에 대하여', 'about-p1': '2016년부터 코트를 지켜왔습니다. 은퇴 후 2024년에 복귀했습니다.', 
        'about-p2': '공략 가이드를 공유합니다. 커뮤니티를 활성화합시다!',
        'home-recommended': '추천 영상', 'home-map': '마을 지도',
        'pet-title': '펫 시스템 업데이트', 'pet-subtitle': '펫 시스템 업데이트 정보 및 등급 상세'
    },
    'zh': {
        'nav-home': '首页', 'nav-guide': '攻略', 'nav-db': '资料库', 'nav-ranking': '排名', 
        'nav-videos': '视频', 'nav-pbuff': 'P-BUFF', 'nav-pet': '宠物', 'nav-qa': '问答', 
        'nav-bbs': '论坛', 'nav-about': '关于', 'nav-survey': '问卷调查', 'nav-ping': 'PING MAP', 'nav-music': 'MUSIC',
        'about-title': '关于我', 'about-p1': '自2016年起关注球场。曾一度退役，2024年回归。', 
        'about-p2': '分享攻略指南。让我们活跃社区！',
        'home-recommended': '推荐视频', 'home-map': '村庄地图',
        'pet-title': '宠物系统更新', 'pet-subtitle': '宠物系统更新内容与等级详解'
    }
};

// ==========================================
// ★ 専門用語 翻訳用辞書 ★
// ==========================================
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
        '成功率': 'Success', '発動確率': 'Rate', '守備抵抗': 'Def Resist', '抵抗': 'Resist'
    },
    'ko': {
        'ノーマーク': '노마크', 'シュートタッチ': '슛 터치',
        '3点シュート': '3점슛', 'ミドルシュート': '미들슛', 'ゴール下シュート': '골밑슛', 'ジャンプシュート': '점프슛',
        '遠距離ダンク': '원거리 덩크', '近距離ダンク': '근거리 덩크', '遠距離レイアップ': '원거리 레이업', '近距離レイアップ': '근거리 레이업',
        'ブロック': '블록', 'スティール': '스틸', 'リバウンド': '리바운드', 'パス': '패스',
        '移動速度': '이동 속도', '持久力': '지구력'
    },
    'zh': {
        'ノーマーク': '空位', 'シュートタッチ': '投篮手感',
        '3点シュート': '三分球', 'ミドルシュート': '中投', 'ゴール下シュート': '篮下投篮', 'ジャンプシュート': '跳投',
        '遠距離ダンク': '远距离扣篮', '近距离ダンク': '近距离扣篮', '遠距離レイアップ': '远距离上篮', '近距离レイアップ': '近距离上篮',
        'ブロック': '盖帽', 'スティール': '抢断', 'リバウンド': '篮板', 'パス': '传球',
        '移動速度': '移动速度', '持久力': '体力'
    }
};
