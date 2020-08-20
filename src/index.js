import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {BrowserRouter as Router} from "react-router-dom";

import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import routingReducer from "./store/reducers/routing";
import errorReducer from "./store/reducers/error";
import dictaphoneReducer from "./store/reducers/dictaphone";
import commandReducer from "./store/reducers/command";
import cartReducer from "./store/reducers/cart";
import productReducer from "./store/reducers/product";

const composeEnhancers =
  process.env.NODE_ENV === "developmenty" //e sad radi i u mozzila
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const rootReducer = combineReducers({
  route: routingReducer,
  error: errorReducer,
  dicta: dictaphoneReducer,
  command: commandReducer,
  cart: cartReducer,
  product: productReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

/*
//const store = createStore(composeEnhancers(applyMiddleware(thunk)));
const store = createStore(composeEnhancers(applyMiddleware(thunk)));
*/
const ready = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(ready, document.getElementById("root"));

serviceWorker.unregister();
/*

const ready = (
  <Provider store={store}>
    <Router>
      <App />   <Route path='/:filter?' component={App} />
    </Router>
  </Provider>
);
*/
