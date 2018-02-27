import React, { Component } from 'react';
import Itempanel from './components/itempanel/itempanel'
import Navbar from './components/navbar/navbar'
import Ticketpanel from './components/ticketpanel/ticketpanel'
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
      items: [{
        quantity: 1,
        name: "hamburger",
        cost: 1.00
    }
  ]
    }
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(obj){
    console.log(obj);
    let temp =  this.state.items;
    temp.push(obj);
    this.setState({
      items: temp
    })
}

  render() {
    return (
      <div className="App">
        <Navbar />
        <Ticketpanel items={this.state.items} />
        <Itempanel handleItemClick={this.handleItemClick} />
      </div>
    );
  }
}

export default App;
