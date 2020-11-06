import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

export default function Card({cafe}){
    return(
        <div className="card mb-3">
            <div className="header-card">
                <img alt={cafe.cafeName} src={cafe.img} width="100%" />
            </div>
            <div className="content-card">
                <Link to={"/cafe/"+cafe._id}>
                    <h5>{cafe.cafeName}</h5>
                </Link>
                <p>{cafe.address}</p>
            </div>
        </div>
    )
}