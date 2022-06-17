import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Products from './components/Products'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Navbar />
        <Products />

       
      </div>
    );
  }
}

export default App;
