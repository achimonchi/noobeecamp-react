import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';

import './home.css';

import Card from './../components/Card';

import data from './../data';



export default function Home(props){
    const [cafes, setCafes] = useState([]);
    const [isLoading, setLoading] = useState(false);
    
    useEffect(()=>{
        setCafes(data);
        // setLoading(i=> !i);
    }, []);
    
    useEffect(()=>{
        const key = props.keyword;
        const search = new RegExp(key, "ig");
        const newCafes = data.filter((d)=>d.cafeName.search(search) !== -1);
        setCafes(newCafes)
    }, [props.keyword])
    return(
        <section id="content" className="mt-5">
            <Container>
                <Row>
                    <Col md="12">
                        <div className="content">
                            <Row>
                                {
                                    isLoading
                                    ? "Sedang Loading ..."
                                    : cafes.length > 0 
                                        ? cafes.map((c,i)=>(
                                            <Col className="mb-3" md="3" key={i}>
                                                <Card cafe={c}/>
                                            </Col>
                                        ))
                                        : <h1>Data Tidak Ditemukan</h1>
                                }
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}