var BaseClass = require("../base/BaseClass");
class RegisterAction extends BaseClass{
	constructor(){
		super();	
		console.log("this is register");
	}
}


module.exports = new RegisterAction();