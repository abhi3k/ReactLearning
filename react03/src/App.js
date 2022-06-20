import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChildCompoent from './components/ChildComponent'

class App extends Component {
  constructor(props){
    super(props)
    console.log("Inside Constructor")

    this.state = {
      count : 0,
      show: true,
    }
  }

  componentDidMount() {
    console.log("Inside ComponentDidMount")
    console.log("---------------Mount Finished----------")
  }

  componentDidUpdate() {
    console.log("Inside componentDidUpdate")
    console.log("-------------------Update Finished---------------")
  }

  render() {
    console.log("Inside render")
    return (
      <div className="App">
        <h1>App</h1>
        <h2>{this.state.count}</h2>
        <button onClick={
          () => this.setState((prevState) => ({count: prevState.count + 1}))}>Increment</button>   
        { this.state.show && <ChildCompoent/> }
        <button onClick={() => this.setState((prevState) => ({show: !prevState.show}))}>show/hide</button>
      </div>
    );
  }
}

export default App;



/*

  -> Component Life Cycle phases :
      1. Mounting (Constructor, render, componentDidMount)
      2. Updating ( [listenss to props/states updates] (re-render) => ComponentDidUpdate)
      3. Unmounting ([Just before unmounting] componentWillUnmount)

  -> Component LifeCycle Methods :
    1. ComponentDidMount
      - used to make API calls

    2. ComponentDidUpdate
      - used whenever code that needs to be executed after a certain 
      re-render

    3. ComponentWillUnmount
      - to reset states/formFields

import Products from './components/Products'
import Navbar from './components/Navbar'
<Navbar />
<Products />

*/