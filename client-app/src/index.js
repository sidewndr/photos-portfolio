import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import {GlobalStyle} from './shared/global-components'
import {BrowserRouter, Route} from "react-router-dom"
import {Provider} from "react-redux";
import {store} from "./redux/store";

import {Home} from "./feature/preview/page/home";
import {About} from "./feature/about/page/about";
import {Portfolio, ThemeListItems} from "./feature/portfolio/page/portfolio";
import {Photos} from "./feature/photos/page/photos";
import {Records} from "./feature/records/desktop/pages/records";


const app = (
  <Provider store={store}>
    <GlobalStyle />

    <BrowserRouter>
      <Route path={"/"} exact render={() => <Home />} />
      <Route path={"/about"} exact render={() => <About />} />
      <Route path={"/portfolio"} exact render={() => <Portfolio />} />

      {
        ThemeListItems.map((ThemeListItem) => (
          <Route path={`/portfolio/${ThemeListItem.theme.toLowerCase().split(' ').join('-')}`}
                 exact render={() => <Photos />} />
        ))
      }

      <Route path={"/records"} exact render={() => <Records />} />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root') );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
