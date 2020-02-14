import React from 'react'

const Search= ({searchRobot}) =>{
        return(
            <>
            <div className="col offset-s6 s3 pull-s6">
                <div className="col s8">
                    <input className="white-text" type="text" placeholder="buscar robot" onChange={searchRobot} />
                </div>
                <div className="col s4">
                    <button className="waves-effect btn btn-large red darken-3">Buscar</button>  
                </div>
            </div>
            </>
        );
    
}
export default Search;