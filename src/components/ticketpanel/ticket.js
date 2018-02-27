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
        let orderdisplay = this.props.items.map((order)=>{return <TicketItem quantity={order.quantity} name={order.name} cost={order.cost}/>})
        return(
            <div className="ticket">
               <table>
               
                {orderdisplay}
                 </table>
                
            </div>
        )
    }
}

export default Ticket