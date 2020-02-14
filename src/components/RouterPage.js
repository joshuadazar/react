import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import Productos from '../pages/Productos'
import Servicios from '../pages/Servicios'
import Contacto from '../pages/Contacto'
import Home from '../pages/Home'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    //RedirectProps,
   // withRouter

} from 'react-router-dom'

export default class RouterPage extends Component{
    constructor(props){
        super(props)
        this.state={
            edad: 1
        }
    }
    
    render() {
        return(
            <Router>
                <>
                <header className='blue darken-3 white-text'>

                    <nav>
                    <div className="nav-wrapper">
                        <a href="{}" className="brand-logo">Logo</a>
                        <ul id='nav-mobile' className='right hide-on-med-and-down'>
                            <li> <Link to= "/">Inicio</Link> </li>
                            <li><Link to= "/productos">Productos</Link> </li>
                            <li> <Link to= "/servicios">Servicios</Link> </li>
                            <li><Link to= "/contacto">Contacto</Link> </li>
                        </ul>
                    </div>
                    </nav>
                </header>
                <main className="row red">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/productos" component={Productos}/>
                        <Route path="/servicios" render={(props) => <Servicios {...props} edad={this.state.edad}  />} />
                        <Route path="/contacto" component={Contacto}/>
                    </Switch>
                </main>
                
                </>
            </Router>

            
        );
    }
        
    }
    






