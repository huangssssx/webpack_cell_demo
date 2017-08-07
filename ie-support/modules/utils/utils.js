class Utils{
	//通过class获取dom
	getDomByClass(className){
		return document.getElementsByClassName(className)
	}
	
	
	
}
if(!window.utils){
	window.utils =  new Utils();
}
module.exports = window.utils;