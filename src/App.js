import React, { Component } from "react";
import { connect } from "react-redux";
import Layouts from "./components/Layout/Layouts";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import { Route, Switch, withRouter,Redirect } from "react-router-dom";
import Logout from "./containers/Auth/Logout";
import * as actions from "./Store/actions/index";
import asyncComponent from "./utility/asyncComponent/asyncComponent"


const asyncCheckout = asyncComponent(() =>{
  return import ('./containers/Checkout/Checkout')
})
const asyncOrders = asyncComponent(() =>{
  return import ('./containers/Orders/Orders')
})
const asyncAuth= asyncComponent(() =>{
  return import ('./containers/Auth/Auth')
})

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/auth" exact component={asyncAuth} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/"/>
      </Switch>
    );
    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/logout" component={Logout} />
          <Route path="/checkout" component={asyncCheckout} />
          <Route path="/orders" exact component={asyncOrders} />
          <Route path="/auth" exact component={asyncAuth} />
          <Route path="/" exact component={BurgerBuilder} />
          <Redirect to="/"/>
        </Switch>
      );
    }

    return (
      <>
        <Layouts>{routes}</Layouts>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
