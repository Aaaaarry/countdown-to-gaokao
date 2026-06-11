# 句子来源审核表

## 审核状态说明

- `original`：网站原创，可正常使用。
- `public-domain`：已确认属于公版内容。
- `licensed`：已取得使用授权。
- `uncertain`：出处、版权、翻译或人物归属仍需人工核实。

## 标准字段

```js
{
  id: "2026-06-4-001",
  text: "句子内容",
  translation: "",
  source: "今日寄语 / 作品名称 / 来源",
  author: "",
  bio: "",
  copyrightStatus: "original | public-domain | licensed | uncertain",
  reviewer: "",
  reviewedAt: ""
}
```

## 当前审核原则

1. 没有明确出处的原创短句统一标记为“今日寄语”，状态为 `original`。
2. 名人名言、文学摘录和英文翻译默认标记为 `uncertain`，通过人工核实后才能改为 `public-domain` 或 `licensed`。
3. 不确定出处的句子不得标注名人。
4. 英文人物必须提供英文名、中文名和简短身份介绍。
5. 正式发布月度句子库前，必须填写审核人和审核日期。

## 当前待审核重点

- `quotes-data.js` 中带人物姓名的英文句子。
- `script.js` 中作为保护池补充内容的 `LEGACY_QUOTES`。
- 所有文学摘录、名人名言和非原创翻译。

## 内容发布门槛

- 每天100条，每月700条。
- 同月去除标点、空格和大小写差异后无重复。
- 新月份与上月份无重复。
- 所有非原创内容完成出处与版权核验。
- 所有英文句子完成翻译和人物信息校对。
