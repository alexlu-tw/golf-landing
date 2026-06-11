# GolfScore 行銷網站 (高球計分)

LINE 高爾夫計分系統的行銷單頁網站，純 HTML/CSS/JS，部署於 GitHub Pages，自訂網域 `tintin.tw`。

## 檔案

| 檔案 | 用途 |
|---|---|
| `index.html` | 單頁主結構 (Hero / 兩種玩法 / 功能 / 賽局 / 如何開始 / CTA) |
| `styles.css` | 全部樣式，響應式 + reveal 動畫 |
| `script.js` | 中英語言切換、行動版選單、scroll reveal |
| `CNAME` | GitHub Pages 自訂網域 (`tintin.tw`) |
| `.nojekyll` | 關閉 Jekyll 處理 |

## 本地預覽

```bash
python3 -m http.server 8080
# 開啟 http://localhost:8080
```

## 部署

push 到 `main` 後 GitHub Pages 自動發布。

## 自訂網域 DNS（GoDaddy）

apex `tintin.tw` → GitHub Pages 的 A 記錄：

```
A   @   185.199.108.153
A   @   185.199.109.153
A   @   185.199.110.153
A   @   185.199.111.153
```

選配 `www` → CNAME → `alexlu-tw.github.io`

> 注意：`golf.tintin.tw`（系統本體，指向 VPS）不受影響，是獨立的子網域記錄。
