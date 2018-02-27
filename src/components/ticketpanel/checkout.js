import React from 'react'

class Checkout extends React.Component {
    render(){
        return(
            <div className="checkout"> 
            <div className="amount"><input></input></div>
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
            </div>
            </div>
        )
    }
}

const Button = (props) => {
    return (<div className="nrbutton">{props.nr}</div>)
}

export default Checkout