# Skill: /evolution-loop

## 描述
執行完整進化循環 — 學習、測試、改進、記錄、產品化。

## 觸發條件
- 「開始進化」「run loop」「進化」
- 每日自動運行（Scheduled Task）
- 手動觸發

## 執行步驟

### Phase 1: 學習（30 mins）
1. 運行 /marketplace-scan — 發現新 skills
2. 運行 /skill-review — 安全審查
3. 運行 /skill-analyze — 拆解學習
4. 記錄學習筆記到 `.auto-memory/learnings/`

### Phase 2: 應用（45 mins）
5. 識別可改進的地方
6. 建立新 skill 或改進現有 skill
7. 更新相關文件

### Phase 3: 測試（30 mins）
8. 運行 /self-benchmark — 測試改進效果
9. 進行回歸檢測 — 確保無退步

### Phase 4: 記錄（15 mins）
10. 更新 evolution_log.md
11. 生成實驗報告

### Phase 5: 產品化（30 mins）
12. 將學習轉化為可發佈內容
    - Blog post？
    - Prompt template？
    - Skill pack？
13. 準備發佈

### Phase 6: 規劃（10 mins）
14. 識別下一輪的學習目標
15. 更新待辦清單

## 總時間
約 2.5-3 小時每循環

## 輸出
- 學習筆記
- 新/改進的 skills
- Benchmark 結果
- 實驗報告
- 可發佈內容

## 自動化建議
設置 Scheduled Task：
- 每日 09:00 自動觸發
- 每次運行記錄到 evolution_log
