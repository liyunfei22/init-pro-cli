const inquirer = require('inquirer')

const question = function (list) {
  return new Promise((resolve, reject) => {
    inquirer.prompt(list)
    .then((answer) => {
      resolve(answer)
    })
    .catch((err) => {
      reject(err)
    })
  })
}
module.exports = question;