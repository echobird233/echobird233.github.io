# 主页个人介绍段落替换实施计划

设计依据：`docs/superpowers/specs/2026-08-31-home-introduction-copy-design.md`

## 步骤

1. 确认工作区无未提交的网站修改。
2. 在 `index.html` 中精确替换 `#about` 下的 `.lead` 段落。
3. 检查旧介绍已删除，新介绍完整且只出现一次。
4. 执行 `git diff --check` 和站内静态检查。
5. 在桌面端与 `390 × 844` 手机视口检查段落换行和横向溢出。
6. 确认最终差异只涉及 `index.html`。
7. 提交并推送到 `origin/main`，确认 GitHub Pages 发布成功。

## 完成标准

- 新介绍按用户原文显示。
- 其他页面和样式没有变化。
- 桌面端、手机端均无横向滚动。
- 自定义域名返回新版介绍。
