export default function zustyMiddleware(createFunction) {
    return (set, get) => {
      const store = createFunction(set, get);
      for (let key in store) {
        if (typeof store[key] === 'function') {
          let originalFunction = store[key];
          store[key] = (...args) => {
            const prevState = get();
            originalFunction(...args);
            const nextState = get();
            window.postMessage({
              body: 'actionAndStateSnapshot',
              action: key,
              prevState: JSON.stringify(prevState),
              nextState: JSON.stringify(nextState),
            });
          };
        }
      }
      return store;
    };
  }