const childProcess = require('child_process')
const {spawn, exec, execFile, fork} = childProcess

var echo = spawn('echo', ['hello nodejs']);
var grep = spawn('grep', ['nodejs']);
grep.stdout.setEncoding('utf8')
echo.stdout.on('data', function(data) {
  grep.stdin.write(data)
})
echo.on('close', function(code) {
  if (code !== 0) {
    console.log('echo' + code)
  }
  grep.stdin.end()
})
grep.stdout.on('data', function(data){
  console.log('grep: ' + data);
});

grep.on('close', function(code){
  if(code!==0){
      console.log('grep exists with code: ' + code);
  }
});