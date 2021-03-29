import React, { Component } from "react";
import Layouts from "./components/Layout/Layouts";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import { Route, Switch } from "react-router-dom";
import Orders from "./containers/Orders/Orders";

class App extends Component {
  render() {
    return (
      <>
        <Layouts>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" exact component={Orders} />
            <Route path="/" exact component={BurgerBuilder} />
          </Switch>
        </Layouts>
      </>
    );
  }
}

export default App;
