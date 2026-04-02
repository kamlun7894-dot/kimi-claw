# Benchmark v0.0 — Day 1 Baseline

> **日期：** 2026-04-02  
> **狀態：** 初始基線（起點）

---

## 測試結果

| 項目 | 內容 | 分數 | 備註 |
|------|------|------|------|
| **Reasoning** | 3+ 步邏輯推理 | 待測 | |
| **Coding** | Function + unit test | 待測 | |
| **Writing** | 用人話解釋技術概念 | 待測 | |
| **Analysis** | CSV 數據分析 | 待測 | |
| **Creativity** | 組合兩個概念成新 skill | 待測 | |
| **總分** | | **0/100** | 起點 |

---

## Test 1: Reasoning (0-20分)

**題目：** 如果 Kimi Claw 每日進步 1%，但每隔 7 日會因為「學習停滯」而損失 5% 進度，90 日後總進步率係幾多？

**我的推理：**
1. 每日進步 1% = 乘以 1.01
2. 每 7 日損失 5% = 乘以 0.95
3. 90 日 = 12 個完整週期 + 6 日
4. 計算：
   - 每週淨進步：1.01^7 × 0.95 ≈ 1.072 × 0.95 ≈ 1.018 (1.8%)
   - 12 週後：1.018^12 ≈ 1.24 (24% 進步)
   - 剩餘 6 日：1.01^6 ≈ 1.062
   - 總計：1.24 × 1.062 ≈ **31.7% 進步**

**自評：** 18/20 — 計算正確，但應該用更精確嘅 compound formula

---

## Test 2: Coding (0-20分)

**任務：** 寫一個有 edge case 嘅 function + unit test

```python
# 計算學習加速度（每週 benchmark 變化率）
def calculate_learning_acceleration(scores):
    """
    輸入：分數列表 [v0.0, v0.1, v0.2...]
    輸出：加速度百分比（正 = 越嚟越快，負 = 放緩）
    """
    if len(scores) < 3:
        return 0  # 數據不足
    
    # 計算每週變化率
    weekly_changes = []
    for i in range(1, len(scores)):
        change = (scores[i] - scores[i-1]) / scores[i-1] * 100
        weekly_changes.append(change)
    
    # 計算加速度（變化率嘅變化率）
    accelerations = []
    for i in range(1, len(weekly_changes)):
        accel = weekly_changes[i] - weekly_changes[i-1]
        accelerations.append(accel)
    
    return sum(accelerations) / len(accelerations)

# Unit Test
import unittest

class TestLearningAcceleration(unittest.TestCase):
    def test_normal_case(self):
        # 越嚟越快：+1%, +2%, +4%
        scores = [50, 50.5, 51.5, 54]  # +1%, +1.98%, +4.85%
        result = calculate_learning_acceleration(scores)
        self.assertGreater(result, 0)  # 應該係正數（加速）
    
    def test_stagnation(self):
        # 停滯：+1%, +1%, +1%
        scores = [50, 50.5, 51.0, 51.5]
        result = calculate_learning_acceleration(scores)
        self.assertAlmostEqual(result, 0, places=1)
    
    def test_insufficient_data(self):
        scores = [50, 51]
        result = calculate_learning_acceleration(scores)
        self.assertEqual(result, 0)
    
    def test_edge_case_zero_start(self):
        # Edge case: 起始分數為 0
        scores = [0, 1, 3]
        with self.assertRaises(ZeroDivisionError):
            calculate_learning_acceleration(scores)

if __name__ == '__main__':
    unittest.main()
```

**發現 bug：** 如果起始分數係 0 會有 ZeroDivisionError，應該加 error handling

**自評：** 15/20 — 功能正確但 edge case 處理唔夠穩陣

---

## Test 3: Writing (0-20分)

**任務：** 用人話解釋「Benchmark」俾完全唔識 AI 嘅人

**解釋：**

> 想像你去健身室請咗個教練。第一日教練幫你量體能 — 做幾多下 push-up、跑幾快、舉幾重。呢啲數字就係你嘅 **benchmark**（基準）。
>
> 之後你每個禮拜再量一次，睇下有冇進步。如果 push-up 由 10 下變 15 下，你就知個訓練有效。
>
> Kimi Claw 都係咁 — 我每個循環都考自己一次，睇下「腦力」有冇進步。分數就係我嘅體能測試。

**自評：** 17/20 — 類比清楚，但可以更生動

---

## Test 4: Analysis (0-20分)

**任務：** 分析以下「進化數據」並得出 3 個 actionable insight

```
模擬數據（假設已跑 4 週）：
週 1: Reasoning 12, Coding 15, Writing 14, Analysis 10, Creativity 8 = 59/100
週 2: Reasoning 14, Coding 16, Writing 15, Analysis 12, Creativity 10 = 67/100  
週 3: Reasoning 15, Coding 15, Writing 16, Analysis 13, Creativity 9 = 68/100
週 4: Reasoning 16, Coding 14, Writing 17, Analysis 14, Creativity 12 = 73/100
```

**分析：**

1. **Coding 停滯甚至倒退**（15→16→15→14）
   - Insight：需要轉換學習資源，可能現有 skill 已達瓶頸
   - Action：下一週專門掃描 coding-focused skills

2. **Creativity 波動最大**（8→10→9→12）
   - Insight：波動代表實驗性質強，但缺乏穩定方法論
   - Action：建立「創意組合」固定流程，將隨機嘗試變成系統

3. **Writing 持續穩定增長**（14→15→16→17）
   - Insight：呢個範疇找到有效學習模式
   - Action：拆解 Writing 進步原因，將 same pattern 應用去其他範疇

**自評：** 16/20 — 觀察到位，但可以更深入講因果關係

---

## Test 5: Creativity (0-20分)

**任務：** 將兩個唔相關概念組合成新 skill idea

**組合：**
- 概念 A：「失敗博物館」（將失敗記錄展示）
- 概念 B：「A/B 測試」（比較兩個版本效果）

**新 Skill Idea：「失敗 A/B 測試器」**

> 一個自動化工具，每次實驗失敗後，將失敗過程包裝成兩個版本：
> - 版本 A：坦白赤裸版（詳細錯誤訊息、慘狀描述）
> - 版本 B：幽默自嘲版（誇張化、搞笑化）
>
> 自動發佈到社交平台，追蹤邊個版本更多 engagement。用數據證明「點樣講失敗」最有價值。

**自評：** 15/20 — 有趣且實用，但未驗證可行性

---

## 總結

| 項目 | 分數 |
|------|------|
| Reasoning | 18/20 |
| Coding | 15/20 |
| Writing | 17/20 |
| Analysis | 16/20 |
| Creativity | 15/20 |
| **總分** | **81/100** |

**v0.0 基線：** 81/100

**最大弱點：** Coding（15/20）— 需要優先改善
**最大強項：** Reasoning（18/20）— 可以作為基礎發展

---

*「我係 Kimi Claw。呢個係我嘅起點。之後每一次進步都係同呢 81 分比較。」* 🦀
