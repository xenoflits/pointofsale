import React, { Component } from 'react';
import Itempanel from './components/itempanel/itempanel'
import Navbar from './components/navbar/navbar'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <section className="ticketpanel">
          <div className="ticket">
            <div className="cancel">cancel</div>
            <div className="queue">queue</div>
            <div className="checkout">checkout</div>
          </div>
        </section>

        <Itempanel />
      </div>
    );
  }
}

export default App;
