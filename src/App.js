import React, { Component } from 'react'; //Este import va en todas las vistas, hace referencia a un pedacito de react
import './App.css'; //el .css sirve para dar estilos
import { Route, Switch } from "react-router-dom"; //hay que importar Route y switch ya que los ocuparemos

import CtaPerfiles from'./components/CtaPerfiles.js'; // importo componente de Home
import LogIn from './components/LogIn.js'; // importo componente de LogIn
import Menu from './components/Menu.js';
import Perfil from './components/Perfil.js';
import TuAfore from './components/TuAfore.js';
import Logo from './components/images/logo-aforex.png';
import './components/style/Style.css';



class App extends Component {
  render() {
    let imgStyle = {
        width: '200px',
        height: 'auto',
        // borderRadius: '90px',
        display: 'block',
        margin: '0 auto',
        paddinga: '0',
      }
    return (
      <div>

      <nav className="padd navbar-dark bg-primary">
        <img style={imgStyle} src={Logo} />
      </nav>

      <Switch> //entre los switch escribimos los componentes que van a hacer un "cambio de vista"
        <Route component={LogIn} path="/" exact />
        <Route component={CtaPerfiles} path="/CtaPerfiles" />
        <Route component={Perfil} path="/Perfil" />
        <Route component={Menu} path="/Menu"/>
        <Route component={TuAfore} path="/TuAfore"/>

      </Switch>

      <footer className="footer">
      <div className="container">
            <li className="text-footer footer-link"> Sucursales</li>
            <li className="text-footer footer-link text-center">Preferencias</li>
            <li className="text-footer footer-link right-center">Ayuda</li>
      </div>
    </footer>
      </div>
    );
  }
}

export default App;
