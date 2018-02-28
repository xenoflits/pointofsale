import React from 'react'
import fiveeuro from '../../images/5euro.png'
import teneuro from '../../images/10euro.png'
import twentyeuro from '../../images/20euro.png'
import fiftyeuro from '../../images/50euro.png'
import otherpayments from '../../images/betaal.gif'
import Button from './button'

class Checkout extends React.Component {
    constructor() {
        super();
        this.state = {
            received: 0,
            display: []
        }
        this.handleNr = this.handleNr.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.handleBill = this.handleBill.bind(this);

    }
    handleNr(nr) {
        let displaytemp = this.state.display;
        displaytemp.push(nr);
        let displaytemp2 = displaytemp.join('');

        this.setState({
            received: displaytemp2 / 100,
            display: displaytemp
        })
    }

    handleClear() {
        this.setState({
            received: 0,
            display: []
        })
    }

    handleOk() {
        this.props.nextnr();
    }

    handleBill(bill) {
        if (this.state.display.length === 0){ 
        let displaytemp = bill.toString().split('');
        this.setState({
            display: displaytemp,
            received: bill/100
        })    
        }else {
        let displaytemp = this.state.display.join('');
        let displaytemp2 = parseInt(displaytemp) + parseInt(bill);
        let displaytemp3 = displaytemp2.toString().split('');
        
        this.setState({
            display: displaytemp3,
            received: displaytemp3.join('')/100
        })
    }
    }

    render() {
        //these handle the floats
        const total = parseFloat(this.props.total).toFixed(2);
        const received = parseFloat(this.state.received).toFixed(2);
        let back = parseFloat(this.state.received - this.props.total).toFixed(2);
        //this handles the return money sentence
        let getgive
        if (back < 0) {
            getgive = "Get from"
            back = Math.abs(back);
            back = parseFloat(back).toFixed(2);
        }
        else {
            getgive = "Return to"
        }
        //map for the buttons
        const ButtonNrs = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "x", "0", "ok"];
        const Buttons = ButtonNrs.map((button, i) => <Button id={button} key={i} handleOk={this.handleOk} handleClear={this.handleClear} handleNr={this.handleNr} obj={button} />)
        return (
            <div className="checkout">
                
                <div className="checkout-right">
                    <img onClick={()=>this.handleBill(500)} className="bills" src={fiveeuro} alt="5euro" />
                    <img onClick={()=>this.handleBill(1000)}className="bills" src={teneuro} alt="10euro" />
                    <img onClick={()=>this.handleBill(2000)}className="bills" src={twentyeuro} alt="20euro" />
                    <img onClick={()=>this.handleBill(5000)}className="bills" src={fiftyeuro} alt="50euro" />

                </div>
                <div className="checkout-left">
                    
                    <div className="checkout-nr">
                        {Buttons}

                        <img className="other-p" src={otherpayments} alt="otherpaymentoptions" />
                    </div>
                </div>
                <div className="calculate">
                    <h1>Total Amount:</h1>
                    <h1>{total}</h1>
                    <hr />
                    <h1>Received Amount:</h1>
                    <h1>{received}</h1>
                    <hr />
                    <h1>{getgive} Customer:</h1>
                    <h1>{back}</h1>


                </div>
            </div>
        )
    }
}

export default Checkout