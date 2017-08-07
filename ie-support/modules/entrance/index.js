//引用模块请使用require
var utils = require("../utils/utils");
var BaseClass = require("../base/BaseClass");
var $ = require("jquery");
class Index extends BaseClass{
	constructor(){
		super();
	}
	
	config(options){
		this.options = options;
	}
	
	ready(callback){
		let t = this;
		let {options} = this;
		if(!options){
			throw "您没有设置config";
			return;
		}
		
		if(!options.appid){
			throw "您没有设置appid";
		}
		
		t.loadAction((options.actionList||[]),callback);
	}
	
	//TODO:此处每个模块加载都需要检查一下flag,思考有什么更好的方式
	loadAction =(actionList,callback)=>{
		let t = this;
		let pluginObject = {};
		let isLoaded = false;
		let flags = [0,0];
		function checkReady(){
			if(flags.indexOf(0)!=-1){
				return;
			}
			callback?callback():"";
		}
		
		//登录逻辑
		if(actionList.indexOf("login")!=-1){
			require.ensure([], function(require){
				$.extend(t,pluginObject,(require("../actions/login")));
				flags[0] = 1;
				checkReady();
			});
		}
		
		//注册逻辑
		if(actionList.indexOf("register")!=-1){
			require.ensure([], function(require){
				$.extend(t,pluginObject,(require("../actions/register")));
				flags[1] = 1;
				checkReady();
			});
		}
	}
	
}

window.jssdk = new Index();
