# RequisiteUI

## 一款正在开发中的响应式前端框架

* `2018-09-08`
    * 记录一下时间点 `RequisiteUI` 正式开始开发的时间
        * `刘叔` 一个神奇的人类 框架的开发者
        * 官方网站 `requisiteui.com`
        * 本页内容不定期更新

* `RequisiteUI` 一款响应式框架

    向网页的`<head>`标签添加下面这行代码

        <meta name="viewport" content="width=device-width">

* 开始使用

    这是一个基本的页面

        <!DOCTYPE html>
        <html lang="CN">
            <head>
                <meta charset="UTF-8">
                <title>RequisiteUI</title>
                <meta name="viewport" content="width=device-width">
                <link rel="stylesheet" href="RequisiteUI/css/RequisiteUI.css">
            </head>
            <body>

            </body>
            <script src="RequisiteUI/common/jquery-3.3.1.min.js"></script>
            <script src="RequisiteUI/js/RequisiteUI.js"></script>
        </html>

* 响应式布局
    * 快速使用

            <div class="rui-layout">
                <div class="rui-row">
                    <div class="rui-col2"> 2/12 </div>
                    <div class="rui-col8"> 8/12 </div>
                    <div class="rui-col2"> 2/12 </div>
                </div>
            </div>

    * 响应式布局规则

        将容器12等分进行布局 小屏幕移动设备占据100%

        `1.` 最外围使用 `class="rui-layout"` 示例: `<div class="rui-layout"></div>`

        `2.` 使用 `class="rui-row"` 定义行 示例: `<div class="rui-row"></div>`

        `3.` 使用 `class="rui-col*"` 定义列 变量`*` 代表12等分数 可选 1-12 超出部分自动换行 示例: `<div class="rui-col6"></div>`
        
* 颜色 (正在寻找适合的颜色......)
    * 默认颜色
        * 白 `#FFFFFF`
        * 红 `#C9302C`
        * 橙 ` `
        * 黄 `#E5B51C`
        * 绿 `#449D44`
        * 藏青 `#007D3D`
        * 蓝 `#337AB7`
        * 天蓝 `#31B0D5`
        * 灰 `#9D9D9D`
        * 黑 `#212122`
    
    * 默认颜色/背景类
        * 白 `class="rui-color-white"` `class="rui-bg-white"`
        * 红 `class="rui-color-red"` `class="rui-bg-red"`
        * 橙 `class="rui-color-orange"` `class="rui-bg-orange"`
        * 黄 `class="rui-color-yellow"` `class="rui-bg-yellow"`
        * 绿 `class="rui-color-green"` `class="rui-bg-green"`
        * 藏青 `class="rui-color-cyan"` `class="rui-bg-cyan"`
        * 蓝 `class="rui-color-blue"` `class="rui-bg-blue"`
        * 天蓝 `class="rui-color-skyblue"` `class="rui-bg-skyblue"`
        * 灰 `class="rui-color-gray"` `class="rui-bg-gray"`
        * 黑 `class="rui-color-black"` `class="rui-bg-black"`

* 内容面板
    * 手风琴
        * 快速使用

                <details open>
                    <summary>默认打开手风琴</summary>
                    <section>
                        手风琴内容
                    </section>
                </details>
                <details>
                    <summary>默认关闭手风琴</summary>
                    <section>
                        手风琴内容
                    </section>
                </details>

        * 使用方法

            手风琴其实就是个折叠面板 利用了HTML5中的标签 `<details>` `<summary>` 实现了手风琴的折叠和打开 标签 `<section>` 内放置手风琴的内容

            具体结构见上面快速使用

            默认手风琴是关闭状态 在 `<details>` 中加上 `open` 属性即可默认打开手风琴 示例: `<details open>`

        * 备注

            图标部分还未制作 暂时使用自带的三角图标


* 图标
    * emmm 决定最后做了

* 按钮
    * 快速使用

            <button>正常按钮</button>
            <input class="rui-btn-blue" type="button" value="input按钮">
            <input class="rui-btn-blue" type="submit" value="submit按钮">
            <a class="rui-btn" href="#">a标签按钮</a>

    * 使用方法

        * 使用按钮

            直接使用 `<button>` 标签即可 示例: `<button>按钮</button>`

            `<input>` 标签按钮 默认无颜色 需要添加按钮颜色类(具体颜色见下文按钮颜色)
            
            示例: `<input class="rui-btn-blue" type="button" value="按钮">`

            `<a>` 标签按钮 需要添加 `class="rui-btn"` 示例: `<a class="rui-btn" href="#">按钮</a>`

        * 按钮大小

            默认按钮为正常大小

            `class="rui-btn-sm"` 为小型按钮 示例: `<button class="rui-btn-sm">小型按钮</button>`

            `class="rui-btn-lg"` 为大型按钮 示例: `<button class="rui-btn-lg">大型按钮</button>`

        * 按钮颜色

            蓝色 `class="rui-btn-blue"` (`<button>` 标签默认颜色)

            白色 `class="rui-btn-white"`

            红色 `class="rui-btn-red"`

            黄色 `class="rui-btn-yellow"`

            绿色 `class="rui-btn-green"`

            黑色 `class="rui-btn-black"`

            天蓝 `class="rui-btn-skyblue"`

            示例: `<button class="rui-btn-green">绿色按钮</button>`

        * 组合使用

            绿色大按钮: `<button class="rui-btn-green rui-btn-lg">绿色大按钮</button>`

            黑色小按钮: `<button class="rui-btn-black rui-btn-sm">黑色小按钮</button>`

        * 禁用按钮

            `<button>` 和 `<input>` 按钮直接添加 `disabled` 属性即可

            示例: `<button disabled>禁用按钮</button>`

            由于 `<a>` 标签不支持 `disabled` 属性 但是可以使用按钮禁用样式 `class="rui-btn-disabled"` 但无法禁用 `tab` 选定 使用键盘仍可触发 `href`

            示例: `<a class="rui-btn rui-btn-disabled" href="#">禁用a按钮</a>`


* 导航 (目前还未支持响应式)
    * 水平导航
        * 快速使用

                <nav>
                    <a href="#" action>Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <a href="#" menu>Menu</a>
                    <div>
                        <a href="#">Join</a>
                        <a href="#">Study</a>
                    </div>
                    <a href="#" right>Login</a>
                    <a href="#">Register</a>
                </nav>

        * 使用方法

            在 `<nav>` 里面放 `<a>` 标签就是一个导航

            示例: 

                    <nav>
                        <a href="#">选项一</a>
                        <a href="#">选项二</a>
                    </nav>

            你没有看错 就是这么简单

            如果你想让你的导航拥有一个标题 你只需在第一个 `<a>` 标签前面加上 `<h1>` 标签

            示例:

                    <nav>
                        <h1>RequisiteUI</h1>
                        <a href="#">选项一</a>
                        <a href="#">选项二</a>
                    </nav>

        * 右侧选项

            如果你想让你的选项在右侧 只需要一个 `right` 属性

            你想从哪个选项开始是在右侧的 就在哪个 `<a>` 标签加入属性 `right` 示例: `<a href="#" right>右侧选项</a>`

            在你加入 `right` 属性的 `<a>` 标签以及它下面的 `<a>` 标签就会全部出现在右侧

            ※ 每个导航只能出现一个 `right` 属性

            ※ 每个导航只能出现一个 `right` 属性

            ※ 每个导航只能出现一个 `right` 属性

            重要的事情说三遍

            示例:

                    <nav>
                        <a href="#">选项一</a>
                        <a href="#">选项二</a>
                        <a href="#" right>选项三</a>
                        <a href="#">选项四</a>
                    </nav>

            上面示例中 `选项三` 和 `选项四` 就会出现在右侧

        * 下拉菜单

            如果你想让你的选项拥有下拉菜单 只需要一个 `menu` 属性

            在你需要下拉菜单的 `<a>` 标签里面加上 `menu` 属性 示例: `<a href="#" menu>下拉菜单</a>`

            并且紧接着你具有 `menu` 属性的 `<a>` 标签后面写下你的下拉菜单项

            你猜的没错 在 `<div>` 里面放 `<a>` 标签就是一个下拉菜单项 (这次是 `<div>` 不是 `<nav>`)

            就是这么简单

            示例: 

                    <a href="#" menu>下拉菜单</a>
                    <div>
                        <a href="#">子菜单一</a>
                        <a href="#">子菜单二</a>
                    </div>

    
    * 垂直导航
        * 快速使用

                <nav column>
                    <a href="#" menu action>默认打开下拉菜单项</a>
                    <div>
                        <a href="#">选项一</a>
                        <a href="#">选项二</a>
                    </div>
                    <a href="#" menu>默认关闭下拉菜单项</a>
                    <div>
                        <a href="#">选项一</a>
                        <a href="#">选项二</a>
                    </div>
                    <a href="#">链接一</a>
                    <a href="#">链接二</a>
                </nav>

        * 使用方法

            在 `<nav>` 标签里添加属性 `column` 示例: `<nav column>`

            依旧是这么简单

        * 下拉菜单

            `垂直导航` 的下拉菜单和 `水平导航` 的使用方法一样

            默认的菜单项是关闭的

            如果你想让你的菜单项默认是打开的 就在想要默认开启的 `<a>` 标签中加上 `action` 属性

            示例: `<a href="#" menu action>默认打开下拉菜单项</a>`

        
