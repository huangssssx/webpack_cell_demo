webpackJsonp([1],{

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseClass = __webpack_require__(124);

var LoginAction = function (_BaseClass) {
	_inherits(LoginAction, _BaseClass);

	function LoginAction() {
		_classCallCheck(this, LoginAction);

		var _this = _possibleConstructorReturn(this, _BaseClass.call(this));

		console.log("this is login");
		return _this;
	}

	LoginAction.prototype.logigUserNameValidate = function logigUserNameValidate(username) {
		//登录验证
		console.log("this is loginValidate");
	};

	return LoginAction;
}(BaseClass);

module.exports = new LoginAction();

/***/ })

});