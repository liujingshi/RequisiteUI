/**
 * @name: RequisiteUI
 * @author: 刘叔
 * @host: requisiteui.com
 * 
 * @content: 框架入口文件
 * 
 */

var jsList = [
    'RequisiteUI/common/jquery.js', // jQuery
    'RequisiteUI/js/models/functions.js', // 函数库
    'RequisiteUI/js/models/start.js' // 框架入主体
]

var header = "<script src='";
var footer = "'></script>";
var html_str = "";

for (jsFile in jsList) {
    html_str += header + jsList[jsFile] + footer;
}

document.write(html_str);
