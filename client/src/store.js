import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) return initialState
    return JSON.parse(serializedState)
  } catch(e) {
    console.log(e)
    return undefined
  }
}

const persistedState = loadFromLocalStorage()
// const devtoolEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__();
const composeEnhancer = compose;
// typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//     devtoolEnhancers
//     }) : compose;
const middleware = [thunk, persistedState];
const store = createStore(
  rootReducer, 
  composeEnhancer(
    applyMiddleware(...middleware)
  )
);

persistStore(store);

export default store;
