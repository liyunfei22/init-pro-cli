const path = require('path')
const fs = require('fs');
// 三方工具
const fse = require('fs-extra')
const inquirer = require('inquirer')
const initProd = require('./init')
async function mackDir (dir) {
  try {
    await fse.emptyDir(dir)
    initProd(dir)
  } catch (err) {
    console.error(err)
  }
}
module.exports = async function (name, options) {
  const cwd = process.cwd();
  const dist = path.join(cwd, name)
  const exists = await fse.pathExists(dist)
  // 如果存在
  if (exists) {
    // 强制创建文件
    if (options.force) {
      mackDir(dist)
    } else {
      console.log('。。。')
      inquirer.prompt([
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
      ])
      .then((answer) => {
        console.log(answer)
        const  { action } = answer
        if (action) {
          mackDir(dist)
        }
      })
    }
  } else {
    mackDir(dist)
  }

}