const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('some-event', (data) => {
  console.log('ON: some-event', data);
});
emitter.emit('some-event', { key: 'value' });

class Dispatcher extends EventEmitter {
  subscribe(eventName, callback) {
    console.log('Subscribe...');
    this.on(eventName, callback);
  }

  dispatch(eventName, callback) {
    console.log('Dispatching...');
    this.emit(eventName, callback);
  }
}

const dispatcher = new Dispatcher();
dispatcher.subscribe('another-event', (data) => {
  console.log('ON: another-event - ', data);
});
dispatcher.dispatch('another-event', { key2: 'value2' });
