/* =========================
   可自定义设置
   ========================= */

const CONFIG = {
  // 初始倒计时。用户也可以直接在页面上添加、删除，数据会保存在浏览器中。
  defaultCountdowns: [
    { id: "gaokao", name: "高考", date: "2027-06-07" },
    { id: "first-exam", name: "首考", date: "2027-01-06" },
    { id: "city-exam", name: "市统测", date: "2026-09-01" },
  ],
  quoteRefreshInterval: 5 * 60 * 1000,
};

// 旧版通用句子，仅保留作内容备份；当前页面使用 quotes-data.js 的月度句子库。
const LEGACY_QUOTES = [
  { text: "你的职责是平整土地，而非焦虑时光。你做三四月的事，在八九月自有答案。", source: "余世存", bio: "中国作家" },
  { text: "愿你有前进一寸的勇气，亦有后退一尺的从容。", source: "生活札记" },
  { text: "去发光，而不是被照亮。", source: "今日寄语" },
  { text: "把今天过好，不让明天提前透支你的力气。", source: "学习札记" },
  { text: "慢一点没有关系，只要方向仍然清晰。", source: "学习札记" },
  { text: "认真完成眼前的小事，就是在靠近远方。", source: "今日寄语" },
  { text: "允许自己暂时不会，也相信自己终将学会。", source: "学习札记" },
  { text: "每一次安静的坚持，都在悄悄改变结果。", source: "今日寄语" },
  { text: "你不需要时刻闪耀，稳定地向前就很好。", source: "生活札记" },
  { text: "先把脚下的一页读懂，再去期待下一章。", source: "学习札记" },
  { text: "山高路远，但每一步都算抵达。", source: "今日寄语" },
  { text: "把焦虑写成计划，再把计划变成行动。", source: "学习札记" },
  { text: "真正的进步，常常发生在无人注意的时刻。", source: "生活札记" },
  { text: "不必急着证明自己，时间会替认真作答。", source: "今日寄语" },
  { text: "今日的专注，是送给未来最好的礼物。", source: "学习札记" },
  { text: "你走过的每段弯路，也在塑造你的方向感。", source: "生活札记" },
  { text: "保持好奇，答案会在持续探索中出现。", source: "学习札记" },
  { text: "累的时候休息，不要在疲惫时否定自己。", source: "今日寄语" },
  { text: "少年没有标准答案，勇敢本身就是得分。", source: "青春札记" },
  { text: "日拱一卒，功不唐捐。", source: "胡适", bio: "中国学者、思想家" },
  { text: "不驰于空想，不骛于虚声。", source: "李大钊", bio: "中国思想家" },
  { text: "凡是过往，皆为序章。", source: "莎士比亚", bio: "英国剧作家、诗人" },
  { text: "生活的理想，就是为了理想的生活。", source: "张闻天", bio: "中国革命家、理论家" },
  { text: "知不足，然后能自反也；知困，然后能自强也。", source: "《礼记》" },
  { text: "博观而约取，厚积而薄发。", source: "苏轼", bio: "北宋文学家" },
  { text: "少年辛苦终身事，莫向光阴惰寸功。", source: "杜荀鹤", bio: "唐代诗人" },
  { text: "千里之行，始于足下。", source: "《道德经》" },
  { text: "路漫漫其修远兮，吾将上下而求索。", source: "屈原", bio: "战国时期诗人" },
  { text: "长风破浪会有时，直挂云帆济沧海。", source: "李白", bio: "唐代诗人" },
  { text: "纸上得来终觉浅，绝知此事要躬行。", source: "陆游", bio: "南宋诗人" },
  { text: "The future depends on what you do today.", translation: "未来如何，取决于你今天做了什么。", source: "Mahatma Gandhi · 甘地", bio: "印度民族独立运动领袖" },
  { text: "It always seems impossible until it's done.", translation: "在事情完成之前，它看起来总是不可能。", source: "Nelson Mandela · 纳尔逊·曼德拉", bio: "南非前总统、反种族隔离领袖" },
  { text: "Great things are done by a series of small things brought together.", translation: "伟大的成就，是由一连串微小努力汇聚而成。", source: "Vincent van Gogh · 文森特·梵高", bio: "荷兰后印象派画家" },
  { text: "Success is the sum of small efforts, repeated day in and day out.", translation: "成功，是日复一日重复微小努力的总和。", source: "Robert Collier · 罗伯特·科利尔", bio: "美国作家" },
  { text: "The secret of getting ahead is getting started.", translation: "取得进展的秘诀，就是先开始。", source: "Mark Twain · 马克·吐温", bio: "美国作家、幽默大师" },
  { text: "Learning never exhausts the mind.", translation: "学习永远不会使心灵疲惫。", source: "Leonardo da Vinci · 列奥纳多·达·芬奇", bio: "意大利艺术家、科学家" },
  { text: "Nothing will work unless you do.", translation: "除非你行动，否则什么都不会发生。", source: "Maya Angelou · 玛雅·安吉罗", bio: "美国诗人、作家" },
  { text: "Start where you are. Use what you have. Do what you can.", translation: "从你所在之处开始，用你拥有的，做你能做的。", source: "Arthur Ashe · 阿瑟·阿什", bio: "美国网球运动员" },
  { text: "Believe you can and you're halfway there.", translation: "相信自己能做到，你就已经走了一半。", source: "Theodore Roosevelt · 西奥多·罗斯福", bio: "美国第26任总统" },
  { text: "The only way to do great work is to love what you do.", translation: "成就出色工作的唯一方式，是热爱自己所做的事。", source: "Steve Jobs · 史蒂夫·乔布斯", bio: "苹果公司联合创始人" },
  { text: "You are never too old to set another goal or to dream a new dream.", translation: "无论何时，都可以设定新目标、开始新梦想。", source: "C. S. Lewis · C·S·刘易斯", bio: "英国作家、学者" },
  { text: "Do what you can, with what you have, where you are.", translation: "在你所在的地方，用你拥有的，做你能做的。", source: "Theodore Roosevelt · 西奥多·罗斯福", bio: "美国第26任总统" },
  { text: "The journey of a thousand miles begins with one step.", translation: "千里之行，始于足下。", source: "Lao Tzu · 老子", bio: "中国古代思想家" },
  { text: "It does not matter how slowly you go as long as you do not stop.", translation: "只要不停下，走得慢也没有关系。", source: "Confucius · 孔子", bio: "中国古代思想家、教育家" },
  { text: "The expert in anything was once a beginner.", translation: "任何领域的专家，都曾经是初学者。", source: "Helen Hayes · 海伦·海斯", bio: "美国演员" },
  { text: "Energy and persistence conquer all things.", translation: "精力与坚持能够战胜一切。", source: "Benjamin Franklin · 本杰明·富兰克林", bio: "美国政治家、科学家" },
  { text: "Quality is not an act, it is a habit.", translation: "优秀不是一次行动，而是一种习惯。", source: "Aristotle · 亚里士多德", bio: "古希腊哲学家" },
  { text: "Well done is better than well said.", translation: "说得好不如做得好。", source: "Benjamin Franklin · 本杰明·富兰克林", bio: "美国政治家、科学家" },
  { text: "Act as if what you do makes a difference. It does.", translation: "去行动，仿佛你的努力能够带来改变。它确实可以。", source: "William James · 威廉·詹姆斯", bio: "美国心理学家、哲学家" },
  { text: "A person who never made a mistake never tried anything new.", translation: "从不犯错的人，也从未尝试过新事物。", source: "Albert Einstein · 阿尔伯特·爱因斯坦", bio: "理论物理学家" },
  { text: "Turn your wounds into wisdom.", translation: "把经历过的伤痛，转化为智慧。", source: "Oprah Winfrey · 奥普拉·温弗瑞", bio: "美国媒体人、慈善家" },
  { text: "Dream big and dare to fail.", translation: "大胆梦想，也勇敢面对失败。", source: "Norman Vaughan · 诺曼·沃恩", bio: "美国探险家" },
  { text: "What we think, we become.", translation: "我们的思想，塑造我们成为怎样的人。", source: "Buddha · 佛陀", bio: "佛教创始人" },
  { text: "The best way out is always through.", translation: "走出困境最好的方法，始终是穿过它。", source: "Robert Frost · 罗伯特·弗罗斯特", bio: "美国诗人" },
  { text: "No pressure, no diamonds.", translation: "没有压力，就没有钻石。", source: "Thomas Carlyle · 托马斯·卡莱尔", bio: "苏格兰历史学家、作家" },
  { text: "If opportunity doesn't knock, build a door.", translation: "如果机会没有敲门，就亲手造一扇门。", source: "Milton Berle · 米尔顿·伯利", bio: "美国演员、喜剧家" },
  { text: "The power of imagination makes us infinite.", translation: "想象力让我们拥有无限可能。", source: "John Muir · 约翰·缪尔", bio: "美国自然学家、作家" },
  { text: "The beautiful thing about learning is nobody can take it away from you.", translation: "学习的美好之处在于，没有人能把它从你身上夺走。", source: "B. B. King · B·B·金", bio: "美国蓝调音乐家" },
  { text: "You miss 100% of the shots you don't take.", translation: "你不尝试的每一次机会，都会百分之百错过。", source: "Wayne Gretzky · 韦恩·格雷茨基", bio: "加拿大冰球运动员" },
  { text: "Don't count the days, make the days count.", translation: "不要只是计算日子，要让每一天都有价值。", source: "Muhammad Ali · 穆罕默德·阿里", bio: "美国拳击运动员" },
];

const STORAGE_KEYS = {
  countdowns: "toward-light-countdowns",
  dailyQuoteHistory: "toward-light-daily-quote-history",
};
const MS_PER_DAY = 24 * 60 * 60 * 1000;

let countdowns = loadCountdowns();
let currentQuoteIndex = -1;
let currentQuoteDateKey = getLocalDateKey();
let quoteTimer;

function loadCountdowns() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEYS.countdowns));
    if (Array.isArray(saved) && saved.length) {
      const isOldDefaultSet =
        saved.length === 2 &&
        saved.some((item) => item.id === "gaokao") &&
        saved.some((item) => item.id === "first-exam");
      if (isOldDefaultSet) {
        return [...saved, { ...CONFIG.defaultCountdowns[2] }];
      }
      return saved.slice(0, 3);
    }
  } catch {}
  return CONFIG.defaultCountdowns.map((item) => ({ ...item }));
}

function saveCountdowns() {
  localStorage.setItem(STORAGE_KEYS.countdowns, JSON.stringify(countdowns));
}

function parseDate(dateString) {
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(year, month - 1, day, 12, 0, 0, 0);
}

function calendarDayDifference(laterDate, earlierDate) {
  const laterUtc = Date.UTC(laterDate.getFullYear(), laterDate.getMonth(), laterDate.getDate());
  const earlierUtc = Date.UTC(earlierDate.getFullYear(), earlierDate.getMonth(), earlierDate.getDate());
  return Math.round((laterUtc - earlierUtc) / MS_PER_DAY);
}

function formatDate(date) {
  return new Intl.DateTimeFormat("zh-CN", { year: "numeric", month: "long", day: "numeric" }).format(date);
}

function formatToday(date) {
  const dateText = new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
  const weekday = new Intl.DateTimeFormat("zh-CN", { weekday: "long" }).format(date);
  return `${dateText}  ${weekday}`;
}

function renderManageList() {
  const list = document.querySelector("#countdownManageList");
  const form = document.querySelector("#countdownForm");
  const isFull = countdowns.length >= 3;
  form.querySelectorAll("input, .add-countdown-button").forEach((element) => {
    element.disabled = isFull;
  });
  form.classList.toggle("is-disabled", isFull);
  document.querySelector("#countdownNameInput").placeholder =
    isFull ? "已达到三个倒计时上限" : "例如：期末考试";
  list.innerHTML = "";
  countdowns.forEach((countdown) => {
    const row = document.createElement("div");
    row.className = "countdown-manage-item";
    row.innerHTML = `
      <span><strong></strong><small></small></span>
      <div class="manage-item-actions">
        <button class="move-button move-up" type="button" aria-label="上移">↑</button>
        <button class="move-button move-down" type="button" aria-label="下移">↓</button>
        <button class="delete-button" type="button">删除</button>
      </div>`;
    row.querySelector("strong").textContent = countdown.name;
    row.querySelector("small").textContent = formatDate(parseDate(countdown.date));
    const index = countdowns.findIndex((item) => item.id === countdown.id);
    const upButton = row.querySelector(".move-up");
    const downButton = row.querySelector(".move-down");
    upButton.disabled = index === 0;
    downButton.disabled = index === countdowns.length - 1;
    upButton.addEventListener("click", () => moveCountdown(index, index - 1));
    downButton.addEventListener("click", () => moveCountdown(index, index + 1));
    row.querySelector(".delete-button").disabled = countdowns.length === 1;
    row.querySelector(".delete-button").addEventListener("click", () => {
      countdowns = countdowns.filter((item) => item.id !== countdown.id);
      saveCountdowns();
      renderManageList();
      updateCountdown();
    });
    list.appendChild(row);
  });
}

function moveCountdown(fromIndex, toIndex) {
  if (toIndex < 0 || toIndex >= countdowns.length) return;
  const [item] = countdowns.splice(fromIndex, 1);
  countdowns.splice(toIndex, 0, item);
  saveCountdowns();
  renderManageList();
  updateCountdown();
}

function updateCountdown() {
  const today = new Date();
  document.querySelector("#todayText").textContent = formatToday(today);
  document.querySelector("#currentYear").textContent = `© ${today.getFullYear()}`;
  const list = document.querySelector("#countdownList");
  list.innerHTML = "";

  countdowns.slice(0, 3).forEach((countdown, index) => {
    const targetDate = parseDate(countdown.date);
    const daysRemaining = calendarDayDifference(targetDate, today);
    const item = document.createElement("article");
    item.className = `countdown-item${index === 0 ? " is-primary" : ""}`;
    item.innerHTML = `
      <div class="countdown-order" aria-hidden="true">
        <span></span><span></span><span></span>
      </div>
      <div class="countdown-item-copy">
        <h2></h2>
        <div class="countdown-value">
          <strong></strong><span>天</span>
        </div>
        <p class="countdown-date"></p>
      </div>`;
    item.querySelector("h2").textContent = daysRemaining > 0 ? `距离${countdown.name}还有` : countdown.name;
    item.querySelector("strong").textContent = Math.max(daysRemaining, 0);
    item.querySelector(".countdown-date").textContent =
      daysRemaining < 0 ? `${formatDate(targetDate)} · 已抵达` : formatDate(targetDate);
    list.appendChild(item);
  });
}

function getLocalDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getMonthKey(date = new Date()) {
  return getLocalDateKey(date).slice(0, 7);
}

function getDailyQuotePool(date = new Date()) {
  const monthKey = getMonthKey(date);
  const weekday = date.getDay();
  const monthLibrary = MONTHLY_QUOTE_LIBRARIES[monthKey];

  if (monthLibrary?.[weekday]?.length) {
    return { monthKey, weekday, quotes: monthLibrary[weekday] };
  }

  // 缺少当月库时使用独立应急库，绝不回退并重复上个月内容。
  console.warn(`未找到 ${monthKey} 月度句子库，正在使用独立应急库。请在 quotes-data.js 添加新月份。`);
  return { monthKey: "emergency", weekday, quotes: EMERGENCY_QUOTE_LIBRARY[weekday] };
}

function getDailyQuoteHistory(date = new Date()) {
  const todayKey = getLocalDateKey(date);
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEYS.dailyQuoteHistory));
    if (saved?.dateKey === todayKey && Array.isArray(saved.shownIndexes)) return saved.shownIndexes;
  } catch {}
  localStorage.setItem(
    STORAGE_KEYS.dailyQuoteHistory,
    JSON.stringify({ dateKey: todayKey, shownIndexes: [] })
  );
  return [];
}

function getNextQuoteIndex(date = new Date()) {
  const { quotes } = getDailyQuotePool(date);
  let shownIndexes = getDailyQuoteHistory(date).filter((index) => index < quotes.length);
  let available = quotes.map((_, index) => index).filter((index) => !shownIndexes.includes(index));

  // 当天全部展示完毕后开启新一轮，仍避免立即重复当前句子。
  if (!available.length) {
    shownIndexes = [];
    available = quotes.map((_, index) => index).filter((index) => index !== currentQuoteIndex);
    if (!available.length) available = [0];
  }

  const index = available[Math.floor(Math.random() * available.length)];
  shownIndexes.push(index);
  localStorage.setItem(
    STORAGE_KEYS.dailyQuoteHistory,
    JSON.stringify({ dateKey: getLocalDateKey(date), shownIndexes })
  );
  return index;
}

function displayQuote(index, animate = true, date = new Date()) {
  const content = document.querySelector("#quoteContent");
  const { quotes } = getDailyQuotePool(date);
  const quote = quotes[index] || quotes[0];
  if (!quote) return;
  const render = () => {
    document.querySelector("#quoteText").textContent = quote.text;
    const translation = document.querySelector("#quoteTranslation");
    translation.textContent = quote.translation || "";
    translation.hidden = !quote.translation;
    const source = document.querySelector("#quoteSource");
    source.textContent = quote.source ? `— ${quote.source}` : "";
    source.hidden = !quote.source;
    const bio = document.querySelector("#quoteSourceBio");
    bio.textContent = quote.bio || "";
    bio.hidden = !quote.bio;
    document.querySelector("#quoteCounter").textContent = `${String(index + 1).padStart(2, "0")} / ${String(quotes.length).padStart(2, "0")}`;
    currentQuoteIndex = index;
    currentQuoteDateKey = getLocalDateKey(date);
    content.classList.remove("is-changing");
  };
  if (!animate) return render();
  content.classList.add("is-changing");
  window.setTimeout(render, 260);
}

function resetQuoteTimer() {
  window.clearInterval(quoteTimer);
  quoteTimer = window.setInterval(() => displayQuote(getNextQuoteIndex()), CONFIG.quoteRefreshInterval);
}

function validateMonthlyQuoteLibraries() {
  const months = Object.keys(MONTHLY_QUOTE_LIBRARIES).sort();
  months.forEach((monthKey, monthIndex) => {
    const library = MONTHLY_QUOTE_LIBRARIES[monthKey];
    const allQuotes = Object.values(library).flat();
    const allTexts = allQuotes.map((quote) => quote.text.trim());
    const duplicatesInsideMonth = allTexts.filter((text, index) => allTexts.indexOf(text) !== index);
    if (duplicatesInsideMonth.length) console.warn(`${monthKey} 月度句子库存在重复句子：`, duplicatesInsideMonth);
    allQuotes.forEach((quote) => {
      const containsEnglish = /[A-Za-z]{3,}/.test(quote.text);
      if (containsEnglish && (!quote.translation || !quote.source || !quote.bio)) {
        console.warn(`${monthKey} 英文句子缺少翻译、作者中文名或简介：`, quote);
      }
    });

    for (let weekday = 0; weekday <= 6; weekday += 1) {
      if (!Array.isArray(library[weekday])) console.warn(`${monthKey} 缺少星期 ${weekday} 的句子数组。`);
      if ((library[weekday]?.length || 0) < 100) {
        console.info(`${monthKey} 星期 ${weekday} 当前有 ${library[weekday]?.length || 0} 条示例，正式库建议扩充到 100 条。`);
      }
    }

    const previousMonth = months[monthIndex - 1];
    if (previousMonth) {
      const previousTexts = new Set(Object.values(MONTHLY_QUOTE_LIBRARIES[previousMonth]).flat().map((quote) => quote.text.trim()));
      const crossMonthDuplicates = allTexts.filter((text) => previousTexts.has(text));
      if (crossMonthDuplicates.length) console.warn(`${monthKey} 与 ${previousMonth} 存在跨月重复：`, crossMonthDuplicates);
    }
  });

  const monthlyTexts = new Set(
    months.flatMap((monthKey) =>
      Object.values(MONTHLY_QUOTE_LIBRARIES[monthKey]).flat().map((quote) => quote.text.trim())
    )
  );
  const emergencyTexts = Object.values(EMERGENCY_QUOTE_LIBRARY).flat().map((quote) => quote.text.trim());
  const emergencyDuplicates = emergencyTexts.filter((text) => monthlyTexts.has(text));
  if (emergencyDuplicates.length) console.warn("应急句子库与月度库存在重复：", emergencyDuplicates);
}

function initializeInteractions() {
  validateMonthlyQuoteLibraries();
  renderManageList();

  const manager = document.querySelector("#countdownManager");
  document.querySelector("#manageCountdownButton").addEventListener("click", () => {
    manager.hidden = !manager.hidden;
  });
  document.querySelector("#closeManagerButton").addEventListener("click", () => {
    manager.hidden = true;
  });
  document.querySelector("#countdownForm").addEventListener("submit", (event) => {
    event.preventDefault();
    if (countdowns.length >= 3) {
      document.querySelector("#countdownNameInput").setCustomValidity("最多只能添加三个倒计时");
      document.querySelector("#countdownNameInput").reportValidity();
      return;
    }
    const name = document.querySelector("#countdownNameInput").value.trim();
    const date = document.querySelector("#countdownDateInput").value;
    if (!name || !date) return;
    const newCountdown = { id: `custom-${Date.now()}`, name, date };
    countdowns.push(newCountdown);
    saveCountdowns();
    event.target.reset();
    document.querySelector("#countdownNameInput").setCustomValidity("");
    renderManageList();
    updateCountdown();
  });
  document.querySelector("#countdownNameInput").addEventListener("input", (event) => {
    event.target.setCustomValidity("");
  });

  displayQuote(getNextQuoteIndex(), false);
  resetQuoteTimer();
  document.querySelector("#nextQuoteButton").addEventListener("click", () => {
    displayQuote(getNextQuoteIndex());
    resetQuoteTimer();
  });
}

updateCountdown();
initializeInteractions();
window.setInterval(() => {
  updateCountdown();
  if (getLocalDateKey() !== currentQuoteDateKey) {
    displayQuote(getNextQuoteIndex());
    resetQuoteTimer();
  }
}, 60 * 1000);
