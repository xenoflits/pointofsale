import React from 'react'
import Ticket from './ticket'


class Ticketpanel extends React.Component{
    render(){
        return(
        <section className="ticketpanel">
            <Ticket neworder={this.props.neworder} ordernr={this.props.ordernr} items={this.props.items}/>
            
        </section>

        )
    }
}

export default Ticketpanel