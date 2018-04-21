import React, { Component } from 'react'; //Este import va en todas las vistas, hace referencia a un pedacito de react
import './App.css'; //el .css sirve para dar estilos
import { Route, Switch } from "react-router-dom"; //hay que importar Route y switch ya que los ocuparemos
import Home from'./components/Home.js' // importo componente de Home
import LogIn from './components/LogIn.js' // importo componente de LogIn
import AddAccount from './components/AddAccount.js' // importo componente de Agregar Tarjeta



class App extends Component {
  render() {
    return (
      <div className="App">

      <Switch> //entre los switch escribimos los componentes que van a hacer un "cambio de vista"
        <Route component={LogIn} path="/" exact />
        <Route component={Home} path="/Home" />
          <Route component={AddAccount} path="/AddAccount" />
      </Switch>
      </div>
    );
  }
}

export default App;
