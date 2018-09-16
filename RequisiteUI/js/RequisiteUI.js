/**
 * @name: RequisiteUI
 * @author: 刘叔
 * @host: requisiteui.com
 * 
 * @content: 框架入口文件
 * 
 */

var jsList = [
    'common/jquery.js', // jQuery
    'js/models/functions.js', // 函数库
    'js/models/popup.js', // 弹出层模块
    'js/models/start.js' // 框架主体
]

var header = "<script src='";
var footer = "'></script>";
var html_str = "";

// 获取框架所在路径

var scripts = document.getElementsByTagName("script");
for (var script in scripts) {
    var src = scripts[script].attributes["src"].value;
    if (src.indexOf("js/RequisiteUI.js") >= 0) {
        var dirs = src.split("js/RequisiteUI.js");
        header += dirs[0];
        break;
    }
}

// 加载框架

for (var jsFile in jsList) {
    html_str += header + jsList[jsFile] + footer;
}

document.write(html_str);
