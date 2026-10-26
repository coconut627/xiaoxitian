# 小西天 · 悬塑入境

介绍小西天与悬塑艺术的中文互动网站。包含照片赏鉴、历史时间轴、材料探索、文化解读、游戏与实景对照、知识问答和实景拼图。

## 运行

这是纯静态网站，无需安装依赖或配置 API 密钥。用浏览器打开 index.html 即可浏览；也可在本目录运行 python -m http.server 8000 后访问 http://localhost:8000。

## GitHub Pages

将本目录的文件和 images 文件夹上传至仓库根目录（不要只上传 ZIP）。在 Settings → Pages 中选择 Deploy from a branch，再选 main 和 / (root)，保存后等待部署。GitHub Free 的 Pages 使用公开仓库。

官方指南：https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 文件

- index.html：页面内容
- style.css、rich.css、knowledge.css、puzzle.css：样式
- app.js、rich.js、knowledge.js：导览、问答等交互
- puzzle-core.js、puzzle.js：拼图逻辑
- images/：照片与游戏片段

图片、脚本均随网站提供；字体使用系统回退，不依赖 Google Fonts。印章与拼图纪录保存在访客当前浏览器，清除浏览器数据后会重置。

## 来源与版权

页面内列有文献与图片来源。实景照片及游戏影像的权利属于各原权利人，仓库不为这些素材授予开源许可。

GitHub Pages 的大陆访问效果仍需实际网络测试，上传成功不代表所有地区均可稳定访问。
