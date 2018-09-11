/**
 * @name: RequisiteUI
 * @author: 刘叔
 * @host: requisiteui.com
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