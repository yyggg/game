<br />
<div align="center">
    <img src="https://doc.buildadmin.com/images/logo.png" alt="" />
    <h1 style="font-size: 36px;color: #2c3e50;font-weight: 600;margin: 0 0 6px 0;">BuildAdmin</h1>
    <p style="font-size: 17px;color: #6a8bad;margin-bottom: 10px;">使用流行技术栈快速创建商业级后台管理系统</p>
    <a href="https://uni.buildadmin.com" target="_blank">官网</a> |
    <a href="https://demo.buildadmin.com" target="_blank">演示</a> |
    <a href="https://ask.buildadmin.com" target="_blank">社区</a> |
    <a href="https://doc.buildadmin.com/" target="_blank">文档</a> |
    <a href="https://jq.qq.com/?_wv=1027&k=c8a7iSk8" target="_blank">加群</a> |
    <a href="https://doc.buildadmin.com/guide/" target="_blank">视频介绍</a> |
    <a href="https://gitee.com/wonderful-code/buildadmin" target="_blank">Gitee仓库</a> |
    <a href="https://github.com/build-admin/BuildAdmin" target="_blank">GitHub仓库</a>
</div>
<br />
<p align="center">
    <a href="https://www.thinkphp.cn/" target="_blank">
        <img src="https://img.shields.io/badge/ThinkPHP-%3E8.0-brightgreen?color=91aac3&labelColor=439EFD" alt="vue">
    </a>
    <a href="https://v3.vuejs.org/" target="_blank">
        <img src="https://img.shields.io/badge/Vue-%3E3.4-brightgreen?color=91aac3&labelColor=439EFD" alt="vue">
    </a>
    <a href="https://element-plus.org/zh-CN/guide/changelog.html" target="_blank">
        <img src="https://img.shields.io/badge/Element--Plus-%3E2.7-brightgreen?color=91aac3&labelColor=439EFD" alt="element plus">
    </a>
    <a href="https://www.tslang.cn/" target="_blank">
        <img src="https://img.shields.io/badge/TypeScript-%3E5.4-blue?color=91aac3&labelColor=439EFD" alt="typescript">
    </a>
    <a href="https://vitejs.dev/" target="_blank">
        <img src="https://img.shields.io/badge/Vite-%3E5.2-blue?color=91aac3&labelColor=439EFD" alt="vite">
    </a>
    <a href="https://pinia.vuejs.org/" target="_blank">
        <img src="https://img.shields.io/badge/Pinia-%3E2.1-blue?color=91aac3&labelColor=439EFD" alt="vite">
    </a>
    <a href="https://gitee.com/wonderful-code/buildadmin/blob/master/LICENSE" target="_blank">
        <img src="https://img.shields.io/badge/Apache2.0-license-blue?color=91aac3&labelColor=439EFD" alt="license">
    </a>
</p>

<br>
<div align="center">
  <img src="https://doc.buildadmin.com/images/readme/dashboard-radius.png" />
</div>
<br>

### 介绍
🌈 基于 Vue3.3 + ThinkPHP8 + TypeScript + Vite + Pinia + Element Plus 等流行技术栈的后台管理系统，支持常驻内存运行、可视化CRUD代码生成、自带WEB终端、自适应多端、同时提供Web、WebNuxt、Server端、内置全局数据回收站和字段级数据修改保护、自动注册路由、无限子级权限管理等，无需授权即可免费商用，希望能帮助大家实现快速开发。

### 主要特性
**🚀 CRUD代码生成：**
图形化拖拽生成后台增删改查代码，自动创建数据表；大气且实用的表格，多达24种表单组件支持，行拖拽排序，受权限控制的编辑和删除等等，并支持关联表，可为您节省大量开发时间。

**💥 内置WEB终端：**
我们内置了一个WEB终端以实现一些理想中的功能，比如：虽然是基于vue3的系统，但你在安装本系统时，并不需要手动执行`npm install`和`npm build`命令。且后续本终端将为您提供更多方便、快捷的服务。

**👍 流行且稳定的技术栈：**
除了基于`ThinkPHP8`前后端分离架构外，我们的`Vue3`使用了`Setup`、状态管理使用`Pinia`、并使用了`TypeScript`、`Vite`等可以为你的知识面添砖加瓦的技术栈。

**🎨 模块市场：**
一键安装数据导出、短信发送、云存储、单页或是纯前端技术栈的学习案例项目等等，随时随地为系统添砖加瓦，系统能够自动维护`package.json`和`composer.json`并通过内置终端自动完成模块所需依赖的安装，若您愿意成为模块开发者，模块可以：覆盖系统任何文件或为系统新增文件，您的模块经由官方审核即可上架。

**🔀 前后端分离：**
`web`文件夹内包含：`干净`(不含后端代码)、`完整`(所有前端代码文件均在此内) 的前端代码文件，对前端开发者友好，作为纯前端开发者，您可以将BAdmin当做学习与资源的社群，本系统可为您准备好案例和模板等所需要的环境，而您只需专注于学习或工作，不需要会任何后端代码！（邀您：[和我们一起](https://jq.qq.com/?_wv=1027&k=c8a7iSk8) ）

**⚡️ 常驻内存：**
系统内置的功能均可常驻内存运行，享受比传统框架快上数十倍的性能提升！目前[Workerman模块](https://modules.buildadmin.com/workerman)可提供框架的常驻内存`HTTP服务`，同时该模块还提供了开箱即用的`WebSocket服务`。

**🚚 按需加载：**
前端的页面组件和语言包均是在使用到它们时，才从网络异步加载，服务端则是基于`TP8`和`PSR规范`天生拥有真正的按需加载能力，所以，您无需考虑`我并不需要多语言`、`我并不需要某个后台功能`这类的问题，不需要不使用或隐藏即可。

**🌴 数据回收与反悔：**
内置全局数据回收站，并且提供字段级数据修改记录和修改对比，随时回滚和还原，安全且无感。

**✨ 高颜值：**
提供三种布局模式，其中默认布局使用无边框设计风格，它并没有强行填满屏幕的每一个缝然后使用边框线进行分隔，所有的功能版块，都像是悬浮在屏幕上的，同时又将屏幕空间及其合理的利用了。

**🔐 权限验证：**
可视化的管理权限，然后根据权限动态的注册路由、菜单、页面、按钮(权限节点)、支持无限父子级权限分组、前后端搭配鉴权，自由分派页面和按钮权限。

**📝 未来可期：**
我们正在持续维护系统，并着手开发更多基础设施模块，按需一键安装，甚至提供开箱即用的各行业完整应用。

**🧱 一举多得：**
后台自适应PC、平板、手机等多种场景的支持，轻松应对各种需求。

**💖 其他杂项：**
角色组/管理员/管理员日志、 会员/会员组/会员余额、积分日志、系统配置/控制台/附件管理/个人资料管理等等、更多特性等你探索...

### 安装使用
💫 我们提供了完善的文档，对于熟悉`ThinkPHP`和`Vue`的用户，请使用大佬版：[快速上手](https://doc.buildadmin.com/guide/install/start.html) ，对于新人朋友，我们额外准备了各个操作系统的从零开始套餐：[Windows从零到一](https://doc.buildadmin.com/guide/install/windows.html) | [Linux从零到一](https://doc.buildadmin.com/guide/install/linux-bt.html) | [MacBook安装引导](https://doc.buildadmin.com/guide/install/macBook.html)

### 联系我们
- [演示站](https://demo.buildadmin.com) 账户：`admin`，密码：`123456`（演示站数据无法修改，请下载源码安装体验全部功能）
- [问答社区：ask.buildadmin.com](https://ask.buildadmin.com)
- [官方网站：uni.buildadmin.com](https://uni.buildadmin.com)
- [文档：doc.buildadmin.com](https://doc.buildadmin.com/)
- 加群：[687903819（已满）](https://jq.qq.com/?_wv=1027&k=QwtXa14c)、[751852082](https://jq.qq.com/?_wv=1027&k=c8a7iSk8)
- [Gitee仓库](https://gitee.com/wonderful-code/buildadmin)、[GitHub仓库](https://github.com/build-admin/BuildAdmin)
- [官方邮箱 hi@buildadmin.com](mailto:hi@buildadmin.com)

### 项目预览
|  |  |
|---------------------|---------------------|
|![登录](https://doc.buildadmin.com/images/readme/login.gif)|![控制台](https://doc.buildadmin.com/images/readme/dashboard.png)|
|![布局配置](https://doc.buildadmin.com/images/readme/layout.png)|![表格](https://doc.buildadmin.com/images/readme/admin.png)|
|![表单](https://doc.buildadmin.com/images/readme/user.png)|![系统配置](https://doc.buildadmin.com/images/readme/config.png)|
|![数据回收规则](https://doc.buildadmin.com/images/readme/data-recycle.png)|![数据回收日志](https://doc.buildadmin.com/images/readme/data-recycle-log.png)|
|![敏感数据](https://doc.buildadmin.com/images/readme/sensitive-data.png)|![菜单](https://doc.buildadmin.com/images/readme/menu.png)|
|![单栏布局](https://doc.buildadmin.com/images/readme/layout-3.png)|![经典布局](https://doc.buildadmin.com/images/readme/layout-2.png)|

### 特别鸣谢
💕 感谢巨人提供肩膀，排名不分先后
- [Thinkphp](http://www.thinkphp.cn/)
- [FastAdmin](https://gitee.com/karson/fastadmin)
- [Vue](https://github.com/vuejs/core)
- [vue-next-admin](https://gitee.com/lyt-top/vue-next-admin)
- [Element Plus](https://github.com/element-plus/element-plus)
- [TypeScript](https://github.com/microsoft/TypeScript)
- [vue-router](https://github.com/vuejs/vue-router-next)
- [vite](https://github.com/vitejs/vite)
- [Pinia](https://github.com/vuejs/pinia)
- [Axios](https://github.com/axios/axios)
- [nprogress](https://github.com/rstacruz/nprogress)
- [screenfull](https://github.com/sindresorhus/screenfull.js)
- [mitt](https://github.com/developit/mitt)
- [sass](https://github.com/sass/sass)
- [wangEditor](https://github.com/wangeditor-team/wangEditor)
- [echarts](https://github.com/apache/echarts)
- [vueuse](https://github.com/vueuse/vueuse)
- [lodash](https://github.com/lodash/lodash)
- [eslint](https://github.com/eslint/eslint)
- [prettier](https://github.com/prettier/prettier)
- [vuepress](https://github.com/vuejs/vuepress)
- [countUp](https://github.com/inorganik/countUp.js)
- [Sortable](https://github.com/SortableJS/Sortable)
- [v-code-diff](https://github.com/Shimada666/v-code-diff)
- [jetbrains](https://www.jetbrains.com/)
- [clicaptcha](https://github.com/hooray/clicaptcha)
- [phinx](https://github.com/cakephp/phinx)

### 版权信息
🔐 BuildAdmin 遵循`Apache2.0`开源协议发布，提供无需授权的免费使用。\
本项目包含的第三方源码和二进制文件之版权信息另行标注。

### 支持项目
💕 无需捐赠，如果觉得项目不错，或者已经在使用了，希望你可以去 [Github](https://github.com/build-admin/BuildAdmin) 或者 [Gitee](https://gitee.com/wonderful-code/buildadmin) 帮我们点个 ⭐ Star，这将是对我们极大的鼓励与支持。
