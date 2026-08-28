# 卢春翔的个人主页

这是卢春翔的静态个人主页，适合直接部署到 GitHub Pages。

## 页面结构

- `index.html`：主页，按“学术研究 / 实习经历”两条主线组织信息
- `projects/academic-research.html`：学术研究时间线与两个当前研究子项目
- `projects/internship.html`：上海苦芽科技有限公司实习经历与两个项目
- `resume.html`：安全版公开简历，可在浏览器中打印或保存为 PDF
- `articles/index.html`：调研与笔记入口
- `styles.css`：纸张编辑风格的全站样式
- `CNAME`：当前自定义域名 `luchunxiang.cn`

## 发布到 GitHub Pages

1. 将这些文件上传到 `echobird233/echobird233.github.io` 仓库根目录。
2. 在仓库的 **Settings → Pages** 中选择从 `main` 分支的根目录发布。
3. 等待 GitHub Pages 完成构建后，访问 `https://echobird233.github.io/` 检查页面。
4. 在域名服务商处将 `luchunxiang.cn` 指向 GitHub Pages，并等待 HTTPS 证书生效。
5. 之后访问 `https://luchunxiang.cn/` 验证自定义域名。

如果最终购买的域名不是 `luchunxiang.cn`，请同步修改 `CNAME`、各页面的 canonical/OG 地址、`robots.txt` 和 `sitemap.xml`。

## 后续更新

新增文章时，可以在 `articles/` 下添加独立的 `.html` 或 `.md` 文件，再把链接加入 `articles/index.html` 和 `sitemap.xml`。项目页应继续保留实验环境、结果和局限说明，避免把阶段性结果写成最终结论。
