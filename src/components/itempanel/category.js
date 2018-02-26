import React from 'react'


class Category extends React.Component {
    constructor(){
        super();

        this.handleClick = this.handleClick.bind(this);
    }
   
    handleClick(e) {
        this.props.setMode(e)
    }
    
   
    render(){
        return(<div className="cat" onClick={this.handleClick} id={this.props.name}>
        {this.props.name}
            
        </div>)
    }
}

export default Category