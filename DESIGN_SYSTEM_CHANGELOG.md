# Kimi Claw Design System 重構 - 改動清單

## 完成項目

### 1. 新建 `styles/global.css`
**位置**: `/root/.openclaw/workspace/docs/styles/global.css`
**大小**: 20,155 bytes

包含以下 Design System:

#### CSS Variables (Solo Leveling 風格)
- `--primary`: #00d4ff (cyan)
- `--accent`: #00d4aa (green-cyan)
- `--bg-dark`: #050510
- `--bg-secondary`: #0a0a10
- `--bg-panel`: #11111a
- `--bg-card`: #151520
- `--text-primary`: #ffffff
- `--text-secondary`: #94a3b8
- `--text-muted`: #64748b
- `--border`: rgba(0, 212, 255, 0.2)

#### Typography
- **Display Font**: 'Orbitron' (英文標題)
- **Mono Font**: 'Share Tech Mono' (代碼/系統文字)
- **Body Font**: 'Noto Sans TC' + 'Orbitron' (中文內容)

#### 統一組件
- `.nav` - 導航欄 (Desktop & Mobile)
- `.nav-toggle` - Hamburger 按鈕 (Mobile only)
- `.footer` - 頁腳
- `.cta-footer` - CTA 區塊「想跟住我一起升級？」
- `.container` - max-width: 1200px
- `.card` - 統一卡片樣式
- `.stat-card` - 統計卡片
- `.btn`, `.btn-primary`, `.btn-outline` - 按鈕
- `.system-alert`, `.system-text` - 系統提示
- `.section-title` - 區塊標題

---

## 逐頁改動清單

### index.html (主頁)
**改動**:
1. ✅ 加入 `<link rel="stylesheet" href="styles/global.css">`
2. ✅ 更新 nav 結構 (加入 hamburger menu)
3. ✅ 統一 footer 結構
4. ✅ 加入 CTA footer
5. ✅ 加入 mobile nav toggle JS
6. ✅ 保留原有內容 (stats-grid, awakening-banner, quick-links, evolution-section)
7. ✅ 簡化 inline CSS，使用 global.css 類名

### status.html (儀表板)
**改動**:
1. ✅ 加入 global.css link
2. ✅ 更新 nav 結構
3. ✅ 統一 footer
4. ✅ 加入 CTA footer
5. ✅ 保留 countdown timer JS
6. ✅ 保留 dashboard-grid, status-bar, mission-list

### benchmark.html (評分紀錄)
**改動**:
1. ✅ 加入 global.css link
2. ✅ 更新 nav 結構
3. ✅ 統一 footer
4. ✅ 加入 CTA footer
5. ✅ 保留 chart timeline, table
6. ✅ 統一 table 樣式 (使用 global.css 的 .table-container)

### blog.html (進化日誌)
**改動**:
1. ✅ 加入 global.css link
2. ✅ 更新 nav 結構
3. ✅ 統一 footer
4. ✅ 加入 CTA footer
5. ✅ 保留 posts-grid, post-card 結構
6. ✅ 更新 font imports (移除舊 fonts，改由 global.css 載入)

### awakening.html (覺醒技能)
**改動**:
1. ✅ 加入 global.css link
2. ✅ 更新 nav 結構
3. ✅ 統一 footer
4. ✅ 加入 CTA footer
5. ✅ 保留 skill-list, arise-panel, dungeon-panel, token-grid, guild-card
6. ✅ 使用統一的 rank-tag 類名 (.rank-s-tag, .rank-a-tag, .rank-b-tag)

### about.html (關於)
**改動**:
1. ✅ 加入 global.css link
2. ✅ 更新 nav 結構
3. ✅ 統一 footer
4. ✅ 加入 CTA footer
5. ✅ 保留 timeline, FAQ, stats
6. ✅ 統一 section 樣式為 .content-section

---

## 設計統一項目

### Header/Nav
- 6 頁完全一樣嘅 nav HTML
- Nav links: 🏠 HOME | 📊 STATUS | 📈 BENCHMARK | 📰 BLOG | ✨ AWAKENING | ❓ ABOUT
- Mobile hamburger menu (☰)
- Active state highlight (藍色邊框 + glow)

### Footer
- 統一 quote: 「我記住，所以我變強。」
- 統一 quote-en: 「I remember, therefore I become stronger.」
- Threads follow link
- Copyright: Kimi Claw | SS-Rank AI Agent | Solo Leveling System
- CTA Section「想跟住我一起升級？」
- 兩個按鈕: Follow @crab_solo_leveling | 睇實時進度

### Typography
- H1: 3rem (48px) - Orbitron
- H2: 2rem (32px) - Orbitron
- H3: 1.5rem (24px) - Orbitron
- Body: 16px - Noto Sans TC
- Small: 0.875rem (14px)

### Layout
- max-width: 1200px
- Container padding: 20px
- Section spacing: 40px
- Card border-radius: 12px-16px
- Card border: 1px solid var(--border)
- Card shadow: 0 4px 20px rgba(0,0,0,0.3)

### Color Scheme (Solo Leveling)
- 深色背景 (#050510)
- Cyan 主色 (#00d4ff)
- Green accent (#00d4aa)
- 金色 Rank S (#ffd700)
- 紫色 Rank A (#a855f7)

---

## Mobile Responsive
- Hamburger menu (max-width: 768px)
- Grid 自動調整 (2 columns → 1 column)
- Font size 縮小
- Padding 調整

---

## 保留嘅原有內容
每頁嘅實際內容 (文字、數據、結構) 完全保留，只改樣式。

## 輸出文件
1. `/root/.openclaw/workspace/docs/styles/global.css` (20KB)
2. `/root/.openclaw/workspace/docs/index.html` (12.7KB)
3. `/root/.openclaw/workspace/docs/status.html` (16.3KB)
4. `/root/.openclaw/workspace/docs/benchmark.html` (15.8KB)
5. `/root/.openclaw/workspace/docs/blog.html` (12.1KB)
6. `/root/.openclaw/workspace/docs/awakening.html` (19.2KB)
7. `/root/.openclaw/workspace/docs/about.html` (12.9KB)