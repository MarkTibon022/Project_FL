// ── DATA ──
const alphabet = [
  { l: "b", r: "bō", h: "播" },
  { l: "p", r: "pō", h: "坡" },
  { l: "m", r: "mó", h: "摸" },
  { l: "f", r: "fó", h: "佛" },
  { l: "d", r: "dé", h: "得" },
  { l: "t", r: "tè", h: "特" },
  { l: "n", r: "ne", h: "呢" },
  { l: "l", r: "lè", h: "乐" },
  { l: "g", r: "gē", h: "哥" },
  { l: "k", r: "kè", h: "科" },
  { l: "h", r: "hē", h: "喝" },
  { l: "j", r: "jī", h: "鸡" },
  { l: "q", r: "qī", h: "七" },
  { l: "x", r: "xī", h: "西" },
  { l: "zh", r: "zhī", h: "知" },
  { l: "ch", r: "chī", h: "吃" },
  { l: "sh", r: "shì", h: "狮" },
  { l: "r", r: "rì", h: "日" },
  { l: "z", r: "zì", h: "字" },
  { l: "c", r: "cì", h: "刺" },
  { l: "s", r: "sì", h: "四" },
  { l: "a", r: "ā", h: "啊" },
  { l: "o", r: "ō", h: "哦" },
  { l: "e", r: "ē", h: "鹅" },
  { l: "i", r: "yī", h: "一" },
  { l: "u", r: "wú", h: "五" },
  { l: "ü", r: "yǔ", h: "鱼" },
];

const phrasebook = {
  "👋 Greetings": [
    { h: "你好", p: "Nǐ hǎo", e: "Hello" },
    { h: "你好吗？", p: "Nǐ hǎo ma?", e: "How are you?" },
    { h: "我很好", p: "Wǒ hěn hǎo", e: "I'm fine" },
    { h: "谢谢", p: "Xièxiè", e: "Thank you" },
    { h: "不客气", p: "Bù kèqi", e: "You're welcome" },
    { h: "再见", p: "Zàijiàn", e: "Goodbye" },
    { h: "对不起", p: "Duìbuqǐ", e: "Sorry" },
    { h: "没关系", p: "Méi guānxi", e: "It's okay" },
  ],
  "🍜 Food": [
    { h: "我要这个", p: "Wǒ yào zhège", e: "I want this one" },
    { h: "好吃", p: "Hǎo chī", e: "Delicious!" },
    { h: "多少钱？", p: "Duōshǎo qián?", e: "How much?" },
    { h: "一碗米饭", p: "Yī wǎn mǐfàn", e: "One bowl of rice" },
    { h: "水", p: "Shuǐ", e: "Water" },
    { h: "我吃饱了", p: "Wǒ chī bǎo le", e: "I'm full" },
    { h: "买单", p: "Mǎidān", e: "Bill please" },
    { h: "辣不辣？", p: "Là bù là?", e: "Is it spicy?" },
  ],
  "🧭 Travel": [
    {
      h: "厕所在哪里？",
      p: "Cèsuǒ zài nǎlǐ?",
      e: "Where is the toilet?",
    },
    { h: "地铁站", p: "Dìtiě zhàn", e: "Subway station" },
    { h: "出租车", p: "Chūzū chē", e: "Taxi" },
    { h: "我迷路了", p: "Wǒ mí lù le", e: "I'm lost" },
    { h: "右转", p: "Yòu zhuǎn", e: "Turn right" },
    { h: "左转", p: "Zuǒ zhuǎn", e: "Turn left" },
    { h: "直走", p: "Zhí zǒu", e: "Go straight" },
    { h: "飞机场", p: "Fēijī chǎng", e: "Airport" },
  ],
  "🛒 Shopping": [
    { h: "我只是看看", p: "Wǒ zhǐshì kànkàn", e: "Just looking" },
    { h: "太贵了", p: "Tài guì le", e: "Too expensive!" },
    { h: "便宜一点？", p: "Piányí yīdiǎn?", e: "Can it be cheaper?" },
    { h: "我买了", p: "Wǒ mǎi le", e: "I'll take it" },
    {
      h: "有没有大一点？",
      p: "Yǒu méiyǒu dà yīdiǎn?",
      e: "Do you have a bigger one?",
    },
    { h: "可以刷卡吗？", p: "Kěyǐ shuā kǎ ma?", e: "Can I pay by card?" },
  ],
  "💊 Emergency": [
    { h: "我需要帮助", p: "Wǒ xūyào bāngzhù", e: "I need help" },
    { h: "救命！", p: "Jiùmìng!", e: "Help! (Save me!)" },
    { h: "我不舒服", p: "Wǒ bù shūfu", e: "I don't feel well" },
    { h: "医院", p: "Yīyuàn", e: "Hospital" },
    { h: "警察", p: "Jǐngchá", e: "Police" },
    {
      h: "请叫救护车",
      p: "Qǐng jiào jiùhùchē",
      e: "Please call an ambulance",
    },
  ],
};

const flashcards = [
  { h: "你好", p: "Nǐ hǎo", e: "Hello", t: "3rd + 3rd tone" },
  { h: "谢谢", p: "Xièxiè", e: "Thank you", t: "4th + 4th tone" },
  { h: "再见", p: "Zàijiàn", e: "Goodbye", t: "4th + 4th tone" },
  { h: "是", p: "Shì", e: "Yes / Is / To be", t: "4th tone" },
  { h: "不", p: "Bù", e: "No / Not", t: "4th tone" },
  { h: "我", p: "Wǒ", e: "I / Me", t: "3rd tone" },
  { h: "你", p: "Nǐ", e: "You", t: "3rd tone" },
  { h: "他", p: "Tā", e: "He / Him", t: "1st tone" },
  { h: "她", p: "Tā", e: "She / Her", t: "1st tone" },
  { h: "爱", p: "Ài", e: "Love", t: "4th tone" },
  { h: "水", p: "Shuǐ", e: "Water", t: "3rd tone" },
  { h: "饭", p: "Fàn", e: "Rice / Meal", t: "4th tone" },
  { h: "朋友", p: "Péngyou", e: "Friend", t: "2nd + neutral" },
  { h: "中国", p: "Zhōngguó", e: "China", t: "1st + 2nd tone" },
  { h: "漂亮", p: "Piàoliang", e: "Beautiful", t: "4th + neutral" },
  { h: "快乐", p: "Kuàilè", e: "Happy", t: "4th + 4th tone" },
  { h: "学习", p: "Xuéxí", e: "To study / Learn", t: "2nd + 2nd tone" },
  { h: "工作", p: "Gōngzuò", e: "Work / Job", t: "1st + 4th tone" },
  { h: "家", p: "Jiā", e: "Home / Family", t: "1st tone" },
  { h: "钱", p: "Qián", e: "Money", t: "2nd tone" },
];

const dialogues = {
  intro: {
    icon: "🙋",
    label: "自我介绍",
    sub: "Self-introduction",
    lines: [
      {
        s: "A",
        h: "你好！我叫 Mark。",
        p: "Nǐ hǎo! Wǒ jiào Mark.",
        e: "Hello! My name is Mark.",
        r: false,
      },
      {
        s: "B",
        h: "你好！我叫 Mei。你是哪里人？",
        p: "Nǐ hǎo! Wǒ jiào Mei. Nǐ shì nǎlǐ rén?",
        e: "Hello! I'm Mei. Where are you from?",
        r: true,
      },
      {
        s: "A",
        h: "我是菲律宾人。你呢？",
        p: "Wǒ shì Fēilǜbīn rén. Nǐ ne?",
        e: "I'm Filipino. And you?",
        r: false,
      },
      {
        s: "B",
        h: "我是中国人。很高兴认识你！",
        p: "Wǒ shì Zhōngguó rén. Hěn gāoxìng rènshi nǐ!",
        e: "I'm Chinese. Nice to meet you!",
        r: true,
      },
    ],
  },
  restaurant: {
    icon: "🍜",
    label: "餐厅",
    sub: "Restaurant",
    lines: [
      {
        s: "A",
        h: "你好！请问几位？",
        p: "Nǐ hǎo! Qǐngwèn jǐ wèi?",
        e: "Hello! How many people?",
        r: true,
      },
      {
        s: "B",
        h: "两位。",
        p: "Liǎng wèi.",
        e: "Two people.",
        r: false,
      },
      {
        s: "A",
        h: "请跟我来。你们想吃什么？",
        p: "Qǐng gēn wǒ lái. Nǐmen xiǎng chī shénme?",
        e: "Please follow me. What would you like to eat?",
        r: true,
      },
      {
        s: "B",
        h: "我要一碗牛肉面和一杯水。",
        p: "Wǒ yào yī wǎn niúròu miàn hé yī bēi shuǐ.",
        e: "I'd like a bowl of beef noodles and a glass of water.",
        r: false,
      },
      {
        s: "A",
        h: "好的，请稍等！",
        p: "Hǎo de, qǐng shāo děng!",
        e: "Alright, please wait a moment!",
        r: true,
      },
    ],
  },
  shopping: {
    icon: "🛒",
    label: "购物",
    sub: "Shopping",
    lines: [
      {
        s: "B",
        h: "这个多少钱？",
        p: "Zhège duōshǎo qián?",
        e: "How much is this?",
        r: false,
      },
      {
        s: "A",
        h: "二百元。",
        p: "Èr bǎi yuán.",
        e: "200 yuan.",
        r: true,
      },
      {
        s: "B",
        h: "太贵了！便宜一点可以吗？",
        p: "Tài guì le! Piányí yīdiǎn kěyǐ ma?",
        e: "That's too expensive! Can you make it cheaper?",
        r: false,
      },
      {
        s: "A",
        h: "好吧，一百八十元。这是最低价。",
        p: "Hǎo ba, yī bǎi bāshí yuán. Zhè shì zuì dī jià.",
        e: "Okay, 180 yuan. That's the lowest price.",
        r: true,
      },
      {
        s: "B",
        h: "好，我买了！",
        p: "Hǎo, wǒ mǎi le!",
        e: "Deal! I'll take it!",
        r: false,
      },
    ],
  },
  directions: {
    icon: "🗺️",
    label: "问路",
    sub: "Asking Directions",
    lines: [
      {
        s: "B",
        h: "请问，地铁站怎么走？",
        p: "Qǐngwèn, dìtiě zhàn zěnme zǒu?",
        e: "Excuse me, how do I get to the subway station?",
        r: false,
      },
      {
        s: "A",
        h: "直走，然后左转。",
        p: "Zhí zǒu, rán hòu zuǒ zhuǎn.",
        e: "Go straight, then turn left.",
        r: true,
      },
      {
        s: "B",
        h: "走路要多久？",
        p: "Zǒulù yào duōjiǔ?",
        e: "How long does it take to walk?",
        r: false,
      },
      {
        s: "A",
        h: "大概五分钟。",
        p: "Dàgài wǔ fēnzhōng.",
        e: "About five minutes.",
        r: true,
      },
      {
        s: "B",
        h: "谢谢你！",
        p: "Xièxiè nǐ!",
        e: "Thank you!",
        r: false,
      },
    ],
  },
};

const numbers = [
  { n: 0, h: "零", p: "Líng" },
  { n: 1, h: "一", p: "Yī" },
  { n: 2, h: "二", p: "Èr" },
  { n: 3, h: "三", p: "Sān" },
  { n: 4, h: "四", p: "Sì" },
  { n: 5, h: "五", p: "Wǔ" },
  { n: 6, h: "六", p: "Liù" },
  { n: 7, h: "七", p: "Qī" },
  { n: 8, h: "八", p: "Bā" },
  { n: 9, h: "九", p: "Jiǔ" },
  { n: 10, h: "十", p: "Shí" },
  { n: 11, h: "十一", p: "Shíyī" },
  { n: 12, h: "十二", p: "Shí'èr" },
  { n: 20, h: "二十", p: "Èrshí" },
  { n: 50, h: "五十", p: "Wǔshí" },
  { n: 100, h: "一百", p: "Yī bǎi" },
  { n: 1000, h: "一千", p: "Yī qiān" },
  { n: 10000, h: "一万", p: "Yī wàn" },
];

// ── INIT RENDERS ──
function renderAlphabet() {
  const g = document.getElementById("alphaGrid");
  alphabet.forEach((item) => {
    const d = document.createElement("div");
    d.className = "alpha-card";
    d.innerHTML = `<span class="alpha-letter">${item.l}</span><div class="alpha-tones">${item.r}</div><div class="alpha-hanzi">${item.h}</div>`;
    d.onclick = () => {
      speak(item.h);
      showToast("Playing: " + item.r);
    };
    g.appendChild(d);
  });
}

function renderPhrasebook() {
  const cats = document.getElementById("phraseCats");
  const grid = document.getElementById("phraseGrid");
  let activeCat = Object.keys(phrasebook)[0];

  function render(cat) {
    grid.innerHTML = "";
    phrasebook[cat].forEach((ph) => {
      const d = document.createElement("div");
      d.className = "phrase-card";
      d.innerHTML = `<div class="phrase-hanzi">${ph.h}</div><div class="phrase-pinyin">${ph.p}</div><div class="phrase-eng">${ph.e}</div><button class="phrase-speak" onclick="event.stopPropagation();speak('${ph.h}')">🔊</button>`;
      d.onclick = () => speak(ph.h);
      grid.appendChild(d);
    });
  }

  Object.keys(phrasebook).forEach((cat) => {
    const b = document.createElement("button");
    b.className = "cat-btn" + (cat === activeCat ? " active" : "");
    b.textContent = cat;
    b.onclick = () => {
      document
        .querySelectorAll(".cat-btn")
        .forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      activeCat = cat;
      render(cat);
    };
    cats.appendChild(b);
  });
  render(activeCat);
}

function renderNumbers() {
  const g = document.getElementById("numsGrid");
  numbers.forEach((n) => {
    const d = document.createElement("div");
    d.className = "num-card";
    d.innerHTML = `<div class="num-arabic">${n.n}</div><div class="num-hanzi">${n.h}</div><div class="num-pinyin">${n.p}</div>`;
    d.onclick = () => {
      speak(n.h);
      showToast(n.h + " — " + n.p);
    };
    g.appendChild(d);
  });
}

function renderDialogues() {
  const menu = document.getElementById("dlgMenu");
  Object.entries(dialogues).forEach(([key, dlg], i) => {
    const b = document.createElement("button");
    b.className = "dlg-btn" + (i === 0 ? " active" : "");
    b.innerHTML = `<span class="dlg-title">${dlg.icon} ${dlg.label}</span><span class="dlg-subtitle">${dlg.sub}</span>`;
    b.onclick = () => {
      document
        .querySelectorAll(".dlg-btn")
        .forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      loadDialogue(key);
    };
    menu.appendChild(b);
  });
  loadDialogue("intro");
}

function loadDialogue(key) {
  const dlg = dialogues[key];
  const content = document.getElementById("dlgContent");
  const linesHTML = dlg.lines
    .map(
      (l) => `
    <div class="dlg-line${l.r ? " right" : ""}">
      <div class="dlg-avatar ${l.r ? "avatar-b" : "avatar-a"}">${l.s}</div>
      <div class="dlg-bubble">
        <div class="dlg-hanzi">${l.h}</div>
        <div class="dlg-pinyin">${l.p}</div>
        <div class="dlg-eng">${l.e}</div>
      </div>
    </div>
  `,
    )
    .join("");
  content.innerHTML = `
    <div class="dialogue-lines">${linesHTML}</div>
    <button class="dlg-speak-all" onclick="speakDialogue('${key}')">🔊 Listen to Full Conversation</button>
  `;
}

function speakDialogue(key) {
  const lines = dialogues[key].lines;
  let i = 0;
  function next() {
    if (i >= lines.length) return;
    const txt = lines[i++].h;
    window.speechSynthesis.cancel();
    const msg = new SpeechSynthesisUtterance(txt);
    msg.lang = "zh-CN";
    msg.rate = 0.75;
    msg.onend = () => setTimeout(next, 600);
    const v = window.speechSynthesis
      .getVoices()
      .find((v) => v.lang.includes("zh"));
    if (v) msg.voice = v;
    window.speechSynthesis.speak(msg);
  }
  next();
}

// ── FLASHCARDS ──
let fcIdx = 0,
  fcCorrect = 0,
  fcFlipped = false;
const shuffled = [...flashcards].sort(() => Math.random() - 0.5);

function fcUpdate() {
  const card = shuffled[fcIdx];
  document.getElementById("fcHanzi").textContent = card.h;
  document.getElementById("fcPinyin").textContent = card.p;
  document.getElementById("fcEng").textContent = card.e;
  document.getElementById("fcTone").textContent = "Tones: " + card.t;
  document.getElementById("fcCurrent").textContent = fcIdx + 1;
  document.getElementById("fcTotal").textContent = shuffled.length;
  document.getElementById("fcCorrect").textContent = fcCorrect;
  document.getElementById("fcProgress").style.width =
    (fcIdx / shuffled.length) * 100 + "%";
  const inner = document.getElementById("fcInner");
  inner.classList.remove("flipped");
  fcFlipped = false;
}

function flipCard() {
  const inner = document.getElementById("fcInner");
  inner.classList.toggle("flipped");
  fcFlipped = !fcFlipped;
}

function fcRate(r) {
  if (r === "good") fcCorrect++;
  fcIdx = (fcIdx + 1) % shuffled.length;
  fcUpdate();
}

// ── QUIZ ──
let quizScore = 0,
  quizTotal = 0,
  quizAnswered = false;
const quizPool = [...flashcards].sort(() => Math.random() - 0.5);
let quizIdx = 0;

function renderQuiz() {
  if (quizIdx >= quizPool.length) {
    document.getElementById("quizWrap").innerHTML = `
      <div class="quiz-result">
        <div style="font-size:2.5rem">🎉</div>
        <div class="section-heading" style="margin:12px 0 4px">Quiz Complete!</div>
        <div class="quiz-score-big">${quizScore}/${quizPool.length}</div>
        <div style="color:var(--muted);margin-bottom:20px">
          ${quizScore >= quizPool.length * 0.8 ? "🏆 Excellent work!" : quizScore >= quizPool.length * 0.5 ? "👍 Good effort!" : "📚 Keep practicing!"}
        </div>
        <button class="next-btn" onclick="restartQuiz()">🔄 Try Again</button>
      </div>`;
    return;
  }
  const q = quizPool[quizIdx];
  const wrong = flashcards
    .filter((x) => x.h !== q.h)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
  const opts = [...wrong.map((x) => x.e), q.e].sort(() => Math.random() - 0.5);
  document.getElementById("quizWrap").innerHTML = `
    <div class="quiz-question">
      <div class="quiz-q-hanzi">${q.h}</div>
      <div class="quiz-q-label">What does this mean? — ${q.p}</div>
    </div>
    <div class="quiz-options" id="quizOpts">
      ${opts.map((o) => `<button class="quiz-opt" onclick="checkAnswer(this,'${o.replace(/'/g, "\\'")}','${q.e.replace(/'/g, "\\'")}','${q.h}')">${o}</button>`).join("")}
    </div>
    <div class="quiz-status">Question ${quizIdx + 1} of ${quizPool.length} &nbsp;|&nbsp; Score: ${quizScore}</div>
  `;
}

function checkAnswer(btn, chosen, correct, hanzi) {
  if (quizAnswered) return;
  quizAnswered = true;
  document.querySelectorAll(".quiz-opt").forEach((b) => {
    b.disabled = true;
    if (b.textContent === correct) b.classList.add("correct");
  });
  if (chosen === correct) {
    quizScore++;
    speak(hanzi);
  } else btn.classList.add("wrong");
  setTimeout(() => {
    quizIdx++;
    quizAnswered = false;
    renderQuiz();
  }, 1400);
}

function restartQuiz() {
  quizScore = 0;
  quizIdx = 0;
  quizAnswered = false;
  quizPool.sort(() => Math.random() - 0.5);
  renderQuiz();
}

// ── AI TRANSLATOR ──
async function aiTranslate() {
  const input = document.getElementById("engInput").value.trim();
  if (!input) return;
  const out = document.getElementById("chiOutput");
  const btn = document.querySelector(".translate-btn");
  btn.disabled = true;
  btn.textContent = "Translating…";
  out.innerHTML = `<span class="output-placeholder loading-dots">Translating</span>`;

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        messages: [
          {
            role: "user",
            content: `Translate the following English text to Mandarin Chinese. Reply ONLY with a JSON object (no markdown, no backticks) with these fields: "hanzi" (Chinese characters), "pinyin" (romanization with tone marks), "english" (clean English meaning), "note" (one short grammar or cultural note in Filipino/Tagalog if helpful, or empty string). Text: "${input}"`,
          },
        ],
      }),
    });
    const data = await res.json();
    const txt = data.content.map((b) => b.text || "").join("");
    let parsed;
    try {
      parsed = JSON.parse(txt.replace(/```json|```/g, "").trim());
    } catch {
      parsed = null;
    }

    if (parsed && parsed.hanzi) {
      out.innerHTML = `
        <div class="hanzi-big">${parsed.hanzi}</div>
        <div class="pinyin-line">${parsed.pinyin}</div>
        <div class="eng-hint">${parsed.english}</div>
        ${parsed.note ? `<div style="margin-top:12px;font-size:0.8rem;color:var(--muted);max-width:90%">💡 ${parsed.note}</div>` : ""}
        <button class="speak-btn-float" onclick="speak('${parsed.hanzi.replace(/'/g, "\\'")}')">🔊</button>
      `;
    } else {
      out.innerHTML = `<span class="output-placeholder">Hmm, could not parse translation. Try again.</span>`;
    }
  } catch (e) {
    out.innerHTML = `<span class="output-placeholder" style="color:var(--accent)">Translation failed. Check connection.</span>`;
  }
  btn.disabled = false;
  btn.textContent = "Translate →";
}

// ── SPEECH ──
function speak(text) {
  if (!text || text === "--") return;
  window.speechSynthesis.cancel();
  const msg = new SpeechSynthesisUtterance(text);
  const v = window.speechSynthesis
    .getVoices()
    .find((v) => v.lang.includes("zh"));
  if (v) msg.voice = v;
  msg.lang = "zh-CN";
  msg.rate = 0.75;
  window.speechSynthesis.speak(msg);
}
window.speechSynthesis.onvoiceschanged = () =>
  window.speechSynthesis.getVoices();

// ── UTILS ──
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 1800);
}

function updateCount() {
  const v = document.getElementById("engInput").value.length;
  document.getElementById("charCount").textContent = v;
}

function toggleTheme() {
  document.getElementById("mainBody").classList.toggle("dark");
  document.querySelector(".theme-btn").textContent = document
    .getElementById("mainBody")
    .classList.contains("dark")
    ? "☀️"
    : "🌙";
}

function switchTab(id, btn) {
  document
    .querySelectorAll(".tab-pane")
    .forEach((p) => p.classList.remove("active"));
  document
    .querySelectorAll(".tab-btn")
    .forEach((b) => b.classList.remove("active"));
  document.getElementById("tab-" + id).classList.add("active");
  btn.classList.add("active");
}

// ── STREAK ──
function updateStreak() {
  const today = new Date().toDateString();
  const stored = localStorage.getItem("xuexiDate");
  let streak = parseInt(localStorage.getItem("xuexiStreak") || "0");
  if (stored !== today) {
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    streak = stored === yesterday ? streak + 1 : 1;
    localStorage.setItem("xuexiDate", today);
    localStorage.setItem("xuexiStreak", streak);
  }
  document.getElementById("streakCount").textContent = streak;
}

// ── BOOT ──
renderAlphabet();
renderPhrasebook();
renderNumbers();
renderDialogues();
fcUpdate();
renderQuiz();
updateStreak();
