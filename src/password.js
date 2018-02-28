import React from 'react'

class Password extends React.Component {
    constructor(){
        super();
        this.state = {
            username: "",
            password: "",
            u: "John",
            p: "Doe",
            invalid: false
        }
        this.handlechange = this.handlechange.bind(this);
        this.handlechangep = this.handlechangep.bind(this);
        this.verify = this.verify.bind(this);
    }

    handlechange(e){
        this.setState({
            username: e.target.value
        })
    }

    handlechangep(e){
        this.setState({
            password: e.target.value
        })
    }

    verify(){
        if (this.state.password === this.state.p && this.state.username === this.state.u){
            this.props.getName(this.state.username)
            this.props.signinaccepted();
        }
        else
        {
            this.setState({
                invalid: true
            })
        }
    }
    
    
    render(){
        const invalid = "Invalid username or password"
        return(<div className="password">
            <label className="labelpassword">Username:</label>
            <input className="inputpassword" onChange={this.handlechange}></input>
            {this.state.invalid &&
            <label className="errorlabel">{invalid}</label>}
            <label className="labelpassword">Password:</label>
            <input className="inputpassword"onChange={this.handlechangep}></input>
            {this.state.invalid &&
            <label className="errorlabel">{invalid}</label>}
            <button onClick={this.verify} className="buttonpassword">Sign In</button>
            <label className ="testingpassword">For testing purposes(username: John, password: Doe)</label>
            </div>)
    }
}

export default Password