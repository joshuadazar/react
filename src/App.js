import React from 'react';

import 'materialize-css/dist/css/materialize.min.css'
import './App.css';
import Main from './components/main';
import Footer from './components/footer';
import Header from './components/header';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
        nombre:"Joshua Daza",
        edad:80
    };
}

  render() {
    return (
      <>
          <Header edad={this.state.edad}/>
          <Main/>
          <Footer nombre={this.state.nombre} edad={this.state.edad} />
      </>
    );
  }
}


