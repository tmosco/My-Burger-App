import React, { Component } from "react";
import Order from "../../components/Order/Order";
import OrdersStyle from "./Orders.module.css";
import axios from "../../axios-orders";
import withErrorHandler from "../../components/Error/Error";

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };

  componentDidMount() {
    axios
      .get("orders.json")
      .then((res) => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({ ...res.data[key], id: key });
          //   console.log(key,fetchedOrders);
        }
        this.setState({ laoding: false, orders: fetchedOrders });
      })
      .catch((err) => this.setState({ laoding: false }));
  }

  render() {
    return (
      <div className={OrdersStyle.Orders}>
        {this.state.orders.map((order) => (
          <Order key={order.id}
          ingredients={order.ingredients}
          price={order.price}
          
          />
        ))}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);
