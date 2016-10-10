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
// 	};
// }();
$(document).ready(function(){
	$('.message a').click(function(){
	   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
	});
	$("#login").click(function(e){validate($(e.target).attr("data-form"))});
	$("#reg").click(function(e){validate($(e.target).attr("data-form"))});
	
});
var validate = function(attr){
		$("."+attr).children().each(function(i,v){
			if($(v).val() == 0){
				$(v).css({"border-color" : "red"});
			}
		});
	}