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
        if ($(this).attr("disabled") != undefined) {
            state = state + "-disabled";
        }
        $(this).wrap("<label class='" + state + "' checkbox>" + $(this).attr("title") + "</label>");
    }); // End checkbox each
    $("label").bind("click", function (e) {
        if ($(this).attr("checkbox") != undefined && $(e.target).is("label") && $(this).find("input").attr("disabled") == undefined) {
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
        if ($(this).attr("disabled") != undefined) {
            state = state + "-disabled";
        }
        $(this).wrap("<label class='" + state + "' radio>" + $(this).attr("title") + "</label>");
    }); // End radio each
    $("label").bind("click", function (e) {
        if ($(this).attr("radio") != undefined && $(e.target).is("label") && $(this).find("input").attr("disabled") == undefined) {
            $("input[name='" + $(this).find("input").attr("name") + "']").parent().each(function () {
                $(this).removeClass("rui-radio-label-checked");
                $(this).addClass("rui-radio-label");
            });
            $(this).addClass("rui-radio-label-checked");
            $(this).removeClass("rui-radio-label");
        }
    }); // End label bind click
} // End if radio exist

/* 下拉选择框 -- Start */

if ($("select").exist()) {
    $("select").each(function () {
        var $select = $(this);
        $(this).after("<div class='rui-select-div' tabindex='0'></div>");
        var $rui_select_div = $(this).next();
        $rui_select_div.append("<div class='rui-select-input-div'></div>");
        $rui_select_div.append("<div class='rui-select-option-div'></div>");
        var $rui_select_input_div = $rui_select_div.find("div").eq(0);
        var $rui_select_option_div = $rui_select_div.find("div").eq(1);
        var input_class = "rui-select";
        var value_endinput = "' readonly>";
        if ($(this).attr("search") != undefined) {
            value_endinput = "'>";
            input_class += " rui-select-search";
        }
        var input_placeholder = "<input class='" + input_class + "' type='text' placeholder='";
        var placeholder_value = "' value='";
        var placeholder = $(this).attr("placeholder");
        var value = "";
        var options = [];
        var values = [];
        $(this).find("option").each(function () {
            var option = $(this).html();
            options.push(option);
            values.push($(this).attr("value"));
            if ($(this).attr("selected") != undefined) {
                value = option;
            }
        }); // End this find option each
        var select_html_str = input_placeholder + placeholder + placeholder_value + value + value_endinput;
        $rui_select_input_div.append(select_html_str);
        $rui_select_input_div.append("<div class='rui-select-down'></div>");
        var $rui_select_icon = $rui_select_input_div.find("div").eq(0);
        var $rui_select_input = $rui_select_input_div.find("input").eq(0);
        var setOptions = function (now_options, now_values) {
            $rui_select_option_div.append("<dl></dl>");
            var dd_start = "<dd data-value='";
            var dd_value = "'>";
            var dd_end = "</dd>";
            var dd_selected_start = "<dd class='rui-select-selected' style='color:#FFFFFF;' data-value='";
            var $dl = $rui_select_option_div.find("dl").eq(0);
            for (var option in now_options) {
                if (now_options[option] == value) {
                    $dl.append(dd_selected_start + now_values[option] + dd_value + now_options[option] + dd_end);
                } else {
                    $dl.append(dd_start + now_values[option] + dd_value + now_options[option] + dd_end);
                }
            } // End for option in options
            $rui_select_option_div.find("dl").eq(0).find("dd").bind("click", function (e) {
                $(this).parent().find("dd").each(function () {
                    $(this).removeClass("rui-select-selected");
                    $(this).css("color", "#555555");
                });
                $(this).addClass("rui-select-selected");
                $(this).css("color", "#FFFFFF");
                $rui_select_input.val($(this).html());
                $select.val(e.target.dataset.value);
                $rui_select_option_div.slideUp(200);
                $rui_select_icon.removeClass("rui-select-icon-rotate");
            }); // End rui-select-option-div find dl find dd bind click
        } // End function setOptions
        setOptions(options, values);
        $rui_select_input_div.bind("click", function () {
            if ($rui_select_option_div.css("display") == "none") {
                $rui_select_option_div.slideDown(200);
                $rui_select_icon.addClass("rui-select-icon-rotate");
            } else {
                $rui_select_option_div.slideUp(200);
                $rui_select_icon.removeClass("rui-select-icon-rotate");
            }
        }); // End rui-select-input-div bind click
        $rui_select_input.blur(function () {
            if (!$rui_select_option_div.is(":hover")) {
                $rui_select_option_div.slideUp(200);
                $rui_select_icon.removeClass("rui-select-icon-rotate");
            }
        }); // End rui-select-div blur
        if ($(this).attr("search") != undefined) {
            $rui_select_input.bind("input propertychange", function () {
                var text = $rui_select_input.val();
                var new_options = [];
                var new_values = [];
                for (var option in options) {
                    if (options[option].indexOf(text) != -1) {
                        new_options.push(options[option]);
                        new_values.push(values[option]);
                    }
                }
                $rui_select_option_div.find("dl").eq(0).remove();
                setOptions(new_options, new_values);
            }); // End rui_select_input bind input
        } // End if search
    }); // End select each
} // End id select exist

/* 下拉选择框 -- End */

/* 表单 -- End */