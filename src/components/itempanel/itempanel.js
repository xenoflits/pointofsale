import React from 'react'
import Category from './category'
import Items from './items'
import Item from './item'

import categories from './categories'



class Itempanel extends React.Component {
    constructor(){
        super();
        this.state = {          
            Categories: categories,
            Mode: "Categories",
            CurrentCat: "none",
            currentItems: []
            
        }
        this.setMode = this.setMode.bind(this);
        this.handleItems = this.handleItems.bind(this);
        this.handleBackClick = this.handleBackClick.bind(this);
        //this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleItems(e){
        const currentItems = Items.map((item, i)=>{
            
            if (item.category === e){
                return (<Item key = {i} name={item.name} cost={item.cost} obj={item} ItemClick={this.props.handleItemClick}/>)
            }
            else {
                return( null)
            }
            
        })
        this.setState({
            currentItems: currentItems
        })
    }

    handleBackClick(){
        this.setMode();
    }

    

    setMode(e){
        if (this.state.Mode === "Categories"){
        this.setState({
            Mode: "Items",
            CurrentCat: e.target.id
        },
        this.handleItems(e.target.id)
    )
    }
    else {
        this.setState({
            Mode: "Categories"
        })
    }
    }
 

    render(){
       const cats = this.state.Categories.map((cats, i) =>
    <Category key = {i} name={cats} setMode={this.setMode}/>
    )
        
        if (this.state.Mode === "Categories"){
        return(<div className="itempanel">
           {cats}
        </div>)
        }
        else{
            return <div className="itempanel2"><div className="back" onClick={this.handleBackClick}>x</div>{this.state.currentItems}</div>
        }
    }
}

export default Itempanel