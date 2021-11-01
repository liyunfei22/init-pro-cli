#! /usr/bin/env node
// 原生模块
const path = require('path')
const fs = require('fs');
// 三方工具
const fse = require('fs-extra')
// cross-spawn 跨平台 shell 工具
const spawn = require('cross-spawn');
// 命令
const { Command } = require('commander');
const program = new Command();
// 美化工具
const chalk = require('chalk')
const inquirer = require('inquirer')
const create = require('./create')

program
  .version('0.1.0')
  .command('create <app-name>')
  .description('create a new project')
  .option('-f, --force', 'overwrite target directory if it exist')
  .action((name, options) => {

    // 打印命令行输入的值
    console.log("project name is " + chalk.bold(name))
    create(name, options)
  })
program
  // 配置版本号信息
  .version(`v${require('../package.json').version}`)
  .usage('<command> [option]')
program.parse()