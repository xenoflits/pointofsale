import React from 'react'

/*class TicketItem extends React.Component {
    render(){
        return(
        <tr>
            <td>{this.props.quantity}</td>
            <td>{this.props.name}</td>
            <td>{this.props.price}</td>
        </tr>

        )
    }
}*/

const TicketItem = (props) => {
return(
    <tr>
            <td>{props.quantity}</td>
            <td>{props.name}</td>
            <td>{props.cost}</td>
        </tr>
)
}



export default TicketItem