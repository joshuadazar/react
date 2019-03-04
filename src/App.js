import React from 'react';

import 'materialize-css/dist/css/materialize.min.css'
import './App.css';
import Main from './components/main';
import Footer from './components/footer';

export default class App extends React.Component {
  render() {
    return (
      <>
          <nav>
            <div className='nav-wrapper'>
              <div className='brand-logo center'>Logo</div>
              <ul id='nav-mobile' className='right hide-on-med-and-down'>
                <li><a href='{#}'>Crear Tareas</a></li>
                <li><a href='{#}'>Usuario</a></li>
                <li><a href='{#}'>Cerrar sesión</a></li>
              </ul>
            </div>
          </nav>
          <Main/>
          <Footer/>
      </>
    );
  }
}


