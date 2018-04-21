import React, { Component } from 'react'; //Este import va en todas las vistas, hace referencia a un pedacito de react
import { Link } from "react-router-dom";
import './style/Style.css';


class Menu extends Component {
  render() {
    return (
      <section className="marg">
      <container className="container">
        <button type="button" className="btn btn-primary btn-lg btn-block"><Link className="twhite" to="/CtaPerfiles">Cuenta perfiles</Link></button>
        <button type="button" className="btn btn-primary btn-lg btn-block">Cuenta nómina</button>
      </container>
      <container className="container">
        <button type="button" className="btn btn-primary btn-lg btn-block">Agregar tarjeta</button>
        <button type="button" className="btn btn-primary btn-lg btn-block">Quitar tarjeta</button>
      </container>
      <div className="text-margintop margin-left">
        <button type="button" className="btn btn-primary"><Link className="twhite" to="/">Cerrar sesión</Link></button>
      </div>
      </section>
      );
    }
  }

  export default Menu;
