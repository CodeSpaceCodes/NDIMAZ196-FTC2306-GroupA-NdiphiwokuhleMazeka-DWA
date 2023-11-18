export const createStore = (reducer) => {
    let state = reducer(undefined, { type: '__INIT__' });
    let subscribers = [];
  
    const getState = () => state;
  
    const dispatch = (action) => {
      state = reducer(state, action);
      subscribers.forEach((listener) => listener());
    };
  
    const subscribe = (listener) => {
        subscribers.push(listener);
      return () => {
        subscribers = subscribers.filter((item) => item !== listener);
      };
    };
  
    return { getState, dispatch, subscribe };
  };
