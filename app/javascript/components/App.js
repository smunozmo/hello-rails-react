import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Greeting from "./Greeting";
import configureStore from "../configureStore";
const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <h1 style={{ margin: "auto", width: "80%", textAlign: "center" }}>
                Click <a href='/greeting'>here</a> for greetings.
              </h1>
            )}
          />
          <Route
            path='/greeting'
            render={() => <Greeting greeting='Friend' />}
          />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
