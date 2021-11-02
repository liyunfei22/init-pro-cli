const process = require('process')
console.log('...')
console.log(process.argv)
console.log(process.cpuUsage())
process.on('beforeExit', (code) => {
  console.log('code=', code)
})
// beforeExit
// exit 事件
// message 事件
// // 'warning' 事件
//process.abort() 方法会导致 Node.js 进程立即退出并生成一个核心文件。
// process.arch CPU 架构

// process.execPath node 可执行文件的绝对路径

// process.argv 启动node 进程时传入的命令行参数，第一个元素：process.execPath

// 如果 Node.js 进程是使用 IPC 通道衍生（参见子进程文档），则 process.channel 属性是对 IPC 通道的引用。 如果不存在 IPC 通道，则此属性为 undefined。

// process.chdir(directory) 更改当前的工作目录

// process.cwd() 方法返回 Node.js 进程的当前工作目录。

// process.emitWarning(warning[, options])

// process.env 属性返回包含用户环境的对象

// process.exit() 方法指示 Node.js 以 code 的退出状态同步终止进程。 如果省略 code，则退出将使用“成功”代码 0 或 process.exitCode 的值（如果已设置）

// process.kill(pid[,signal])

// process.memoryUsage()

// process.nextTick(callback[, ...args])

// process.pid 属性返回进程的 PID。

// process.ppid 属性返回当前进程的父进程的 PID。
// process.platform



// process.on('multipleResolves', (type, promise, reason) => {
//   console.error(type, promise, reason);
//   // setImmediate(() => process.exit(1));
// });

// async function main() {
//   try {
//     return await new Promise((resolve, reject) => {
//       resolve('First call');
//       resolve('Swallowed resolve');
//       reject(new Error('Swallowed reject'));
//     });
//   } catch {
//     throw new Error('Failed');
//   }
// }

// main().then(console.log);
// 从标准输入开始读取，因此进程不会退出。
// process.stdin.resume();

// process.on('SIGINT', () => {
//   console.log('Received SIGINT. Press Control-D to exit.');
// });

// // 使用单个函数处理多个信号
// function handle(signal) {
//   console.log(`Received ${signal}`);
// }

// process.on('SIGINT', handle);
// process.on('SIGTERM', handle);
