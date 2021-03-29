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