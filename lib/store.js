import { createStore, combineReducers, Store, Reducer } from 'redux';

/**
 * Create store
 * @param reducers
 * @returns {Store}
 */
export default function configureStore(reducers) {
  const store = createStore(createReducer(reducers));
  store.asyncReducers = {
    ...reducers,
  };
  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers))
  };
  return store;
}

/**
 * Create reducer
 * @param {Object.<string, Reducer>} asyncReducers
 * @returns {Reducer}
 */
function createReducer(asyncReducers) {
  return combineReducers({
    ...asyncReducers
  })
}
