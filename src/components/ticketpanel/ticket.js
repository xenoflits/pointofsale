import React from 'react'
import TicketItem from './ticketitem'


class Ticket extends React.Component {
    constructor(){
        super();
        this.state = {
            order: 1,
            
        }
    this.updateTicket = this.updateTicket.bind(this);
    }

    updateTicket(obj){

    }
    render(){
        let orderdisplay = this.props.items.map((order, i)=>{return <TicketItem key = {i} quantity={order.quantity} name={order.name} cost={order.cost}/>})
        
        return(
            <div className="ticket">
               <table>
               <tbody>
                {orderdisplay}
                 </tbody>
                 </table>
                
            </div>
        )
    }
}

export default Ticket