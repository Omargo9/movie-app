import React, { Component } from 'react';
class Search  extends Component {
    constructor(props){
        super(props);
    }
    render() { 
        return (
            <div className="search">
            <input type="text" placeholder="Type movie name to search" onChange={this.props.searchMovie}></input>
            </div>
          );
    }
}
 
export default Search ;