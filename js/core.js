/*
* Author : Nithish
*/
window.$ = function(){
	return {
		getById : function(id){
			return id &&  document.getElementById(id);
		},
		click : function(cb){
			 cb && console.log(this);
		},
		kdObj: function(arg1){
			var dom = this.getById(arg1);
			dom.prototype = {};
			dom.prototype.getById = this.getById;
			dom.prototype.click = this.click;
			return dom;
		}
	};
}();