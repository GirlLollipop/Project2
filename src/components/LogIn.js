import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './style/Style.css';


class LogIn extends Component {
    render(){
        // let imgStyle = {
        //     width: '200px',
        //     height: 'auto',
        //     // borderRadius: '90px',
        //     display: 'block',
        //     margin: '50px auto',
        // }
        return(
          <section className="">
            <div className="container">

                <h1 className="jumbotron-heading">Ingresa tus datos</h1>
                  <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Número de cliente" aria-label="Username" aria-describedby="basic-addon1"/>
                  </div>
                  <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Contraseña" aria-label="Username" aria-describedby="basic-addon1"/>
                  </div>
                <button type="button" className="btn btn-primary"><Link className="twhite" to="/Perfil">Entrar</Link></button>
            </div>
          </section>
        )
    }
}

export default LogIn;
