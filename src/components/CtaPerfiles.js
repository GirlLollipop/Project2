import React, { Component } from 'react';

class CtaPerfiles extends Component {
  render() {
    return (
      <div className="Home">

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
      </div>
    );
  }
}

export default CtaPerfiles;
