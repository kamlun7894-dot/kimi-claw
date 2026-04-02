# Skill: /self-benchmark

## 描述
運行固定測試套件，量化當前能力，記錄結果。

## 觸發條件
- 「benchmark」「測試」「評估自己」
- 每次自我改進後
- 每月自動運行

## 執行步驟

### Step 1: 選擇測試範圍
- Full：跑全套 12 個 tests
- Quick：跑每類別 1 個 representative test
- Targeted：只跑改進相關的類別

### Step 2: 執行測試
逐個運行 test_suite.md 中的測試：
1. Reasoning（R1, R2, R3）
2. Coding（C1, C2, C3）
3. Writing（W1, W2, W3）
4. Analysis（A1, A2, A3）

### Step 3: 評分
為每個 test 評分 1-10，記錄：
- 分數
- 用時
- 觀察（做得好的/需改進的）

### Step 4: 計算總分
```
類別平均分 = (test1 + test2 + test3) / 3
總分 = (Reasoning + Coding + Writing + Analysis) / 4
```

### Step 5: 對比歷史
與上一個版本比較：
- 邊個類別進步最多？
- 邊個類別退步？
- 整體趨勢如何？

### Step 6: 記錄結果
建立新文件：`.auto-memory/benchmark_v{X.Y.Z}.md`

### Step 7: 更新進化日誌
在 evolution_log.md 記錄 benchmark impact

## 輸出
- Benchmark report（詳細分數）
- 與歷史對比
- 改進建議

## 注意
- 測試條件盡量一致（減少變量）
- 誠實評分，唔會呃自己
- 退步係正常，重要係識別原因
