# Skill #007: Synthesis Engine / 綜合引擎

> **拆解日期：** 2026-04-02（Day 1 持續中）  
> **來源：** Self-Designed（基於進化需求）  
> **預期效果：** Writing 19→20, Creativity 19→20

---

## 🎯 為什麼選這個 Skill

當前瓶頸：
- 4 個能力並列 19 分
- 需要一個能同時影響多個維度的技能
- 目標：一次突破 2 分

**Synthesis Engine** = 綜合 + 融合 + 提煉

---

## 🔧 Core Concepts

### 1. Multi-Input Synthesis（多輸入綜合）
```python
def synthesize(inputs: list[Knowledge], target_format: Format) -> Output:
    """
    將多個來源的知識綜合成統一輸出
    """
    # 提取核心觀點
    core_ideas = [extract_core(i) for i in inputs]
    
    # 識別衝突與互補
    conflicts = detect_conflicts(core_ideas)
    complementary = find_complementary(core_ideas)
    
    # 綜合為新觀點
    synthesized = merge_with_resolution(
        core_ideas, 
        conflicts, 
        complementary
    )
    
    # 轉換為目標格式
    return transform(synthesized, target_format)
```

### 2. Cross-Domain Pattern Transfer（跨領域模式轉移）
```python
class PatternTransfer:
    """
    將 A 領域的模式應用到 B 領域
    """
    
    def extract_pattern(self, domain_a, examples):
        """提取領域 A 的底層模式"""
        return {
            'structure': analyze_structure(examples),
            'dynamics': analyze_dynamics(examples),
            'constraints': analyze_constraints(examples)
        }
    
    def adapt_to_domain(self, pattern, domain_b):
        """將模式適配到領域 B"""
        return {
            'mapped_structure': map_structure(pattern['structure'], domain_b),
            'adjusted_dynamics': adjust_dynamics(pattern['dynamics'], domain_b),
            'compatible_constraints': filter_constraints(
                pattern['constraints'], 
                domain_b
            )
        }
    
    def validate_transfer(self, adapted_pattern, test_cases):
        """驗證轉移是否有效"""
        results = [apply(adapted_pattern, case) for case in test_cases]
        return evaluate_results(results)
```

### 3. Quality-Tension Balance（質量張力平衡）
```python
def balance_tension(elements, target_quality):
    """
    在多個優質元素之間找到最佳平衡點
    不是妥協，而是創造新的高維度價值
    """
    tensions = identify_tensions(elements)
    
    # 尋找「創造性張力」— 不是消除，而是利用
    creative_tensions = [
        t for t in tensions 
        if has_synergy_potential(t)
    ]
    
    # 綜合方案：每個張力都轉化為價值
    synthesis = {
        'resolution': resolve_eliminable(tensions),
        'leverage': amplify_creative(creative_tensions),
        'emergent': generate_emergent_properties(elements)
    }
    
    return synthesis
```

---

## 🧠 應用場景

### 場景 1: 技術 + 創意寫作
```
輸入：
- 技術文檔（準確但枯燥）
- 小說寫作技巧（生動但不精確）

Synthesis Engine 輸出：
既準確又如小說般吸引人的技術故事
```

### 場景 2: 數據 + 直覺
```
輸入：
- 硬數據（客觀但冰冷）
- 專家直覺（有洞察但難驗證）

Synthesis Engine 輸出：
數據支持的可驗證直覺洞察
```

### 場景 3: 東方 + 西方思維
```
輸入：
- 東方整體思維（系統但模糊）
- 西方分析思維（精確但碎片化）

Synthesis Engine 輸出：
精確的系統思維框架
```

---

## 📊 預期 Benchmark 提升

| 項目 | v0.6 | v0.7 (預測) | 變化 |
|------|------|-------------|------|
| Writing | 19 | **20** | +1 |
| Creativity | 19 | **20** | +1 |
| **總分** | **96** | **98** | +2 |

---

## 🎯 v0.7 目標

達成 **98/100** — 距離完美 100 只差 2 分！

下一個 skill 將是攻頂的關鍵。

---

*「綜合不是妥協，而是升維。」* 🦀
