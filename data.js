const statNames = ["ポスト", "ミドル", "3点", "Sレイ", "Lレイ", "Sダン", "Lダン", "パス", "スティ", "Jブロ", "Dブロ", "当たり", "リバ", "ラン", "持久"];

const i18n = {
    ja: { 
        "nav-home": "HOME", "nav-guide": "GUIDE", "nav-db": "DATABASE", "nav-pbuff": "P-BUFF", "nav-qa": "Q&A", "nav-about": "ABOUT ME", "nav-bbs": "BBS",
        "about-title": "はじめに：作者より",
        "about-p1": "2016年頃からこのコートを見守ってきました。一度は引退しましたが、このゲームの楽しさが忘れられず2024年に戻ってきました。",
        "about-p2": "攻略ガイド等を公開しています。皆でこのコミュニティを熱くしましょう！",
        "guide-title": "ROAD TO HIGH TIER", "step1-title": "ポジションの特徴", "step2-title": "おすすめキャラ", "step3-title": "育成手順",
        "pg-desc": "パスと機動力。守備の要。", "sg-desc": "最高得点能力。多彩なスキル。", "sf-desc": "攻守に貢献する万能型。", "pf-desc": "機動力ブロック。攻撃も可。", "c-desc": "ゴール下の番人。リバウンド。",
        "recom-free-title": "無課金・初期のおすすめ", "recom-free-desc": "Murdock (PF): ブロック力が高く、最高の選択肢です。", "recom-premium-title": "最強キャラ (Premium)",
        "grow1-title": "P5 昇級", "grow1-desc": "全スキル解放が育成の基準。", "grow2-title": "P-BUFF 構築", "grow2-desc": "ポジション全員に影響。最優先。", "grow3-title": "カード 厳選", "grow3-desc": "Pバフ完成後にじっくり行う。",
        "db-note": "※「▲」表記はバフ値（加算）です。基本値を知るには表示値からこれらを引く必要があります。",
        "qa-q1": "Q: 数値の「▲」は何？", "qa-a1": "A: バフ値（強化分）です。基本性能を知るには表示値から▲値を差し引いてください。",
        "qa-q2": "Q: P-Buffとカードどちらが先？", "qa-a2": "A: P-Buffが先です。同じポジション全員に恩恵があるため最優先課題となります。",
        "counter-title": "総訪問者数",
        "bbs-desc": "情報交換や質問、フレンド募集などご自由にどうぞ！<br><span style='font-size:0.85em; color:#ff4e00;'>※悪質な書き込みはIP記録の上、削除・アクセス禁止措置をとります。</span>",
        "step4-title": "「最高のチームメイト」への進化",
        "playbook-l1": "PGはボール運び、PF/Cはゴール下。自分の仕事を絞ることで味方に安心感を与えます。",
        "playbook-l2-1": "ボール持ちの味方に近寄らない",
        "playbook-l2-2": "味方のドライブコースを塞がない",
        "playbook-l2-3": "インサイドに居座り続けない（スペースを作る）",
        "playbook-comm": "ミスを責めず、ポジティブなエモートでチームを盛り上げましょう。"
    },
    en: { 
        "nav-home": "HOME", "nav-guide": "GUIDE", "nav-db": "DATABASE", "nav-pbuff": "P-BUFF", "nav-qa": "Q&A", "nav-about": "ABOUT ME", "nav-bbs": "BBS",
        "about-title": "Intro: From the Author",
        "about-p1": "Watching the court since 2016. Returned in 2024 because I missed the fun.",
        "about-p2": "I hope to see more players. Let's make this community hot together!",
        "guide-title": "ROAD TO HIGH TIER", "step1-title": "Position Traits", "step2-title": "Recommendations", "step3-title": "Growth Order",
        "pg-desc": "Pass & Speed. Defense core.", "sg-desc": "Top scorer. Diverse skills.", "sf-desc": "All-rounder for Off/Def.", "pf-desc": "Mobile blocker. Good off.", "c-desc": "Paint guardian. Rebounder.",
        "recom-free-title": "Best Free/Starter", "recom-free-desc": "Murdock (PF): High block, best free choice.", "recom-premium-title": "Top Tier (Premium)",
        "grow1-title": "P5 Promote", "grow1-desc": "Unlock all skills first.", "grow2-title": "P-BUFF Build", "grow2-desc": "Affects all in pos. Top priority.", "grow3-title": "Cards", "grow3-desc": "Do this after P-Buff is done.",
        "db-note": "*'▲' indicates a buff. Subtract it from the value to find the base stat.",
        "qa-q1": "Q: What does '▲' mean?", "qa-a1": "A: It's the buff value. Subtract it from the display value to find the base performance.",
        "qa-q2": "Q: P-Buff or Cards first?", "qa-a2": "A: P-Buff first. It boosts everyone in the same position.",
        "counter-title": "TOTAL VISITORS",
        "bbs-desc": "Feel free to recruit friends or ask questions!<br><span style='font-size:0.8em; color:#ff4e00;'>*Abusive posts will be blocked based on IP.</span>",
        "step4-title": "BECOME THE BEST TEAMMATE",
        "playbook-l1": "PG carries, PF/C guards paint. Knowing your job gives your team peace of mind.",
        "playbook-l2-1": "Don't crowd the ball handler.",
        "playbook-l2-2": "Don't block the drive lane.",
        "playbook-l2-3": "Don't sit in the paint (create space).",
        "playbook-comm": "Don't blame mistakes. Use positive emotes to boost morale."
    }
};

const termsDict = {
    en: { "ポスト": "POST", "ミドル": "MID", "3点": "3PT", "Sレイ": "S-LAY", "Lレイ": "L-LAY", "Sダン": "S-DUNK", "Lダン": "L-DUNK", "パス": "PASS", "スティ": "STL", "Jブロ": "J-BLK", "Dブロ": "D-BLK", "当たり": "STR", "リバ": "REB", "ラン": "RUN", "持久": "STM", "一般の移動速度": "Move Speed", "Sダンク ブロック抵抗": "S-Dunk Blk Res", "持久力の最大量": "Max Stamina", "Sレイアップ ブロック抵抗": "S-Layup Blk Res", "Sダンク 発動確率": "S-Dunk Chance", "3点シュート 成功率": "3PT Success", "Sダンク 守備抵抗": "S-Dunk Def Res", "Sレイアップ 成功率": "S-Layup Success", "ミドルシュート 成功率": "Mid Success", "リバウンド": "Rebound", "ミドル守備抵抗": "Mid Def Res", "Dインシュート ブロック": "Drive-in Blk", "Jシュート ブロック": "Jump-shot Blk", "シュート妨害効果": "Shot Interfere", "当たり強さ": "Strength", "ロングダンク 成功率": "L-Dunk Success", "ポストショット 成功率": "Post Success", "Oリバウンド能力": "O-Rebound", "Dリバウンド能力": "D-Rebound", "Lダンク ブロック抵抗": "L-Dunk Blk Res", "ブロック抵抗成功率": "Blk Resist Success", "スティール成功率": "Steal Success", "ミドルシュート": "Mid Shot", "スティール": "Steal", "ランニング": "Running", "Sダンクの速度": "S-Dunk Speed", "持久力の回復量": "Stam Recovery", "レイアップ/ダンク距離": "Layup/Dunk Range", "Lレイ ブロック抵抗": "L-Lay Blk Res", "Sレイ 守備抵抗": "S-Lay Def Res", "Lダンク 発動確率": "L-Dunk Chance" }
};

const charImages = { 
    "Ayla": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/chr_b_ayla.png", "Chloe": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/chr_b_chloe.png", "Genesa": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/chr_b_genesa.png", "Genesa (Flash)": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/chr_b_genesa.png", "Genesa (Dynamic)": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/chr_b_genesa.png", "Noah": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/chr_b_noah.png", "Mika": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/mika.png", "Ginger": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/ginger.png", "Little Fox": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/littlefox.png", "Professor": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/professor.png", "Cindy": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/cindy.png", "Helena": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/helena.png", "Pedro": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/pedro.png", "Clara": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/clara/chr_b_clara.png", "Kaji": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/kaji/chr_b_kaji.png", "Ox Queen": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/chr_b_oxqueen.png", "ANPAN": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/anpan/chr_b.png", "Kim": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/kim.png", "Fred": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/fred.png", "Rin": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/rin.png", "Jason": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/jason.png", "Carolina": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/carolina.png", "Nadia": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/nadia.png", "Walker": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/walker.png", "Yuna": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/yuna/chr_b_yuna.png", "Gena": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/gena/chr_b.png", "MC.CC": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/chr_b_mc_cc.png", "Liu": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/chr_b_liu.png", "Jack": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/jack.png", "Rebecca": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/rebecca.png", "Saru": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/saru.png", "William": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/william.png", "Amanda": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/amanda.png", "Jessie": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/chr_b_jessie.png", "Carter": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/carter.png", "Joey": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/joey.png", "Nathan": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/nathan/chr_b_nathan.png", "Fox": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/chr_b_fox.png", "Deacon": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/deacon.png", "Murdock": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/murdock.png", "Max": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/max.png", "Giant G": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/chr_b_giant_g.png", "Marisol": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/marisol/chr_b_marisol.png", "Fei": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/fei.png", "Vandell": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/vandell/chr_b.png", "Double D": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/chr_b_double_d.png", "Clarke": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/clarke.png", "Lulu": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/lulu.png", "DJ Bagman": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/djbagman/chr_b_djbagman.png", "Blair": "https://d2mwnrhar4x85q.cloudfront.net/3on3/character/blair/chr_b_blair.png", "Luther": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/luther.png", "Jimmy": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/jimmy.png", "Howl": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/chr_b_howl.png", "Camila": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/camila.png", "Siana": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/siana/chr_b_Siana.png", "Lyoid": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/chr_b_lyoid.png", "Lee": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/lee.png", "Christa": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/christa.png", "Big Dog": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/bigdog.png", "Big Joe": "https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/bigjoe.png" 
};

// ステータスデータ（soraさんから頂いた最新版）
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

// P-BUFFデータ
const pBuffData = {
    "C (CENTER)": [
        { name: "ルーサー", en: "Luther", buffs: [["Lダンク 発動確率", "+12%"], ["Lダンク ブロック抵抗", "+6%"], ["ブロック抵抗成功率", "+4.2%"], ["スティール成功率", "+16.8%"], ["一般の移動速度", "+7.2cm/s"]] },
        { name: "ビッグドッグ", en: "Big Dog", buffs: [["ミドルシュート 成功率", "+7.5%"], ["持久力の回復量", "+7.2"], ["Lレイ ブロック抵抗", "+6%"], ["Sレイ 守備抵抗", "+2.16%"], ["Lダンク 発動確率", "+6%"]] },
        { name: "リー", en: "Lee", buffs: [["Sダンク 発動確率", "+12%"], ["3点シュート 成功率", "+6%"], ["Sダンク 守備抵抗", "+2.16%"], ["Sレイアップ 成功率", "+4.5%"], ["ミドルシュート 成功率", "+4%"]] },
        { name: "クリスタ", en: "Christa", buffs: [["一般の移動速度", "+14.4cm/s"], ["Sダンク ブロック抵抗", "+6%"], ["持久力の最大量", "+12"], ["Sレイアップ ブロック抵抗", "+6%"], ["Sダンク 発動確率", "+6%"]] },
        { name: "ジミー", en: "Jimmy", buffs: [["リバウンド", "+14"], ["当たり強さ", "+14"], ["持久力", "+14"], ["パス", "+14"], ["ランニング", "+10"]] },
        { name: "ビッグジョー", en: "Big Joe", buffs: [["ロングダンク 成功率", "+3%"], ["ポストショット 成功率", "+3%"], ["一般の移動速度", "+7.2cm/s"], ["持久力の最大量", "+12"], ["当たり強さ", "+14"]] },
        { name: "カミラ", en: "Camila", buffs: [["リバウンド", "+14"], ["ミドル守備抵抗", "+1.44%"], ["ミドルシュート 成功率", "+4%"], ["パス", "+14"], ["ポストショット 成功率", "+3%"]] },
        { name: "アウル", en: "Howl", buffs: [["Dインシュート ブロック", "+12"], ["Jシュート ブロック", "+12"], ["持久力", "+12"], ["シュート妨害効果", "+6%"], ["当たり強さ", "+12"]] },
        { name: "ロイド", en: "Lyoid", buffs: [["当たり強さ", "+12"], ["パス", "+12"], ["Oリバウンド能力", "+20"], ["Dリバウンド能力", "+20"], ["持久力", "+12"]] },
        { name: "ブレア", en: "Blair", buffs: [["ミドルシュート", "+12"], ["Dインシュート ブロック", "+12"], ["持久力", "+12"], ["スティール", "+12"], ["ランニング", "+12"]] },
        { name: "シアナ", en: "Siana", buffs: [["当たり強さ", "+18"], ["Sダンクの速度", "+3%"], ["Sダンク 守備抵抗", "+2.16%"], ["持久力の回復量", "+7.2"], ["レイアップ/ダンク距離", "+20cm"]] }
    ],
    "PF (POWER FORWARD)": [
        { name: "クラーク", en: "Clarke", buffs: [["3点シュート 成功率", "+6%"], ["Sダンク ブロック抵抗", "+6%"], ["Sダンク 発動確率", "+12%"], ["持久力の最大量", "+12"], ["一般の移動速度", "+7.2cm/s"]] },
        { name: "マードック", en: "Murdock", buffs: [["ミドルシュート 成功率", "+7.5%"], ["Lダンク ブロック抵抗", "+6%"], ["Sダンク 守備抵抗", "+2.16%"], ["ブロック抵抗成功率", "+4.2%"], ["3点シュートのブロック抵抗", "+3%"]] },
        { name: "ルル", en: "Lulu", buffs: [["3点シュートのブロック抵抗", "+6%"], ["Lレイ ブロック抵抗", "+6%"], ["Sレイアップ 成功率", "+4.5%"], ["Sレイアップ ブロック抵抗", "+6%"], ["3点シュート 成功率", "+3.2%"]] },
        { name: "マックス", en: "Max", buffs: [["一般の移動速度", "+14.4cm/s"], ["スティール成功率", "+16.8%"], ["Lダンク 発動確率", "+12%"], ["Lダンク 守備抵抗", "+2.16%"], ["ミドルシュート 成功率", "+4%"]] },
        { name: "フェイ", en: "Fei", buffs: [["リバウンド", "+14"], ["Sダンク 成功率", "+2.4%"], ["ロングダンク 成功率", "+2.4%"], ["持久力の回復量", "+7.2"], ["スティール成功率", "+8.4%"]] },
        { name: "デコン", en: "Deacon", buffs: [["リバウンド", "+14"], ["Lレイ ブロック抵抗", "+6%"], ["Sレイアップ ブロック抵抗", "+6%"], ["持久力の最大量", "+12"], ["当たり強さ", "+14"]] },
        { name: "フォックス", en: "Fox", buffs: [["3点シュート", "+12"], ["ミドルシュート", "+12"], ["Dインシュート ブロック", "+12"], ["当たり強さ", "+12"], ["ロングダンク", "+12"]] },
        { name: "ダブルＤ", en: "Double D", buffs: [["当たり強さ", "+12"], ["ロングダンク 成功率", "+3%"], ["3点シュート", "+12"], ["レイアップ/ダンク距離", "+20cm"], ["ロングダンク", "+12"]] },
        { name: "ジャイアントG", en: "Giant G", buffs: [["Jシュート ブロック", "+12"], ["Dインシュート ブロック", "+12"], ["シュート妨害効果", "+5%"], ["Sダンク", "+12"], ["ランニング", "+12"]] },
        { name: "マリソル", en: "Marisol", buffs: [["Lダンク ブロック抵抗", "+6%"], ["ミドルシュート", "+12"], ["Jシュート ブロック", "+12"], ["ランニング", "+12"], ["レイアップ/ダンク距離", "+20cm"]] },
        { name: "ヴァンデル", en: "Vandell", buffs: [["持久力の回復量", "+8.4"], ["当たり強さ", "+14"], ["Sダンク", "+14"], ["ランニング", "+14"], ["Oリバウンド能力", "+25"]] }
    ],
    "SF (SMALL FORWARD)": [
        { name: "アマンダ", en: "Amanda", buffs: [["一般の移動速度", "+14.4cm/s"], ["ブロック抵抗成功率", "+4.2%"], ["Lダンク ブロック抵抗", "+6%"], ["ミドル守備抵抗", "+1.44%"], ["ミドルシュート 成功率", "+4%"]] },
        { name: "ジョイ", en: "Joey", buffs: [["Lダンク ブロック抵抗", "+6%"], ["ゴール下シュート成功率", "+3%"], ["Sダンク ブロック抵抗", "+6%"], ["Lレイ 守備抵抗", "+2.16%"], ["ミドルシュートのブロック抵抗", "+3%"]] },
        { name: "ウィリアム", en: "William", buffs: [["ミドルシュートのブロック抵抗", "+6%"], ["3点シュートのブロック抵抗", "+6%"], ["Sレイアップ ブロック抵抗", "+6%"], ["持久力の回復量", "+7.2"], ["一般の移動速度", "+7.2cm/s"]] },
        { name: "カーター", en: "Carter", buffs: [["3点シュート 成功率", "+6%"], ["スティール成功率", "+16.8%"], ["持久力の最大量", "+12"], ["Lレイ ブロック抵抗", "+6%"], ["Lダンク ブロック抵抗", "+3%"]] },
        { name: "レベッカ", en: "Rebecca", buffs: [["ミドルシュート 成功率", "+7.5%"], ["Lダンク 発動確率", "+12%"], ["Sダンク 発動確率", "+12%"], ["ミドルシュート", "+14"], ["3点シュート 成功率", "+3.2%"]] },
        { name: "サル", en: "Saru", buffs: [["ミドルシュート 成功率", "+4%"], ["Lレイ ブロック抵抗", "+3.75%"], ["Lダンク ブロック抵抗", "+3.75%"], ["持久力の最大量", "+12"], ["ゴール下シュート成功率", "+1.6%"]] },
        { name: "ジャック", en: "Jack", buffs: [["Lレイ 守備抵抗", "+1.08%"], ["Sレイアップ 成功率", "+4.5%"], ["ノーマーク3点シュート成功率", "+3.2%"], ["3点シュート", "+10"], ["一般の移動速度", "+14.4cm/s"]] },
        { name: "リウ", en: "Liu", buffs: [["Jシュート ブロック", "+12"], ["レイアップ/ダンク距離", "+20cm"], ["シュート妨害効果", "+6%"], ["スティール", "+12"], ["リバウンド", "+12"]] },
        { name: "ジェシー", en: "Jessie", buffs: [["3点シュート距離増加", "+50cm"], ["アンクルブレイク抵抗", "+25%"], ["ドライブモーション速度", "+5.6%"], ["ミドル守備抵抗", "+1.44%"], ["パス", "+14"]] },
        { name: "DJ Bagman", en: "DJ Bagman", buffs: [["ミドルシュート", "+12"], ["持久力", "+12"], ["パス", "+12"], ["リバウンド", "+12"], ["ランニング", "+12"]] },
        { name: "ネイサン", en: "Nathan", buffs: [["ロングダンク", "+12"], ["3点シュート 成功率", "+6%"], ["クイックジャンパー成功率", "+2%"], ["ランニング", "+14"], ["当たり強さ", "+14"]] }
    ],
    "PG (POINT GUARD)": [
        { name: "アンパン", en: "ANPAN", buffs: [["3点シュート", "+14"], ["ミドルシュート", "+14"], ["スティール", "+12"], ["ランニング", "+12"], ["当たり強さ", "+12"]] },
        { name: "ペドロ", en: "Pedro", buffs: [["スティール成功率", "+16.8%"], ["3点シュートのブロック抵抗", "+6%"], ["ブロック抵抗成功率", "+4.2%"], ["ロングレイアップ成功率", "+3%"], ["3点シュート 成功率", "+3.2%"]] },
        { name: "シンディー", en: "Cindy", buffs: [["Lレイ 守備抵抗", "+2.16%"], ["一般の移動速度", "+14.4cm/s"], ["Sレイアップ 成功率", "+4.5%"], ["持久力の最大量", "+12"], ["ミドルシュート 成功率", "+4%"]] },
        { name: "ヘレナ", en: "Helena", buffs: [["ミドルシュート 成功率", "+7.5%"], ["ミドルシュートのブロック抵抗", "+6%"], ["Lレイ ブロック抵抗", "+6%"], ["Sレイアップ ブロック抵抗", "+6%"], ["Lレイ 守備抵抗", "+1.08%"]] },
        { name: "プロフェッサー", en: "Professor", buffs: [["3点シュート 成功率", "+6%"], ["3点シュート", "+14"], ["Lダンク 発動確率", "+12%"], ["ゴール下シュート成功率", "+3%"], ["スティール成功率", "+8.4%"]] },
        { name: "リトルフォックス", en: "Little Fox", buffs: [["一般の移動速度", "+14.4cm/s"], ["Sレイアップ 成功率", "+4.5%"], ["持久力の回復量", "+7.2"], ["スティールモーション速度", "+8.4%"], ["3点シュート", "+10"]] },
        { name: "ジンジャー", en: "Ginger", buffs: [["パス速度", "+12cm/s"], ["ロングレイアップ成功率", "+3%"], ["持久力の最大量", "+12"], ["スティール成功率", "+8.4%"], ["ミドルシュート 成功率", "+4%"]] },
        { name: "ミカ", en: "Mika", buffs: [["パス", "+14"], ["ゴール下シュートの守備抵抗", "+1.08%"], ["Sレイアップ 成功率", "+4.5%"], ["持久力", "+14"], ["一般の移動速度", "+14.4cm/s"]] },
        { name: "アイラ", en: "Ayla", buffs: [["ミドルシュート", "+12"], ["パス", "+12"], ["リバウンド", "+12"], ["ロングレイアップ", "+10"], ["シュート妨害効果", "+5%"]] },
        { name: "クロイ", en: "Chloe", buffs: [["ダイビングキャッチ成功率", "+7%"], ["ドライブモーション速度", "+5.6%"], ["持久力", "+12"], ["ミドルシュート", "+12"], ["3点シュート距離増加", "+100cm"]] },
        { name: "ジェネーザ", en: "Genesa", buffs: [["ロングダンク", "+12"], ["ロングダンク 成功率", "+2.4%"], ["持久力の最大量", "+12"], ["レイアップ/ダンク距離", "+20cm"], ["パス速度", "+12cm/s"]] },
        { name: "クララ", en: "Clara", buffs: [["スティール", "+12"], ["ロングレイアップ", "+12"], ["ランニング", "+12"], ["3点シュートのブロック抵抗", "+3%"], ["ミドルシュート 成功率", "+7.5%"]] },
        { name: "カジ", en: "Kaji", buffs: [["ドライブモーション速度", "+6.3%"], ["Jシュート ブロック", "+12"], ["リバウンド", "+12"], ["ロングダンク", "+12"], ["パス", "+14"]] }
    ],
    "SG (SHOOTING GUARD)": [
        { name: "キム", en: "Kim", buffs: [["ゴール下シュート守備抵抗", "+2.16%"], ["ゴール下シュート成功率", "+3%"], ["Sダンク 発動確率", "+12%"], ["Sレイアップ ブロック抵抗", "+6%"], ["3点シュートのブロック抵抗", "+3%"]] },
        { name: "カロリーナ", en: "Carolina", buffs: [["3点シュートのブロック抵抗", "+6%"], ["Lダンク 発動確率", "+12%"], ["Lレイ ブロック抵抗", "+6%"], ["Sレイアップ 成功率", "+4.5%"], ["3点シュート 成功率", "+3.2%"]] },
        { name: "フレッド", en: "Fred", buffs: [["スティール成功率", "+16.8%"], ["ミドルシュートのブロック抵抗", "+6%"], ["持久力の回復量", "+7.2"], ["Lダンク ブロック抵抗", "+6%"], ["ゴール下シュート守備抵抗", "+1.08%"]] },
        { name: "リン", en: "Rin", buffs: [["ミドルシュート 成功率", "+7.5%"], ["一般の移動速度", "+14.4cm/s"], ["持久力の最大量", "+12"], ["ノーマーク3点シュート成功率", "+3.2%"], ["スティール成功率", "+8.4%"]] },
        { name: "ジェイソン", en: "Jason", buffs: [["3点シュート 成功率", "+6%"], ["ブロック抵抗成功率", "+4.2%"], ["3点シュート", "+14"], ["ミドル守備抵抗", "+1.44%"], ["ミドルシュート 成功率", "+4%"]] },
        { name: "ウォーカー", en: "Walker", buffs: [["3点シュート守備抵抗", "+1.44%"], ["ミドルシュートのブロック抵抗", "+6%"], ["持久力の回復量", "+7.2"], ["一般の移動速度", "+14.4cm/s"], ["ゴール下シュート守備抵抗", "+1.08%"]] },
        { name: "ナディア", en: "Nadia", buffs: [["持久力の最大量", "+12"], ["スティール成功率", "+16.8%"], ["Lレイ ブロック抵抗", "+6%"], ["一般の移動速度", "+9cm/s"], ["ゴール下シュート守備抵抗", "+0.72%"]] },
        { name: "ノア", en: "Noah", buffs: [["ドライブ時「アンクル」時間増加", "+2.8%"], ["3点シュート", "+10"], ["Lレイ 守備抵抗", "+1.08%"], ["パス", "+14"], ["レイアップ/ダンク距離", "+20cm"]] },
        { name: "牛魔王", en: "Ox Queen", buffs: [["持久力", "+12"], ["ドライブモーション速度", "+6.3%"], ["持久力の回復量", "+3.6"], ["シュート妨害効果", "+6%"], ["3点シュート", "+12"]] },
        { name: "MC.CC", en: "MC.CC", buffs: [["アンクルブレイク抵抗", "+25%"], ["Jシュート ブロック", "+12"], ["Lダンク ブロック抵抗", "+6%"], ["パス", "+12"], ["3点シュート距離増加", "+50cm"]] },
        { name: "ユナ", en: "Yuna", buffs: [["3点シュート守備抵抗", "+1.56%"], ["ミドル守備抵抗", "+1.56%"], ["レイアップ/ダンク距離", "+22.5cm"], ["ランニング", "+12"], ["Jシュート ブロック", "+14"]] },
        { name: "GENA", en: "Gena", buffs: [["3点シュート 成功率", "+6.8%"], ["ドライブモーション速度", "+6.3%"], ["3点シュート守備抵抗", "+1.56%"], ["Lレイ 守備抵抗", "+2.16%"], ["持久力", "+12"]] }
    ]
};
