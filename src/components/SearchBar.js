import React from "react";

class SearchBar extends React.Component{

    render(){
        return (
            <div className="searchbar">
                <label>Search</label>
                <input type="text"></input>
                <button>GO</button>
            </div>
                
        )
    }

}

export default SearchBar