TypeScript Mocha "jsdom-global" Demo
==================================

在mocha中如何使用jsdom-global来测试dom

注意：
jsdom-global本身暴露了一个cleanup的函数，它的作用是把自己注入的window/document等对象去除，而不是我开始以为的清理window/document供下一个测试使用。


```
npm install
npm test
```
