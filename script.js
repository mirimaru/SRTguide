// ==========================================
// ★ キャラクター紹介動画のID管理リスト ★
// 動画が完成したら、ここにキャラ名とYouTubeのIDを追加してください。
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
    "Nathan": "t6RT7MBjJ2I"
};

// ==========================================
// ★ システム強化：新キャラクター＆P-BUFF自動インジェクション ★
// data.jsを上書きせずに新キャラ2名を全機能に登録します
// ==========================================
function injectNewCharacters() {
    if (typeof charImages === 'undefined') {
        window.charImages = {};
    }
    // 公式イラストリンクの流し込み
    charImages["Lavieta"] = "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/ravieta/chr_b.png";
    charImages["Luna"] = "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/luna/chr_b.png";

    // 1. ステータスデータの追加 (DATABASE, RANKING, VIDEOS用)
    if (typeof rawData !== 'undefined') {
        // ラビエタ (SG) の重複登録を防止して追加
        const hasLavieta = rawData.some(c => c.en === 'Lavieta' || c.名前 === 'ラビエタ');
        if (!hasLavieta) {
            rawData.push({
                "名前": "ラビエタ",
                "en": "Lavieta",
                "pos": "SG",
                "s": [127, 178, 229, 140, 204, 89, 89, 165, 152, 153, 102, 89, 89, 229, 191]
            });
        }
        // ルナ (SF) の重複登録を防止して追加
        const hasLuna = rawData.some(c => c.en === 'Luna' || c.名前 === 'ルナ');
        if (!hasLuna) {
            rawData.push({
                "名前": "ルナ",
                "en": "Luna",
                "pos": "SF",
                "s": [153, 204, 153, 127, 165, 114, 165, 140, 114, 178, 140, 114, 140, 153, 178]
            });
        }
    }

    // 2. P-BUFFデータの追加 (P-BUFFページ用)
    if (typeof pBuffData !== 'undefined') {
        // ラビエタ (SG) のP-BUFFを追加
        if (pBuffData["SG (シューティングガード)"]) {
            const hasLavietaBuff = pBuffData["SG (シューティングガード)"].some(c => c.en === 'Lavieta' || c.名前 === 'ラビエタ');
            if (!hasLavietaBuff) {
                pBuffData["SG (シューティングガード)"].push({
                    "名前": "ラビエタ",
                    "en": "Lavieta",
                    "buffs": [
                        ["スティールの速度", "+8.4%"],
                        ["持久力", "+14"],
                        ["ランニング", "+14"],
                        ["ロングレイアップ", "+12"],
                        ["当たり強さ", "+14"]
                    ]
                });
            }
        }

        // ルナ (SF) のP-BUFFを追加
        if (pBuffData["SF (スモールフォワード)"]) {
            const hasLunaBuff = pBuffData["SF (スモールフォワード)"].some(c => c.en === 'Luna' || c.名前 === 'ルナ');
            if (!hasLunaBuff) {
                pBuffData["SF (スモールフォワード)"].push({
                    "名前": "ルナ",
                    "en": "Luna",
                    "buffs": [
                        ["パス", "+14"],
                        ["持久力", "+14"],
                        ["ランニング", "+14"],
                        ["ロングダンク", "+14"],
                        ["3点シュート", "+14"]
                    ]
                });
            }
        }
    }
}

window.i18n = {
    'ja': {
        'nav-home': 'HOME', 'nav-guide': 'GUIDE', 'nav-db': 'DATABASE', 'nav-ranking': 'RANKING', 'nav-videos': 'VIDEOS', 'nav-pbuff': 'P-BUFF', 'nav-qa': 'Q&A', 'nav-bbs': 'BBS', 'nav-about': 'ABOUT ME', 'nav-survey': 'SURVEY',
        'about-title': 'ABOUT ME', 'about-p1': '2016年頃からこのコートを見守ってきました。一度引退しましたが、2024年に戻ってきました。', 'about-p2': '攻略ガイド等を公開中。コミュニティを盛り上げましょう！',
        'home-recommended': 'RECOMMENDED', 'home-map': 'プレゼントMAP',
        'videos-desc': 'キャラクターアイコンをクリックすると紹介動画を再生します。現在「牛魔王」「ルーサー」「ビッグドッグ」「ネイサン」公開中！今後も順次追加予定です！',
        'guide-title': 'ROAD TO HIGH TIER', 'guide-s1-title': 'ポジションの特徴',
        'guide-s1-pg': 'パスと機動力。守備の要。', 'guide-s1-sg': '最高得点能力。多彩なスキル。', 'guide-s1-sf': '攻守に貢献する万能型。', 'guide-s1-big': 'ゴール下の番人。リバウンド。',
        'guide-s2-title': 'おすすめキャラ', 'guide-s2-free-t': '無課金・初期のおすすめ', 'guide-s2-free-d': 'Murdock (PF): ブロック力が高く、最高の選択肢です。', 'guide-s2-best-t': '最強キャラ (Premium)',
        'guide-s3-title': '育成手順', 'guide-s3-p1': '強者のピラミッド。P5昇級が基盤です。', 'guide-s3-p2': 'P-BUFFはカードより圧倒的に効率が良いです。',
        'guide-s4-title': 'チームプレイ', 'guide-s4-l12-t': 'Level 1 & 2: 基礎', 'guide-s4-l12-d': '味方の邪魔をしない。スペースを空ける。ドライブコースを塞がないのが鉄則です。',
        'guide-s4-l34-t': 'Level 3 & 4: 応用', 'guide-s4-l34-d': 'ミスを責めず、ポジティブなエモートでチームを鼓舞しましょう。',
        'qa-q1': 'Q: 数値の「▲」は何？', 'qa-a1': 'A: バフ値（強化分）です。', 'qa-q2': 'Q: 育成はP-Buffとカードどちらが先？', 'qa-a2': 'A: P-Buffが先です。'
    },
    'en': {
        'nav-home': 'HOME', 'nav-guide': 'GUIDE', 'nav-db': 'DATABASE', 'nav-ranking': 'RANKING', 'nav-videos': 'VIDEOS', 'nav-pbuff': 'P-BUFF', 'nav-qa': 'Q&A', 'nav-bbs': 'BBS', 'nav-about': 'ABOUT ME', 'nav-survey': 'SURVEY',
        'about-title': 'ABOUT ME', 'about-p1': 'Watching the court since 2016. Retired once, returned in 2024.', 'about-p2': 'Publishing strategy guides. Let\'s boost the community!',
        'home-recommended': 'RECOMMENDED', 'home-map': 'Village Map',
        'videos-desc': 'Click a character icon to play their introduction video. Videos for Ox Queen, Luther, Big Dog, and Nathan are now available!',
        'guide-title': 'ROAD TO HIGH TIER', 'guide-s1-title': 'Position Roles',
        'guide-s1-pg': 'Pass & Speed. Defense key.', 'guide-s1-sg': 'Best scoring. Diverse skills.', 'guide-s1-sf': 'All-rounder for Offense/Defense.', 'guide-s1-big': 'Paint protector. Rebounding.',
        'guide-s2-title': 'Recommended Characters', 'guide-s2-free-t': 'F2P / Starter Picks', 'guide-s2-free-d': 'Murdock (PF): High block power, best choice.', 'guide-s2-best-t': 'Top Tier (Premium)',
        'guide-s3-title': 'Upgrade Path', 'guide-s3-p1': 'Pyramid of Power. P5 is the foundation.', 'guide-s3-p2': 'P-BUFF is far more efficient than cards.',
        'guide-s4-title': 'Team Play', 'guide-s4-l12-t': 'Level 1 & 2: Basics', 'guide-s4-l12-d': 'Don\'t crowd teammates. Open space. Don\'t block drive lanes.',
        'guide-s4-l34-t': 'Level 3 & 4: Advanced', 'guide-s4-l34-d': 'Don\'t blame for mistakes. Encourage with positive emotes.',
        'qa-q1': 'Q: What does "▲" mean?', 'qa-a1': 'A: Buff value (Stat increase).', 'qa-q2': 'Q: Upgrade P-Buff or Cards first?', 'qa-a2': 'A: P-Buff first.'
    },
    'ko': {
        'nav-home': '홈', 'nav-guide': '가이드', 'nav-db': '데이터베이스', 'nav-ranking': '랭킹', 'nav-videos': '비디오', 'nav-pbuff': 'P-버프', 'nav-qa': '질문답변', 'nav-bbs': '게시판', 'nav-about': '소개', 'nav-survey': '설문조사',
        'about-title': '저에 대하여', 'about-p1': '2016년부터 코트를 지켜왔습니다. 은퇴 후 2024년에 복귀했습니다.', 'about-p2': '공략 가이드를 공유합니다. 커뮤니티를 활성화합시다!',
        'home-recommended': '추천 영상', 'home-map': '마을 지도',
        'videos-desc': '캐릭터 아이콘을 클릭하면 소개 영상이 재생됩니다. 새로운 영상이 계속 추가될 예정입니다!',
        'guide-title': '하이 티어로 가는 길', 'guide-s1-title': '포지션 특징',
        'guide-s1-pg': '패스와 기동력. 수비의 핵심.', 'guide-s1-sg': '최고의 득점력. 다채로운 스킬.', 'guide-s1-sf': '공수 양면의 만능형.', 'guide-s1-big': '골밑의 수호자. 리바운드.',
        'guide-s2-title': '추천 캐릭터', 'guide-s2-free-t': '무과금 / 초기 추천', 'guide-s2-free-d': 'Murdock (PF): 블록 능력이 뛰어나 최고의 선택입니다.', 'guide-s2-best-t': '최강 캐릭터 (Premium)',
        'guide-s3-title': '육성 순서', 'guide-s3-p1': '강자의 피라미드. P5 승급이 기본입니다.', 'guide-s3-p2': 'P-버프는 카드보다 압도적으로 효율이 좋습니다.',
        'guide-s4-title': '팀 플레이', 'guide-s4-l12-t': 'Level 1 & 2: 기초', 'guide-s4-l12-d': '아군의 공간을 방해하지 마세요. 스페이스 확보가 철칙입니다.',
        'guide-s4-l34-t': 'Level 3 & 4: 응용', 'guide-s4-l34-d': '실수를 비난하지 말고, 긍정적인 이모트로 팀을 격려하세요.',
        'qa-q1': 'Q: 수치의 "▲"는 무엇인가요?', 'qa-a1': 'A: 버프 수치 (강화분) 입니다.', 'qa-q2': 'Q: P-버프와 카드 중 무엇을 먼저 하나요?', 'qa-a2': 'A: P-버프가 먼저입니다.'
    },
    'zh': {
        'nav-home': '首页', 'nav-guide': '攻略', 'nav-db': '资料库', 'nav-ranking': '排名', 'nav-videos': '视频', 'nav-pbuff': 'P-BUFF', 'nav-qa': '问答', 'nav-bbs': '论坛', 'nav-about': '关于', 'nav-survey': '问卷调查',
        'about-title': '关于我', 'about-p1': '自2016年起关注球场。曾一度退役，2024年回归。', 'about-p2': '分享攻略指南。让我们活跃社区！',
        'home-recommended': '推荐视频', 'home-map': '村庄地图',
        'videos-desc': '点击角色图标播放介绍视频。正在陆续添加新视频中！',
        'guide-title': '迈向高阶之路', 'guide-s1-title': '位置特点',
        'guide-s1-pg': '传球与机动性。防守的核心。', 'guide-s1-sg': '最强得分能力。多样化的技能。', 'guide-s1-sf': '攻守兼备的全能型。', 'guide-s1-big': '篮下守护者。篮板球。',
        'guide-s2-title': '推荐角色', 'guide-s2-free-t': '零氪 / 初始推荐', 'guide-s2-free-d': 'Murdock (PF): 盖帽能力极强，是不二之选。', 'guide-s2-best-t': '最强角色 (Premium)',
        'guide-s3-title': '养成步骤', 'guide-s3-p1': '强者金字塔。P5晋级是基础。', 'guide-s3-p2': 'P-BUFF的效果远高于卡片。',
        'guide-s4-title': '团队配合', 'guide-s4-l12-t': 'Level 1 & 2: 基础', 'guide-s4-l12-d': '不要阻碍队友。保持拉开空间。不堵塞突破路线。',
        'guide-s4-l34-t': 'Level 3 & 4: 应用', 'guide-s4-l34-d': '不要责怪失误。使用积极的表情鼓励团队。',
        'qa-q1': 'Q: 数值中的 "▲" 是什么？', 'qa-a1': 'A: 增益值（强化部分）。', 'qa-q2': 'Q: 应该先培养 P-Buff 还是卡片？', 'qa-a2': 'A: 先培养 P-Buff。'
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
        '距離': 'Dist', '角度': 'Angle', '以降': 'After', '衝突': 'Collision', '減少': 'Decrease',
        'ポスト': 'Post', 'ミドル': 'Mid', '3点': '3pt', 'Sレイ': 'S-Lay', 'Lレイ': 'L-Lay', 'Sダン': 'S-Dunk', 'Lダン': 'L-Dunk',
        'スティ': 'Steal', 'Jプロ': 'J-Blk', 'Dプロ': 'D-Blk', '当たり': 'Tough', 'リバ': 'Reb', 'ラン': 'Run', '持久': 'Stam', 'Jブロ': 'J-Blk', 'Dブロ': 'D-Blk',
        '最大持久力': 'Max Stamina'
    },
    'ko': {
        'ノーマーク': '노마크', 'シュートタッチ': '슛 터치',
        '3点シュート': '3점슛', 'ミドルシュート': '미들슛', 'ゴール下シュート': '골밑슛', 'ジャンプシュート': '점프슛',
        '遠距離ダンク': '원거리 덩크', '近거리ダンク': '근거리 덩크', '遠距離レイアップ': '원거리 레이업', '近距離レイアップ': '근거리 레이업',
        'Sダンク': 'S-덩크', 'Lダンク': 'L-덩크', 'Sレイアップ': 'S-레이업', 'Lレイアップ': 'L-레이업',
        'ドライブイン': '드라이브 인', 'フェイスアップ': '페이스업', 'アリウープ': '앨리웁',
        'ブロック': '블록', 'スティール': '스틸', 'リバウンド': '리바운드', 'パス': '패스',
        '一般の移動速度': '일반 이동 속도', '移動速度': '이동 속도', '持久力': '지구력',
        '回復量': '회복량', '最大値': '최대치', '最大': '최대',
        '成功率': '성공률', '発動確率': '발동 확률', '守備抵抗': '수비 저항', '抵抗': '저항',
        '距離': '거리', '角度': '각도', '以降': '이후', '衝突': '충돌', '減少': '감소',
        'ポスト': '포스트', 'ミドル': '미들', '3点': '3점', 'Sレイ': 'S-레이', 'Lレイ': 'L-레이', 'Sダン': 'S-덩크', 'Lダン': 'L-덩크',
        'スティ': '스틸', 'Jプロ': 'J-블록', 'Dプロ': 'D-블록', '当たり': '몸싸움', 'リバ': '리바', 'ラン': '런', '持久': '지구', 'Jブロ': 'J-블록', 'Dブロ': 'D-블록',
        '最大持久力': '최대 지구력', 'ノーマーク3点シュート成功率': '노마크 3점슛 성공률'
    },
    'zh': {
        'ノーマーク': '空位', 'シュートタッチ': '投篮手感',
        '3点シュート': '三分球', 'ミドルシュート': '中投', 'ゴール下シュート': '篮下投篮', 'ジャンプシュート': '跳投',
        '遠距離ダンク': '远距离扣篮', '近距离ダンク': '近距离扣篮', '遠距離レイアップ': '远距离上篮', '近距离レイアップ': '近距离上篮',
        'Sダンク': 'S扣篮', 'Lダンク': 'L扣篮', 'Sレイアップ': 'S上篮', 'Lレイアップ': 'L上篮',
        'ドライブイン': '突破', 'フェイスアップ': '面框', 'アリウープ': '空接',
        'ブロック': '盖帽', 'スティール': '抢断', 'リバウンド': '篮板', 'パス': '传球',
        '一般の移動速度': '一般移动速度', '移動速度': '移动速度', '持久力': '体力',
        '回復量': '恢复量', '最大値': '最大值', '最大': '最大',
        '成功率': '成功率', '発動確率': '发动概率', '守備抵抗': '防守抵抗', '抵抗': '抵抗',
        '距離': '距离', '角度': '角度', '以降': '之后', '衝突': '碰撞', '減少': '减少',
        'ポスト': '篮下', 'ミドル': '中投', '3点': '三分', 'Sレイ': 'S上篮', 'Lレイ': 'L上篮', 'Sダン': 'S扣篮', 'Lダン': 'L扣篮',
        'スティ': '抢断', 'Jプロ': 'J盖帽', 'Dプロ': 'D盖帽', '当たり': '对抗', 'リバ': '篮板', 'ラン': '跑動', '持久': '体力', 'Jブロ': 'J盖帽', 'Dブロ': 'D盖帽',
        '最大持久力': '最大耐力', 'ノーマーク3点シュート成功率': '空位三分命中率'
    }
};

let currentLang = 'ja';
const posColors = { "PG": "bg-green-950/40", "SG": "bg-orange-950/40", "SF": "bg-cyan-950/40", "PF": "bg-indigo-950/40", "C": "bg-red-950/40" };

// 韓国語自動浄化プログラム
function autoFixKoreanData() {
    const krFix = {
        "리": "リー", "윌리엄": "ウィリアム", "머독": "マードック", "조이": "ジョイ", "신디": "シン디",
        "헬레나": "ヘレナ", "페드로": "ペドロ", "크리스타": "クリスタ", "프로페서": "プロフェッサー",
        "아만다": "アマンダ", "킴": "キム", "카롤리나": "カロリーナ", "린": "リン", "카터": "カーター",
        "제이슨": "ジェイソン", "맥스": "マックス", "클라크": "クラーク", "룰루": "ルル", "빅독": "ビッグドッグ",
        "레베카": "레베카", "사루": "猿", "진저": "ジンジャー", "페이": "フェイ", "폭스": "フォックス",
        "리틀폭스": "리틀폭스", "미카": "미카", "워커": "ウォーカー", "카밀라": "カミラ",
        "나디아": "나디아", "잭": "ジャック", "디콘": "ディー콘", "노아": "ノ아", "클로이": "クロエ",
        "아일라": "アイラ", "로이드": "로이드", "하울": "하울", "리우": "リュウ", "옥스 퀸": "オックスクイーン",
        "제시": "ジェシー", "자이언트 G": "ジャイアントG", "블레어": "ブレア", "제네사": "ジェネーザ",
        "카지": "카지", "켄쇼": "켄쇼", "더블 D": "ダブルD", "지미": "지미", "프레드": "프레드",

        "노마크 3점슛 성공률": "ノーマーク3点シュート成功率", "일반 이동 속도": "一般の移動速度",
        "3점슛 성공률": "3点シュート 成功率", "3점 성공률": "3点シュート 成功率",
        "S덩크 발동 확률": "Sダンク 発動確率", "S덩크 수비 저항": "Sダンク 守備抵抗", "S덩크 블록 저항": "Sダンク ブロック抵抗",
        "L덩크 발동 확률": "Lダンク 発動確率", "L덩크 블록 저항": "Lダンク ブロック抵抗", "L덩크 성공률": "ロングダンク 成功率",
        "S레이업 성공률": "Sレイアップ 成功率", "S레이업 수비 저항": "Sレイ 守備抵抗", "S레이업 블록 저항": "Sレイアップ ブロック抵抗",
        "L레이업 블록 저항": "Lレイ ブロック抵抗", "미들슛 성공률": "ミドルシュート 成功率", "미들 성공률": "ミドルシュート 成功率",
        "미들 수비 저항": "ミドル守備抵抗", "포스트샷 성공률": "ポストショット 成功率", "포스트 성공률": "ポストショット 成功率",
        "공격 리바운드": "Oリバウンド能力", "수비 리바운드": "Dリバウンド能力", "스틸 성공률": "スティール成功率",
        "돌파 블록": "Dインシュート ブロック", "점프슛 블록": "Jシュート ブロック", "블록 저항 성공률": "ブロック抵抗成功率",
        "최대 지구력": "最大持久力", "지구력 회복량": "持久力の回復量", "레이업/덩크 거리": "レイアップ/ダンク距離",
        "S덩크 속도": "Sダンクの速度", "블록 저항": "ブロック抵抗", "슛 방해": "シュート妨害効果", "몸싸움": "当たり強さ",
        "리바운드": "리바운드", "달리기": "ランニング", "지구력": "持久力", "스틸": "スティール", "패스": "パス", "블록": "ブロック",
        "3점슛": "3点シュート", "3점": "3点", "미들슛": "ミドルシュート", "미들": "미들",
        "S덩크": "Sダンク", "L덩크": "Lダンク", "S레이업": "Sレイアップ", "L레이업": "L레이업",
        "이동 속도": "移動速度", "노마크": "ノーマーク"
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
        initVideos();
    }
}

function showPage(id) {
    const split = document.getElementById('home-split-wrapper');
    const standard = document.getElementById('standard-content');
    if (id === 'home') { split.style.display = 'flex'; standard.classList.add('hidden'); } 
    else { split.style.display = 'none'; standard.classList.remove('hidden'); }
    document.querySelectorAll('.page-container').forEach(p => p.classList.remove('active-page'));
    const target = document.getElementById('page-' + id);
    if(target) target.classList.add('active-page');
    
    const navMap = { 'guide': 'nav-guide', 'db': 'nav-db', 'ranking': 'nav-ranking', 'videos': 'nav-videos', 'pbuff': 'nav-pbuff', 'survey': 'nav-survey', 'qa': 'nav-qa', 'bbs': 'nav-bbs', 'about': 'nav-about' };
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    if (id === 'home') {
        const navHome = document.querySelector('[data-i18n="nav-home"]');
        if (navHome) navHome.classList.add('active');
    } else {
        const navEl = document.querySelector('[data-i18n="' + navMap[id] + '"]');
        if (navEl) navEl.classList.add('active');
    }

    if (id === 'db') initDb();
    if (id === 'pbuff') initPBuff();
    if (id === 'ranking') initRanking();
    if (id === 'videos') initVideos();
    window.scrollTo(0,0);
}

// =====================================
// ★ VIDEOS ページ生成機能 ★
// =====================================
function initVideos() {
    const grid = document.getElementById('video-grid');
    const posFilter = document.getElementById('videoPosFilter');
    if (!grid || !posFilter) return;

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

// =====================================
// ★ YouTubeモーダル制御 ★
// =====================================
function openYtModal(videoId) {
    const modal = document.getElementById('yt-modal');
    const iframe = document.getElementById('yt-iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.remove('opacity-0'), 10);
}

function closeYtModal() {
    const modal = document.getElementById('yt-modal');
    const iframe = document.getElementById('yt-iframe');
    modal.classList.add('opacity-0');
    setTimeout(() => {
        modal.classList.add('hidden');
        iframe.src = ''; 
    }, 300);
}

// =====================================
// ★ RANKING ページ生成機能 ★
// =====================================
function initRanking() {
    const container = document.getElementById('ranking-container');
    if (!container) return;

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

// =====================================
// ★ DATABASE ページ生成機能 ★
// =====================================
function initDb() {
    const grid = document.getElementById('grid');
    if (!grid || grid.children.length > 0) return;
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

// =====================================
// ★ P-BUFF ページ生成機能 ★
// =====================================
function initPBuff() {
    const container = document.getElementById('pbuff-grid-container');
    if(!container) return; container.innerHTML = '';
    const posFilter = document.getElementById('pbuffPosFilter').value;
    for (const [posName, chars] of Object.entries(pBuffData)) {
        if (posFilter !== 'All' && !posName.startsWith(posFilter)) continue;
        const pCode = posName.split(' ')[0];
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

// ページ起動時の全初期化処理
window.onload = () => { 
    injectNewCharacters(); // 新キャラ2人のステータス＆P-BUFF＆イラストリンクを自動挿入
    autoFixKoreanData();   // ハングル浄化
    switchLanguage('ja');  // 言語を日本語へ初期化
    showPage('home');      // HOME画面をファーストビューに
    initRanking();         // ランキングの事前生成
};
