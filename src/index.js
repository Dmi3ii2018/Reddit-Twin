import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './utils/serviceWorker';

import {createBrowserHistory} from 'history'
import Routes from './routes';
import { BrowserRouter as Router} from 'react-router-dom'


const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes history={history} />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
