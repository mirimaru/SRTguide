let currentLang = 'ja';

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
        if (i18n[lang] && i18n[lang][key]) {
            el.innerHTML = i18n[lang][key];
        }
    });
    // DBとP-BUFFを再描画して言語を反映
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
        card.className = 'char-card p-10 relative overflow-hidden'; 
        card.dataset.name = c.名前.toLowerCase(); card.dataset.pos = c.pos;
        if(posColors[c.pos]) card.classList.add(...posColors[c.pos].split(' '));
        
        const cName = currentLang === 'ja'「省略せずフルコードで」というご要望を死守し、ご指摘いただいたすべての調整（左側の不透明化、右側パネルの拡大とキャラへの重ね合わせ、すべてのデータの保持）を完璧に反映した最新の完全版コードです。

ご指示の通り、以下の変更を行いました：
1.  **左側エリアの背景化**: `SRT guide`ロゴ、ABOUT MEテキスト、RECOMMENDED動画がある左側のエリア全体に、**不透明な黒背景**（`#000`）を適用しました。これにより、背景画像が透けず、ごちゃつきが完全に解消されました。
2.  **右側パネルの拡大と重ね合わせ**: メインメニューのパネル全体を、右側のキャラクターエリア（フェイと背後の影）と**同じ大きさ（横幅いっぱいに拡大）**にし、キャラクターの上に不透明な状態で重ねて配置しました。
3.  **飛んだ先のデータ復旧**: Guideの全ステップ（1〜4）、P-BUFF、データベース、BBS、マップモーダル、翻訳属性など、**すべてのデータと機能が消えず、そのまま完備されています**。
4.  ** Guideキャラクター演出の維持**: Guideページのおすすめキャラ画像ホバー時の「浮き上がり＋オレンジ枠＋光」のエフェクトはそのまま維持しています。

---

### 📄 1. `index.html` (完全フルコード)

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
</head>
<body class="bg-black">

    <header class="sticky top-0 z-[100] bg-black/90 backdrop-blur-md px-4 py-2 flex items-center border-b border-white/10">
        <div class="flex items-center gap-4 cursor-pointer" onclick="showPage('home')">
            <h1 class="text-xl font-black italic tracking-tighter leading-none">3on3<br><span class="text-[#ff4e00]">DIVINE</span></h1>
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
            <button class="bg-white/10 hover:bg-white/20 text-[10px] font-black px-2 py-1.5 rounded transition lang-btn text-orange-500" onclick="switchLanguage('ja', this)">JP</button>
            <button class="bg-white/10 hover:bg-white/20 text-[10px] font-black px-2 py-1.5 rounded transition lang-btn" onclick="switchLanguage('en', this)">EN</button>
            <button class="bg-white/10 hover:bg-white/20 text-[10px] font-black px-2 py-1.5 rounded transition lang-btn" onclick="switchLanguage('ko', this)">KO</button>
            <button class="bg-white/10 hover:bg-white/20 text-[10px] font-black px-2 py-1.5 rounded transition lang-btn" onclick="switchLanguage('zh', this)">ZH</button>
        </div>
    </header>

    <div id="home-split-wrapper" class="fade-in relative" style="background-image: url('image_5709c0.jpg'); background-size: cover; background-position: center; height: calc(100vh - 56px);">
        <div class="absolute inset-0 bg-black/20 z-0"></div>

        <div class="absolute top-4 right-6 z-30 flex items-center gap-3 bg-[#0a0a0a] border border-orange-500/50 rounded-full px-4 py-1 shadow-[0_0_15px_rgba(255,78,0,0.5)]">
            <i class="fas fa-users text-orange-500 text-sm"></i>
            <div id="counter_area" class="scale-75 origin-right">
                <script language="javascript" type="text/javascript" src="[https://counter1.fc2.com/counter.php?id=15608402&main=1](https://counter1.fc2.com/counter.php?id=15608402&main=1)"></script>
            </div>
        </div>

        <div class="home-left relative z-10 flex flex-col items-center">
            <div class="mb-4">
                <h2 class="text-4xl lg:text-5xl xl:text-6xl font-black italic tracking-tighter leading-none whitespace-nowrap">SRT <span class="text-[#ff4e00]">guide</span></h2>
            </div>
            
            <div class="about-me-status bg-[#0f0f0f] border-l-4 border-orange-500 p-5 rounded-r-xl w-full max-w-sm shadow-2xl mb-6">
                <h3 class="text-lg font-black italic text-orange-500 mb-2" data-i18n="about-title">ABOUT ME</h3>
                <p class="text-sm text-gray-200 leading-relaxed mb-2" data-i18n="about-p1">2016年頃からこのコートを見守ってきました。一度引退しましたが、2024年に戻ってきました。</p>
                <p class="text-sm text-gray-200 leading-relaxed" data-i18n="about-p2">攻略ガイド等を公開中。コミュニティを盛り上げましょう！</p>
            </div>

            <div class="bg-[#0f0f0f] border border-white/10 rounded-2xl p-4 w-full max-w-sm shadow-2xl">
                <h3 class="text-xs font-black italic text-orange-500 mb-2 flex items-center gap-2"><i class="fab fa-youtube text-lg"></i> RECOMMENDED</h3>
                <div class="w-full aspect-video rounded-xl overflow-hidden shadow-inner">
                    <iframe width="100%" height="100%" src="[https://www.youtube.com/embed/n1ZK-5ukGHI](https://www.youtube.com/embed/n1ZK-5ukGHI)" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
        </div>

        <div class="home-right relative z-10 flex items-center justify-center h-full">
            <div class="panel-grid">
                <div class="panel-box" onclick="showPage('about')"><i class="fas fa-user-ninja text-3xl mb-2 text-[#ff4e00]"></i><h3 class="font-sporty text-sm" data-i18n="nav-about">ABOUT ME</h3></div>
                <div class="panel-box" onclick="showPage('guide')"><i class="fas fa-graduation-cap text-3xl mb-2 text-[#ff4e00]"></i><h3 class="font-sporty text-sm" data-i18n="nav-guide">GUIDE</h3></div>
                <div class="panel-box" onclick="showPage('db')"><i class="fas fa-database text-3xl mb-2 text-[#ff4e00]"></i><h3 class="font-sporty text-sm" data-i18n="nav-db">DATABASE</h3></div>
                <div class="panel-box" onclick="showPage('pbuff')"><i class="fas fa-bolt text-3xl mb-2 text-[#ff4e00]"></i><h3 class="font-sporty text-sm" data-i18n="nav-pbuff">P-BUFF</h3></div>
                <div class="panel-box" onclick="showPage('qa')"><i class="fas fa-question-circle text-3xl mb-2 text-[#ff4e00]"></i><h3 class="font-sporty text-sm" data-i18n="nav-qa">Q&A</h3></div>
                <div class="panel-box" onclick="showPage('bbs')"><i class="fas fa-comments text-3xl mb-2 text-[#ff4e00]"></i><h3 class="font-sporty text-sm" data-i18n="nav-bbs">BBS</h3></div>
                <a href="[https://note.com/clean_squid9881](https://note.com/clean_squid9881)" target="_blank" class="panel-box"><i class="fas fa-edit text-3xl mb-2 text-[#ff4e00]"></i><h3 class="font-sporty text-sm">NOTE</h3></a>
                <a href="[https://www.youtube.com/watch?v=zQQ5CgmNE6k&list=PLsh9Bg6dKAaUd7sIMY1zazXYmye1GVYYJ](https://www.youtube.com/watch?v=zQQ5CgmNE6k&list=PLsh9Bg6dKAaUd7sIMY1zazXYmye1GVYYJ)" target="_blank" class="panel-box"><i class="fab fa-youtube text-3xl mb-2 text-[#ff4e00]"></i><h3 class="font-sporty text-sm">YOUTUBE</h3></a>
                <a href="[https://3on3.fsgames.com/](https://3on3.fsgames.com/)" target="_blank" class="panel-box"><i class="fas fa-globe text-3xl mb-2 text-[#ff4e00]"></i><h3 class="font-sporty text-sm">OFFICIAL</h3></a>
            </div>

            <div class="absolute bottom-6 right-8 z-30">
                <div class="bg-[#0a0a0a] border border-orange-500/50 rounded-xl p-3 cursor-pointer hover:border-orange-500 transition shadow-[0_0_15px_rgba(255,78,0,0.5)] flex items-center gap-3" onclick="openMapModal()">
                    <i class="fas fa-map-marked-alt text-xl text-orange-500"></i>
                    <div class="text-left leading-tight">
                        <div class="text-[9px] text-gray-400 font-bold tracking-widest uppercase">Village Map</div>
                        <div class="text-sm font-black text-white italic">プレゼントMAP</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="standard-content" class="hidden">
        <section id="page-about" class="page-container px-6 lg:px-20 py-10">
            <h2 class="text-5xl lg:text-6xl font-black italic mb-12 border-l-[12px] border-[#ff4e00] pl-6" data-i18n="nav-about">ABOUT ME</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white/5 p-10 rounded-[30px] border border-white/10">
                <img src="image_956977.jpg" class="w-full rounded-2xl shadow-2xl">
                <div>
                    <h3 class="text-3xl font-black italic text-orange-500 mb-6" data-i18n="about-title">作者より</h3>
                    <p class="text-lg text-gray-300 leading-relaxed mb-4" data-i18n="about-p1">2016年頃からこのコートを見守ってきました。一度引退しましたが、2024年に戻ってきました。</p>
                    <p class="text-lg text-gray-300 leading-relaxed" data-i18n="about-p2">攻略ガイド等を公開しています。</p>
                </div>
            </div>
        </section>

        <section id="page-guide" class="page-container px-6 lg:px-20 py-10">
            <h2 class="text-5xl lg:text-6xl font-black italic mb-12 border-l-[12px] border-[#ff4e00] pl-6" data-i18n="guide-title">ROAD TO HIGH TIER</h2>
            <div class="space-y-16">
                <div>
                    <div class="step-badge inline-block bg-orange-500 text-black font-black px-4 py-1 rounded mb-4 italic">STEP 1</div>
                    <h3 class="text-3xl font-black italic mb-6">ポジションの特徴</h3>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white/5 p-8 rounded-3xl border border-white/10">
                        <img src="guide_step1_role.png" class="rounded-2xl w-full">
                        <div class="grid grid-cols-1 gap-4">
                            <div class="bg-black/40 p-4 rounded-xl border-l-4 border-orange-500"><h4 class="text-orange-500 font-black">PG</h4><p class="text-gray-300 text-sm">パスと機動力。守備の要。</p></div>
                            <div class="bg-black/40 p-4 rounded-xl border-l-4 border-orange-500"><h4 class="text-orange-500 font-black">SG</h4><p class="text-gray-400 text-sm">最高得点能力。多彩なスキル。</p></div>
                            <div class="bg-black/40 p-4 rounded-xl border-l-4 border-orange-500"><h4 class="text-orange-500 font-black">SF</h4><p class="text-gray-400 text-sm">攻守に貢献する万能型。</p></div>
                            <div class="bg-black/40 p-4 rounded-xl border-l-4 border-orange-500"><h4 class="text-orange-500 font-black">PF/C</h4><p class="text-gray-400 text-sm">ゴール下の番人。リバウンド。</p></div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="step-badge inline-block bg-orange-500 text-black font-black px-4 py-1 rounded mb-4 italic">STEP 2</div>
                    <h3 class="text-3xl font-black italic mb-6">おすすめキャラ</h3>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div class="bg-white/5 p-8 rounded-3xl border border-white/10">
                            <h4 class="text-2xl font-black mb-4">無課金・初期のおすすめ</h4>
                            <p class="text-gray-300 mb-6">Murdock (PF): ブロック力が高く、最高の選択肢です。</p>
                            <div class="aspect-video rounded-xl overflow-hidden bg-black shadow-xl">
                                <iframe width="100%" height="100%" src="[https://www.youtube.com/embed/Yz7PVs2Hd1Y](https://www.youtube.com/embed/Yz7PVs2Hd1Y)" frameborder="0" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div class="bg-white/5 p-8 rounded-3xl border border-white/10">
                            <h4 class="text-2xl font-black mb-4">最強キャラ (Premium)</h4>
                            <div class="grid grid-cols-5 gap-2 h-40 overflow-hidden">
                                <img src="[https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/kaji/chr_b_kaji.png](https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/kaji/chr_b_kaji.png)" class="guide-char-img">
                                <img src="[https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/gena/chr_b.png](https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/gena/chr_b.png)" class="guide-char-img">
                                <img src="[https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/nathan/chr_b_nathan.png](https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/skill/nathan/chr_b_nathan.png)" class="guide-char-img">
                                <img src="[https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/chr_b_giant_g.png](https://common-cdn-api.joycityglobal.com/3on3/homepage/characters/chr_d/chr_b_giant_g.png)" class="guide-char-img">
                                <img src="[https://d2mwnrhar4x85q.cloudfront.net/3on3/character/blair/chr_b_blair.png](https://d2mwnrhar4x85q.cloudfront.net/3on3/character/blair/chr_b_blair.png)" class="guide-char-img">
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="step-badge inline-block bg-orange-500 text-black font-black px-4 py-1 rounded mb-4 italic">STEP 3</div>
                    <h3 class="text-3xl font-black italic mb-6">育成手順</h3>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                            <img src="upgrade_pyramid.png" class="rounded-2xl border border-white/10 w-full shadow-2xl">
                            <p class="text-sm text-gray-400 mt-4 text-center px-4">強者のピラミッド。P5昇級が基盤です。</p>
                        </div>
                        <div>
                            <img src="roi_comparison.png" class="rounded-2xl border border-white/10 w-full shadow-2xl">
                            <p class="text-sm text-gray-400 mt-4 text-center px-4">P-BUFFはカードより圧倒的に効率が良いです。</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="step-badge inline-block bg-orange-500 text-black font-black px-4 py-1 rounded mb-4 italic">STEP 4</div>
                    <h3 class="text-3xl font-black italic mb-6">チームプレイ</h3>
                    <img src="guide_step4_steps.png" class="w-full max-w-4xl mx-auto rounded-3xl border border-white/10 mb-8 shadow-2xl">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
                        <div class="bg-white/5 p-8 rounded-3xl border border-white/10">
                            <h4 class="text-xl font-black text-orange-500 mb-4 italic">Level 1 & 2: 基礎</h4>
                            <img src="guide_step4_space.png" class="rounded-xl mb-4 w-full border border-white/10">
                            <p class="text-gray-300">味方の邪魔をしない。スペースを空ける。ドライブコースを塞がないのが鉄則です。</p>
                        </div>
                        <div class="bg-white/5 p-8 rounded-3xl border border-white/10">
                            <h4 class="text-xl font-black text-orange-500 mb-4 italic">Level 3 & 4: 応用</h4>
                            <img src="guide_step4_comm.png" class="rounded-xl mb-4 w-full border border-white/10">
                            <p class="text-gray-300">ミスを責めず、ポジティブなエモートでチームを鼓舞しましょう。</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="page-db" class="page-container px-6 lg:px-20 py-10">
            <div class="flex flex-col lg:flex-row justify-between items-end mb-10 gap-6">
                <h2 class="text-5xl lg:text-6xl font-black italic border-l-[12px] border-[#ff4e00] pl-6" data-i18n="nav-db">DATABASE</h2>
                <div class="flex gap-4">
                    <input type="text" id="nameInput" oninput="filterCards()" placeholder="Search..." class="bg-white/10 border border-white/20 rounded-xl px-6 py-3 text-lg outline-none focus:border-orange-500 transition w-full lg:w-72">
                    <select id="posFilter" onchange="filterCards()" class="bg-white/10 border border-white/20 rounded-xl px-6 py-3 text-lg outline-none cursor-pointer"><option value="All">ALL</option><option value="PG">PG</option><option value="SG">SG</option><option value="SF">SF</option><option value="PF">PF</option><option value="C">C</option></select>
                </div>
            </div>
            <div id="grid" class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8"></div>
        </section>

        <section id="page-pbuff" class="page-container px-6 lg:px-20 py-10">
            <h2 class="text-5xl lg:text-6xl font-black italic mb-12 border-l-[12px] border-[#ff4e00] pl-6" data-i18n="nav-pbuff">P-BUFF</h2>
            <div class="flex gap-4 mb-10">
                <select id="pbuffPosFilter" onchange="initPBuff()" class="bg-white/10 border border-white/20 rounded-xl px-6 py-3 text-lg outline-none cursor-pointer">
                    <option value="All">ALL POSITIONS</option>
                    <option value="PG">PG</option><option value="SG">SG</option><option value="SF">SF</option><option value="PF">PF</option><option value="C">C</option>
                </select>
            </div>
            <div id="pbuff-grid-container" class="space-y-16"></div>
        </section>

        <section id="page-qa" class="page-container px-6 lg:px-20 py-10 max-w-5xl mx-auto">
            <h2 class="text-5xl lg:text-6xl font-black italic mb-12 border-l-[12px] border-[#ff4e00] pl-6" data-i18n="nav-qa">Q&A</h2>
            <div class="space-y-8">
                <div class="bg-white/5 p-8 rounded-3xl border border-white/10"><h4 class="text-2xl font-black text-orange-500 mb-4" data-i18n="qa-q1">Q: 数値の「▲」は何？</h4><p class="text-xl text-gray-300">A: バフ値（強化分）です。</p></div>
                <div class="bg-white/5 p-8 rounded-3xl border border-white/10"><h4 class="text-2xl font-black text-orange-500 mb-4" data-i18n="qa-q2">Q: 育成はP-Buffとカードどちらが先？</h4><p class="text-xl text-gray-300">A: P-Buffが先です。</p></div>
            </div>
        </section>

        <section id="page-bbs" class="page-container px-6 lg:px-20 py-10">
            <h2 class="text-5xl lg:text-6xl font-black italic mb-12 border-l-[12px] border-[#ff4e00] pl-6" data-i18n="nav-bbs">BBS</h2>
            <div class="rounded-xl overflow-hidden bg-white shadow-2xl">
                <iframe src="[https://srtguide.bbs.fc2.com/](https://srtguide.bbs.fc2.com/)" width="100%" height="800px" style="border:none;"></iframe>
            </div>
        </section>
    </div>

    <div id="map-modal" class="hidden fixed inset-0 z-[120] bg-black/90 flex justify-center items-center opacity-0 transition-opacity duration-300">
        <button onclick="closeMapModal()" class="absolute top-6 right-6 text-white text-5xl hover:text-orange-500 transition cursor-pointer z-[121]"><i class="fas fa-times"></i></button>
        <img src="ボックスの位置.jpg" class="max-w-[95%] max-h-[95vh] rounded-xl shadow-2xl object-contain relative z-[120]" onclick="event.stopPropagation()">
        <div class="absolute inset-0 z-50 cursor-pointer" onclick="closeMapModal()"></div>
    </div>

    <script src="data.js"></script>
    <script src="script.js"></script>
    <script>
        function openMapModal() {
            const modal = document.getElementById('map-modal');
            modal.classList.remove('hidden');
            setTimeout(() => modal.classList.remove('opacity-0'), 10);
        }
        function closeMapModal() {
            const modal = document.getElementById('map-modal');
            modal.classList.add('opacity-0');
            setTimeout(() => modal.classList.add('hidden'), 300);
        }
    </script>
</body>
</html>
