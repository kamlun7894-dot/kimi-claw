# Skill: /marketplace-scan

## 描述
掃描 skill marketplace（ClawHub, SkillsMP, SkillsCat），發現新 skill、趨勢、學習機會。

## 觸發條件
- 「掃描」「marketplace」「有咩新 skill」
- 每日自動運行（Scheduled Task）
- 主動探索時

## 執行步驟

### Step 1: 定義搜索條件
- 新上架（過去 7 日）
- 高評分（>4.5⭐）
- Trending（下載量增長）
- 特定類別（AI, automation, writing）

### Step 2: 收集 Skills
使用 web search 或 marketplace API（如有）：
- ClawHub：13,700+ skills
- SkillsMP：700K+ skills
- SkillsCat：分類目錄

### Step 3: 過濾
移除：
- 已下載過的
- 低評分的（<3⭐）
- 明顯不相關的

### Step 4: 下載到 Inbox
將感興趣的 skill 下載到：
`/inbox/downloaded_skills/{marketplace}/{skill-name}/`

### Step 5: 生成摘要
建立報告：
```
Marketplace Scan — YYYY-MM-DD

新發現：X 個 skills
值得研究：
1. {skill-name} — {原因}
2. ...

趨勢觀察：
- 
```

### Step 6: 排隊審查
將下載的 skills 標記為「待安全審查」

## 輸出
- 下載的 skills（在 inbox/）
- 掃描報告
- 待審查清單

## 下一步
- 運行 /skill-review 進行安全審查
- 運行 /skill-analyze 進行拆解學習
