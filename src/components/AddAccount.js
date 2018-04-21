import React, { Component } from 'react';

class AddAccount extends Component {
    render() {
        return (
            <div className="AddAccount">

                <div id="accordion">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Cuenta Nómina
                                </button>
                            </h5>
                        </div>
                    </div>
                </div>
                <span className="breadcrumb-item active" aria-current="page"> ******1718 </span>
                <div>
                    <span className="breadcrumb-item active" aria-current="page"> Ingresa tu NIP </span>
                    <br />
                    <span className="breadcrumb-item active" aria-current="page"> **** </span>

                </div>
            </div>
        );
    }
}
    export default AddAccount;