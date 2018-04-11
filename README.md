# Shudong Front End

首先提个醒:
> **千万不要轻易改动配置文件的内容！！！否则影响不堪设想！！！**

## 开发
### webpack 代理方式

```bash
npm install
npm start
```
> 注意: 因为npm是国外的,使用起来比较慢, 如果遇到GFW问题或者下载慢,可以使用cnpm(国内维护,功能完全一样,速度上更快)

### 开发注意事项

* 大家开发的时候不可以使用 `master`稳定分支 或者 `dev`开发分支直接开发, 而是用 `dev` 分支切新分支coding 然后提 pr
* 请使用 `feature/***(你的特性名称)`，例如 feature/login-modal 表示实现了新的 feature
* 遇到线上 bug 的时候，从 `master / dev` 切出分支，命名为 `hotfix/****(修复的bug)`

### 组件解决方案
[antd](https://github.com/ant-design-vue/antv)

## 规范

### Vue 2.x + 风格指南
[Vue Style Guide](https://vuejs.org/v2/style-guide/index.html)

### ESLint/Airbnb
[Airbnb JavaScript Style Guide](https://github.com/yuche/javascript)
注意这个规范十分严格,而且项目引入了ESLint, 所以不遵守的话, 没法通过编译, 目前主要引入规则如下:
- 变量驼峰命名
- 不允许使用`var`, 而是用`let`或者`const`,而且每一条定义变量语句都要使用`const`|| `let`, 也就是说不允许在其他作用域定全局变量.
- 不允许使用`for迭代`,应当用`every, forEach, map, reduce`等遍历函数, 有点类似函数式编程的思想.
- 关键字,操作符周围必须有空格, 大括号前也要有空格.
- 使用字面值 ( `[], {}, "" `等) 构造变量, 而不是`new`.
- 字符串用单引号而不是双引号,模板字符串除外.
- 匿名函数用ES6的箭头函数 (注意该函数内 this 引用的对象)
- 不允许使用非严格意义的等于不等于,也就是说只能 `=== ` OR `!==`
- 每一条语句必须以 `;` 结尾
- 不允许在一个文件用多个语句引用某个文件的不同对象, 应当在一条语句内解决.
- 不允许函数修改传入参数对象

### 注释规范
** 文件头部注释 **

```text
/**
 *
 * @description 文件用途描述
 * @author your-name <your-email@example.com>
 * @created created date
 * @updated updated date
 *
 */
```
** 函数注释 **

```text
/**
 *
 * 函数描述
 * @author your-name <your-email@example.com>
 * @params {参数类型} 参数名 描述
 * @params ...
 * @return {返回类型} 描述
 *
 */
```

** 行内注释 **

```text
// your comment ...
```
### 命名规范
* 文件名: `(kebab-case)作用.性质.扩展名`
```text
profile-setting.component.ts
profile-setting.component.pug
profile-setting.component.styl
```
* 文件夹名: `kebab-case`
```text
...\profile-setting\...
...\scroll-top\...

```
* 组件名: `PascalCase`, 若在模板HTML内则`kebab-case`
```text
xxx.ts
Vue.component('MyComponent', {
  // ...
})

xxx.pug
<my-component></my-component>
```
* 普通变量名: `camelCase`

### 辅助类

可以在 `src/styles.styl` 看到辅助的类的配置

* margin和padding的效果，主要有:

  - p-x 为元素增加 padding: xpx 的效果
  - pl-x 为元素增加 padding-left: xpx 的效果
  - pr-x 为元素增加 padding-right: xpx 的效果
  - pb-x 为元素增加 padding-bottom: xpx 的效果
  - pt-x 为元素增加 padding-top: xpx 的效果
  - margin的用法和上面的一样，并且最大值为100

* font-size: `fs-*`，对应：`font-size`，`*` 表示间隔，数值范围[10, 40]
* border-radius: `rounded-*`, `*`数值范围[0, 10]

* 布局类

  - `block-container`
  - `content-container` (层级上比`block-container`大, 容纳页面所有元素)

### 响应式

Shudong 主站主要做两种类型的响应式。

** <= 768px **

这个范围直接判断为移动设备，需要做移动端的响应式布局。不显示某些信息。判断方式如下：

```stylus
@media (min-width: 0px) and (max-width: 768px)
  // your stylus code
```

** > 768px **

这个范围直接判断为非移动设备，也就是 PC、笔记本等设备。信息全展示。判断方式如下：

```stylus
@media (min-width: 768px)
  // your stylus code
```



