import React, {Component} from 'react'

export default class Servicios extends  Component{
    constructor(props){
        super(props)
        this.state={
            nombre:'joshua',
            edad:this.props.edad
        }
    }
    render(){
        return(
            <>
            <div className="row ">
                <div className="col s12 m4">
                    <div className="card amber darken-1">
                        <div className="card-content white-text">
                        <span className="card-title">{this.state.edad}</span>
                        <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div className="card-action">
                        <a href="{}" className="white-text">This is a link</a>
                        <a href="{}" className="white-text">This is a link</a>
                        </div>
                    </div>
                </div>  
                <div className="col s12 m8">
                    <div className="container">
                        <ul className="collection white ">
                            <div className="container">
                                <li className="collection-item">{this.state.nombre}</li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            </>
        )
    }

}