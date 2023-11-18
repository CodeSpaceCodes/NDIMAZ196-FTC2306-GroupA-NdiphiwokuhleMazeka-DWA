import store from './store.js';
import * as actions from './actions.js';

console.log('User Story 1:');
console.log('Initial State:', store.getState());


console.log('\nUser Story 2:');
store.dispatch({ type: actions.ADD });
store.dispatch({ type: actions.ADD });
console.log('Updated State:', store.getState());


console.log('\nUser Story 3:');
store.dispatch({ type: actions.SUBTRACT });
console.log('Updated State:', store.getState());


console.log('\nUser Story 4:');
store.dispatch({ type: actions.RESET });
console.log('Updated State:', store.getState());