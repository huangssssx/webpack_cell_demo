webpackJsonp([0],{

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseClass = __webpack_require__(124);

var RegisterAction = function (_BaseClass) {
	_inherits(RegisterAction, _BaseClass);

	function RegisterAction() {
		_classCallCheck(this, RegisterAction);

		var _this = _possibleConstructorReturn(this, _BaseClass.call(this));

		console.log("this is register");
		return _this;
	}

	return RegisterAction;
}(BaseClass);

module.exports = new RegisterAction();

/***/ })

});