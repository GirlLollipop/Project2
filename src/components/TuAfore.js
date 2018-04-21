import React, { Component } from 'react'; //Este import va en todas las vistas, hace referencia a un pedacito de react
import { Link } from "react-router-dom";
import './style/Style.css';


class TuAfore extends Component {
  render() {
    return (
      <section className="marg">
      <nav aria-label="Page navigation example">
    <ul className="pagination">
      <li className="page-item"><Link to="/Perfil">Previous</Link></li>
    </ul>
      </nav>
      <container className="container">
        <button type="button" className="btn btn-primary btn-lg btn-block"><Link className="twhite" to="/calculaPension">Calcula tu pension</Link></button>
        <button type="button" className="btn btn-primary btn-lg btn-block">Consulta tu saldo</button>
        <button type="button" className="btn btn-primary btn-lg btn-block">Solicita retiro</button>
      </container>

      <div className="text-margintop margin-left">
        <button type="button" className="btn btn-primary"><Link className="twhite" to="/">Cerrar sesión</Link></button>
      </div>
      </section>
      );
    }
  }

  export default TuAfore;
