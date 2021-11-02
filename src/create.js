const path = require('path')
const fs = require('fs');
// 三方工具
const fse = require('fs-extra')
const initProd = require('./init')
const question = require('./inquirer.js')
const list = [
  {
    name: 'action',
    type: 'list',
    message: 'Target directory already exists Pick an action:',
    choices: [
      {
        name: 'Overwirte',
        value: 'overwrite'
      },{
        name: 'Cancel',
        value: false
      }
    ]
  }
]
async function makeDir (dir, prodName) {
  try {
    // Ensures that a directory is empty. Deletes directory contents if the directory is not empty. If the directory does not exist, it is created. The directory itself is not deleted.
    await fse.emptyDir(dir)
    initProd(dir, prodName)
  } catch (err) {
    console.error(err)
  }
}
module.exports = async function (name, options) {
  // 执行的目录
  const cwd = process.cwd();
  // 要创建的文件夹目录
  const dist = path.join(cwd, name)
  const exists = await fse.pathExists(dist)
  // 如果存在 且 非强制创建 询问用户
  if (exists && !options.force) {
    const { action } = await question(list)
    if (action) {
      makeDir(dist, name)
    } else {
      console.log('end')
    }
    return
  }
  makeDir(dist, name)
}