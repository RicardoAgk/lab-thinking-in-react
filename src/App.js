import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json'
import FilteredProductTable from './components/FilteredProductsTable'
class App extends React.Component {
  state = {
    products: data
  }
  render(){
    return (
      <div className="App">
        <FilteredProductTable products = {this.state.products} />
      </div>
    )
  }
}

export default App;
