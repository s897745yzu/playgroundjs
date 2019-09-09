/* global OT Promise */

// The module.exports or exports is a special object which is included in every JS file in the Node.js application by default. 
// module is a variable that represents current module and exports is an object that will be exposed as a module. 
// So, whatever you assign to module.exports or exports, will be exposed as a module.

//Emerson:
// es6: module.exports & exports
// global for node.js & window for browser

//module.exports or exports 是Node.js專用的, 盡量不要用

((exports) => {
  const TestExprots = () => {
      console.log('TestExprots');
      document.querySelector('#exportst').innerHTML = 'exprots test111111111111111111111111111111111111111111111';
  };

  TestExprots();
  exports.TestExprots = TestExprots;

})(apexports);

