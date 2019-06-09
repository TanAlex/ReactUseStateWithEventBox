export function createEventEmitter() {
  let events = {};
  let data = {};
  return {
    on(eventName, handler) {
      eventName = eventName || "_default_";
      let handlers = events[eventName] || [];
      if (!handlers.includes(handler)) handlers.push(handler);
      events[eventName] = handlers;
      console.log("in On");
      console.log(events[eventName]);
    },

    off(eventName, handler) {
      eventName = eventName || "_default_";
      let handlers = events[eventName] || [];
      events[eventName] = handlers.filter(h => h !== handler);
    },

    getValue(eventName) {
      eventName = eventName || "_default_";
      console.log("in getValue");
      return data[eventName];
    },

    setValue(eventName, newValue) {
      eventName = eventName || "_default_";
      data[eventName] = newValue;
      let handlers = events[eventName] || [];
      console.log(data);
      console.log(eventName);
      console.log(handlers);
      handlers.forEach(handler => handler(newValue));
    },

    emit(eventName, value) {
      let handlers = events[eventName] || [];
      handlers.forEach(handler => handler(value));
    }
  };
}

let boxes = {};

export default {
  getBox(boxName) {
    boxName = boxName || "_default_";
    if (boxes[boxName]) {
      return boxes[boxName];
    } else {
      boxes[boxName] = createEventEmitter();
      return boxes[boxName];
    }
  }
};
