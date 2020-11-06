import React, { useEffect, useState } from 'react';
import Loading from './../components/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    Link,
    useParams
} from 'react-router-dom';
import { Button, Col, Container, Row } from 'reactstrap';

import data from './../data';

export default function Cafe(){
    const {cafe_id} = useParams();
    const [cafe, setCafe] = useState(undefined);

    useEffect(()=>{
        const newCafe = data.find((d)=> d._id === parseInt(cafe_id));
        setTimeout(()=>{
            setCafe(newCafe);
        },1000)
    }, [cafe])
    
    if(cafe === undefined){
        return <Loading/>
    } else {
        return(
            <section id="cafe-detail" className="mt-5">
                <Container>
                    <Row>
                        <Col>
                            <div className="content cafe">
                                <Row>
                                    <Col>
                                        <Link to="/" className="btn btn-dark text-white" >Back</Link>
                                    </Col>
                                </Row>
                                <Row className="mt-3">
                                    <Col md="6">
                                        <div className="rounded" style={{backgroundColor:"#12262F"}}>
                                            <img src={cafe.img} alt="" className="rounded" style={{opacity:"0.7"}} width="100%"/>
                                        </div>    
                                    </Col>
                                    <Col md="6" style={{alignSelf:"center"}}>
                                        <h1>{cafe.cafeName}</h1>
                                        <h4 className="display">{cafe.address}</h4>
    
                                        <Button className="mt-5 btn-primary">Yuk Mampir Sebentar ...</Button>
                                    </Col>
                                </Row>
                                <Row className="mt-3">
                                    <Col md="6">
                                        <div className="mt-3"><b>Deskripsi</b></div>
                                        <div>
                                            {cafe.desc}
                                        </div>
                                    </Col>
                                    <Col md="6">
                                        <div className="mt-3"><b>Fasilitas</b></div>
                                        <div>
                                            <Row>
                                                {cafe.facilities.map((facility)=>(
                                                    <Col md="6">
                                                        <div className="mt-2">
                                                            <FontAwesomeIcon icon={facility.icon} /> <span className="ml-3">{facility.text}</span>
                                                        </div>
                                                    </Col>
                                                ))}
                                            </Row>
                                            
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}