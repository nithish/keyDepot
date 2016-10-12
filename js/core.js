/*
 * Author : Nithish
 */
// window.$ = function(){
// 	return {
// 		getById : function(id){
// 			return id &&  document.getElementById(id);
// 		},
// 		click : function(cb){
// 			 cb && console.log(this);
// 		},
// 		kdObj: function(arg1){
// 			var dom = this.getById(arg1);
// 			dom.prototype = {};
// 			dom.prototype.getById = this.getById;
// 			dom.prototype.click = this.click;
// 			return dom;
// 		}
// 	};validate($(e.target).attr("data-form"))}
// }();
$(document).ready(function() {
    $('.message a').click(function() {
        $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
    });
    $("#login").click(function(e) {
        sendData(e);
    });
    $("#reg").click();
});
var validate = function(attr) {
    $("." + attr).children("input").each(function(i, v) {
        if ($(v).val() == "") {
            $(v).css({ "background-color": "#FFCAC2" });
        }
    });
}
var sendData = function(e) {
    var form = $(e.target).attr("data-form");
    var url = form.indexOf("login") > -1 ? "/doLogin" : "/doRegister";
    var data = {};
    $("." + form).children("input").each(function(i, v) {
        data[$(v).attr("name")] = $(v).val();
    });
    $.ajax({
        url: url,
        data: data,
        type: "POST",
        success: function(reply) {
            //var reply = JSON.parse(reply);
            if (reply.status == 1) {
                $("body").html(reply.data);
                //$("body").css("background", "white");
            }else if(reply.status == 2){
            	$(".errormsg").html(reply.data);
            	$(".errormsg").css("display","block");
            }
        },
        failure: function(data) {
            alert("fail");
        }
    });
}
