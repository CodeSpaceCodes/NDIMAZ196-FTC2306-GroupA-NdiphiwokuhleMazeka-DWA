import { createStore } from './createStore.js';
import counterReducer from './reducers.js';

const store = createStore(counterReducer);

export default store;
