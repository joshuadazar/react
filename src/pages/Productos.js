import React, {Component} from 'react';
import CardList  from './components/CardList';
import Search from './components/Search'
import {robots}  from '../data/robots';





class  Productos extends Component{
    constructor(){
        super()
        this.state={
            robots: robots,
            searchField:''
        }
        this.onSearchRobot= this.onSearchRobot.bind(this);
    }
    RndImage(){
       return <img className="activator" src={'https://robohash.org/'+ Math.floor(Math.random()*10)+'?100X100'} alt=""/>
    }

    onSearchRobot(e){
        this.setState({
            searchField: e.target.value
        })
    }
 
    render(){
        const filteredRobots= this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        return(
            <>
            <h2>Pagina 1 Productos</h2>
            <Search searchRobot={this.onSearchRobot}/>
            <CardList className="container" robots={filteredRobots}/>
            </>
        );
        
    }
    

}

   
    


export default Productos;