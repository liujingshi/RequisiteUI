/**
 * @name: RequisiteUI
 * @author: 刘叔
 * @host: requisiteui.com
 * 
 * @content: 弹出层模块
 * 
 */


// 弹出层 popup

var rui_popup = {

    // HTML部分
    rui_popup: "<div class='rui-popup'></div>",
    rui_popup_div_start: "<div class='rui-popup-div' id='",
    rui_popup_div_end: "'></div>",
    rui_popup_div_title: "<div class='rui-popup-title'></div>",
    rui_popup_div_content: "<div class='rui-popup-content'></div>",
    rui_popup_div_btn: "<div class='rui-popup-btn'></div>",
    rui_popup_btn_start: "<button class='rui-btn-sm rui-btn-",
    rui_popup_btn_end: "'></button>",

    /**
     * 存储已经创建的弹出层的队列
     * 数据格式:
     * {
     *     obj: jQuery对象,
     *     state: (true/false) 是否弹出的状态,
     *     type: (alert/...) 弹出层的类型
     * }
     */
    __rui_popop_list: [],

    // 添加遮罩层 DOM
    __add_rui_popup: function () {
        if (!$(".rui-popup").exist()) {
            var $body = $("body").eq(0);
            $body.after(this.rui_popup);
        }
    },

    /**
     * 添加弹出层 DOM
     * 参数: title: 弹出层的标题文字, content: 弹出层的内容
     * 返回值: 添加的jQuery对象
     */
    __add_rui_popup_div: function (content, title) {
        var $body = $("body").eq(0);
        var popup_id = "rui-popup-" + $.timestamp();
        var htmlstr = this.rui_popup_div_start + popup_id + this.rui_popup_div_end;
        $body.after(htmlstr);
        var $rui_popup_div = $("#" + popup_id);
        this.__rui_popop_list.push({
            obj: $rui_popup_div,
            state: false,
            type: "alert"
        });
        this.__add_rui_popup_title($rui_popup_div, title);
        this.__add_rui_popup_content($rui_popup_div, content);
        this.__add_rui_popup_btn($rui_popup_div);
        return $rui_popup_div;
    },

    /**
     * 添加弹出层标题 DOM
     * 参数: $rui_popup_div: 弹出层的jQuery对象, title: 弹出层的标题文字
     * 返回值: 弹出层标题的jQuery对象
     */
    __add_rui_popup_title: function ($rui_popup_div, title) {
        $rui_popup_div.append(this.rui_popup_div_title);
        var $rui_popup_div_title = $rui_popup_div.find(".rui-popup-title").eq(0);
        if (title == "") {
            title = "提示";
        }
        $rui_popup_div_title.html(title);
        return $rui_popup_div_title;
    },

    /**
     * 添加弹出层内容 DOM
     * 参数: $rui_popup_div: 弹出层的jQuery对象, content: 弹出层的内容文字
     * 返回值: 弹出层内容的jQuery对象
     */
    __add_rui_popup_content: function ($rui_popup_div, content) {
        $rui_popup_div.append(this.rui_popup_div_content);
        var $rui_popup_div_content = $rui_popup_div.find(".rui-popup-content").eq(0);
        $rui_popup_div_content.html(content);
        return $rui_popup_div_content;
    },

    /**
     * 添加弹出层按钮 DOM
     * 参数: $rui_popup_div: 弹出层的jQuery对象, btn_text: 弹出层的按钮文字, btn_color: 弹出层按钮颜色
     * 返回值: 弹出层按钮的jQuery对象
     */
    __add_rui_popup_btn: function ($rui_popup_div, btn_text = "确定", btn_color = "green") {
        $rui_popup_div.append(this.rui_popup_div_btn);
        var htmlstr = this.rui_popup_btn_start + btn_color + this.rui_popup_btn_end;
        $rui_popup_div.find(".rui-popup-btn").eq(0).append(htmlstr);
        var $rui_popup_div_btn = $rui_popup_div.find(".rui-popup-btn").eq(0).find("button").eq($rui_popup_div.find(".rui-popup-btn").eq(0).find("button").length - 1);
        $rui_popup_div_btn.html(btn_text);
        return $rui_popup_div_btn;
    },

    /**
     * 改变弹出层队列某对象的状态
     * 参数: $rui_popup_div:jQuery对象, state:(true/false)状态
     */
    __rui_popup_list_change: function ($rui_popup_div, state) {
        for (var item in this.__rui_popop_list) {
            if (this.__rui_popop_list[item].obj.is($rui_popup_div)) {
                this.__rui_popop_list[item].state = state;
            }
        }
    },

    /**
     * 绑定按钮关闭弹出层事件
     * 参数: $rui_popup_btn:要点击的按钮, $rui_popup_div:要关闭的jQuery对象
     */
    __rui_popup_bind_close: function ($rui_popup_btn, $rui_popup_div) {
        var that = this;
        $rui_popup_btn.bind("click", function () {
            $rui_popup_div.animate({
                top: "+=80px",
                opacity: "0"
            }, 50);
            $(".rui-popup").hide();
            $rui_popup_div.slideUp(200);
            that.__rui_popup_list_change($rui_popup_div, false);
        });
    },

    // 提示框 alert

    alert: function (content, title = "") {
        var that = this;
        this.__add_rui_popup();
        var list_have = false;
        var $rui_popup_div = null;
        for (var item in this.__rui_popop_list) {
            if (this.__rui_popop_list[item].type == "alert" && !this.__rui_popop_list[item].state) {
                list_have = true;
                $rui_popup_div = this.__rui_popop_list[item].obj;
                if (title == "") {
                    title = "提示";
                }
                $rui_popup_div.find(".rui-popup-title").eq(0).html(title);
                $rui_popup_div.find(".rui-popup-content").eq(0).html(content);
            }
        }
        if (!list_have) {
            $rui_popup_div = this.__add_rui_popup_div(content, title);
            this.__rui_popup_bind_close($rui_popup_div.find("div").eq(2).find("button").eq(0), $rui_popup_div);
        }
        $(".rui-popup").show();
        $rui_popup_div.show();
        $rui_popup_div.animate({
            top: "-=80px",
            opacity: "1"
        }, 50);
        this.__rui_popup_list_change($rui_popup_div, true);
    },

    // 关闭弹出层 close

    close: function () {

    }

}
