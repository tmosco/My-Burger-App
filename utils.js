const state = {
  ingredients: {
    salad: 5,
    bacon: 0,
    cheese: 0,
    meat: 0,
  },
};

let b = [];

for (let a in state.ingredients) {
  b.push(a + "=" + state.ingredients[a]);
}
// console.log(b);


const str = b.join(' ');
// console.log("7" + str)






const ao ="well"
const bo = "Done"

const co= "femi" + bo

console.log(co)


























































































// const tr= Object.keys(state).map((a)=>{
//     return [...Array(state[a])].map((_,i)=>{console.log(a )}).reduce((arr , el) =>{
//         return (arr.concat(el)
//         console.log(arr)
//         )
//     },[])

// })
// console.log(tr);

// const name = [...Array(3)];
// console.log(name)

// for(key in state.ingredients){
// const keu = state.ingredients[key]  = state.ingredients[key] <= 0
//    console.log( keu );
// }

// console.log(state.ingredients['salad']);

// const w = Object.keys(state.ingredients).map(a => {
//     return state.ingredients[a];
// });
// console.log(w);
