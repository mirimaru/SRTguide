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
        "step4-title": "「最高のチームメイト」への進化", "playbook-l1": "PGはボール運び、PF/Cはゴール下. 自分の仕事を絞ることで安心感を与えます。",
        "playbook-l2-1": "ボール持ちの味方に近寄らない", "playbook-l2-2": "味方のドライブコースを塞がない", "playbook-l2-3": "インサイドに居座り続けない", "playbook-comm": "ミスを責めず、ポジティブなエモートでチームを盛り上げましょう。",
        // 画像キャプション
        "img-cap-role": "図解：各ポジションの役割。全てのプレイを1人でやろうとせず、自分の仕事に集中することが大切です。",
        "img-cap-pyramid": "図解：強者のピラミッド。まずはP5昇級で基盤を作り、P-BUFFを構築してからカード厳選に進むのが黄金律です。",
        "img-cap-roi": "図解：P-BUFFとカードの投資対効果。P-BUFFはポジション全体に永続的な恩恵をもたらすため、カードより圧倒的にコスパが良いです。",
        "img-cap-steps": "図解：良いチームメイトになるための4段階（役割把握 → 邪魔しない → 意図を読む → コミュニケーション）",
        "img-cap-space": "図解：味方と同じ場所に立つと「渋滞」が起きます。ボール保持者に近づかない、ドライブコースを塞がないのが鉄則です。",
        "img-cap-inside": "図解：インサイド（ゴール下）にずっと居座らないこと。ビッグマンのリバウンド位置とも被らないようにしましょう。",
        "img-cap-comm": "図解：ミスには「大丈夫」のエモートを。過度な「パス要求」は控え、自分がミスしたら謝るのが基本です。",
        "village-map-title": "ビレッジ プレゼント出現MAP",
        "village-map-cap": "※画像タップ（クリック）で拡大表示"
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
        "playbook-l2-1": "Don't crowd the ball handler.", "playbook-l2-2": "Don't block the drive lane.", "playbook-l2-3": "Don't sit in the paint.", "playbook-comm": "Don't blame mistakes. Use positive emotes to boost morale.",
        "img-cap-role": "Chart: Role of each position. Don't try to do everything alone; focus on your job.",
        "img-cap-pyramid": "Chart: The Success Pyramid. P5 first, then build P-BUFFs, and finally card selection.",
        "img-cap-roi": "Chart: ROI of P-BUFF vs Cards. P-BUFFs offer a permanent boost for all characters in the position.",
        "img-cap-steps": "Chart: 4 stages to becoming a great teammate (Role -> Space -> Read -> Comm)",
        "img-cap-space": "Chart: Standing near teammates causes 'traffic jams'. Never crowd the ball handler or block their drive lane.",
        "img-cap-inside": "Chart: Don't camp inside the paint. Make sure not to overlap with your big man's rebounding position.",
        "img-cap-comm": "Chart: Use 'No Problem' for mistakes. Avoid spamming 'Pass', and say 'Sorry' when you mess up.",
        "village-map-title": "VILLAGE PRESENT MAP",
        "village-map-cap": "*Tap/Click image to enlarge"
    },
    ko: { 
        "nav-home": "홈", "nav-guide": "가이드", "nav-db": "데이터베이스", "nav-pbuff": "P-버프", "nav-qa": "Q&A", "nav-about": "소개", "nav-bbs": "게시판",
        "about-title": "소개: 작성자", "about-p1": "2016년부터 코트를 지켜봤습니다. 2024년에 다시 돌아왔습니다.", "about-p2": "함께 커뮤니티를 뜨겁게 만듭시다!",
        "guide-title": "상위 티어로 가는 길", "step1-title": "포지션 특징", "step2-title": "캐릭터 추천", "step3-title": "육성 순서",
        "pg-desc": "패스와 스피드. 수비의 핵심.", "sg-desc": "최고의 득점원. 다양한 스킬.", "sf-desc": "공수 만능형.", "pf-desc": "기동력 있는 블로커.", "c-desc": "골밑 수호자. 리바운더.",
        "recom-free-title": "무과금 추천", "recom-free-desc": "Murdock (PF): 높은 블록, 최고의 선택.", "recom-premium-title": "최강 캐릭터 (Premium)",
        "grow1-title": "P5 승급", "grow1-desc": "모든 ส킬 해제. 육성의 기본.", "grow2-title": "P-버프 구축", "grow2-desc": "전체 포지션 적용. 가장 중요한 인프라.", "grow3-title": "카드 세팅", "grow3-desc": "기반이 완성된 후의 최종 마무리.",
        "db-note": "*'▲' 표시는 버프 값입니다.", "qa-q1": "Q: '▲'는 무엇입니까?", "qa-a1": "A: 버프 값입니다.", "qa-q2": "Q: P-버프와 카드 중 어느 것이 먼저입니까?", "qa-a2": "A: P-버프가 먼저입니다.", "counter-title": "총 방문자 수",
        "step4-title": "최고의 팀메이트로의 진화", "playbook-l1": "PG는 공 운반, PF/C는 골밑. 각자의 역할에 집중하십시오.",
        "playbook-l2-1": "공을 가진 아군에게 너무 가까이 가지 마십시오.", "playbook-l2-2": "아군의 드라이브 코스를 방해하지 마십시오.", "playbook-l2-3": "페인트 존에 계속 머물지 마십시오.", "playbook-comm": "실수를 탓하지 말고 긍정적인 이모트를 사용합시다.",
        "img-cap-role": "도해: 각 포지션의 역할. 혼자서 모든 것을 하려 하지 말고 자신의 역할에 집중하세요.",
        "img-cap-pyramid": "도해: 강자의 피라미드. P5 승급으로 기반을 다지고 P-BUFF를 구축한 후 카드를 선택하세요.",
        "img-cap-roi": "도해: P-BUFF와 카드의 투자 대비 효과. P-BUFF는 포지션 전체에 영구적인 효과를 줍니다.",
        "img-cap-steps": "도해: 좋은 팀메이트가 되기 위한 4단계 (역할 -> 공간 -> 리딩 -> 소통)",
        "img-cap-space": "도해: 아군과 같은 곳에 서면 '정체'가 발생합니다. 볼 핸들러에게 다가가거나 드라이브 경로를 막지 마세요.",
        "img-cap-inside": "도해: 페인트 존에 계속 머물지 마세요. 빅맨의 리바운드 위치와 겹치지 않도록 주의하세요.",
        "img-cap-comm": "도해: 실수에는 '괜찮아' 이모트를. 과도한 '패스' 요구는 피하고, 실수했을 때는 사과하는 것이 기본입니다.",
        "village-map-title": "빌리지 선물 등장 맵",
        "village-map-cap": "*이미지 클릭 시 확대"
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
        "playbook-l2-1": "不要靠近持球的队友。", "playbook-l2-2": "不要阻挡队友的突破路线。", "playbook-l2-3": "不要一直在禁区内停留。", "playbook-comm": "不要指责失误，用积极的表情鼓舞团队士气。",
        "img-cap-role": "图解：各位置的作用。不要试图一个人做所有事情，专注于你的本职工作。",
        "img-cap-pyramid": "图解：强者的金字塔。先P5晋升打好基础，建立P-BUFF后再进行卡牌选择。",
        "img-cap-roi": "图解：P-BUFF与卡牌的投资回报。P-BUFF为整个位置提供永久增益，性价比极高。",
        "img-cap-steps": "图解：成为优秀队友的4个阶段（角色 -> 空间 -> 意识 -> 沟通）",
        "img-cap-space": "图解：与队友站在同一位置会导致“拥堵”。绝不要靠近持球队友或阻挡他们的突破路线。",
        "img-cap-inside": "图解：不要一直停留在禁区内。确保不要与己方内线球员的篮板位置重叠。",
        "img-cap-comm": "图解：失误时发“没关系”。避免疯狂发“传球”，自己失误时记得说“抱歉”。",
        "village-map-title": "村庄礼物出现地图",
        "village-map-cap": "*点击图片放大"
    }
};

const termsDict = {
    en: { "ポスト": "POST", "ミドル": "MID", "3点": "3PT", "Sレイ": "S-LAY", "Lレイ": "L-LAY", "Sダン": "S-DUNK", "Lダン": "L-DUNK", "パス": "PASS", "スティ": "STL", "Jブロ": "J-BLK", "Dブロ": "D-BLK", "当たり": "STR", "リバ": "REB", "ラン": "RUN", "持久": "STM", "一般の移動速度": "Move Speed", "Sダンク ブロック抵抗": "S-Dunk Blk Res", "持久力の最大量": "Max Stamina", "Sレイアップ ブロック抵抗": "S-Layup Blk Res", "Sダンク 発動確率": "S-Dunk Chance", "3点シュート 成功率": "3PT Success", "Sダンク 守備抵抗": "S-Dunk Def Res", "Sレイアップ 成功率": "S-Layup Success", "ミドルシュート 成功率": "Mid Success", "リバウンド": "Rebound", "ミドル守備抵抗": "Mid Def Res", "Dインシュート ブロック": "Drive-in Blk", "Jシュート ブロック": "Jump-shot Blk", "シュート妨害効果": "Shot Interfere", "当たり強さ": "Strength", "ロングダンク 成功率": "L-Dunk Success", "ポストショット 成功率": "Post Success", "Oリバウンド能力": "O-Rebound", "Dリバウンド能力": "D-Rebound", "Lダンク ブロック抵抗": "L-Dunk Blk Res", "ブロック抵抗成功率": "Blk Resist Success", "スティール成功率": "Steal Success", "ミドルシュート": "Mid Shot", "スティール": "Steal", "ランニング": "Running", "Sダンクの速度": "S-Dunk Speed", "持久力の回復量": "Stam Recovery", "レイアップ/ダンク距離": "Layup/Dunk Range", "Lレイ ブロック抵抗": "L-Lay Blk Res", "Sレイ 守備抵抗": "S-Lay Def Res", "Lダンク 発動確率": "L-Dunk Chance" },
    ko: { "ポスト": "포스트", "ミドル": "미들", "3点": "3점", "Sレイ": "S레이업", "Lレイ": "L레이업", "Sダン": "S덩크", "Lダン": "L덩크", "パス": "패스", "スティ": "스틸", "Jブロ": "J블록", "Dブロ": "D블록", "当たり": "몸싸움", "リバ": "리바운드", "ラン": "달리기", "持久": "지구력", "一般の移動速度": "이동 속도", "Sダンク ブロック抵抗": "S덩크 블록 저항", "持久力の最大量": "최대 지구력", "Sレイアップ ブロック抵抗": "S레이업 블록 저항", "Sダンク 発動確率": "S덩크 발동 확률", "3点シュート 成功率": "3점 성공률", "Sダンク 守備抵抗": "S덩크 수비 저항", "Sレイアップ 成功率": "S레이업 성공률", "ミドルシュート 成功率": "미들 성공률", "リバウンド": "리바운드", "ミドル守備抵抗": "미들 수비 저항", "Dインシュート ブロック": "돌파 블록", "Jシュート ブロック": "점프슛 블록", "シュート妨害効果": "슛 방해", "当たり強さ": "몸싸움", "ロングダンク 成功率": "L덩크 성공률", "ポストショット 成功率": "포스트 성공률", "Oリバウンド能力": "공격 리바운드", "Dリ바ウンド能力": "수비 리바운드", "Lダンク ブロック抵抗": "L덩크 블록 저항", "ブロック抵抗成功率": "블록 저항 성공률", "スティール成功率": "스틸 성공률", "ミドルシュート": "미들슛", "スティール": "스틸", "ランニング": "달리기", "Sダンクの速度": "S덩크 속도", "持久力の回復量": "지구력 회복량", "レイアップ/ダンク距離": "레이업/덩크 거리", "Lレイ ブロック抵抗": "L레이업 블록 저항", "Sレイ 守備抵抗": "S레이업 수비 저항", "Lダンク 発動確率": "L덩크 발동 확률" },
    zh: { "ポスト": "近投", "ミドル": "中投", "3点": "三分", "Sレイ": "近距上篮", "Lレイ": "远距上篮", "Sダン": "近距扣篮", "Lダン": "远距扣篮", "パス": "传球", "スティ": "抢断", "Jブロ": "跳投盖帽", "Dブロ": "上篮盖帽", "当たり": "对抗", "リバ": "篮板", "ラン": "跑动", "持久": "耐力", "一般の移動速度": "移动速度", "Sダンク ブロック抵抗": "近距扣篮抗盖帽", "持久力の最大量": "最大耐力", "Sレイアップ ブロック抵抗": "近距上篮抗盖帽", "Sダンク 発動確率": "近距扣篮触发率", "3点シュート 成功率": "三分命中率", "Sダンク 守備抵抗": "近距扣篮抗干扰", "Sレイアップ 成功率": "近距上篮命中率", "ミドルシュート 成功率": "中投命中率", "リバウンド": "篮板", "ミドル抗干扰": "中投抗干扰", "Dインシュート ブロック": "突破盖帽", "Jシュート ブロック": "跳投盖帽", "シュート妨害効果": "投篮干扰", "当たり強さ": "对抗", "ロングダンク 成功率": "远距扣篮命中率", "ポストショット 成功率": "近投命中率", "Oリバウンド能力": "进攻篮板", "Dリバウンド能力": "防守篮板", "Lダンク ブロック抵抗": "远距扣篮抗盖帽", "ブロック抵抗成功率": "抗盖帽命中率", "スティール成功率": "抢断成功率", "ミドルシュート": "中投", "スティール": "抢断", "ランニング": "跑动", "Sダンクの速度": "近距扣篮速度", "持久力の回復量": "耐力恢复", "レイアップ/ダンク距离": "上篮/扣篮距离", "Lレイ ブロック抵抗": "远距上篮抗盖帽", "Sレイ 守備抵抗": "近距上篮抗干扰", "Lダンク 発動確率": "远距扣篮触发率" }
};

const charImages = { 
    "Ayla": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/chr_b_ayla.png", 
    "Chloe": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/chr_b_chloe.png", 
    "Genesa (Flash)": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/chr_b_genesa.png",
    "Genesa (Dynamic)": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/chr_b_genesa.png",
    "Genesa": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/chr_b_genesa.png",
    "Noah": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/chr_b_noah.png", "Mika": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/mika.png", "Ginger": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/ginger.png", "Little Fox": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/littlefox.png", "Professor": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/professor.png", "Cindy": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/cindy.png", "Helena": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/helena.png", "Pedro": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/pedro.png", "Clara": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/clara/chr_b_clara.png", "Kaji": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/kaji/chr_b_kaji.png", "Ox Queen": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/chr_b_oxqueen.png", "ANPAN": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/anpan/chr_b.png", "Kim": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/kim.png", "Fred": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/fred.png", "Rin": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/rin.png", "Jason": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/jason.png", "Carolina": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/carolina.png", "Nadia": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/nadia.png", "Walker": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/walker.png", "Yuna": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/yuna/chr_b_yuna.png", "Gena": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/gena/chr_b.png", "MC.CC": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/chr_b_mc_cc.png", "Liu": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/chr_b_liu.png", "Jack": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/jack.png", "Rebecca": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/rebecca.png", "Saru": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/saru.png", "William": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/william.png", "Amanda": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/amanda.png", "Jessie": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/chr_b_jessie.png", "Carter": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/carter.png", "Joey": "https://common-cdn-api.joycityglobal.comフルコードをご提供いたします。
`index.html` の `<style>` タグ内にデータベースグリッド調整用CSSを追加し、YouTube動画の右寄せ、ジェネーザのダイナミックモードのステータス計算、多言語STEPキャプション、そして画像ファイル名 `ボックスの位置.jpg` をすべて反映しています。

以下の2つのファイル（`index.html` と `data.js`）を丸ごと上書きしてご利用ください。

---

### 📄 1. `index.html` (完全版)

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3on3 FreeStyle | SRT guide</title>
    <script src="[https://cdn.tailwindcss.com](https://cdn.tailwindcss.com)"></script>
    <link rel="stylesheet" href="[https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css)">
    <link rel="stylesheet" href="style.css">
    <style>
        /* ★ データベースグリッドの画像と名前を少し小さくするCSS */
        #grid div.bg-white\/5.p-8.rounded-3xl img {
            width: 6rem; /* w-32 (8rem) -> w-24 (6rem) */
            height: 6rem; /* h-32 (8rem) -> h-24 (6rem) */
        }
        #grid div.bg-white\/5.p-8.rounded-3xl h3 {
            font-size: 1.875rem; /* text-4xl (2.25rem) -> text-3xl (1.875rem) */
        }
    </style>
</head>
<body>

    <header>
        <div class="flex items-center gap-4 cursor-pointer" onclick="showPage('home')">
            <h1 class="text-2xl font-black italic tracking-tighter leading-none">3on3<br><span class="text-[#ff4e00]">DIVINE</span></h1>
        </div>
        <nav class="nav-container">
            <span class="nav-link active" onclick="showPage('home')" data-i18n="nav-home">HOME</span>
            <span class="nav-link" onclick="showPage('guide')" data-i18n="nav-guide">GUIDE</span>
            <span class="nav-link" onclick="showPage('db')" data-i18n="nav-db">DATABASE</span>
            <span class="nav-link" onclick="showPage('pbuff')" data-i18n="nav-pbuff">P-BUFF</span>
            <span class="nav-link" onclick="showPage('qa')" data-i18n="nav-qa">Q&A</span>
            <span class="nav-link" onclick="showPage('bbs')" data-i18n="nav-bbs">BBS</span>
        </nav>
        <div class="flex gap-1 ml-auto">
            <button class="bg-white/10 hover:bg-white/20 text-xs font-black px-2 py-2 rounded transition lang-btn text-orange-500" onclick="switchLanguage('ja', this)">JP</button>
            <button class="bg-white/10 hover:bg-white/20 text-xs font-black px-2 py-2 rounded transition lang-btn" onclick="switchLanguage('en', this)">EN</button>
            <button class="bg-white/10 hover:bg-white/20 text-xs font-black px-2 py-2 rounded transition lang-btn" onclick="switchLanguage('ko', this)">KO</button>
            <button class="bg-white/10 hover:bg-white/20 text-xs font-black px-2 py-2 rounded transition lang-btn" onclick="switchLanguage('zh', this)">ZH</button>
        </div>
    </header>

    <div id="home-split-wrapper" class="fade-in">
        <div class="home-left">
            <div class="flex flex-col xl:flex-row items-start xl:items-end gap-8 xl:gap-16 mb-10">
                <h2 class="text-7xl lg:text-8xl xl:text-9xl font-black italic tracking-tighter leading-none">SRT<br><span class="text-[#ff4e00]">guide</span></h2>
                <div class="w-full max-w-[360px] aspect-video rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black xl:ml-16">
                    <iframe width="100%" height="100%" src="[https://www.youtube.com/embed/n1ZK-5ukGHI](https://www.youtube.com/embed/n1ZK-5ukGHI)" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
            
            <div class="panel-grid">
                <div class="panel-box" onclick="showPage('about')"><i class="fas fa-user-ninja text-3xl mb-3 text-[#ff4e00]"></i><h3 class="font-sporty text-xl" data-i18n="nav-about">ABOUT ME</h3></div>
                <div class="panel-box" onclick="showPage('guide')"><i class="fas fa-graduation-cap text-3xl mb-3 text-[#ff4e00]"></i><h3 class="font-sporty text-xl" data-i18n="nav-guide">GUIDE</h3></div>
                <div class="panel-box" onclick="showPage('db')"><i class="fas fa-database text-3xl mb-3 text-[#ff4e00]"></i><h3 class="font-sporty text-xl" data-i18n="nav-db">DATABASE</h3></div>
                <div class="panel-box" onclick="showPage('pbuff')"><i class="fas fa-bolt text-3xl mb-3 text-[#ff4e00]"></i><h3 class="font-sporty text-xl" data-i18n="nav-pbuff">P-BUFF</h3></div>
                <div class="panel-box" onclick="showPage('qa')"><i class="fas fa-question-circle text-3xl mb-3 text-[#ff4e00]"></i><h3 class="font-sporty text-xl" data-i18n="nav-qa">Q&A</h3></div>
                <div class="panel-box" onclick="showPage('bbs')"><i class="fas fa-comments text-3xl mb-3 text-[#ff4e00]"></i><h3 class="font-sporty text-xl" data-i18n="nav-bbs">BBS</h3></div>
                <a href="[https://note.com/clean_squid9881](https://note.com/clean_squid9881)" target="_blank" class="panel-box"><i class="fas fa-edit text-3xl mb-3 text-[#ff4e00]"></i><h3 class="font-sporty text-xl">NOTE</h3></a>
                <a href="[https://www.youtube.com/watch?v=zQQ5CgmNE6k&list=PLsh9Bg6dKAaUd7sIMY1zazXYmye1GVYYJ](https://www.youtube.com/watch?v=zQQ5CgmNE6k&list=PLsh9Bg6dKAaUd7sIMY1zazXYmye1GVYYJ)" target="_blank" class="panel-box"><i class="fab fa-youtube text-3xl mb-3 text-[#ff4e00]"></i><h3 class="font-sporty text-xl">YOUTUBE</h3></a>
                <a href="[https://3on3.fsgames.com/](https://3on3.fsgames.com/)" target="_blank" class="panel-box"><i class="fas fa-globe text-3xl mb-3 text-[#ff4e00]"></i><h3 class="font-sporty text-xl">OFFICIAL</h3></a>
            </div>

            <div class="mt-12 bg-white/5 border border-white/10 rounded-3xl p-6 fade-in w-full max-w-[500px]">
                <h3 class="text-2xl font-black italic text-orange-500 mb-4 flex items-center gap-3">
                    <i class="fas fa-gift text-3xl"></i> <span data-i18n="village-map-title">ビレッジ プレゼント出現MAP</span>
                </h3>
                <div class="rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black group relative cursor-pointer" onclick="window.open('ボックスの位置.jpg', '_blank')">
                    <img src="ボックスの位置.jpg" alt="Village Present Map" class="w-full h-auto group-hover:scale-105 group-hover:opacity-60 transition-all duration-500">
                    <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <i class="fas fa-search-plus text-5xl text-white drop-shadow-lg"></i>
                    </div>
                </div>
                <p class="text-sm text-gray-400 mt-3 text-center" data-i18n="village-map-cap">※画像タップ（クリック）で拡大表示</p>
            </div>

            <div class="mt-8 flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 w-fit fade-in">
                <div class="bg-orange-500/20 p-3 rounded-xl flex items-center justify-center">
                    <i class="fas fa-users text-orange-500 text-2xl"></i>
                </div>
                <div>
                    <div class="text-xs text-gray-400 font-black italic mb-1" data-i18n="counter-title">総訪問者数</div>
                    <div id="counter_area">
                        <script language="javascript" type="text/javascript" src="[https://counter1.fc2.com/counter.php?id=15608402&main=1](https://counter1.fc2.com/counter.php?id=15608402&main=1)"></script><noscript><img src="[https://counter1.fc2.com/counter_img.php?id=15608402&main=1](https://counter1.fc2.com/counter_img.php?id=15608402&main=1)" /></noscript>
                    </div>
                </div>
            </div>
        </div>
        <div class="home-right">
            <video class="video-bg" autoplay loop muted playsinline preload="auto">
                <source src="top_video.mp4" type="video/mp4">
            </video>
            <video class="video-main" autoplay loop muted playsinline preload="auto">
                <source src="top_video.mp4" type="video/mp4">
            </video>
            <div class="absolute inset-0 bg-gradient-to-l from-transparent to-black opacity-30 pointer-events-none z-10"></div>
        </div>
    </div>

    <div id="standard-content" class="hidden">
        <section id="page-about" class="page-container">
            <h2 class="text-5xl lg:text-6xl font-black italic mb-12 border-l-[12px] border-[#ff4e00] pl-6" data-i18n="nav-about">ABOUT ME</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white/5 p-10 rounded-[30px] border border-white/10">
                <img src="image_956977.jpg" class="w-full rounded-2xl shadow-2xl" alt="Message Image">
                <div>
                    <h3 class="text-3xl font-black italic text-orange-500 mb-6" data-i18n="about-title">はじめに：作者より</h3>
                    <p class="text-lg text-gray-300 leading-relaxed mb-4" data-i18n="about-p1">2016年頃からこのコートを見守ってきました。一度は引退しましたが、このゲームの楽しさが忘れられず2024年に戻ってきました。</p>
                    <p class="text-lg text-gray-300 leading-relaxed" data-i18n="about-p2">攻略ガイド等を公開しています。皆でこのコミュニティを熱くしましょう！</p>
                </div>
            </div>
        </section>

        <section id="page-guide" class="page-container">
            <h2 class="text-5xl lg:text-6xl font-black italic mb-12 border-l-[12px] border-[#ff4e00] pl-6" data-i18n="guide-title">ROAD TO HIGH TIER</h2>
            <div class="space-y-16">
                <div>
                    <div class="step-badge">STEP 1</div><h3 class="text-3xl font-black italic mb-6" data-i18n="step1-title">ポジションの特徴</h3>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10">
                        <div>
                            <img src="guide_step1_role.png" class="rounded-3xl border border-white/10 shadow-2xl w-full" alt="Roles">
                            <p class="text-sm text-gray-400 mt-4 text-center px-4" data-i18n="img-cap-role">図解：各ポジションの役割。全てのプレイを1人でやろうとせず、自分の仕事に集中することが大切です。</p>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                            <div class="guide-card p-4"><h4 class="text-xl text-orange-500 font-black mb-1">PG</h4><p class="text-gray-400 text-sm" data-i18n="pg-desc">パスと機動力。守備の要。</p></div>
                            <div class="guide-card p-4"><h4 class="text-xl text-orange-500 font-black mb-1">SG</h4><p class="text-gray-400 text-sm" data-i18n="sg-desc">最高得点能力。多彩なスキル。</p></div>
                            <div class="guide-card p-4"><h4 class="text-xl text-orange-500 font-black mb-1">SF</h4><p class="text-gray-400 text-sm" data-i18n="sf-desc">攻守に貢献する万能型。</p></div>
                            <div class="guide-card p-4"><h4 class="text-xl text-orange-500 font-black mb-1">PF/C</h4><p class="text-gray-400 text-sm" data-i18n="c-desc">ゴール下の番人。リバウンド。</p></div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="step-badge">STEP 2</div><h3 class="text-3xl font-black italic mb-6" data-i18n="step2-title">おすすめキャラ</h3>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                        <div class="guide-card p-8 flex flex-col">
                            <div><h4 class="text-2xl font-black text-white mb-4" data-i18n="recom-free-title">無課金・初期のおすすめ</h4><p class="text-gray-300 text-lg mb-6" data-i18n="recom-free-desc">Murdock (PF): ブロック力が高く、最高の選択肢です。</p></div>
                            <div class="rounded-xl overflow-hidden border border-white/10 aspect-video bg-black shadow-xl mt-auto">
                                <iframe width="100%" height="100%" src="[https://www.youtube.com/embed/Yz7PVs2Hd1Y](https://www.youtube.com/embed/Yz7PVs2Hd1Y)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div class="guide-card p-0 overflow-hidden flex flex-col">
                            <div class="p-8 pb-4"><h4 class="text-2xl font-black text-white" data-i18n="recom-premium-title">最強キャラ (Premium)</h4></div>
                            <div class="flex-1 flex flex-col sm:flex-row min-h-[450px]">
                                <div class="premium-banner-v">
                                    <img src="[https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/kaji/chr_b_kaji.png](https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/kaji/chr_b_kaji.png)" class="banner-img">
                                    <div class="banner-overlay"><span class="pos-tag">PG</span><span class="name-tag">KAJI</span></div>
                                </div>
                                <div class="premium-banner-v">
                                    <img src="[https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/gena/chr_b.png](https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/gena/chr_b.png)" class="banner-img">
                                    <div class="banner-overlay"><span class="pos-tag">SG</span><span class="name-tag">GENA</span></div>
                                </div>
                                <div class="premium-banner-v">
                                    <img src="[https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/nathan/chr_b_nathan.png](https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/nathan/chr_b_nathan.png)" class="banner-img">
                                    <div class="banner-overlay"><span class="pos-tag">SF</span><span class="name-tag">NATHAN</span></div>
                                </div>
                                <div class="premium-banner-v">
                                    <img src="[https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/chr_b_giant_g.png](https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/chr_b_giant_g.png)" class="banner-img">
                                    <div class="banner-overlay"><span class="pos-tag">PF</span><span class="name-tag">GIANT G</span></div>
                                </div>
                                <div class="premium-banner-v">
                                    <img src="[https://d2mwnrhar4x85q.cloudfront.net/3on3/character/blair/chr_b_blair.png](https://d2mwnrhar4x85q.cloudfront.net/3on3/character/blair/chr_b_blair.png)" class="banner-img">
                                    <div class="banner-overlay"><span class="pos-tag">C</span><span class="name-tag">BLAIR</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="step-badge">STEP 3</div><h3 class="text-3xl font-black italic mb-6" data-i18n="step3-title">育成手順</h3>
                    <div class="space-y-8">
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div>
                                <img src="upgrade_pyramid.png" class="rounded-3xl border border-white/10 shadow-2xl w-full" alt="Pyramid">
                                <p class="text-sm text-gray-400 mt-4 text-center px-4" data-i18n="img-cap-pyramid">図解：強者のピラミッド。まずはP5昇級で基盤を作り、P-BUFFを構築してからカード厳選に進むのが黄金律です。</p>
                            </div>
                            <div>
                                <img src="roi_comparison.png" class="rounded-3xl border border-white/10 shadow-2xl w-full" alt="Comparison">
                                <p class="text-sm text-gray-400 mt-4 text-center px-4" data-i18n="img-cap-roi">図解：P-BUFFとカードの投資対効果。P-BUFFはポジション全体に永続的な恩恵をもたらすため、カードより圧倒的にコスパが良いです。</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="step-badge">STEP 4</div><h3 class="text-3xl font-black italic mb-6" data-i18n="step4-title">「最高のチームメイト」への進化</h3>
                    
                    <div class="mb-12">
                        <img src="guide_step4_steps.png" class="w-4/5 mx-auto block rounded-3xl border border-white/10 shadow-2xl" alt="Step4 Intro">
                        <p class="text-sm text-gray-400 mt-4 text-center px-4" data-i18n="img-cap-steps">図解：良いチームメイトになるための4段階（役割把握 → 邪魔しない → 意図を読む → コミュニケーション）</p>
                    </div>
                    
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div class="space-y-12">
                            <div>
                                <h4 class="text-2xl font-black text-orange-500 mb-6 italic border-b border-orange-500/30 pb-2">Level 1: 役割の理解</h4>
                                <div class="guide-card p-6 bg-white/5"><p class="text-gray-300" data-i18n="playbook-l1">PGは運び、PF/Cはゴール下. 自分の仕事を絞ることで安心感を与えます。</p></div>
                            </div>
                            <div>
                                <h4 class="text-2xl font-black text-orange-500 mb-6 italic border-b border-orange-500/30 pb-2">Level 2: 邪魔をしない</h4>
                                <div class="space-y-8">
                                    <div>
                                        <img src="guide_step4_space.png" class="w-4/5 mx-auto block rounded-2xl border border-white/10" alt="Space">
                                        <p class="text-sm text-gray-400 mt-3 text-center px-4" data-i18n="img-cap-space">図解：味方と同じ場所に立つと「渋滞」が起きます。ボール保持者に近づかない、ドライブコースを塞がないのが鉄則です。</p>
                                    </div>
                                    <div>
                                        <img src="guide_step4_inside.png" class="w-4/5 mx-auto block rounded-2xl border border-white/10" alt="Inside">
                                        <p class="text-sm text-gray-400 mt-3 text-center px-4" data-i18n="img-cap-inside">図解：インサイド（ゴール下）にずっと居座らないこと。ビッグマンのリバウンド位置とも被らないようにしましょう。</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="space-y-12">
                            <div>
                                <h4 class="text-2xl font-black text-orange-500 mb-6 italic border-b border-orange-500/30 pb-2">Level 3: 味方の意図を読む</h4>
                                <div class="guide-card p-6 bg-white/5 space-y-4">
                                    <div class="bg-blue-500/10 p-4 rounded-lg border-l-4 border-blue-500"><span class="text-blue-400 font-black">IF:</span> 味方がドライブ → <span class="text-white">THEN: スペースを空ける</span></div>
                                    <div class="bg-blue-500/10 p-4 rounded-lg border-l-4 border-blue-500"><span class="text-blue-400 font-black">IF:</span> Cがスクリーン → <span class="text-white">THEN: その壁を使って動く</span></div>
                                </div>
                            </div>
                            <div>
                                <h4 class="text-2xl font-black text-orange-500 mb-6 italic border-b border-orange-500/30 pb-2">Level 4: コミュニケーション</h4>
                                <img src="guide_step4_comm.png" class="w-4/5 mx-auto block rounded-2xl border border-white/10" alt="Comm">
                                <p class="text-sm text-gray-400 mt-3 mb-6 text-center px-4" data-i18n="img-cap-comm">図解：ミスには「大丈夫」のエモートを。過度な「パス要求」は控え、自分がミスしたら謝るのが基本です。</p>
                                <div class="guide-card p-6 bg-white/5"><p class="text-gray-400 text-sm italic" data-i18n="playbook-comm">ミスを責めず、ポジティブなエモートでチームを鼓舞しましょう。</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="page-db" class="page-container">
            <div class="flex flex-col lg:flex-row justify-between items-end mb-10 gap-6">
                <h2 class="text-5xl lg:text-6xl font-black italic border-l-[12px] border-[#ff4e00] pl-6" data-i18n="nav-db">DATABASE</h2>
                <div class="flex gap-4">
                    <input type="text" id="nameInput" oninput="filterCards()" placeholder="Search Name..." class="bg-white/10 border border-white/20 rounded-xl px-6 py-3 text-lg outline-none focus:border-orange-500 transition w-full lg:w-72">
                    <select id="posFilter" onchange="filterCards()" class="bg-white/10 border border-white/20 rounded-xl px-6 py-3 text-lg outline-none cursor-pointer"><option value="All">ALL</option><option value="PG">PG</option><option value="SG">SG</option><option value="SF">SF</option><option value="PF">PF</option><option value="C">C</option></select>
                </div>
            </div>
            <p class="text-base text-gray-400 mb-8 italic" data-i18n="db-note">※「▲」表記はバフ値（加算）です。</p>
            <div id="grid" class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8"></div>
        </section>

        <section id="page-pbuff" class="page-container">
            <div class="flex flex-col lg:flex-row justify-between items-end mb-10 gap-6">
                <h2 class="text-5xl lg:text-6xl font-black italic border-l-[12px] border-[#ff4e00] pl-6" data-i18n="nav-pbuff">P-BUFF</h2>
                <div class="flex gap-4">
                    <select id="pbuffPosFilter" onchange="initPBuff()" class="bg-white/10 border border-white/20 rounded-xl px-6 py-3 text-lg outline-none cursor-pointer">
                        <option value="All">ALL POSITIONS</option>
                        <option value="PG">PG</option><option value="SG">SG</option><option value="SF">SF</option><option value="PF">PF</option><option value="C">C</option>
                    </select>
                </div>
            </div>
            <div id="pbuff-grid-container" class="space-y-16"></div>
        </section>

        <section id="page-qa" class="page-container max-w-5xl">
            <h2 class="text-5xl lg:text-6xl font-black italic mb-12 border-l-[12px] border-[#ff4e00] pl-6" data-i18n="nav-qa">Q&A</h2>
            <div class="space-y-8">
                <div class="qa-card p-8"><h4 class="text-2xl font-black text-orange-500 mb-4" data-i18n="qa-q1">Q: 数値の「▲」は何？</h4><p class="text-xl text-gray-300" data-i18n="qa-a1">A: バフ値（強化分）です。</p></div>
                <div class="qa-card p-8"><h4 class="text-2xl font-black text-orange-500 mb-4" data-i18n="qa-q2">Q: P-Buffとカードどちらが先？</h4><p class="text-xl text-gray-300" data-i18n="qa-a2">A: P-Buffが先です。</p></div>
            </div>
        </section>

        <section id="page-bbs" class="page-container max-w-5xl">
            <h2 class="text-5xl lg:text-6xl font-black italic mb-12 border-l-[12px] border-[#ff4e00] pl-6" data-i18n="nav-bbs">BBS</h2>
            <div class="rounded-xl overflow-hidden bg-white shadow-2xl">
                <iframe src="[https://srtguide.bbs.fc2.com/](https://srtguide.bbs.fc2.com/)" width="100%" height="800px" style="border:none;"></iframe>
            </div>
        </section>
    </div>

    <script src="data.js"></script>
    <script src="script.js"></script>
</body>
</html>
