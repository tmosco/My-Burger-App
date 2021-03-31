//the former method to convert object to arrays 

    const sum = Object.keys( ingredients )
        .map( igKey => {
            return ingredients[igKey];
        } )
        .reduce( ( sum, el ) => {
            return sum + el;
        }, 0 );
    return sum > 0;




const sums = [];
for (let key in this.state.orderForm) {
  formElementArray.push({
    id: key,
    config: this.state.orderForm[key],
  });




  import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
};

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      const updatedIngredient = {
        [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
      };
      const updatedIngredients = updateObject(
        state.ingredients,
        updatedIngredient
      );
      const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
      };
      return updateObject(state, updatedState);
  
  
      case actionTypes.REMOVE_INGREDIENT:
      const updatedIng = {
        [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
      };
      const updatedIngs = updateObject(state.ingredients, updatedIng);
      const updatedStates = {
        ingredients: updatedIngs,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
      };
      return updateObject(state, updatedStates);
  
  
      case actionTypes.SET_INGREDIENTS:
      return updatedState(state, {
        ingredients: action.ingredients,
        totalPrice: 4,
        error: false,
      });

    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return updateObject(state, { error: true });

    default:
      return state;
  }
};

export default reducer;


















import React, { Component } from 'react';
import { connect } from "react-redux";
import {  Redirect } from "react-router-dom";
import * as actions from "../../Store/actions/index";


class Logout extends Component {
componentDidMount(){
    this.props.onLogout()
}

render() {
    console.log(this.props.token)
let golInk=<Redirect to="/" />
if(this.props.token === null ){
    golInk=<Redirect to="/auth" />
}



        return (
        golInk
        );
    }
}

const mapStateToProps =state =>{
    return{
        token: state.auth.token,
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        onLogout:() => dispatch(actions.logout())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Logout);