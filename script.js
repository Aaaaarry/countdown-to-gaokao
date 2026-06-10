/* =========================
   可自定义设置
   ========================= */

const CONFIG = {
  // 目标名称与日期：月份从 1 开始填写。
  targetName: "高考",
  targetDate: { year: 2027, month: 6, day: 7 },

  // 句子自动刷新间隔，单位为毫秒。30000 表示 30 秒。
  quoteRefreshInterval: 30000,

  // 进度条的起始日期，可改为本学期开始或备考开始的日期。
  journeyStartDate: { year: 2026, month: 6, day: 1 },
};

// 可继续在数组中添加句子；没有译文时，将 translation 留空即可。
const QUOTES = [
  {
    text: "你的职责是平整土地，而非焦虑时光。你做三四月的事，在八九月自有答案。",
    translation: "",
    source: "余世存",
  },
  {
    text: "The future depends on what you do today.",
    translation: "未来如何，取决于你今天做了什么。",
    source: "Mahatma Gandhi",
  },
  {
    text: "愿你有前进一寸的勇气，亦有后退一尺的从容。",
    translation: "",
    source: "生活札记",
  },
  {
    text: "It always seems impossible until it's done.",
    translation: "在事情完成之前，它看起来总是不可能。",
    source: "Nelson Mandela",
  },
  {
    text: "少年没有乌托邦，心向远方自明朗。",
    translation: "",
    source: "青春札记",
  },
  {
    text: "不要因为走得太远，而忘记为什么出发。",
    translation: "",
    source: "纪伯伦",
  },
  {
    text: "Great things are done by a series of small things brought together.",
    translation: "伟大的成就，是由一连串微小努力汇聚而成。",
    source: "Vincent van Gogh",
  },
  {
    text: "去发光，而不是被照亮。",
    translation: "",
    source: "今日寄语",
  },
];

/* =========================
   日期与倒计时
   ========================= */

const MS_PER_DAY = 24 * 60 * 60 * 1000;

// 使用本地时区的正午进行日期计算，可避开夏令时切换造成的小时偏差。
function dateAtLocalNoon({ year, month, day }) {
  return new Date(year, month - 1, day, 12, 0, 0, 0);
}

function calendarDayDifference(laterDate, earlierDate) {
  const laterUtc = Date.UTC(
    laterDate.getFullYear(),
    laterDate.getMonth(),
    laterDate.getDate()
  );
  const earlierUtc = Date.UTC(
    earlierDate.getFullYear(),
    earlierDate.getMonth(),
    earlierDate.getDate()
  );

  return Math.round((laterUtc - earlierUtc) / MS_PER_DAY);
}

function formatDate(date) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

function formatToday(date) {
  return new Intl.DateTimeFormat("zh-CN", {
    month: "long",
    day: "numeric",
    weekday: "long",
  }).format(date);
}

function updateCountdown() {
  const today = new Date();
  const targetDate = dateAtLocalNoon(CONFIG.targetDate);
  const startDate = dateAtLocalNoon(CONFIG.journeyStartDate);
  const daysRemaining = calendarDayDifference(targetDate, today);

  document.querySelector("#countdownTitle").textContent =
    daysRemaining > 0 ? `距离${CONFIG.targetName}还有` : CONFIG.targetName;
  document.querySelector("#daysRemaining").textContent = Math.max(daysRemaining, 0);
  document.querySelector("#targetDateText").textContent = formatDate(targetDate);
  document.querySelector("#todayText").textContent = formatToday(today);
  document.querySelector("#currentYear").textContent = `© ${today.getFullYear()}`;

  const message = document.querySelector("#countdownMessage");
  if (daysRemaining > 100) {
    message.textContent = "沉住气，慢慢来。你的每一步都算数。";
  } else if (daysRemaining > 30) {
    message.textContent = "方向明确，节奏稳定，把今天过得扎实。";
  } else if (daysRemaining > 0) {
    message.textContent = "相信已经认真走过的路，也相信此刻的自己。";
  } else if (daysRemaining === 0) {
    message.textContent = "今天，带着从容和勇气去完成这一场奔赴。";
  } else {
    message.textContent = "目标日期已经到达，愿你继续走向新的远方。";
  }

  const totalJourneyDays = Math.max(
    calendarDayDifference(targetDate, startDate),
    1
  );
  const completedDays = calendarDayDifference(today, startDate);
  const progress = Math.min(
    Math.max((completedDays / totalJourneyDays) * 100, 0),
    100
  );

  const progressRounded = Math.round(progress);
  const progressBar = document.querySelector("#progressBar");
  const progressTrack = document.querySelector(".progress-track");

  document.querySelector("#progressText").textContent = `${progressRounded}%`;
  progressBar.style.width = `${progress}%`;
  progressTrack.setAttribute("aria-valuenow", progressRounded);
}

/* =========================
   句子切换
   ========================= */

let currentQuoteIndex = -1;
let quoteTimer;

function getNextQuoteIndex() {
  if (QUOTES.length <= 1) return 0;

  let nextIndex;
  do {
    nextIndex = Math.floor(Math.random() * QUOTES.length);
  } while (nextIndex === currentQuoteIndex);

  return nextIndex;
}

function displayQuote(index, animate = true) {
  const quoteContent = document.querySelector("#quoteContent");
  const quote = QUOTES[index];

  const render = () => {
    document.querySelector("#quoteText").textContent = quote.text;
    document.querySelector("#quoteSource").textContent = `— ${quote.source}`;

    const translation = document.querySelector("#quoteTranslation");
    translation.textContent = quote.translation;
    translation.hidden = !quote.translation;

    document.querySelector("#quoteCounter").textContent =
      `${String(index + 1).padStart(2, "0")} / ${String(QUOTES.length).padStart(2, "0")}`;

    currentQuoteIndex = index;
    quoteContent.classList.remove("is-changing");
  };

  if (!animate) {
    render();
    return;
  }

  quoteContent.classList.add("is-changing");
  window.setTimeout(render, 260);
}

function resetQuoteTimer() {
  window.clearInterval(quoteTimer);
  quoteTimer = window.setInterval(() => {
    displayQuote(getNextQuoteIndex());
  }, CONFIG.quoteRefreshInterval);
}

function initializeQuotes() {
  const refreshSeconds = Math.round(CONFIG.quoteRefreshInterval / 1000);
  document.querySelector("#refreshHint").textContent =
    `每 ${refreshSeconds} 秒自动更新`;

  displayQuote(getNextQuoteIndex(), false);
  resetQuoteTimer();

  document.querySelector("#nextQuoteButton").addEventListener("click", () => {
    displayQuote(getNextQuoteIndex());
    resetQuoteTimer();
  });
}

updateCountdown();
initializeQuotes();

// 页面跨过午夜后，重新计算一次日期与倒计时。
window.setInterval(updateCountdown, 60 * 1000);
