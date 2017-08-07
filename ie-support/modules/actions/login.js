var BaseClass = require("../base/BaseClass");
class LoginAction extends BaseClass{
	constructor(){
		super();		
		console.log("this is login");
	}
	
	
	logigUserNameValidate(username){
		//登录验证
		console.log("this is loginValidate");
	}
}


module.exports =  new LoginAction();