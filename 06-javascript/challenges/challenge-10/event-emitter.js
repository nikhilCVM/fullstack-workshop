function createEventEmitter() {
  const events = {};

  return {
    on(event, fn) {
      (events[event] ||= []).push(fn);
      return () => this.off(event, fn);
    },

    once(event, fn) {
      const wrapper = (...a) => (fn(...a), this.off(event, wrapper));
      this.on(event, wrapper);
    },

    emit(event, data) {
      events[event]?.forEach(fn => fn(data));
    },

    off(event, fn) {
      if (!fn) delete events[event];
      else events[event] = events[event]?.filter(f => f !== fn);
    }
  };
}

// ===== Test Run (Your exact example) =====
const emitter = createEventEmitter();

const unsubscribe = emitter.on('userLogin', (user) => {
  console.log(`${user.name} logged in`);
});

emitter.on('userLogin', (user) => {
  console.log(`Send welcome email to ${user.email}`);
});

emitter.once('appStart', () => {
  console.log('App started - this only runs once');
});

emitter.emit('userLogin', { name: 'John', email: 'john@example.com' });
emitter.emit('appStart');
emitter.emit('appStart');

unsubscribe();
emitter.emit('userLogin', { name: 'Jane', email: 'jane@example.com' });

emitter.off('userLogin');
emitter.emit('userLogin', { name: 'Jane', email: 'jane@example.com' });
