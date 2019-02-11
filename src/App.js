import React, { Component } from 'react'
import './App.css'
import HomePage from './components/home/homePage'
import Navbar from './components/common/Navbar';

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <Navbar />
        <HomePage />
      </React.Fragment>
    )
  }
}

export default App
