### 此组件用于展示最简单的es6编写配置

#### 使用到的插件
- webpack
- babel 插件族
	- **babel-loader** 用于转换es6代码 需要注意依赖 babel-core.js
	- **babel-core** 如果某些代码需要调用Babel的API进行转码，就要使用babel-core模块
	- **babel-polyfill** Babel默认只转换新的JavaScript句法（syntax），而不转换新的API，比如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（比如Object.assign）都不会转码。这里就需要使用babel-polyfill
	- **babel-preset-stage*** 目前有 babel-preset-stage-0 ~  babel-preset-stage-3共4种
		- **babel-preset-stage-0** 包含1~3的所有插件，另外支持额外的两个插件：  
			- [transform-do-expressions](https://babeljs.io/docs/plugins/transform-do-expressions) 支持我们在jsx中写if else 代码：
			
			```
			return (
	            <div>
	               {do {
	                    if(name == 'a') { 
	                        <AComponent/>; 
	                    }else if(name == 'b') { 
	                        <BComponent/>; 
	                    }else { 
	                        <CComponent/>; }
	                    }
	                }}
	            </div>
	        )
			```
			-  [transform-function-bind](https://babeljs.io/docs/plugins/transform-function-bind) 支持简写bind,call:
			```
			obj::func
			// 等于
			func.bind(obj)
			obj::func(val)
			// 等于
			func.call(obj, val)
			::obj.func(val)
			// 等于
			func.call(obj, val)
			```
		- **babel-preset-stage-1** 包含 2~3的所有插件，另外额外支持两个插件:
			- [transform-class-constructor-call](http://babeljs.io/docs/plugins/transform-class-constructor-call/) 已不建议使用，这里不做介绍
			- [transform-export-extensions](http://babeljs.io/docs/plugins/transform-class-properties/) 作为export方法的扩展
			
			```
			export * as ns from 'mod';
			export v from 'mod';
			```
		- **babel-preset-stage-2** 包含 3的所有插件，另外额外支持两个插件:
			- [syntax-dynamic-import](http://babeljs.io/docs/plugins/syntax-dynamic-import/) 支持异步加载 ***import()***
			
			```
			function determineDate(){
			  import('moment').then(function(moment){
			    console.log(moment().format());
			  }).catch(function(err){
			    console.log('Failed to load moment', err);
			  });
			}
	
			```
			- [transform-class-properties](http://babeljs.io/docs/plugins/transform-class-properties/) 用与 class 的属性转化 :
			
			```
			  class Bork {
			    // 用于处理如下语法
			    instanceProperty = "bork";
			    boundFunction = () => {
			      return this.instanceProperty;
			    }
			    // 静态属性
			    static staticProperty = "babelIsCool";
			    static staticFunction = function() {
			      return Bork.staticProperty;
			    }
			  }  
			  let myBork = new Bork;  
			  // 可以看到 boundFunction 不是挂在原型上
			  console.log(myBork.prototype.boundFunction); // > undefined
			  // 被挂到了实例上
			  console.log(myBork.boundFunction.call(undefined)); // > "bork"
			  // 静态方法调用 （静态属性是挂在原型上的）
			  console.log(Bork.staticFunction()); // > "babelIsCool"
			```
		- **babel-preset-stage-3** 支持两个插件:
			- [transform-object-rest-spread](http://babeljs.io/docs/plugins/transform-object-rest-spread/) 用来处理 rest spread:
			
			```
			let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
			console.log(x); // 1
			console.log(y); // 2
			console.log(z); // { a: 3, b: 4 }
			
			let n = { x, y, ...z };
			console.log(n); // { x: 1, y: 2, a: 3, b: 4 }
			```
			
			
			- [transform-async-generator-functions](http://babeljs.io/docs/plugins/transform-async-generator-functions/) 用来处理 async 和 await:
			
			```
				async function* agf() {
				  await 1;
				  yield 2;
				}
			```
			
	