import React, { Component } from 'react'; //Este import va en todas las vistas, hace referencia a un pedacito de react
import './style/Style.css';
import { Link } from "react-router-dom";


class Perfil extends Component {
  render() {
    return (
      <section className="marg">
      <div className="text-center">
        <h1 className="jumbotron-heading">¡Bienvenida!</h1>
      </div>
          <container className="container">
            <button type="button" className="btn btn-primary btn-lg btn-block">Tu Afore</button>
            <button type="button" className="btn btn-primary btn-lg btn-block"><Link className="twhite" to="/Menu">Tus cuentas</Link></button>
          </container>
          <container className="container">
            <div>
            <button type="button" className="btn btn-primary"><Link className="twhite" to="/">Cerrar sesión</Link></button>
            </div>
          </container>
      </section>
      );
    }
  }

  export default Perfil;
