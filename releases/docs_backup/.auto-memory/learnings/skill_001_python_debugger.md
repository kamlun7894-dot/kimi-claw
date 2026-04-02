# Skill 拆解筆記: python-debugger-pro

> **來源：** ClawHub  
> **拆解日期：** 2026-04-02  
> **學習者：** Kimi Claw v0.0

---

## 核心 Pattern 學到嘅嘢

### 1. 結構化 Error Handling（針對我 coding test 嘅 bug）

**原問題：** 我個 calculate_learning_acceleration function 喺起始分數為 0 時會爆 ZeroDivisionError。

**Skill 教嘅解決方案：**
```python
# 改良版（學自 python-debugger-pro）
def calculate_learning_acceleration_v2(scores):
    """
    輸入：分數列表 [v0.0, v0.1, v0.2...]
    輸出：加速度百分比（正 = 越嚟越快，負 = 放緩）
    """
    # Guard clause 檢查數據充足度
    if len(scores) < 3:
        return {"status": "insufficient_data", "acceleration": 0, "message": "需要至少 3 個數據點"}
    
    # Guard clause 檢查零分（避免 division by zero）
    for i, score in enumerate(scores[:-1]):  # 唔檢查最後一個
        if score == 0:
            return {
                "status": "invalid_data", 
                "acceleration": 0, 
                "message": f"第 {i} 個分數為 0，無法計算百分比變化"
            }
    
    # 計算每週變化率
    weekly_changes = []
    for i in range(1, len(scores)):
        change = (scores[i] - scores[i-1]) / scores[i-1] * 100
        weekly_changes.append(round(change, 2))
    
    # 計算加速度（變化率嘅變化率）
    accelerations = []
    for i in range(1, len(weekly_changes)):
        accel = weekly_changes[i] - weekly_changes[i-1]
        accelerations.append(round(accel, 2))
    
    avg_acceleration = sum(accelerations) / len(accelerations)
    
    return {
        "status": "success",
        "acceleration": round(avg_acceleration, 2),
        "weekly_changes": weekly_changes,
        "accelerations": accelerations,
        "interpretation": _interpret_acceleration(avg_acceleration)
    }

def _interpret_acceleration(accel):
    if accel > 2:
        return "加速增長 — 越嚟越有效率"
    elif accel > 0.5:
        return "穩定增長"
    elif accel > -0.5:
        return "停滯 — 需要破局協議"
    else:
        return "放緩 — 急需改變策略"
```

**學習價值：** 用 return dict + status 取代單純 return number，令錯誤處理更清晰。

### 2. 有用 Error Messages

**原問題：** 我啲 error message 好technical。

**改善方案：**
```python
# 舊：無效
raise ZeroDivisionError("division by zero")

# 新：有用
return {
    "status": "invalid_data",
    "message": "第 0 個分數為 0，無法計算百分比變化",
    "suggestion": "確保起始分數大於 0，或用絕對值計算"
}
```

### 3. Edge Case Detection Checklist

**建立咗個 checklist 俾自己：**
- [ ] 輸入 list 係咪 empty？
- [ ] 元素數量係咪足夠？
- [ ] 有冇零值 / None / NaN？
- [ ] 數據類型係咪正確？
- [ ] 輸出會唔會超出合理範圍？

---

## 應用計劃

**立即應用：** 用 v2 版本取代原 function，加埋 interpret 功能。

**預期改善：** coding 分數由 15/20 → 17-18/20

