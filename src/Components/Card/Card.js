import React from 'react';
import { NavLink } from 'react-router-dom';
import './card.css';

function Card (props){
    return (
        <NavLink to={`/artic/${props.id}`}>
            <div className="card">
                <img src={props.imageUrl}/>
                <div className="card__title">
                    <h2>{props.title}</h2>
                </div>
            </div>
        </NavLink>
        
    );
}

export default Card;