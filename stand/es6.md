# ES6代码规范

## 参考
- eslint规则 [http://eslint.cn/docs/rules/](http://eslint.cn/docs/rules/)
- [Baidu FEX team 前端规范] [https://github.com/fex-team/styleguide/](https://github.com/fex-team/styleguide/)

## 1 结构

### 1.1 句末加分号（部分情况例外）

例子
```js
let str = 'hello world';
function add ( x, y ) {
  return x + y; 
}
```

eslint规则
```js
"semi": [
  "always",  // (默认) 要求在语句末尾使用分号
  { "omitLastInOneLineBlock": true }, // 忽略花括号在同一行（内容也就在同一行了）的语句块中的最后一个分号
]
```


### 1.2 缩进
- 两空格缩进
- Switch Case 1空格

例子
```js
function func ( x ) {
  let result = null;
  switch( x ) {
    case "1":
      result = true;
      breack;
    case "0":
      result = false;
      breack;
  }
  return result;
}
```

eslint规则
```js
"indent": 2, { "SwitchCase": 1 }
```

### 1.3 空格
### 1.4 换行


## 2 变量
### 2.1 声明变量

- 禁用 `var` 声明变量，防止出现变量提升，污染变量
- 用 `let` 声明变量
- 用 `const` 声明常量
    - 只能用来声明`string`、`number`、`boolean`类型
    - 禁用声明`object`类型，因为const声明的对象属性值可以被修改 

```js
let temp = 'hello world!';
const HOME_NAME = 'js standard';
```

### 2.2 变量名

#### 2.2.1 普通变量用小驼峰格式
``` js
let userName = 'Mick';
let nickName = 'apple';
```

#### 2.2.2 类名用大驼峰格式
```js
class UserModel {
  contrustor() {

  }
}

class MemberModel extends UserModel {
  contrustor() {
    super();
  }
}
```

#### 2.2.3 常量用大写字母加下划线隔开
```js
const SITE_NAME = 'www.example.com';

const PAGE_TOTAL_COUNT = 10;

const IS_MEMBER = fale;
```

### 2.3 数组
#### 2.3.1 数组遍历
#### 2.3.2 数组扩展

### 2.4 对象
#### 2.4.1 对象遍历
#### 2.4.2 对象扩展
#### 2.4.3 深/浅拷贝

### 2.5 类型判断
- 少用`typeof`, `isNaN`
    - `typeof [1,2,3]` 和  `typeof {a:123}`都返回`"object"`
    - `!isNaN('1')` 和  `!isNaN(1)`都返回`true`

- 建议用 Number自带方法细分判断整型、浮点型数据
- 建议用 Array.isArray判断数组
- 建议用 `Object.prototype.toString.call( data ).toLocaleLowerCase()` 的方式进行多类型判断

```js
// 判断数字
Object.prototype.toString.call( 123 ).toLocaleLowerCase();
// 输出 "[object number]"

// 判断字符串
Object.prototype.toString.call( '123' ).toLocaleLowerCase();
// 输出 "[object string]"

// 判断数组
Object.prototype.toString.call( [1, 2, 3] ).toLocaleLowerCase();
// 输出 "[object array]"

// 判断JSON
Object.prototype.toString.call( { a: 123, b: 456 } ).toLocaleLowerCase();
// 输出 "[object object]"

// 判断null
Object.prototype.toString.call( null ).toLocaleLowerCase();
// 输出 "[object null]"

// 判断Promise
Object.prototype.toString.call( new Promise(()=>{}) ).toLocaleLowerCase();
// 输出 "[object promise]"

// 判断方法
Object.prototype.toString.call( ()=>{} ).toLocaleLowerCase();
Object.prototype.toString.call( function(){} ).toLocaleLowerCase();
// 输出 "[object function]"

// 判断Symbol
Object.prototype.toString.call( Symbol() ).toLocaleLowerCase();
// 输出 "[object symbol]"
```

## 3 方法
### 3.1 方法命名
### 3.2 箭头函数


## 4 注释
### 4.1 单行注释
### 4.2 多行注释
### 4.4 类注释
### 4.4 方法注释
### 4.3 文件注释


