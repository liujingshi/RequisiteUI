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
        <html>
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

        `3.` 使用 `class="rui-col*"` 定义列 变量`*` 代表12等分数 可选 1-12 示例: `<div class="rui-col6"></div>`
        
