const childProcess = require('child_process')
const {spawn, exec, execFile, fork} = childProcess
// 异步创建进程
const ls = spawn('ls', ['-lh', '/usr'])
// console.log(ls)
ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
// var echo = spawn('echo', ['hello nodejs']);
// var grep = spawn('grep', ['nodejs']);
// grep.stdout.setEncoding('utf8')
// echo.stdout.on('data', function(data) {
//   grep.stdin.write(data)
// })
// echo.on('close', function(code) {
//   if (code !== 0) {
//     console.log('echo' + code)
//   }
//   grep.stdin.end()
// })
// grep.stdout.on('data', function(data){
//   console.log('grep: ' + data);
// });

// grep.on('close', function(code){
//   if(code!==0){
//       console.log('grep exists with code: ' + code);
//   }
// });