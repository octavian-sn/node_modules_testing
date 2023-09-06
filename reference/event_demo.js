const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('bark', () => {
  console.log('It barked!');
});
myEmitter.emit('bark');