import React from "react";

class Navigation extends React.Component{

    accueil=()=>{
        console.log('Accueil');
    }
    gallerie=()=>{
        console.log('Gallerie');
    }
    contact=()=>{
        console.log('Contact');
    }

    render(){
        return (
            
            <div className="navigation">
                <a onClick={this.accueil} href="#">Link1</a>
                <a onMouseOver={this.gallerie} href="#">Link2</a>
                <a onDoubleClick={this.contact} href="#">Link3</a>
            </div>
                
        )
    }

}

export default Navigation