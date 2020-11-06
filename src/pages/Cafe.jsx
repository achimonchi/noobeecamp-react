import React from 'react';

import {
    Link,
    useParams
} from 'react-router-dom';

import data from './../data';

export default function Cafe(){
    const {cafe_id} = useParams();
    
    return(
        <div>
            <Link to="/"> Back </Link>
            <h1>Detail Cafe {cafe_id}</h1>
        </div>
    )
}