import React from 'react';
import data from '../data/menu';

export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            ed: this.props.edad +45
        };
    }
    datos(){
        return data.options.map(option=>{
            return(
                
                <li><a href='{}'>{option.item}</a></li>
                
            );
        });
        
    }
    render(){

        return(
            <>
            <nav className="teal">
                <div className='nav-wrapper'>
                <div className='brand-logo center'>
                {this.state.ed}
                </div>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                   {this.datos()}
                </ul>
                </div>
            </nav>
            </>
        );
    }

}