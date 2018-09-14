/**
 * @name: RequisiteUI
 * @author: 刘叔
 * @host: requisiteui.com
 * 
 * @content: 框架主体
 * 
 */


/* 导航 -- Start */

if ($("nav").exist()) {
    $("nav").each(function () {
        if ($(this).attr("column") != undefined) { // 垂直导航
            $(this).addClass("rui-nav-column");
            $(".rui-nav-column>a").each(function () {
                if ($(this).attr("menu") != undefined) {
                    $(this).html('·&nbsp;' + $(this).html());
                }
                if ($(this).attr("menu") != undefined && $(this).attr("action") != undefined) {
                    $(this).next().css("display", "flex");
                }
            }); // End rui-nav-column>a each
            $(".rui-nav-column>a").bind("click", function () {
                if ($(this).attr("menu") != undefined) {
                    if ($(this).next().css("display") == "none") {
                        $(this).next().css("display", "flex");
                    } else {
                        $(this).next().toggle();
                    }
                }
            }); // End rui-nav-column>a bind click
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
            }); // End find a each
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
            }); // End find a bind click
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
            }); // End find a hover
            $(this).find("div").hover(function () {
                $(this).show();
            }, function () {
                $(this).hide();
            }); // End find div hover
        } // End if column
    }); // End each nav
}

/* 导航 -- End */


/* 表单 -- Start */

if ($("input[type='checkbox']").exist()) {
    $("input[type='checkbox']").each(function () {
        var state = "rui-checkbox-label";
        if ($(this).attr("checked") != undefined) {
            state = state + "-checked";
        }
        $(this).wrap("<label class='" + state + "' checkbox>" + $(this).attr("title") + "</label>");
    }); // End checkbox each
    $("label").bind("click", function (e) {
        if ($(this).attr("checkbox") != undefined && $(e.target).is("label")) {
            if ($(this).hasClass("rui-checkbox-label")) {
                $(this).addClass("rui-checkbox-label-checked");
                $(this).removeClass("rui-checkbox-label");
            } else {
                $(this).addClass("rui-checkbox-label");
                $(this).removeClass("rui-checkbox-label-checked");
            }
        }
    }); // End label bind click
} // End if checkbox exist

if ($("input[type='radio']").exist()) {
    $("input[type='radio']").each(function () {
        var state = "rui-radio-label";
        if ($(this).attr("checked") != undefined) {
            state = state + "-checked";
        }
        $(this).wrap("<label class='" + state + "' radio>" + $(this).attr("title") + "</label>");
    }); // End radio each
    $("label").bind("click", function (e) {
        if ($(this).attr("radio") != undefined && $(e.target).is("label")) {
            $("input[name='" + $(this).find("input").attr("name") + "']").parent().each(function () {
                $(this).removeClass("rui-radio-label-checked");
                $(this).addClass("rui-radio-label");
            });
            $(this).addClass("rui-radio-label-checked");
            $(this).removeClass("rui-radio-label");
        }
    }); // End label bind click
} // End if radio exist

/* 表单 -- End */