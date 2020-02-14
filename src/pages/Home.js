import React, {Component} from 'react';
import data from '../data/menu';
import Navigation from '../components/Navigation';

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            ed: this.props.edad +45000,
            valor:0
        };
        this.randImage=this.randImage.bind(this);
    }
    datos(){
        return data.options.map((option, i)=>{
            return(
            <Navigation key={i} option={option.item}/>
            );
        });
        
    }
    randImage(e){
        this.setState({
            valor:Math.floor(Math.random()*10)
        });
        data.options.push({item:this.state.valor})
        console.log(e.target.value, data.options);
        return this.state.valor;
    }
   
    render(){

        return(
            
            <>
                
                <ul className='collection'>
                    {this.datos()}
                </ul>
                <button onClick={this.randImage} className="waves-effect btn" value={this.state.valor}>el valor es: {this.state.valor}</button>
            </>
           
            
        );
    }

}
