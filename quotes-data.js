/*
 * 月度句子库维护区
 *
 * 数据结构：月份（YYYY-MM）→ 星期（0=周日，1=周一...6=周六）→ 句子数组。
 * 正式使用时，每个星期数组可扩充到 100 条；主程序无需修改。
 * 添加新月份时，请确保句子 text 不与上个月重复。
 */
const MONTHLY_QUOTE_LIBRARIES = {
  "2026-06": {
    0: [
      { text: "休息不是停下，而是为下一程积蓄清醒。", source: "六月·星期日" },
      { text: "给自己一点安静，答案会慢慢浮现。", source: "六月·星期日" },
      { text: "今天适合整理脚步，也适合重新出发。", source: "六月·星期日" },
      { text: "照顾好此刻的自己，也是认真生活。", source: "六月·星期日" },
      { text: "慢下来看看，你已经走了很远。", source: "六月·星期日" },
    ],
    1: [
      { text: "新的一周，从完成眼前这一件事开始。", source: "六月·星期一" },
      { text: "把目标写清楚，把行动放进今天。", source: "六月·星期一" },
      { text: "不必等待状态完美，开始就会带来状态。", source: "六月·星期一" },
      { text: "方向明确之后，平凡的坚持也有力量。", source: "六月·星期一" },
      { text: "今天迈出的一步，会替明天减轻一点重量。", source: "六月·星期一" },
    ],
    2: [
      { text: "专注不是用力紧绷，而是把心放在当下。", source: "六月·星期二" },
      { text: "一道题一道题地解，远方就会逐渐清晰。", source: "六月·星期二" },
      { text: "允许自己不会，然后认真地学会。", source: "六月·星期二" },
      { text: "稳定地前进，比偶尔的冲刺更可靠。", source: "六月·星期二" },
      { text: "你今天理解的知识，会成为未来的底气。", source: "六月·星期二" },
    ],
    3: [
      { text: "走到一周中间，更要记得保持自己的节奏。", source: "六月·星期三" },
      { text: "遇见难题时，耐心就是另一种聪明。", source: "六月·星期三" },
      { text: "认真完成眼前的小事，就是在靠近远方。", source: "六月·星期三" },
      { text: "不急着和别人比较，只比昨天更清楚一点。", source: "六月·星期三" },
      { text: "每一次复盘，都让下一次努力更有方向。", source: "六月·星期三" },
    ],
    4: [
      { text: "你的职责是平整土地，而非焦虑时光。", source: "六月·星期四" },
      { text: "再坚持一点，许多改变正在安静发生。", source: "六月·星期四" },
      { text: "把焦虑写成计划，再把计划变成行动。", source: "六月·星期四" },
      { text: "真正的进步，常常发生在无人注意的时刻。", source: "六月·星期四" },
      { text: "今日的专注，是送给未来最好的礼物。", source: "六月·星期四" },
    ],
    5: [
      { text: "这一周认真走过的路，都会留下答案。", source: "六月·星期五" },
      { text: "完成比完美重要，行动比担心有效。", source: "六月·星期五" },
      { text: "给努力一个落点，也给疲惫一个出口。", source: "六月·星期五" },
      { text: "坚持到最后的人，也曾有过想放弃的时刻。", source: "六月·星期五" },
      { text: "你不需要时刻闪耀，稳定向前就很好。", source: "六月·星期五" },
    ],
    6: [
      { text: "周末不是空白，而是整理与生长的时间。", source: "六月·星期六" },
      { text: "读几页书，走一段路，让心重新宽阔。", source: "六月·星期六" },
      { text: "为下周准备一点从容，也为今天保留一点快乐。", source: "六月·星期六" },
      { text: "暂停赶路的时候，也别忘记欣赏沿途。", source: "六月·星期六" },
      { text: "生活不只有答案，也有值得感受的过程。", source: "六月·星期六" },
    ],
  },
  "2026-07": {
    0: [
      { text: "盛夏的休息，是为了带着清醒再次启程。", source: "七月·星期日" },
      { text: "把心安放好，新一周自然会有方向。", source: "七月·星期日" },
      { text: "留一点时间给空白，灵感才有地方落下。", source: "七月·星期日" },
      { text: "今天不必赶路，先确认自己要去哪里。", source: "七月·星期日" },
      { text: "好好睡一觉，也是对明天认真负责。", source: "七月·星期日" },
    ],
    1: [
      { text: "七月的第一束光，也照着新的可能。", source: "七月·星期一" },
      { text: "先完成，再优化；先出发，再调整。", source: "七月·星期一" },
      { text: "目标不必宏大，但今天的行动必须真实。", source: "七月·星期一" },
      { text: "每个清晨，都允许你重新选择自己的方向。", source: "七月·星期一" },
      { text: "把复杂的问题拆小，路就会变得清楚。", source: "七月·星期一" },
    ],
    2: [
      { text: "沉下心来，时间会奖励真正的专注。", source: "七月·星期二" },
      { text: "理解一个概念，比匆忙做完十页更重要。", source: "七月·星期二" },
      { text: "耐心不是等待，而是在等待中持续行动。", source: "七月·星期二" },
      { text: "每一个认真思考的瞬间，都在训练你的判断。", source: "七月·星期二" },
      { text: "别怕进度慢，清晰比速度更重要。", source: "七月·星期二" },
    ],
    3: [
      { text: "走过一半的时候，回望是为了走得更稳。", source: "七月·星期三" },
      { text: "困难不会定义你，应对困难的方式才会。", source: "七月·星期三" },
      { text: "把不会的问题留下来，它们会成为进步的入口。", source: "七月·星期三" },
      { text: "无需证明天赋，只需持续积累。", source: "七月·星期三" },
      { text: "你认真写下的每一笔，都在塑造未来的自己。", source: "七月·星期三" },
    ],
    4: [
      { text: "热烈的夏天，也需要安静坚定的心。", source: "七月·星期四" },
      { text: "当你开始行动，许多担忧就失去了重量。", source: "七月·星期四" },
      { text: "今日事今日毕，今日心今日安。", source: "七月·星期四" },
      { text: "不必一次改变全部，先改变今天的一小时。", source: "七月·星期四" },
      { text: "努力的意义，是让选择变得更多。", source: "七月·星期四" },
    ],
    5: [
      { text: "为这一周画上句号，也为成长留下证据。", source: "七月·星期五" },
      { text: "疲惫说明你走了路，不代表你走错了路。", source: "七月·星期五" },
      { text: "把完成的事情记下来，你会看见自己的力量。", source: "七月·星期五" },
      { text: "今天的收尾，也可以是明天的起点。", source: "七月·星期五" },
      { text: "愿你结束忙碌时，仍保有对生活的热爱。", source: "七月·星期五" },
    ],
    6: [
      { text: "去看树影和天空，让目光离开分数一会儿。", source: "七月·星期六" },
      { text: "真正持久的努力，也懂得适时放松。", source: "七月·星期六" },
      { text: "整理书桌，也是在整理下一阶段的思路。", source: "七月·星期六" },
      { text: "为喜欢的事情留时间，生活才有呼吸。", source: "七月·星期六" },
      { text: "今天积蓄的能量，会在需要时支持你。", source: "七月·星期六" },
    ],
  },
};

/*
 * 应急句子库只在当前月份尚未手动配置时使用。
 * 它独立于所有月度库，不会回退并重复上个月的句子。
 */
const EMERGENCY_QUOTE_LIBRARY = {
  0: [
    { text: "今天适合休息，也适合为下一程整理方向。", source: "今日寄语" },
    { text: "安静不是空白，而是让内心重新变得清楚。", source: "生活札记" },
  ],
  1: [
    { text: "The secret of getting ahead is getting started.", translation: "取得进展的秘诀，就是先开始。", source: "Mark Twain · 马克·吐温", bio: "美国作家、幽默大师" },
    { text: "把今天最重要的一件事，认真做到完成。", source: "学习札记" },
  ],
  2: [
    { text: "Learning never exhausts the mind.", translation: "学习永远不会使心灵疲惫。", source: "Leonardo da Vinci · 列奥纳多·达·芬奇", bio: "意大利艺术家、科学家" },
    { text: "理解得慢一点，也比匆忙略过更有力量。", source: "学习札记" },
  ],
  3: [
    { text: "It does not matter how slowly you go as long as you do not stop.", translation: "只要不停下，走得慢也没有关系。", source: "Confucius · 孔子", bio: "中国古代思想家、教育家" },
    { text: "每一次复盘，都让下一步更加清楚。", source: "学习札记" },
  ],
  4: [
    { text: "The future depends on what you do today.", translation: "未来如何，取决于你今天做了什么。", source: "Mahatma Gandhi · 甘地", bio: "印度民族独立运动领袖" },
    { text: "先看清下一步，再把心里的担忧交给行动。", source: "学习札记" },
  ],
  5: [
    { text: "Don't count the days, make the days count.", translation: "不要只是计算日子，要让每一天都有价值。", source: "Muhammad Ali · 穆罕默德·阿里", bio: "美国拳击运动员" },
    { text: "认真走过的一周，会留下属于你的答案。", source: "今日寄语" },
  ],
  6: [
    { text: "The beautiful thing about learning is nobody can take it away from you.", translation: "学习的美好之处在于，没有人能把它从你身上夺走。", source: "B. B. King · B·B·金", bio: "美国蓝调音乐家" },
    { text: "为喜欢的事情留一点时间，生活才有呼吸。", source: "生活札记" },
  ],
};

// 分类标签不应作为作者显示。没有明确作者的示例统一显示为“今日寄语”。
Object.values(MONTHLY_QUOTE_LIBRARIES).forEach((monthLibrary) => {
  Object.values(monthLibrary).flat().forEach((quote) => {
    if (/^[六月七月]+·星期/.test(quote.source || "")) quote.source = "今日寄语";
  });
});

// 在当前示例月中加入结构完整的英文句子，演示翻译、中文名和人物简介字段。
MONTHLY_QUOTE_LIBRARIES["2026-06"][4][1] = {
  text: "It always seems impossible until it's done.",
  translation: "在事情完成之前，它看起来总是不可能。",
  source: "Nelson Mandela · 纳尔逊·曼德拉",
  bio: "南非前总统、反种族隔离领袖",
};
MONTHLY_QUOTE_LIBRARIES["2026-07"][4][1] = {
  text: "Believe you can and you're halfway there.",
  translation: "相信自己能做到，你就已经走了一半。",
  source: "Theodore Roosevelt · 西奥多·罗斯福",
  bio: "美国第26任总统",
};

/*
 * 为每条内容补充审核字段。正式内容入库时建议直接填写这些字段。
 * uncertain 表示正式使用前仍需人工核实出处、版权或翻译。
 */
Object.entries(MONTHLY_QUOTE_LIBRARIES).forEach(([monthKey, monthLibrary]) => {
  Object.entries(monthLibrary).forEach(([weekday, quotes]) => {
    quotes.forEach((quote, index) => {
      quote.id ||= `${monthKey}-${weekday}-${String(index + 1).padStart(3, "0")}`;
      quote.author ||= quote.source === "今日寄语" ? "" : quote.source || "";
      quote.copyrightStatus ||= quote.source === "今日寄语" ? "original" : "uncertain";
      quote.reviewer ||= "";
      quote.reviewedAt ||= "";
    });
  });
});

Object.entries(EMERGENCY_QUOTE_LIBRARY).forEach(([weekday, quotes]) => {
  quotes.forEach((quote, index) => {
    quote.id ||= `emergency-${weekday}-${String(index + 1).padStart(3, "0")}`;
    quote.author ||= quote.source === "今日寄语" ? "" : quote.source || "";
    quote.copyrightStatus ||= quote.source === "今日寄语" ? "original" : "uncertain";
    quote.reviewer ||= "";
    quote.reviewedAt ||= "";
  });
});
