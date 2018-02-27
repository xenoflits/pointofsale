import React from 'react'
import Ticket from './ticket'


class Ticketpanel extends React.Component{
    render(){
        return(
        <section className="ticketpanel">
            <Ticket items={this.props.items}/>
            <div className="checkout">
                <button className="checkout-button">checkout</button>
            </div>
        </section>

        )
    }
}

export default Ticketpanel