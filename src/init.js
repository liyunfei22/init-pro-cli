const question = require('./inquirer')
const path = require('path')
const fs = require('fs-extra')
// cross-spawn 跨平台 shell 工具
const spawn = require('cross-spawn');
const list = [{
  type: 'checkbox',
  message: 'Select init options',
  name: 'selections',
  choices: [{
      name: 'git',
      checked: true
    },
    {
      name: 'npm',
      checked: true
    },
    {
      name: 'type-script'
    }
  ],
  validate(answer) {
    if (answer.length < 1) {
      return 'You must choose at least one option.';
    }

    return true;
  },
}];
function makePackageJson (prodName) {
  const pkg = {
    "name": prodName || '',
    "version": "1.0.0",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "description": ""
  }
  return JSON.stringify(pkg, null, 2)
}
module.exports = async function (cwd, prodName) {
  const { selections } = await question(list)
  const packageJson = makePackageJson(prodName)
  const packageJsonPath = path.join(cwd, 'package.json')
  const gitIgnorePath = path.join(cwd, '.gitignore')

  if (selections.includes('npm')) {
    await fs.writeFile(packageJsonPath, packageJson)
  }
  fs.emptyDir(path.join(cwd, 'src'))
  if (selections.includes('git')) {

    const child = spawn.sync('git', ['init'], { cwd: cwd, stdio: 'inherit' })
    await fs.writeFile(gitIgnorePath, `
    node_modules
    .DS_Store
    design
    *.log
    packages/test
    dist
    temp
    .vuerc
    .version
    .versions
    .changelog
    package-lock.json
    .vscode
    `)
    const gitAdd = spawn.sync('git', ['add', '-A'], { cwd: cwd, stdio: 'inherit' })
    const gitCom = spawn.sync('git', ['commit', '-m', 'feat: init'], { cwd: cwd, stdio: 'inherit' })
  }
}