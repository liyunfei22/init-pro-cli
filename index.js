const download = require('download-git-repo') // 不支持 Promise

download('github/gitignore', 'test/tmps', function (err) {
  console.log(err ? 'Error' : 'Success')
})
