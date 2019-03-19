# 前端基础知识整理及回顾

## 执行上下文

JS代码执行会产生三种执行上下文

- 全局执行上下文
- 函数执行上下文
- eval 执行上下文

每个上下文都有三个重要的属性：

- 变量对象，包含变量，函数声明和函数形参，只能在全局上下文中访问
- 作用域链（JS采用词法作用域，变量的作用域在定义时就决定了）
- this


## 深浅拷贝

### 深拷贝

`JSON.parse(JSON.stringify(object))`的局限：

- 会忽略 `undefined`
- 会忽略 `symbol`
- 不能序列化函数
- 不能解决循环引用的对象