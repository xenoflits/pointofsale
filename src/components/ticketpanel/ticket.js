import React from 'react'
import TicketItem from './ticketitem'
import CheckOut from './checkout'


class Ticket extends React.Component {
    constructor(){
        super();
        this.state = {
            order: 1,
            
        }
    
    }

 
    render(){
      let items = this.props.items;
   
        const result = [...items.reduce( (mp, o) => {
            if (!mp.has(o.name)) mp.set(o.name, Object.assign({ quantity: 0 }, o));
            mp.get(o.name).quantity++;
            return mp;
        }, new Map).values()];
        
        console.log(result);
      
        
        let orderdisplay = result.map((order, i)=>{return <TicketItem key = {i} quantity={order.quantity} name={order.name} cost={order.cost*order.quantity}/>})
        let subtotal = 0;
        result.map((order,i)=>{
            subtotal = subtotal+(order.cost*order.quantity);
            return null
        })
        const roundedTotal = parseFloat(subtotal).toFixed(2);
        return(
        <div className="ticket">
        
            <div className="ticket-header">
                <h1>Order: {this.props.ordernr}</h1>
                <h1>Waiter: Soeradj Mahabiersing</h1>
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
        
            <div className="checkout">
                <button onClick={this.props.neworder} className="checkout-button">Checkout</button>
                <button className="cancel-button">Cancel</button>
                <button className="queue-button">Queue</button>
            </div>
        </div>
        )
    }
}

export default Ticket