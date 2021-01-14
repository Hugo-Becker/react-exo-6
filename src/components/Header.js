import React from "react";
import Navigation from "./Navigation"
import SearchBar from "./SearchBar"

class Header extends React.Component{

    render(){
        return (
            <div className="header">
                <Navigation />
                <SearchBar> Huuuu</SearchBar>
            </div>
        )
    }

}

export default Header