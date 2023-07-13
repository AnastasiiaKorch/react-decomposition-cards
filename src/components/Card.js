import React from 'react';
import './Card.css'

function Card(props) {
    return (
        <div className="card" style={{ width: '18rem', marginTop: '2rem'}}>
            {props.children}
            <div className="card-body">
                <h3 className="card-title">{props.title}</h3>
                <p className='card-text'>{props.text}</p>
                <a href="https://www.onegreenplanet.org" className="btn btn-primary">Learn more</a>
            </div>
        </div>
    );
};

export default Card;