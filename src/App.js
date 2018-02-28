import React, { Component } from 'react';
import Itempanel from './components/itempanel/itempanel'
import Navbar from './components/navbar/navbar'
import Ticketpanel from './components/ticketpanel/ticketpanel'
import './App.css';
import Checkout from './components/ticketpanel/checkout'
import Password from './password'


class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      ordernr: 1,
      showCheckOut: false,
      totalamount: 0,
      currentuser: "",
      signedin: false,
      password: false
    }
    this.handleItemClick = this.handleItemClick.bind(this);
    this.newordernr = this.newordernr.bind(this);
    this.cancel = this.cancel.bind(this);
    this.nextnr = this.nextnr.bind(this);
    this.signin = this.signin.bind(this);
    this.signout = this.signout.bind(this);
    this.cancelnotallowed = this.cancelnotallowed.bind(this);
    this.signinaccepted = this.signinaccepted.bind(this);
    this.getName = this.getName.bind(this);
  }

  handleItemClick(obj) {
    console.log(obj);
    let temp = this.state.items;
    temp.push(obj);
    this.setState({
      items: temp
    })
  }

  signin() {
    this.setState({
      password: true
    })
  }

  signinaccepted(){
    this.setState({
      signedin: true,
      password: false
    })
  }

  signout() {
    if (this.state.showCheckOut) {
      alert('Signing out during checkout is not allowed')
    }
    else {
      this.setState({
        signedin: false,
        currentuser: ""
      })
    }
  }

  newordernr(total) {

    this.setState({

      showCheckOut: true,
      totalamount: total
    })
  }

  nextnr() {
    this.setState({
      ordernr: this.state.ordernr + 1,
      showCheckOut: false
    })
    this.cancel();
  }

  cancel() {
    this.setState({
      items: []
    })
  }

  cancelnotallowed() {
    this.setState({
      items: [],
      showCheckOut: false
    })
  }

  getName(name){
    this.setState({
      currentuser: name
    })
  }

  render() {
    if (this.state.showCheckOut) {

      return (
        <div className="App">
          <Navbar cuser={this.state.currentuser} sstatus={this.state.signedin} signin={this.signin} signout={this.signout} currentuser={this.state.currentuser} />

          <Ticketpanel currentuser={this.state.currentuser} cancel={this.cancelnotallowed} neworder={this.newordernr} ordernr={this.state.ordernr} items={this.state.items} />
          <Checkout nextnr={this.nextnr} total={this.state.totalamount} />
        </div>
      )
    }
    else {

      return (
        <div className="App">
          <Navbar cuser={this.state.currentuser} sstatus={this.state.signedin} signin={this.signin} signout={this.signout} currentuser={this.state.currentuser} />
          {this.state.signedin &&
            <Ticketpanel currentuser={this.state.currentuser} cancel={this.cancel} neworder={this.newordernr} ordernr={this.state.ordernr} items={this.state.items} />}
          {this.state.signedin &&
            <Itempanel handleItemClick={this.handleItemClick} />}
          {this.state.password &&
            <div className="empty"></div>}
          {this.state.password &&
          <Password getName={this.getName} signinaccepted={this.signinaccepted}/>}
        </div>
      );
    }
  }
}

export default App;
