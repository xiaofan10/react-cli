# react-cli
react-cli

### 启动npm run start：dev
```node
npm run start：dev
// or
npm run dev
```
> NPM package.json脚本是一种方便有用的方法，
可以运行本地安装的二进制文件，而无需关心它们的完整路径。只需定义一个脚本：
并在终端/控制台中运行以下命令：npm run start：devNPM将为您自动引用二进制node_modules文件，并执行文件或命令。  

## 构建工具说明

#### cross-env
跨平台兼容传入node环境变量

## eslint 分支主要做了 react 项目的 eslint 的接入

### 相关检查包有以下

```javascript
{ 
  "eslint": "^6.6.0", // eslint 校验器
  "babel-eslint": "^10.0.3", // 由于项目中需要使用到 ES2015 的语言规范
  "eslint-config-standard": "^14.1.0", // 某某制定好的校验规则，不需要单独配置了（当然还有很多牛叉人写的规则，自己有时间可以去尝试）
  "eslint-loader": "^3.0.2", // 在项目中实时校验
  "eslint-plugin-html": "^6.0.0", // eslint-plugin-standard 的依赖
  "eslint-plugin-import": "^2.18.2", // eslint-plugin-standard 的依赖
  "eslint-plugin-node": "^10.0.0", // eslint-plugin-standard 的依赖
  "eslint-plugin-promise": "^4.2.1", // eslint-plugin-standard 的依赖
  "eslint-plugin-react": "^7.16.0",  // 支持 react 的某些规则
  "eslint-plugin-standard": "^4.0.1", // eslint-plugin-standard 的依赖
  "pre-commit": "^1.2.2", // 这个小工具是代码 commit 时做代码 lint 的，如果发现有不符合 lint 规则的则禁止提交
}
```
## 使用教程

### 手动 lint

- 安装一下依赖
```javascript
(c/t)npm i -D eslint babel-eslint eslint-config-standard eslint-plugin-html eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-react eslint-plugin-standard
```
- 手动创建 .eslintrc 文件，内容配置如下
```javascript
 {
  "extends": "standard",
  "plugins": [
    "html",
    "react"
  ],
  "rules": {
    "react/jsx-uses-react": "error",   // 是为了去除 react 使用组件报错的，明明使用了该组件却说你未使用
    "react/jsx-uses-vars": "error"  // 是为了去除 react 使用组件报错的，明明使用了该组件却说你未使用
  },
  "parserOptions":{
    "parser": "babel-eslint"
  }
}
```
- package.json 中配置启动项
```javascript
"scripts": {
  "lint": "eslint --ext .js --ext .jsx src" // 这个规则自行研究吧，我 copy 的，以前研究过，忘记了。。。
},
```
- 基本就配置好了，可以手动输入 npm run lint

### 项目中自动校验配置

- webpack 中添加一下 loader 配置项
```javascript
{
  test: /\.(jsx|js)$/,
  loader: 'eslint-loader',
  exclude: /node_modules/,
  enforce: 'pre' // 这里是预处理，我们只希望 eslint 审查代码，并不需要它修改我们的代码
},
```
- 同时，我们要在 vscode 中显示 eslint 有问题的代码，vscode 编辑器安装下 eslint 插件，这样编辑器上会有错误提示

### 提交代码，审核我们的代码
- 需要 pre-commit 包做支持
```javascript
(c|t)npm i -D pre-commit
```
- package.json 中添加如下配置
```javascript
"pre-commit": [
  "lint" // 这个 lint 指的是 npm run lint 指令，所以要配置这个 script 下的命令，上面已经配置过了
],
```