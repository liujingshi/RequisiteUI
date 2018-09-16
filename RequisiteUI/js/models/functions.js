/**
 * @name: RequisiteUI
 * @author: 刘叔
 * @host: requisiteui.com
 * 
 * @content: 函数库
 * 
 */


/**
 * jQuery函数 判断DOM是否存在
 * 使用方法: $("DOM").exist()
 * 返回值: bool
 */
(function ($) {
    $.fn.exist = function () {
        if ($(this).length >= 1) {
            return true;
        }
        return false;
    };
})(jQuery);

/**
 * jQuery函数 获取当前时间戳 精确到毫秒
 * 使用方法: $.timestamp
 * 返回值: bool
 */
(function ($) {
    $.timestamp = function () {
        return new Date().getTime();
    };
})(jQuery);