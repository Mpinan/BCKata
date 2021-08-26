import './App.css';
import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';

// Pass the modal name
const mapStateToProps = ({ products }) => {
  return {
    ...products
  }
}
// Pass the modal name
const mapDispatchToProps = ({ products }) => {
  return {
    ...products
  }
}
// Pass the state in the modal
const App = ({ items, loadProducts }) => {

  useEffect(() => { loadProducts() }, [])


  return (
    <div className="App">
      <h1>Hello</h1>
      {console.log(items.data)}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App);