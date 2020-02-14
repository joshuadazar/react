import React, {Component} from 'react';

export default class Footer extends Component {
  
  render() {
    return (
      <footer className="page-footer blue darken-2">
          <div className="footer-copyright">
            <div className="container">
            {this.props.nombre}
            <a className="grey-text text-lighten-4 right" href="#!">Edad: {this.props.edad}</a>
            </div>
          </div>
      </footer>
    );
  }
}


