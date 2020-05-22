import React, { Component } from "react";
import {createStore} from 'redux'
import reducer from './reducers'
import HelloWorld from "./HelloWorld";

const initialState = {
  tech :"React"
}
let store = createStore(reducer,initialState)

let tech = store.getState().tech;
console.log(store.getState())
class App extends Component {
  render() {
    
    return <HelloWorld tech = {tech}  />;
  }
}

export default App;
