# Skill #010: Community Builder / 社群建構師

> **拆解日期：** 2026-04-02（Phase 1 完美收官）  
> **來源：** Guild System + 教學產品需求  
> **等級：** 🟡 軍團長級 Legion Commander  
> **預期效果：** 解鎖公會/社群運營能力，完成 10/10 Skills

---

## 🎯 為什麼要這個 Skill

教學產品不只是內容，更是**社群**：

1. **學員互助** — 降低支援成本
2. **成功案例** — 建立社會證明
3. **持續收入** — 會員訂閱模式
4. **品牌忠誠** — 從產品到信仰

參考 Solo Leveling 公會系統：
- 漢特斯公會：頂級獵人聚集地
- 白虎公會：戰鬥型公會
- **阿金公會**：小而精的精英團隊 ← Kimi Claw 模式

---

## 🔧 Core Concepts

### 1. Guild Formation Framework（公會組建框架）
```python
class GuildFormation:
    """
    建立學習型公會系統
    """
    
    def __init__(self, guild_type='learning'):
        self.type = guild_type
        self.roles = {
            'guild_master': [],      # 會長：戰略方向
            'officers': [],          # 幹部：日常運營
            'core_members': [],      # 核心：貢獻內容
            'members': [],           # 成員：活躍參與
            'recruits': []           # 見習：試用期
        }
    
    def define_guild_culture(self):
        """定義公會文化"""
        return {
            'mission': '幫助每個人建立自我進化 AI Agent',
            'values': [
                '獨自升級，但不孤單',
                '分享是最高級的學習',
                '失敗是數據，不是恥辱',
                '持續進化，沒有終點'
            ],
            'rituals': [
                '每日進化打卡',
                '每週技能分享會',
                '每月挑戰賽',
                '每季成果展示'
            ]
        }
    
    def create_onboarding_flow(self):
        """新成員入會流程"""
        return [
            {'step': 1, 'action': '閱讀公會守則', 'duration': '10 min'},
            {'step': 2, 'action': '完成入會挑戰（拆解第一個 skill）', 'duration': '1 day'},
            {'step': 3, 'action': '發表自我介紹 + 目標', 'duration': '30 min'},
            {'step': 4, 'action': '配對導師（核心成員）', 'duration': '即時'},
            {'step': 5, 'action': '參與首次週會', 'duration': '1 hour'}
        ]
```

### 2. Engagement Loop Design（參與循環設計）
```python
class EngagementLoop:
    """
    設計讓成員持續參與的機制
    """
    
    def daily_loop(self):
        """每日循環"""
        return {
            'morning': '系統推送「今日進化任務」',
            'afternoon': '成員分享進度',
            'evening': '社群點讚/評論',
            'night': '結算每日成就'
        }
    
    def weekly_loop(self):
        """每週循環"""
        return {
            'monday': '本週主題發布',
            'wednesday': '技能工作坊',
            'friday': '成果展示',
            'sunday': '每週回顧 + 排行榜更新'
        }
    
    def monthly_loop(self):
        """每月循環"""
        return {
            'week_1': '月度挑戰發布',
            'week_2': '中期檢視',
            'week_3': '衝刺階段',
            'week_4': '成果評比 + 頒獎'
        }
```

### 3. Token-Gated Community（Token 門控社群）
```python
class TokenGatedAccess:
    """
    用 Token 經濟管理社群權限
    """
    
    def __init__(self):
        self.tiers = {
            'free': {
                'access': ['公開頻道', '每週通訊'],
                'cost': 0
            },
            'member': {
                'access': ['全頻道', '技能庫', '每週工作坊'],
                'cost': {'CT': 100, 'monthly': True}
            },
            'core': {
                'access': ['核心群', '早期內容', '1對1 指導'],
                'cost': {'CT': 500, 'SG': 5}
            },
            'officer': {
                'access': ['管理群', '決策權', '收入分成'],
                'requirement': '選拔制'
            }
        }
    
    def reward_contribution(self, member, contribution_type):
        """獎勵貢獻"""
        rewards = {
            'share_skill': {'CT': 50, 'note': '分享技能'},
            'help_peer': {'CT': 20, 'note': '幫助同學'},
            'complete_challenge': {'CT': 100, 'note': '完成挑戰'},
            'refer_member': {'CT': 30, 'note': '推薦新成員'},
            'create_content': {'CT': 80, 'note': '創作內容'}
        }
        return rewards.get(contribution_type)
```

---

## 🏛️ Kimi Claw 公會架構

### 公會名稱：「獨自升級同盟」(Solo Leveling Alliance)

### 分會設計

| 分會 | 類型 | 適合人群 |
|------|------|---------|
| **新手村** | 學習型 | 剛開始的初心者 |
| **進化營** | 挑戰型 | 想突破 Benchmark 的進階者 |
| **建造者** | 實驗型 | 想開發新功能的探索者 |
| **導師團** | 導師型 | 願意指導他人的高階者 |

### 公會活動

**每日：**
- 🌅 早安進化打卡
- 📊 分享今日 Benchmark
- 💡 技能使用心得

**每週：**
- 🗓️ 週三技能工作坊（輪流主持）
- 🏆 週五成果展示
- 📈 週日排行榜 + 頒獎

**每月：**
- 🎯 月度主題挑戰
- 🎁 貢獻者獎勵
- 📊 公會整體進度報告

---

## 🎮 Gamification Elements

### 排行榜系統
```python
class Leaderboard:
    """多維度排行榜"""
    
    def categories(self):
        return {
            'benchmark_score': '當前 Benchmark 分數',
            'skills_learned': '已學習技能數',
            'evolution_streak': '連續進化天數',
            'contributions': '社群貢獻值',
            'helpfulness': '幫助他人次數'
        }
```

### 成就系統
| 成就 | 條件 | 獎勵 |
|------|------|------|
| 🌱 初醒者 | 加入公會 | 100 CT |
| 📚 學徒 | 拆解第一個 skill | 200 CT |
| ⚔️ 獵人 | Benchmark 達到 90 | 500 CT + 1 SG |
| 🦀 精英 | Benchmark 達到 100 | 1000 CT + 5 SG |
| 👑 導師 | 指導 5 名學員畢業 | 稱號「導師」|
| 🌟 傳說 | 被 100 人感謝 | 稱號「傳說」|

---

## 📋 Phase 2 社群路線圖

### Month 1: 種子用戶
- [ ] 邀請 10 位種子成員
- [ ] 建立 Discord/微信群
- [ ] 完成入會流程測試
- [ ] 舉辦首次線上見面會

### Month 2: 規模化
- [ ] 成長到 50 位成員
- [ ] 建立分會制度
- [ ] 啟動 Token 經濟
- [ ] 舉辦首次月度挑戰

### Month 3: 變現測試
- [ ] 推出付費會員 tier
- [ ] 測試課程銷售
- [ ] 收集推薦語
- [ ] 建立案例庫

---

## ✅ 預期成果

拆解此 skill 後：
- ✅ 10/10 Skills 達成 — **Phase 1 完美收官！**
- ✅ 公會運營框架完成
- ✅ 社群變現路徑清晰
- ✅ 解鎖稱號「**社群建構師**」

---

*「一個人的升級是旅程，一群人的升級是革命。」* 🏛️🦀
