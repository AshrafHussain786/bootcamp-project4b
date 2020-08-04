import React from 'react';
import GitHub from '../images/GitHub.png';

export const Card = (props) => {
    return (
        <>
            <div className="col-md-6 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p> 
                        <a href={props.repo} target="_blank">GitHub Link</a>    
                        <a href={props.surge} target="_blank">Surge Link</a>                        
                    </div>
                </div>
            </div>
        </>
    )
}
