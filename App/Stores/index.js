import { combineReducers, createStore } from 'redux';
// import configureStore from './CreateStore';
// import rootSaga from 'App/Sagas'
import { reducer as ExampleReducer } from './Example/Reducers';

export default (rootReducer = createStore(ExampleReducer));
