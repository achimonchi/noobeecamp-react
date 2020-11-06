import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './../pages/Home';
import Cafe from './../pages/Cafe';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Layout(){
    const [keyword, setKeyword] = useState("");
    const [search, setSearch] = useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        setKeyword(search);
    }

    const handleSearch=(e)=>{
        setSearch(e.target.value);
    }

    return( 
        <Router>
            <Header handleSearch={handleSearch} handleSubmit={handleSubmit} /> 
                <Route path="/" exact >
                    <Home keyword={keyword} />
                </Route>
                <Route path="/cafe/:cafe_id" exact component={Cafe} />
            <Footer/>
        </Router>
    )
}