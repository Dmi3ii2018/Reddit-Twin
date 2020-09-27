import React from "react";
import { Route, withRouter, Switch } from "react-router-dom";

import App from "./containers/App/App";
import Posts from "./containers/Posts/Posts";
import AddPost from "./containers/AddPost/AddPost";

const Routes = (props) => {
  console.log(props);
  return (
    <Switch {...props}>
      <Route exact path="/" component={App} />
      <Route
        path="/posts"
        render={(props) => (
          <App>
            <AddPost />
            <Posts {...props} />
          </App>
        )}
      />
    </Switch>
  );
};

export default withRouter(Routes);
