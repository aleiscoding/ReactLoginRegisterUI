import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './img/papanico.png'; 
import mapa from './img/agp-mapa.png';
import loc from './img/loc.png';
import tel from './img/tel.png';
import hora from './img/hora.png';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Inicio de Sesión</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}><b>Ingresar</b></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="outer">
      <div>
        <img className="logoAGP" src={logo} />
      </div>
        <div className="inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </div>

      <footer className="foot">
        <div className="row">
          <div className="col-lg-4">
            <img className="mapita" src={mapa} />
          </div>
          <div className="col-lg-4">
            <img className="ubi" src={loc}/> 
            <div className="text">
              Olivares, Luis Encinas, 83138 Hermosillo, Son
            </div>

            <img className="tel" src={tel} />
            <div className="text">
              TELÉFONO 662 216 4883
            </div>
          </div>
          <div className="col-lg-4 text">
            <img className="hora" src={hora} />
            <div className="row">
              <div className="col-lg-6">
                Lunes - Viernes
              </div>
              <div className="col-lg-6">
                8:00 - 13:00
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                Sábado
              </div>
              <div className="col-lg-6">
                Cerrado
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                Domingo
              </div>
              <div className="col-lg-6">
                Cerrado
              </div>
            </div>
          </div>
        </div>
        <div className="copy">&copy; 2021 - Agrupación George Papanicolau</div>
      </footer>
    </div></Router>
  );
}

export default App;
