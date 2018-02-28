import React from 'react'

class Navbar extends React.Component {


    render() {
        let signed = "";
        if (this.props.sstatus) {
            signed = <div onClick={this.props.signout} className="control-button">
                Sign-Out <i className="fas fa-user"></i>
            </div>
        }
        else {
            signed = <div onClick={this.props.signin} className="control-button">
                Sign-In <i className="fas fa-user"></i>
            </div>
        }
        return (
            <section className="navbar">
                <div className="logo">

                </div>
                <div className="controls">
                    {signed}
                </div>
                <div className="currentuser">{this.props.cuser}</div>
            </section>
        )
    }
}

export default Navbar