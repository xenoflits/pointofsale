import React, { Component } from 'react';
import Itempanel from './components/itempanel/itempanel'
import Navbar from './components/navbar/navbar'
import Ticketpanel from './components/ticketpanel/ticketpanel'
import './App.css';
import Checkout from './components/ticketpanel/checkout'


class App extends Component {
  constructor(){
    super();
    this.state = {
      items: [
  ],
  ordernr: 1,
  showCheckOut: false
    }
    this.handleItemClick = this.handleItemClick.bind(this);
    this.newordernr = this.newordernr.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  handleItemClick(obj){
    console.log(obj);
    let temp =  this.state.items;
    /*let check = temp.includes(obj)
    if (check){
console.log(check)
    }
    else*/
    temp.push(obj);
    this.setState({
      items: temp
    })
}

newordernr(){
  
  this.setState({
    ordernr: this.state.ordernr+1,
    showCheckOut: true
  })
  
  
}

cancel(){
   this.setState({
    items: []
  })
}

cancelnotallowed(){
  alert('cancel not possible during checkout');
}

  render() {
    if (this.state.showCheckOut){
      
      return (
        <div className="App">
        <Navbar />
        <Ticketpanel cancel={this.cancelnotallowed} neworder={this.newordernr} ordernr={this.state.ordernr} items={this.state.items} />
        
        <Checkout/>
      </div>
      )
    }
    else{

    return (
      <div className="App">
        <Navbar />
        <Ticketpanel cancel={this.cancel} neworder={this.newordernr} ordernr={this.state.ordernr} items={this.state.items} />
        
        <Itempanel handleItemClick={this.handleItemClick} />
      </div>
    );
  }
}
}

export default App;
