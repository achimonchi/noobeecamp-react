import React from 'react';
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

export default class Layout extends React.Component{
    render(){
        return( 
            <Router>
                <Header/> 
                    <Route path="/" exact component={Home} />
                    <Route path="/cafe/:cafe_id" exact component={Cafe} />
                <Footer/>
            </Router>
        )
    }
}