# 初始化项目的nodeCli小工具

## 使用

```shell
Usage: init-pro-cli <command> [option]

Options:
  -V, --version                output the version number
  -V, --version                output the version number
  -h, --help                   display help for command

Commands:
  create [options] <app-name>  create a new project
  help [command]               display help for command
```

## 知识点

process

child_process
## 工具库

[nodemon](https://www.npmjs.com/package/nodemon)
> nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

```shell
# Usage
nodemon [your node app]
nodemon ./server.js localhost 8080

# Config files
nodemon.json
# example
nodemon --watch src/ -e js,coffee app.js
# parsed to
{
  watch: ['src/'],
  ignore: [],
  script: 'app.js'
  options: {
    extensions: ['js', 'coffee'],
    exec: 'node'
  }
}
```
还可配置到package.json

```json

{
  "name": "nodemon",
  "homepage": "http://nodemon.io",
  "...": "... other standard package.json values",
  "nodemonConfig": {
    "ignore": ["test/*", "docs/*"],
    "delay": 2500
  }
}
```
### 参考

| 名称 | 简介 |
|-|-|
|commander |命令行自定义指令 |
|inquirer|命令行询问用户问题，记录回答结果|
|chalk|控制台输出内容样式美化|
|ora|控制台 loading 样式|
|easy-table|控制台输出表格|
|download-git-repo|下载远程模版|
|fs-extra|系统fs模块的扩展，提供了更多便利的 API，并继承了fs模块的API|
|cross-spawn|支持跨平台调用系统上的命令|

[从 0 构建自己的脚手架/CLI知识体系（万字）](<https://juejin.cn/post/6966119324478079007>)

[nodemon](https://www.npmjs.com/package/nodemon)

[cross-spawn](<https://www.npmjs.com/package/cross-spawn>)

[child_process](https://github1s.com/chyingp/nodejs-learning-guide/blob/master/%E6%A8%A1%E5%9D%97/child_process.md#L386)
