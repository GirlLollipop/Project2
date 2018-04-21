import React, { Component } from 'react';
import { Link } from "react-router-dom";


class LogIn extends Component {
    render(){
        let imgStyle = {
            width: '200px',
            height: 'auto',
            // borderRadius: '90px',
            display: 'block',
            margin: '50px auto',
        }
        return(
          <section className="">
            <div className="container">
              <img style={imgStyle} src="https://files.paredro.com/uploads/2016/10/CITIBANAMEX-01.jpg" />
                <h1 className="jumbotron-heading">Ingresa tu número de cliente</h1>
                  <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Número de cliente" aria-label="Username" aria-describedby="basic-addon1"/>
                  </div>
                <button type="button" className="btn btn-primary"><Link to="/Home">Entrar</Link></button>
            </div>
          </section>
        )
    }
}

export default LogIn;
