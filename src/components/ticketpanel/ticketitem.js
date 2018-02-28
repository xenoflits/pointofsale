import React from 'react'

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