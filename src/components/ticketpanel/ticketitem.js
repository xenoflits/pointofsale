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
    const roundedCost = parseFloat(props.cost).toFixed(2);
return(
    
    <tr>
            <td>{props.quantity}</td>
            <td>{props.name}</td>
            <td>{roundedCost}</td>
        </tr>
)
}



export default TicketItem