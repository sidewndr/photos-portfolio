import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import GlobalComponents from './shared/global-components'
import {BrowserRouter, Route} from "react-router-dom"
import {Provider} from "react-redux";
import {createStore} from "redux";
import {rootReducer} from "./redux/rootReducer";

import {Home} from "./feature/preview/pages/home";
import {About} from "./feature/about/pages/about";
import {Portfolio} from "./feature/portfolio/pages/portfolio";
import {Records} from "./feature/records/pages/records";

const store = createStore(rootReducer)

const app = (
  <Provider store={store}>
    <GlobalComponents />
    <BrowserRouter>
      <Route path={"/"} exact render={() => <Home />} />
      <Route path={"/about"} exact render={() => <About />} />
      <Route path={"/portfolio"} exact render={() => <Portfolio />} />
      <Route path={"/records"} exact render={() => <Records />} />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root') );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
