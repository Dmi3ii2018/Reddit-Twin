import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './utils/serviceWorker';

import App from "./containers/App/App";
import Posts from "./containers/Posts/Posts";
import AddPost from "./containers/AddPost/AddPost";

import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <App>
      <AddPost />
      <Posts />
    </App>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
