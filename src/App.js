import React, { Component } from 'react'
import './App.css'
import Navbar from './components/common/Navbar';
import MainRoute from './components/routes/MainRoute';

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <Navbar />
        <MainRoute />
      </React.Fragment>
    )
  }
}

export default App
