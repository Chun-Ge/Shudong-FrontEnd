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

* 大家开发的时候不可以使用 master 分支直接开发
* 请使用 feature/***(你的特性名称)，例如 feature/login-modal 表示实现了新的 feature
* 遇到线上 bug 的时候，从 master 切出分支（master也是一样），命名为 hotfix/****(修复的bug)

### 组件解决方案
[antd](https://github.com/ant-design-vue/antv)

## 规范

### Vue 2.0 + 风格指南
[Vue Style Guide](https://vuejs.org/v2/style-guide/index.html)

### Airbnb
[Airbnb JavaScript Style Guide](https://github.com/yuche/javascript)
注意这个规范十分严格,而且项目引入了ESLint, 所以不遵守的话, 没法通过编译, 目前主要注意规则如下(还有其他rules,具体请到github查看):
- 驼峰命名
- 不允许使用var, 而是用let或者const,而且每一条定义变量语句都要使用const, var.也就是说不允许在其他作用域定全局变量.
- 不允许使用for迭代,应当用every, forEach, map, reduce等遍历函数, 有点类似函数式编程的思想.
- 关键字,操作符周围必须有空格, 大括号前也要有空格.
- 使用字面值 ([], {}, ""等) 构造变量, 而不是new.
- 字符串用单引号而不是双引号,模板字符串除外.
- 匿名函数用ES6的箭头函数 (注意该函数内 this 引用的对象)
- 不允许使用非严格意义的等于不等于,也就是说只能=== OR !==
- 每一条语句必须以';'结尾
- 不允许在一个文件用多个语句引用某个文件的不同对象,应当在一条语句内解决.
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
### 响应式


