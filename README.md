# RequisiteUI

## 一款正在开发中的响应式前端框架

* `2018-09-08`
    * 记录一下时间点 `RequisiteUI` 正式开始开发的时间
        * `刘叔` 一个神奇的人类 框架的开发者
        * 官方网站 `requisiteui.com`
        * 本页内容不定期更新
        * 脚本使用了jQuery

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

* 表单

    * 先说一下 单选框和复选框 刘叔弄了四个小时 已经要爆炸 emmm 好吧 刘叔承认 这是第一次写单选框和复选框的样式

    * 快速使用

            <form action="">
                <h1>用户名</h1>
                <input type="text" name="username" placeholder="请输入用户名">
                <h1>密码</h1>
                <input type="password" name="password" placeholder="请输入密码">
                <h1>年级</h1>
                <div>
                    <input type="radio" name="grade" value="D1" title="大一">
                    <input type="radio" name="grade" value="D2" title="大二">
                    <input type="radio" name="grade" value="D3" title="大三">
                    <input type="radio" name="grade" value="D4" title="大四">
                </div>
                <h1>爱好</h1>
                <div>
                    <input type="checkbox" name="hobby" value="A1" title="篮球">
                    <input type="checkbox" name="hobby" value="A2" title="足球">
                    <input type="checkbox" name="hobby" value="A3" title="滑板">
                    <input type="checkbox" name="hobby" value="A4" title="唱歌">
                </div>
                <input type="submit" class="rui-btn-blue" value="提交">
            </form>

    * 使用方法
        * 基本操作

            `<form>` 标签里面放置 `<input>` 就是表单 emmm 好像表单都是这样的

            看看上面快速使用 意会一下

            `<form>` 标签是什么? 是表单啊 表单是什么?

            简单的说表单就是前端向后端提交数据的工具

            `action` 属性就是提交给谁 示例: `<form action="demo.php"></form>`

            `method` 属性就是提交数据的方式 默认 `GET`

            当然 如果你有一定的前端基础肯定不会使用表单提交数据 后续将会在表单动态操作里面介绍

            如果你不想使用 `<form>` 标签 也可以使用其他元素 添加 `class="rui-form"` 即可

            例如 `<div>` 标签 `<div class="rui-form"></div>`

            当然你也可以单独使用 `<input>` 标签

            表单内容默认是垂直排列 如果你想水平排列 只需使用一个 `<div>` 将你想要水平排列的元素放进去即可 就像快速使用中的单选框和复选框一样

        * 输入框

            `<input type="text">` 输入框默认 `width: 100%` emmm 没什么好说的

        * 单选框

            `<input type="radio" title="单选框">`
            
            `title` 属性值就是选项的文字部分了
            
            emmm 简单说一下吧(小白看看 大神请绕行)

            同一组单选框 `name` 属性值要相同 参考上面的快速使用

            `value` 的属性值是提交给后台的数据 正常同一组的 `value` 值是不一样的 因为要区分用户选择了哪个

            什么 ? 默认选中 ? emmm 加上属性 `checked` 即可 示例: `<input type="radio" title="默认选中单选框" checked>`

            禁用 加上 `disabled` 属性即可 当然你可以默认选中并且禁用 但是不会有数据提交给后台



        * 复选框

            `<input type="checkbox" title="复选框">`

            同样 `title` 是选项文字

            当然 同一组复选框的 `name` 要相同 `value` 也是提交给后台的数据 其值一般也是不一样的

            默认选中和禁用和单选框一样

        * 提交按钮 ? ? ?

            这个好像属于按钮部分

        * 下拉选择框

                特殊说明: 这个下拉选择框刘叔做到了凌晨两点 第二天起来又做了一个小时 终于完成 并不是很完美 QAQ..

            快速使用:

                <select name="select" placeholder="请选择">
                    <option value="A">A选项</option>
                    <option value="B">B选项</option>
                </select>

            和基本的下拉选择框一样 使用的是 `<select>` 标签

            简单说一下 `<select>` 标签的基本用法

            `<select name='select'></select>` 这是一个基本的 `<select>` 标签

            属性 `name` 就不用说了 就是提交给后台数据的名 表单的元素都是这样

            在 `<select>` 标签内部要有 `<option>` 标签作为选项

            再简单说一下 `<option>` 标签的基本用法

            `<option value="A">A选项</option>` 这是一个基本的 `<option>` 标签

            属性 `value` 是传递给后台的值 标签的文字内容是选项显示的文字

            和 `<input type="text">` 一样  `RequisiteUI` 的 `<select>` 标签也支持 `placeholder` 属性

            `<select placeholder="请选择"></select>` 这样在用户什么也不选的时候会出现默认的提示文字

            如果你想让你的下拉选择框默认选择一项 就在默认项的 `<option>` 标签里面加上属性 `selected`

            本 `<select>` 标签默认占据宽度 `100%` 如果你想改变宽度 就在外面包裹其他元素吧 改变外部元素的宽度即可
