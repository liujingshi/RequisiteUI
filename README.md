# RequisiteUI

## 一款正在开发中的响应式前端框架

* `2018-09-08`
    * 记录一下时间点 `RequisiteUI` 正式开始开发的时间
        * `刘叔` 一个神奇的人类 框架的开发者

* `RequisiteUI` 一款响应式框架

    向网页的`<head>`标签添加下面这行代码

        <meta name="viewport" content="width=device-width">

* 开始使用

    这是一个基本的页面

        <!DOCTYPE html>
        <html lang="CN">
            <head>
                <meta charset="utf-8">
                <title>RequisiteUI</title>
                <meta name="viewport" content="width=device-width">
                <link rel="stylesheet" href="RequisiteUI/css/RequisiteUI.css">
            </head>
            <body>

            </body>
            <script src="RequisiteUI/common/jquery-3.3.1.min.js"></script>
            <script src="RequisiteUI/js/Requisite.js"></script>
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
        * 红 ``
        * 橙 ``
        * 黄 ``
        * 绿 ``
        * 青 ``
        * 蓝 ``
        * 紫 ``
        * 灰 ``
        * 黑 ``
    
    * 默认颜色/背景类
        * 白 `class="rui-color-white"` `class="rui-bg-white"`
        * 红 `class="rui-color-red"` `class="rui-bg-red"`
        * 橙 `class="rui-color-orange"` `class="rui-bg-orange"`
        * 黄 `class="rui-color-yellow"` `class="rui-bg-yellow"`
        * 绿 `class="rui-color-green"` `class="rui-bg-green"`
        * 青 `class="rui-color-cyan"` `class="rui-bg-cyan"`
        * 蓝 `class="rui-color-blue"` `class="rui-bg-blue"`
        * 紫 `class="rui-color-purple"` `class="rui-bg-purple"`
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
