import React, { Component } from 'react';
import { Link } from "react-router-dom";


class CtaPerfiles extends Component {
  render() {
    return (
      <section className="marg">
      <nav aria-label="Page navigation example">
    <ul className="pagination">
      <li className="page-item"><Link to="/Menu">Previous</Link></li>
    </ul>
      </nav>

        <div id="accordion">
          <div className="card">
            <div className="card-header" id="headingOne">
              <h5 className="mb-0">
              <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Cuenta perfiles
              <br/>
              <span className="breadcrumb-item active" aria-current="page">tu saldo es 20000</span>
              </button>
              </h5>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CtaPerfiles;
