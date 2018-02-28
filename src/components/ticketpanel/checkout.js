import React from 'react'
import fiveeuro from '../../images/5euro.png'
import teneuro from '../../images/10euro.png'
import twentyeuro from '../../images/20euro.png'
import fiftyeuro from '../../images/50euro.png'
import otherpayments from '../../images/betaal.gif'

class Checkout extends React.Component {
    constructor() {
        super();
        this.state = {
            checkoutvalue: 0
        }
    }
    render() {
        return (
            <div className="checkout">
                <div className="checkout-left">
                    <div className="amount"><input className="amount-input"></input></div>
                    <div className="checkout-nr">
                        <Button nr="1" />
                        <Button nr="2" />
                        <Button nr="3" />
                        <Button nr="4" />
                        <Button nr="5" />
                        <Button nr="6" />
                        <Button nr="7" />
                        <Button nr="8" />
                        <Button nr="9" />
                        <Button nr="x" />
                        <Button nr="0" />
                        <Button nr="ok" />
                        <img className="other-p" src={otherpayments} alt="otherpaymentoptions" />
                    </div>
                </div>
                <div className="checkout-right">
                    <img className="bills" src={fiveeuro} alt="5euro" />
                    <img className="bills" src={teneuro} alt="10euro" />
                    <img className="bills" src={twentyeuro} alt="20euro" />
                    <img className="bills" src={fiftyeuro} alt="50euro" />

                </div>
            </div>
        )
    }
}

const Button = (props) => {
    return (<div className="nrbutton"><p>{props.nr}</p></div>)
}

export default Checkout