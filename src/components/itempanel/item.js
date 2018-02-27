import React from 'react'


class Item extends React.Component{
    constructor(){
        super();
    this.handleclick = this.handleclick.bind(this); 
    }

handleclick(){
this.props.ItemClick(this.props.obj)
}

render(){
        return (
            <div className="item" onClick={this.handleclick}><h1>{this.props.name}</h1><h2>{this.props.cost}</h2></div>
        )
    }

}

export default Item