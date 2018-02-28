import React from 'react'

/*
const Button = (props) => {
    return (<div onClick={clickHandle}className="nrbutton"><p>{props.id}</p></div>)
}

function clickHandle(e){
    switch(e.target.id){
        case "x":
        alert("x");
        break;
        case "ok":
        alert("ok")
        break;
        default:
        alert(e.target.id);
        
    }
    
}
*/
class Button extends React.Component{
    constructor(){
        super();
        this.clickHandle = this.clickHandle.bind(this);
        
    }
    

    clickHandle(){
        ;
        switch(this.props.obj){
            case "x":
            this.props.handleClear();
            break;
            case "ok":
            this.props.handleOk();
            break;
            default:
            this.props.handleNr(this.props.obj);
            
        }
        
    }

    render(){
        return(<div id={this.props.id}onClick={this.clickHandle}className="nrbutton"><p>{this.props.obj}</p></div>)
    }
}

export default Button