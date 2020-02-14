import React from 'react';

const url= 'https://robohash.org/';
const Card = ({id, name, email, description}) => {
    return(
        
            <section className="col l4 m6 s12">
                <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={url+id+'?100X100'} alt="" max-width="150px" height="200"/>
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">{name}<i className="material-icons right">more_vert</i></span>
                        <p><a href='{}'>{email}</a></p>
                    </div>
                    <div className="card-reveal">
                        <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                         <p>{description}</p>
                    </div>
                </div>
            </section>
        
    );
}
export default Card;