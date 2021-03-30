import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import ContactDataStyle from "./ContactData.module.css";
import axios from "../../../axios-orders";
import Input from "../../../components/UI/Input/Input";
import withErrorHandler from "../../../components/Error/Error";
import * as orderAction from "../../../Store/actions/index";

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name",
        },
        value: "",
        touched: false,
        validation: {
          required: true,
        },
        valid: false,
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street",
        },
        value: "",
        touched: false,
        validation: {
          required: true,
        },
        valid: false,
      },
      zipCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "ZIP Code",
        },
        value: "",
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5,
        },
        valid: false,
        touched: false,
      },
      Country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Country",
        },
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      emailAddress: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your E-Mail",
        },
        value: "",
        touched: false,
        validation: {
          required: true,
        },
        valid: false,
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" },
          ],
        },
        value: "fastest",
        validation: {},
        valid: true,
      },
    },
    formIsValid: false,
  };

  checkValidation(value, rules) {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    return isValid;
  }

  orderHandler = (e) => {
    e.preventDefault();

    const formData = {};
    for (let i in this.state.orderForm) {
      formData[i] = this.state.orderForm[i].value;
    }
    const order = {
      ingredients: this.props.ings,
      price: this.props.price,
      orderData: formData,
    };
    this.props.onOrderBurger(order);
  };

  inputChangedHandler = (e, id) => {
    const formData = {
      ...this.state.orderForm,
    };
    const updatedFormData = { ...formData[id] };

    updatedFormData.value = e.target.value;
    updatedFormData.valid = this.checkValidation(
      updatedFormData.value,
      updatedFormData.validation
    );
    updatedFormData.touched = true;
    formData[id] = updatedFormData;

    let formIsValid = true;
    for (let id in formData) {
      formIsValid = formData[id].valid && formIsValid;
    }
    this.setState({
      orderForm: formData,
      formIsValid: formIsValid,
    });
  };

  render() {
    const formElementArray = [];
    for (let key in this.state.orderForm) {
      formElementArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }

    let form = (
      <div className={ContactDataStyle.ContactData}>
        <h4>Enter your Contact Data</h4>
        <form onSubmit={this.orderHandler}>
          {formElementArray.map((item) => (
            <Input
              key={item.id}
              elementType={item.config.elementType}
              elementConfig={item.config.elementConfig}
              value={item.config.value}
              invalid={!item.config.valid}
              shouldValidate={item.config.validation}
              touched={item.config.touched}
              changed={(e) => this.inputChangedHandler(e, item.id)}
            />
          ))}
          <Button
            btnType="Success"
            disabled={!this.state.formIsValid}
            text="ORDER"
          ></Button>
        </form>
      </div>
    );
    if (this.props.loading) {
      form = <Spinner />;
    }
    return <>{form}</>;
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    loading:state.order.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onOrderBurger: (orderData) => dispatch(orderAction.purchaseBurger(orderData)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(ContactData, axios));
