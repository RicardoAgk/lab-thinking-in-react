import React from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilteredProductTable extends React.Component{
    state = {
        products: this.props.products.data,
        filteredProducts: this.props.products.data
    }

    handleFilteredProducts = (query) => {
        let visibleProducts = [...this.state.products].filter((product) =>{
            return product.name.toLowerCase().includes(query.toLowerCase())
        });
        this.setState({
            filteredProducts: visibleProducts
        })
    }
        render() {
            return (
            <div>
                <SearchBar onFilter={this.handleFilteredProducts}/>
                <ProductTable filteredProducts={this.state.filteredProducts}/>
            </div>
        )
        }
        
    }


export default FilteredProductTable;