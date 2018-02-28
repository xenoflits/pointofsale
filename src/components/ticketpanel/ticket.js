import React from 'react'
import TicketItem from './ticketitem'


//this component handles the ticket 
class Ticket extends React.Component {
    constructor() {
        super();
        this.state = {
            order: 1,
        }
        this.newOrder = this.newOrder.bind(this);
    }
    //this method checks if the total amount is 0, else it proceeds to the checkout screen
    newOrder(subtotal) {
        if (subtotal === 0) {
            alert("Can't checkout when the bill is 0")
        }
        else {
            this.props.neworder(subtotal);
        }
    }

    render() {
        let items = this.props.items;
        //this check for duplicate items on the ticket and merges them with the quantity property
        const result = [...items.reduce((mp, o) => {
            if (!mp.has(o.name)) mp.set(o.name, Object.assign({ quantity: 0 }, o));
            mp.get(o.name).quantity++;
            return mp;
            
        }, new Map()).values()];
        //this generates the items on the tickets and calculates the total cost per item
        let orderdisplay = result.map((order, i) => { return <TicketItem key={i} quantity={order.quantity} name={order.name} cost={order.cost * order.quantity} /> })
        //this calculates the total amount on the ticket
        let subtotal = 0;
        result.map((order, i) => {
            subtotal = subtotal + (order.cost * order.quantity);
            return null
        })
        //this makes the total amount a float
        const roundedTotal = parseFloat(subtotal).toFixed(2);
        return (
            <div className="ticket">

                <div className="ticket-header">
                    <h1>Order: {this.props.ordernr}</h1>
                    <h1>Waiter: {this.props.currentuser}</h1>
                </div>

                <table>
                    <tbody>
                        {orderdisplay}
                        <tr className="tr-total">
                            <td></td>
                            <td>Total</td>
                            <td>{roundedTotal}</td>
                        </tr>
                    </tbody>
                </table>

                <div className="buttons">
                    <button onClick={() => this.newOrder(subtotal)} className="checkout-button">Checkout</button>
                    <button onClick={this.props.cancel} className="cancel-button">Cancel</button>
                    
                </div>
            </div>
        )
    }
}

export default Ticket