import { legacy_createStore as createStore } from "redux";

let person = {
  name: "Rucha Joshi",
  age: 31,
};

//mutating state directly
// function directMutate(obj) {
//   obj.age = 20;
// }
// directMutate(person);
// console.log(person);

//------------------------------
//creatig new state and mutate it, instead of mutating original state
// function immutableUpdate(obj) {
//   const tempObje = { ...obj };
//   // after assigning the object, we are actually creating diff memory space for tempObje, hence direct state update does not happen here
//   tempObje.age = 10;
//   return tempObje;
// }
// const newPerson = immutableUpdate(person);
// console.log(newPerson); // op => { "name": "Rucha Joshi", "age": 10}
// console.log(person); // op => { "name": "Rucha Joshi", "age": 31}
//-----------------------------------

// reducer function is same as immutableUpdate function, it takes initalState and returns updated state value, without modifying original state

// function reducer(state = person) {
//   return { ...state, age: (state.age = 5) };
// }

// let's call reducer function
// it returns new state, we'll have to get it in variable
// const upadted = reducer();
// console.log(upadted);
//-----------------------------

// However we do not call Reducer directly in redux. We do it via store. Install redux and import createstore

const store = createStore(reducer);
console.log(store);

// The Redux store is an object that helps manage app state.
// You can 1) dispatch actions to tell the reducer how to update the state,
// 2) get the current state with getState(), and
// 3) subscribe to listen to the state change

function reducer(state = person, action) {
  if (action.type == "increment") return { ...state, age: state.age + 1 };
  else if (action.type == "decrement") return { ...state, age: state.age - 1 };
  else if (action.type == "incrementBy")
    return { ...state, age: state.age + action.payload };
  else if (action.type == "decrementBy")
    return { ...state, age: state.age - action.payload };
  return state;
}
// so instead of wrting console,log every time the state changes, we can SUBSCIBE to the store to listen to state change

store.subscribe(() => {
  console.log(store.getState());
});

//console.log(store.getState());
store.dispatch({ type: "increment" });
//console.log(store.getState());
store.dispatch({ type: "decrement" });
//console.log(store.getState());
store.dispatch({ type: "incrementBy", payload: 10 });
//console.log(store.getState());
store.dispatch({ type: "decrementBy", payload: 10 });
//console.log(store.getState());
