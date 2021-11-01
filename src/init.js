const inquirer = require('inquirer')
// cross-spawn 跨平台 shell 工具
const spawn = require('cross-spawn');
module.exports = async function (cwd) {
  const { selections } = await inquirer.prompt([{
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
  }])
  console.log(selections)
  if (selections.includes('npm')) {
    const child = spawn('npm', ['init', '-y'], { cwd: cwd, stdio: 'inherit' })
  }
  if (selections.includes('git')) {
    const child = spawn('git', ['init'], { cwd: cwd, stdio: 'inherit' })
  }
}