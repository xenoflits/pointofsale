import React from 'react'

class Navbar extends React.Component {
    constructor(){
        super();
        this.state = {
            user: "Soeradj Mahabiersing",

        }
    }
    render(){
        return(
            <section className="navbar">
          <div className="logo">
            
          </div>
          <div className="controls">
            <div className="control-button">
            signout <i className="fas fa-user"></i>
            </div>
            <div className="control-button">
              stats <i className="far fa-chart-bar"></i>
            </div>
             
          </div>
          <div>{this.state.user}</div>
        </section>
        )
    }
}

export default Navbar