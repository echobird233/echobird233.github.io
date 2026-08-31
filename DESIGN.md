---
name: "卢春翔个人主页"
description: "以研究档案为核心的连续文档式学术个人主页"
colors:
  paper: "#f5f0e6"
  paper-deep: "#eee7da"
  rail: "#242522"
  rail-ink: "#e8e0d2"
  ink: "#292824"
  muted: "#6d675f"
  soft: "#726960"
  accent: "#9a5735"
  accent-bright: "#bd744d"
  accent-soft: "#a16d51"
typography:
  display:
    fontFamily: "Georgia, Noto Serif SC, Songti SC, STSong, serif"
    fontSize: "clamp(31px, 3vw, 38px)"
    fontWeight: 500
    lineHeight: 1.28
    letterSpacing: "-0.028em"
  headline:
    fontFamily: "Georgia, Noto Serif SC, Songti SC, STSong, serif"
    fontSize: "27px"
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Georgia, Noto Serif SC, Songti SC, STSong, serif"
    fontSize: "18px"
    fontWeight: 500
    lineHeight: 1.48
  body:
    fontFamily: "Inter, PingFang SC, Microsoft YaHei, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.76
  lead:
    fontFamily: "Georgia, Noto Serif SC, Songti SC, STSong, serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.95
  label:
    fontFamily: "SFMono-Regular, Consolas, Liberation Mono, monospace"
    fontSize: "10px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.16em"
rounded:
  none: "0"
  circle: "999px"
spacing:
  compact: "8px"
  small: "13px"
  text: "18px"
  block: "24px"
  entry: "30px"
  rail: "42px"
  section: "66px"
components:
  monogram:
    backgroundColor: "{colors.rail}"
    textColor: "{colors.rail-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.circle}"
    width: "68px"
    height: "68px"
  mobile-menu:
    backgroundColor: "transparent"
    textColor: "{colors.rail-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.circle}"
    padding: "7px 9px"
  timeline-entry:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    rounded: "{rounded.none}"
    padding: "25px 7px 25px 0"
---

# Design System: 卢春翔个人主页

## Overview

**Creative North Star: "The Research Dossier / 研究档案"**

网站应像一份持续更新的个人研究档案，而不是演示文稿、产品宣传页或卡片式作品集。深色资料栏保存稳定的身份、作者与联系方式；暖色正文区域按时间和主题连续展开研究、实习、荣誉与笔记，使访问者能够先快速判断研究方向，再选择进入具体项目。

设计表达保持克制、可信和有个人辨识度。视觉兴趣来自中西文字体关系、纸张质感、时间线、细线和少量棕色强调，不依赖大面积渐变、卡片阴影或夸张装饰。动画只用于解释页面进入、阅读进度、当前章节和链接状态，不能延迟阅读。

**Key Characteristics:**

- 深色左侧资料栏与暖色连续正文形成稳定的双区结构。
- 研究和实习按时间线组织，详细页面保持长文阅读逻辑。
- 衬线体负责姓名、标题和导语；无衬线体负责正文；等宽体负责日期、编号和标签。
- 棕色只承担强调、链接、状态与导航反馈，不作为大面积背景。
- 页面可以有轻微纸张纹理和细节动画，但内容始终先于效果。

## Colors

色彩取自暖纸、深墨和陶土棕，整体低饱和，强调研究档案的耐读性。

### Primary

- **档案棕（Archive Brown）**：用于链接、章节编号、重点标签和局部交互反馈；在单个视口中保持稀少。
- **明亮陶土棕（Bright Terracotta）**：仅用于深色资料栏上的高亮、焦点轮廓和阅读进度。
- **柔和陶土棕（Soft Terracotta）**：用于项目角色、元信息等次级强调。

### Neutral

- **暖纸白（Warm Paper）**：全站正文背景。
- **深层纸色（Deep Paper）**：需要轻微层次时使用，不扩展为独立卡片表面。
- **炭黑资料栏（Charcoal Rail）**：桌面侧栏、移动端顶部资料区和页面转场。
- **纸上墨色（Paper Ink）**：主要标题与正文中的最强文字。
- **资料栏浅墨（Rail Ink）**：深色资料栏中的主要文字。
- **正文灰棕（Muted Brown Gray）**：项目说明和普通正文。
- **元信息灰棕（Soft Brown Gray）**：日期、更新说明和次级信息。

**The Sparse Accent Rule.** 棕色强调必须有信息作用；同一视口内不同时制造多个棕色视觉中心。

**The Two-Surface Rule.** 页面只保留“深色资料栏”和“暖纸正文”两种主表面，不再叠加第三种大面积卡片背景。

## Typography

**Display Font:** Georgia，以 Noto Serif SC、Songti SC、STSong 和系统衬线体回退。  
**Body Font:** Inter，以 PingFang SC、Microsoft YaHei 和 system-ui 回退。  
**Label/Mono Font:** SFMono-Regular，以 Consolas、Liberation Mono 和系统等宽体回退。

**Character:** 衬线体提供档案、论文与书面材料的气质；无衬线体保证较长的项目说明清楚易读；等宽体将时间、编号和技术元信息与正文区分开。

### Hierarchy

- **Display**（500，`clamp(31px, 3vw, 38px)`，1.28）：页面唯一的一级标题；移动端降至 29px。
- **Headline**（500，27px，1.35）：主要章节标题；移动端降至 22px，并配合细分隔线。
- **Title**（500，18px，1.48）：研究项目、实习单位和子条目标题。
- **Lead**（400，17px，1.95）：页面开头简介，最大行宽 750px；移动端为 15px。
- **Body**（400，16px，1.76）：全站基础文字；时间线内容通常收紧至 13px、1.86。
- **Label**（700，10px，0.16em 字距）：章节编号、标签和导航元信息；不承担长段阅读。

**The Three-Voice Rule.** 每类文字只使用一种明确角色：衬线标题、无衬线正文、等宽元信息；不要增加第四种装饰字体。

**The Reading Measure Rule.** 连续正文保持约 45–75 个字符的阅读宽度，导语不得铺满整个宽屏正文区。

## Layout

桌面端采用 292px 固定资料栏和自适应正文的双列网格。资料栏吸附于视口左侧并占满高度；正文容器宽度为 `min(940px, calc(100% - 88px))`，水平居中，顶部留白 68px。主要章节之间使用 66px 间距，避免每一块都像独立幻灯片。

时间线条目采用 156px 日期列、30px 列间距和自适应内容列。研究重点、相关兴趣与主修课程在宽屏中使用三列，但属于同一个简介段落的补充信息，不使用卡片边框或独立背景。

在 960px 及以下切换为单列：资料栏变成页面顶部身份区，导航由文字按钮展开；正文宽度为 `min(100% - 38px, 820px)`。时间线、荣誉和资料分组全部改为单列，横向数据表允许滚动。MENU、折叠联系方式、导航和项目链接的触控高度不得低于 44px。DOM 阅读顺序必须与视觉顺序一致。

**The Continuous Document Rule.** 主页面依靠标题、时间、细线和留白分节，不使用等高卡片网格或满屏分镜。

## Elevation & Depth

系统以平面层级为主，不使用常驻卡片阴影。深度来自深浅表面的并置、纸张点状纹理、细分隔线、时间线左侧强调和悬停时的轻微色带。阅读进度可以使用小范围光晕，但不能扩散成装饰性玻璃拟态。

**The Flat-by-Default Rule.** 静态内容保持平面；阴影、光晕和位移只在状态反馈或签名细节中短暂出现。

## Shapes

正文结构以直线、开放边界和方角为主。圆形只用于 LCX 字母标识，胶囊形只用于移动端菜单按钮。研究条目、荣誉和笔记不得统一包裹成圆角卡片。细线承担分组和节奏，不使用厚重边框。

## Components

### Profile Rail

- 桌面端为 292px 深色吸附栏，内部使用紧凑的纵向信息结构。
- 姓名和字母标识优先，作者标识、联系方式和导航依次降低对比度。
- 移动端转换为顶部身份区；详细联系方式通过原生 `details` 折叠。

### Monogram

- 68px 圆形 LCX 标识，移动端为 52px。
- 边缘使用细实线与内部虚线；填充动画只作为轻量签名效果。
- 不将 LCX 扩展为大面积水印或重复图案。

### Navigation

- 桌面端使用编号、英文标签和短强调线表示当前位置。
- 移动端使用 MENU / CLOSE 明文按钮，展开后保持 3 列、2 行的紧凑导航。
- 移动端按钮和导航项保持紧凑文字外观，但实际触控高度至少为 44px。
- 当前状态必须同时有文字对比和线条反馈，不能只依赖颜色。

### Section Kicker

- 由两位章节编号、英文标签和短细线组成。
- 使用等宽体、大写和棕色；每个主要章节只出现一次。

### Timeline Entry

- 日期与内容分列，底部使用细分隔线。
- 悬停仅增加轻微左移、色带和左侧短线；移动端取消倾斜与横向位移。
- 子项目使用单条左边线嵌套，不再添加卡片。

### Inline Link

- 以深棕色等宽小字呈现，底线从短到长展开。
- 外部链接保留 ↗，站内详情链接保留 →，让去向可被识别。

### Page Motion

- 页面进入使用 LCX 深色遮罩，章节在进入视口时轻微显现。
- 桌面精细指针使用“档案刻度环”光标：中心点跟随操作位置，刻度环平滑跟随，并以 HOME、GO、READ、CODE、MAIL 等短标签说明链接去向。
- 点击反馈使用一次 420ms 的双环印章扩散；不产生拖尾、粒子或重复弹跳。正文阅读区域恢复系统文字光标。
- 必须尊重 `prefers-reduced-motion`；移动端和低性能环境不得依赖动画才能看到内容。
- 不增加弹跳、重复视差或每个组件各自运行的装饰动画。

## Do's and Don'ts

### Do:

- **Do** 保留左侧身份资料与右侧连续研究档案的明确分工。
- **Do** 用时间、角色、方法、结果、限制和公开链接组织研究与实习内容。
- **Do** 通过字号、字族、留白和细线建立层级，先解决阅读顺序，再增加装饰。
- **Do** 在桌面与手机端同时检查首屏、长标题、长日期、44px 触控目标、外部链接和 200% 缩放。
- **Do** 保持中文主体与必要英文术语并存，但同一级标题的语言策略应一致。

### Don't:

- **Don't** 使用 PPT 式满屏分段、巨型口号或每屏一个结论的布局。
- **Don't** 将研究、实习、课程和荣誉全部改成圆角卡片矩阵。
- **Don't** 使用紫蓝渐变、玻璃拟态、霓虹光效或与学术档案无关的科技背景。
- **Don't** 让动画遮挡、延迟或反复打断阅读。
- **Don't** 为了“更丰富”而添加未经确认的论文状态、合作经历、评价或研究成果。
