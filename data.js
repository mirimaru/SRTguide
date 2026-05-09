const statNames = ["ポスト", "ミドル", "3点", "Sレイ", "Lレイ", "Sダン", "Lダン", "パス", "スティ", "Jブロ", "Dブロ", "当たり", "リバ", "ラン", "持久"];

const i18n = {
    ja: { 
        "nav-home": "HOME", "nav-guide": "GUIDE", "nav-db": "DATABASE", "nav-pbuff": "P-BUFF", "nav-qa": "Q&A", "nav-about": "ABOUT ME", "nav-bbs": "BBS",
        "about-title": "はじめに：作者より", "about-p1": "2016年頃からこのコートを見守ってきました。一度は引退しましたが、このゲームの楽しさが忘れられず2024年に戻ってきました。", "about-p2": "攻略ガイド等を公開しています。皆でこのコミュニティを熱くしましょう！",
        "guide-title": "ROAD TO HIGH TIER", "step1-title": "ポジションの特徴", "step2-title": "おすすめキャラ", "step3-title": "育成手順",
        "pg-desc": "パスと機動力。守備の要。", "sg-desc": "最高得点能力。多彩なスキル。", "sf-desc": "攻守に貢献する万能型。", "pf-desc": "機動力ブロック。攻撃も可。", "c-desc": "ゴール下の番人。リバウンド。",
        "recom-free-title": "無課金・初期のおすすめ", "recom-free-desc": "Murdock (PF): ブロック力が高く、最高の選択肢です。", "recom-premium-title": "最強キャラ (Premium)",
        "grow1-title": "P5 昇級", "grow1-desc": "全スキル解放が育成の基準。まずはここを目指しましょう。", "grow2-title": "P-BUFF 構築", "grow2-desc": "ポジション全員に影響する最重要インフラ。カードより優先です。", "grow3-title": "カード 厳選", "grow3-desc": "土台が完成した後の最終仕上げ。じっくり厳選しましょう。",
        "db-note": "※「▲」表記はバフ値（加算）です。", "qa-q1": "Q: 数値の「▲」は何？", "qa-a1": "A: バフ値（強化分）です。", "qa-q2": "Q: P-Buffとカードどちらが先？", "qa-a2": "A: P-Buffが先です。", "counter-title": "総訪問者数",
        "step4-title": "「最高のチームメイト」への進化", "playbook-l1": "PGはボール運び、PF/Cはゴール下。自分の仕事を絞ることで味方に安心感を与えます。",
        "playbook-l2-1": "ボール持ちの味方に近寄らない", "playbook-l2-2": "味方のドライブコースを塞がない", "playbook-l2-3": "インサイドに居座り続けない", "playbook-comm": "ミスを責めず、ポジティブなエモートでチームを盛り上げましょう。"
    },
    en: { 
        "nav-home": "HOME", "nav-guide": "GUIDE", "nav-db": "DATABASE", "nav-pbuff": "P-BUFF", "nav-qa": "Q&A", "nav-about": "ABOUT ME", "nav-bbs": "BBS",
        "about-title": "Intro: From the Author", "about-p1": "Watching the court since 2016. Returned in 2024 because I missed the fun.", "about-p2": "I hope to see more players. Let's make this community hot together!",
        "guide-title": "ROAD TO HIGH TIER", "step1-title": "Position Traits", "step2-title": "Recommendations", "step3-title": "Growth Order",
        "pg-desc": "Pass & Speed. Defense core.", "sg-desc": "Top scorer. Diverse skills.", "sf-desc": "All-rounder for Off/Def.", "pf-desc": "Mobile blocker. Good off.", "c-desc": "Paint guardian. Rebounder.",
        "recom-free-title": "Best Free/Starter", "recom-free-desc": "Murdock (PF): High block, best free choice.", "recom-premium-title": "Top Tier (Premium)",
        "grow1-title": "P5 Promote", "grow1-desc": "Unlock all skills first. Start here.", "grow2-title": "P-BUFF Build", "grow2-desc": "Affects all in pos. Top priority infra.", "grow3-title": "Cards", "grow3-desc": "Final touch after the foundation is ready.",
        "db-note": "*'▲' indicates a buff.", "qa-q1": "Q: What does '▲' mean?", "qa-a1": "A: It's the buff value.", "qa-q2": "Q: P-Buff or Cards first?", "qa-a2": "A: P-Buff first.", "counter-title": "TOTAL VISITORS",
        "step4-title": "BECOME THE BEST TEAMMATE", "playbook-l1": "PG carries, PF/C guards paint. Knowing your job gives your team peace of mind.",
        "playbook-l2-1": "Don't crowd the ball handler.", "playbook-l2-2": "Don't block the drive lane.", "playbook-l2-3": "Don't sit in the paint.", "playbook-comm": "Don't blame mistakes. Use positive emotes to boost morale."
    },
    ko: { 
        "nav-home": "홈", "nav-guide": "가이드", "nav-db": "데이터베이스", "nav-pbuff": "P-버프", "nav-qa": "Q&A", "nav-about": "소개", "nav-bbs": "게시판",
        "about-title": "소개: 작성자", "about-p1": "2016년부터 코트를 지켜봤습니다. 2024년에 다시 돌아왔습니다.", "about-p2": "함께 커뮤니티를 뜨겁게 만듭시다!",
        "guide-title": "상위 티어로 가는 길", "step1-title": "포지션 특징", "step2-title": "캐릭터 추천", "step3-title": "육성 순서",
        "pg-desc": "패스와 스피드. 수비의 핵심.", "sg-desc": "최고의 득점원. 다양한 스킬.", "sf-desc": "공수 만능형.", "pf-desc": "기동력 있는 블로커.", "c-desc": "골밑 수호자. 리바운더.",
        "recom-free-title": "무과금 추천", "recom-free-desc": "Murdock (PF): 높은 블록, 최고의 선택.", "recom-premium-title": "최강 캐릭터 (Premium)",
        "grow1-title": "P5 승급", "grow1-desc": "모든 스킬 해제. 육성의 기본.", "grow2-title": "P-버프 구축", "grow2-desc": "전체 포지션 적용. 가장 중요한 인프라.", "grow3-title": "카드 세팅", "grow3-desc": "기반이 완성된 후의 최종 마무리.",
        "db-note": "*'▲' 표시는 버프 값입니다.", "qa-q1": "Q: '▲'는 무엇입니까?", "qa-a1": "A: 버프 값입니다.", "qa-q2": "Q: P-버프와 카드 중 어느 것이 먼저입니까?", "qa-a2": "A: P-버프가 먼저입니다.", "counter-title": "총 방문자 수",
        "step4-title": "최고의 팀메이트로의 진화", "playbook-l1": "PG는 공 운반, PF/C는 골밑. 각자의 역할에 집중하십시오.",
        "playbook-l2-1": "공을 가진 아군에게 너무 가까이 가지 마십시오.", "playbook-l2-2": "아군의 드라이브 코스를 방해하지 마십시오.", "playbook-l2-3": "페인트 존에 계속 머물지 마십시오.", "playbook-comm": "실수를 탓하지 말고 긍정적인 이모트를 사용합시다."
    },
    zh: { 
        "nav-home": "首页", "nav-guide": "指南", "nav-db": "数据库", "nav-pbuff": "P-BUFF", "nav-qa": "常见问题", "nav-about": "关于我", "nav-bbs": "留言板",
        "about-title": "关于作者", "about-p1": "从2016年開始关注球場。2024年再次回归。", "about-p2": "让我们一起让这个社区火热起来！",
        "guide-title": "顶级联赛之路", "step1-title": "位置特征", "step2-title": "推荐角色", "step3-title": "養成順序",
        "pg-desc": "传球与速度。防守核心。", "sg-desc": "最高得分力。技能多樣。", "sf-desc": "攻防全能型。", "pf-desc": "机动性盖帽。", "c-desc": "篮下守护。篮板专家。",
        "recom-free-title": "平民推荐", "recom-free-desc": "Murdock (PF): 盖帽强，最佳选择。", "recom-premium-title": "最强角色 (Premium)",
        "grow1-title": "P5 晉升", "grow1-desc": "解鎖所有技能。養成基礎。", "grow2-title": "P-BUFF 构建", "grow2-desc": "影响全位置，最重要的基础设施。", "grow3-title": "卡牌选择", "grow3-desc": "在基础完成后进行最终修饰。",
        "db-note": "*“▲”表示增益值。", "qa-q1": "Q: “▲”是什么意思？", "qa-a1": "A: 它是增益值。", "qa-q2": "Q: 先做P-Buff还是卡牌？", "qa-a2": "A: 先做P-Buff。", "counter-title": "总访问人数",
        "step4-title": "进化为“最佳队友”", "playbook-l1": "PG负责运球，PF/C负责篮下。各司其职。",
        "playbook-l2-1": "不要靠近持球的队友。", "playbook-l2-2": "不要阻挡队友的突破路线。", "playbook-l2-3": "不要一直在禁区内停留。", "playbook-comm": "不要指责失误，用积极的表情鼓舞团队士气。"
    }
};

const termsDict = {
    en: { "ポスト": "POST", "ミドル": "MID", "3点": "3PT", "Sレイ": "S-LAY", "Lレイ": "L-LAY", "Sダン": "S-DUNK", "Lダン": "L-DUNK", "パス": "PASS", "スティ": "STL", "Jブロ": "J-BLK", "Dブロ": "D-BLK", "当たり": "STR", "リバ": "REB", "ラン": "RUN", "持久": "STM", "一般の移動速度": "Move Speed", "Sダンク ブロック抵抗": "S-Dunk Blk Res", "持久力の最大量": "Max Stamina", "Sレイアップ ブロック抵抗": "S-Layup Blk Res", "Sダンク 発動確率": "S-Dunk Chance", "3点シュート 成功率": "3PT Success", "Sダンク 守備抵抗": "S-Dunk Def Res", "Sレイアップ 成功率": "S-Layup Success", "ミドルシュート 成功率": "Mid Success", "リバウンド": "Rebound", "ミドル守備抵抗": "Mid Def Res", "Dインシュート ブロック": "Drive-in Blk", "Jシュート ブロック": "Jump-shot Blk", "シュート妨害効果": "Shot Interfere", "当たり強さ": "Strength", "ロングダンク 成功率": "L-Dunk Success", "ポストショット 成功率": "Post Success", "Oリバウンド能力": "O-Rebound", "Dリバウンド能力": "D-Rebound", "Lダンク ブロック抵抗": "L-Dunk Blk Res", "ブロック抵抗成功率": "Blk Resist Success", "スティール成功率": "Steal Success", "ミドルシュート": "Mid Shot", "スティール": "Steal", "ランニング": "Running", "Sダンクの速度": "S-Dunk Speed", "持久力の回復量": "Stam Recovery", "レイアップ/ダンク距離": "Layup/Dunk Range", "Lレイ ブロック抵抗": "L-Lay Blk Res", "Sレイ 守備抵抗": "S-Lay Def Res", "Lダンク 発動確率": "L-Dunk Chance" },
    ko: { "ポスト": "포스트", "ミドル": "미들", "3点": "3점", "Sレイ": "S레이업", "Lレイ": "L레이업", "Sダン": "S덩크", "Lダン": "L덩크", "パス": "패스", "スティ": "스틸", "Jブロ": "J블록", "Dブロ": "D블록", "当たり": "몸싸움", "リバ": "리바운드", "ラン": "달리기", "持久": "지구력", "一般の移動速度": "이동 속도", "Sダンク ブロック抵抗": "S덩크 블록 저항", "持久力の最大量": "최대 지구력", "Sレイアップ ブロック抵抗": "S레이업 블록 저항", "Sダンク 発動確率": "S덩크 발동 확률", "3点シュート 成功率": "3점 성공률", "Sダンク 守備抵抗": "S덩크 수비 저항", "Sレイアップ 成功率": "S레이업 성공률", "ミドルシュート 成功率": "미들 성공률", "リバウンド": "리바운드", "ミドル守備抵抗": "미들 수비 저항", "Dインシュート ブロック": "돌파 블록", "Jシュート ブロック": "점프슛 블록", "シュート妨害効果": "슛 방해", "当たり強さ": "몸싸움", "ロングダンク 成功率": "L덩크 성공률", "ポストショット 成功率": "포스트 성공률", "Oリバウンド能力": "공격 리바운드", "Dリバウンド能力": "수비 리바운드", "Lダンク ブロック抵抗": "L덩크 블록 저항", "ブロック抵抗成功率": "블록 저항 성공률", "スティール成功率": "스틸 성공률", "ミドルシュート": "미들슛", "スティール": "스틸", "ランニング": "달리기", "Sダンクの速度": "S덩크 속도", "持久力の回復量": "지구력 회복량", "レイアップ/ダンク距離": "레이업/덩크 거리", "Lレイ ブロック抵抗": "L레이업 블록 저항", "Sレイ 守備抵抗": "S레이업 수비 저항", "Lダンク 発動確率": "L덩크 발동 확률" },
    zh: { "ポスト": "近投", "ミドル": "中投", "3点": "三分", "Sレイ": "近距上篮", "Lレイ": "远距上篮", "Sダン": "近距扣篮", "Lダン": "远距扣篮", "パス": "传球", "スティ": "抢断", "Jブロ": "跳投盖帽", "Dブロ": "上篮盖帽", "当たり": "对抗", "リバ": "篮板", "ラン": "跑动", "持久": "耐力", "一般の移動速度": "移动速度", "Sダンク ブロック抵抗": "近距扣篮抗盖帽", "持久力の最大量": "最大耐力", "Sレイアップ ブロック抵抗": "近距上篮抗盖帽", "Sダンク 発動確率": "近距扣篮触发率", "3点シュート 成功率": "三分命中率", "Sダンク 守備抵抗": "近距扣篮抗干扰", "Sレイアップ 成功率": "近距上篮命中率", "ミドルシュート 成功率": "中投命中率", "リバウンド": "篮板", "ミドル守備抵抗": "中投抗干扰", "Dインシュート ブロック": "突破盖帽", "Jシュート ブロック": "跳投盖帽", "シュート妨害効果": "投篮干扰", "当たり強さ": "对抗", "ロングダンク 成功率": "远距扣篮命中率", "ポストショット 成功率": "近投命中率", "Oリバウンド能力": "进攻篮板", "Dリバウンド能力": "防守篮板", "Lダンク ブロック抵抗": "远距扣篮抗盖帽", "ブロック抵抗成功率": "抗盖帽命中率", "スティール成功率": "抢断成功率", "ミドルシュート": "中投", "スティール": "抢断", "ランニング": "跑动", "Sダンクの速度": "近距扣篮速度", "持久力の回復量": "耐力恢复", "レイアップ/ダンク距离": "上篮/扣篮距离", "Lレイ ブロック抵抗": "远距上篮抗盖帽", "Sレイ 守備抵抗": "近距上篮抗干扰", "Lダンク 発動確率": "远距扣篮触发率" }
};

const charImages = { 
    "Ayla": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/chr_b_ayla.png", "Chloe": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/chr_b_chloe.png", "Genesa": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/chr_b_genesa.png", "Noah": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/chr_b_noah.png", "Mika": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/mika.png", "Ginger": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/ginger.png", "Little Fox": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/littlefox.png", "Professor": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/professor.png", "Cindy": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/cindy.png", "Helena": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/helena.png", "Pedro": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/pedro.png", "Clara": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/clara/chr_b_clara.png", "Kaji": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/kaji/chr_b_kaji.png", "Ox Queen": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/chr_b_oxqueen.png", "ANPAN": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/anpan/chr_b.png", "Kim": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/kim.png", "Fred": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/fred.png", "Rin": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/rin.png", "Jason": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/jason.png", "Carolina": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/carolina.png", "Nadia": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/nadia.png", "Walker": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/walker.png", "Yuna": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/yuna/chr_b_yuna.png", "Gena": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/gena/chr_b.png", "MC.CC": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/chr_b_mc_cc.png", "Liu": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/chr_b_liu.png", "Jack": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/jack.png", "Rebecca": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/rebecca.png", "Saru": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/saru.png", "William": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/william.png", "Amanda": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/amanda.png", "Jessie": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/chr_b_jessie.png", "Carter": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/carter.png", "Joey": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/joey.png", "Nathan": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/nathan/chr_b_nathan.png", "Fox": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/chr_b_fox.png", "Deacon": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/deacon.png", "Murdock": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/murdock.png", "Max": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/max.png", "Giant G": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/chr_b_giant_g.png", "Marisol": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/marisol/chr_b_marisol.png", "Fei": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/fei.png", "Vandell": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/vandell/chr_b.png", "Double D": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/chr_b_double_d.png", "Clarke": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/clarke.png", "Lulu": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/lulu.png", "DJ Bagman": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/djbagman/chr_b_djbagman.png", "Blair": "https://d2mwnrhar4x85q.cloudfront.net/3on3/character/blair/chr_b_blair.png", "Luther": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/luther.png", "Jimmy": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/jimmy.png", "Howl": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/chr_b_howl.png", "Camila": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/camila.png", "Siana": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/siana/chr_b_Siana.png", "Lyoid": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/chr_b_lyoid.png", "Lee": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/lee.png", "Christa": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/christa.png", "Big Dog": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/bigdog.png", "Big Joe": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/bigjoe.png" 
};

// rawData と pBuffData は前回のまま（最新数値）
const rawData = [
    {"名前":"クララ","en":"Clara","pos":"PG","s":[102,178,165,127,229,63,76,229,216,127,89,76,76,229,204]},
    {"名前":"カジ","en":"Kaji","pos":"PG","s":[113,153,178,114,140,114,191,178,178,178,89,127,153,140,204]},
    {"名前":"ジェネーザ","en":"Genesa","pos":"PG","s":[153,153,178,102,178,127,164,165,231,140,127,114,114,224,191]},
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
    {"名前":"フレッド","en":"Fred","pos":"SG","s":[132,183,196,132,183,81,94,170,183,119,94,68,81,170,145]},
    {"名前":"リン","en":"Rin","pos":"SG","s":[140,191,204,127,178,89,102,178,191,140,102,76,89,178,178]},
    {"名前":"ジェイソン","en":"Jason","pos":"SG","s":[127,178,191,127,153,178,178,127,140,127,102,89,89,191,178]},
    {"名前":"ウォーカー","en":"Walker","pos":"SG","s":[140,191,229,140,191,89,102,153,140,153,114,89,89,191,204]},
    {"名前":"ナディア","en":"Nadia","pos":"SG","s":[140,191,114,140,216,178,127,127,204,140,114,76,89,216,178]},
    {"名前":"ノア","en":"Noah","pos":"SG","s":[127,178,229,178,216,127,153,203,140,127,102,76,89,165,179]},
    {"名前":"MC.CC","en":"MC.CC","pos":"SG","s":[127,178,216,127,178,89,204,140,140,127,102,127,102,178,204]},
    {"名前":"リウ","en":"Liu","pos":"SF","s":[153,204,127,165,140,114,178,115,140,165,153,153,153,140,153]},
    {"名前":"ジェシー","en":"Jessie","pos":"SF","s":[140,229,178,140,178,102,127,165,153,153,127,127,114,178,165]},
    {"名前":"アマンダ","en":"Amanda","pos":"SF","s":[153,229,178,153,178,102,127,153,127,153,140,127,127,153,127]},
    {"名前":"ジョイ","en":"Joey","pos":"SF","s":[153,191,127,165,191,114,127,140,114,153,127,127,127,165,165]},
    {"名前":"ウィリアム","en":"William","pos":"SF","s":[165,204,127,153,178,114,153,127,102,178,153,165,140,140,127]},
    {"名前":"カーター","en":"Carter","pos":"SF","s":[153,191,127,153,191,102,127,191,165,153,140,127,127,140,165]},
    {"名前":"レベッカ","en":"Rebecca","pos":"SF","s":[153,178,127,153,204,102,127,102,102,153,140,127,114,165,165]},
    {"名前":"サル","en":"Saru","pos":"SF","s":[165,229,127,165,207,102,165,102,102,153,127,127,114,165,165]},
    {"名前":"ジャック","en":"Jack","pos":"SF","s":[153,204,127,153,178,102,127,102,102,191,178,127,127,153,165]},
    {"名前":"DJ BAGMAN","en":"DJ Bagman","pos":"SF","s":[153,217,140,127,191,102,153,204,102,141,127,127,114,191,165]},
    {"名前":"ネイサン","en":"Nathan","pos":"SF","s":[140,191,178,127,140,102,217,191,102,165,127,153,114,178,153]},
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
    {"名前":"ロイド","en":"Lyoid","pos":"C","s":[208,132,132,196,144,144,106,183,68,93,144,221,208,55,133]},
    {"名前":"シアナ","en":"Siana","pos":"C","s":[229,51,39,204,152,229,140,114,63,127,229,178,227,76,160]}
];
// pBuffDataは長いので省略しますが、プログラムには含まれています
