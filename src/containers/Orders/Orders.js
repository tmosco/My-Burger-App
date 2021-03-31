import React, { Component } from "react";
import Order from "../../components/Order/Order";
import OrdersStyle from "./Orders.module.css";
import { connect } from "react-redux";
import axios from "../../axios-orders";
import withErrorHandler from "../../components/Error/Error";
import * as actions from "../../Store/actions/index";
import Spinner from "../../components/UI/Spinner/Spinner";

class Orders extends Component {
  componentDidMount() {
    this.props.onFetchOrder(this.props.token,this.props.userId);
  }

  render() {
    let orders = <Spinner />;
    if (!this.props.loading) {
      orders = (
        <div className={OrdersStyle.Orders}>
          {this.props.orders.map((order) => (
            <Order
              key={order.id}
              ingredients={order.ingredients}
              price={order.price}
            />
          ))}
        </div>
      );
    }
    return orders;
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
    token:state.auth.token,
    userId :state.auth.userId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrder: (token,userId) => dispatch(actions.fetchOrders(token,userId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));
