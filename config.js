/*
 * 网站全局配置
 * 修改默认倒计时、句子刷新间隔和保护池容量时，只需编辑此文件。
 */
const CONFIG = {
  defaultCountdowns: [
    { id: "gaokao", name: "高考", date: "2027-06-07" },
    { id: "first-exam", name: "首考", date: "2027-01-06" },
    { id: "city-exam", name: "市统测", date: "2026-09-01" },
  ],
  quoteRefreshInterval: 5 * 60 * 1000,
  // 包含页面初次展示：0 至 240 分钟共出现 49 次。
  minimumDailyQuotePoolSize: 49,
};

const STORAGE_KEYS = {
  countdowns: "toward-light-countdowns",
  dailyQuoteHistory: "toward-light-daily-quote-history",
};
