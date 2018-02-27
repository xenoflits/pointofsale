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
            <td className="td-1">{props.quantity}</td>
            <td className="td-2">{props.name}</td>
            <td className="td-3">{roundedCost}</td>
        </tr>
)
}



export default TicketItem