/**
 * @name: RequisiteUI
 * @author: 刘叔
 * @host: requisiteui.com
 */


// 引入JS文件
jsList = ['RequisiteUI/js/models/functions.js']
var RequisiteUI_state = "Error";
$("script").each(function () {
    if ($(this).attr("src").indexOf('RequisiteUI.js') != -1) {
        RequisiteUI_state = "Ok";
        for (jsFile in jsList) {
            $(this).before("<script src='" + jsList[jsFile] + "'></script>");
        }
    }
});
if (RequisiteUI_state == "Error") {
    alert("RequisiteUI加载失败!");
}


/* 导航 -- Start */

if ($("nav").exist()) {
    $("nav").each(function() {
        if ($(this).attr("column") != undefined) { // 垂直导航
            $(this).addClass("rui-nav-column");
            $(".rui-nav-column>a").each(function () {
                if ($(this).attr("menu") != undefined) {
                    $(this).html('·&nbsp;' + $(this).html());
                }
                if ($(this).attr("menu") != undefined && $(this).attr("action") != undefined) {
                    $(this).next().css("display", "flex");
                }
            });
            $(".rui-nav-column>a").bind("click", function () {
                if ($(this).attr("menu") != undefined) {
                    if ($(this).next().css("display") == "none") {
                        $(this).next().css("display", "flex");
                    } else {
                        $(this).next().toggle();
                    }
                }
            });
        } else { // 默认水平导航
            $(this).find("a").each(function () {
                if ($(this).attr("action") != undefined) {
                    $(this).addClass("rui-nav-action");
                }
                if ($(this).attr("right") != undefined) {
                    $(this).addClass("rui-nav-right");
                }
                if ($(this).attr("menu") != undefined) {
                    $(this).html('·&nbsp;' + $(this).html());
                }
            });
            $(this).find("a").bind("click", function () {
                $(this).attr("action", "");
                $(this).addClass("rui-nav-action");
                $that = $(this);
                $(this).parent().find("a").each(function () {
                    if (!$(this).is($that)) {
                        $(this).removeClass("rui-nav-action");
                        $(this).removeAttr("action");
                    }
                });
            });
            $(this).find("a").hover(function () {
                if ($(this).attr("menu") != undefined) {
                    $(this).next().css("top", $(this).parent().height() + $(this).position().top);
                    $(this).next().css("left", $(this).position().left);
                    $(this).next().css("display", "flex");
                }
            }, function () {
                if ($(this).attr("menu") != undefined) {
                    if (!$(this).next().is(":hover")) {
                        $(this).next().hide();
                    }
                }
            });
            $(this).find("div").hover(function () {
                $(this).show();
            }, function () {
                $(this).hide();
            });
        }
    });
}

/* 导航 -- End */

