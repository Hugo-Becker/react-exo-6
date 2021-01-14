import React from "react";
import Article from "./Article"


class Body extends React.Component{

    render(){
        return (
            <div className="body">
                <Article />
                <Article />
            </div>
        )
    }

}

export default Body