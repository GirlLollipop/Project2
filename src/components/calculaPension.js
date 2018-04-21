import React, { Component } from 'react'; //Este import va en todas las vistas, hace referencia a un pedacito de react
import { Link } from "react-router-dom";
import './style/Style.css';

class calculaPension extends Component {
  render() {
    return (
    <section className="text-margintop">
    <nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item"><Link to="/TuAfore">Previous</Link></li>
  </ul>
    </nav>

        <div className="container text-center">
          <h3 className="">Calcula tu pension</h3>
        </div>

        <div className="container text-margintop">
          <div className="row">
            <div className="col sm-6">
              <span>Saldo acumulado al dia de hoy en tu Afore.</span>
            </div>

          <div className="col sm-6">
            <span>Tu saldo es de: $ </span>
          </div>

          <div className="container text-margintop">
          <div className="row">
            <div className="col sm-6">
              <span>Tu aporto voluntario es de: </span>
            </div>
            <div className="col sm-6">
              <input type="text" className="form-control" placeholder="Ingresa el monto" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
          </div>
          </div>

        </div>
      </div>

        <div className="text-center text-margintop">
        <button type="button" className="btn btn-primary">Calcular</button>

        </div>
      </section>

      // <container className="container">
      //       <button type="button" className="btn btn-primary btn-lg btn-block">Agregar tarjeta</button>
      //       <button type="button" className="btn btn-primary btn-lg btn-block">Quitar tarjeta</button>
      //     </container>
      //     <div className="text-margintop margin-left">
      //       <button type="button" className="btn btn-primary"><Link className="twhite" to="/">Cerrar sesión</Link></button>
      //     </div>
      // </div>
      );
    }
  }

  export default calculaPension;
