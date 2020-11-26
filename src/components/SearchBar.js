import React from 'react';

class SearchBar extends React.Component{

state={
    searchQuery: ''
}

handleChange = (event) => {
    this.setState({
        searchQuery: event.target.value
    }, () => {
        this.props.onFilter(this.state.searchQuery.trim())
    })
}

    render(){ //to bind the components we need to set the state and attibute it to value
        return (
            <form>  
                <input type="text" name="searchQuery" value={this.state.searchQuery} onChange={this.handleChange}/>
            </form>
        )
    }
}

export default SearchBar;