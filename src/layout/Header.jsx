import React, {useState} from 'react';
import logo from './../assets/logo.png';

import './header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faHome, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'

import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    InputGroup,
    InputGroupAddon,
    Input,
    Button
  } from 'reactstrap';

const Icon = ({icon, className, size}) =>{
    return <FontAwesomeIcon className={className} size={size} icon={icon}/>
}

export default function Header(){

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    
    return(
        <section id="header">
            <Container>
                <Navbar className="navbar" color="light" light expand="md">
                    <NavbarBrand href="/"><img src={logo} className="nav-logo" alt="Logo"/></NavbarBrand>
                    <NavbarToggler onClick={toggle} /> 
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" style={{width:"80%"}}>
                            <NavItem style={{width:"100%"}}>
                                <InputGroup>
                                    <Input placeholder="Mau nongkrong dimana kamu hari ini?" />
                                    <InputGroupAddon addonType="append">
                                        <Button className="bg-secondary"> <Icon className="icon-white" size="lg" icon={faSearch} /> </Button>
                                    </InputGroupAddon>
                                </InputGroup>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem className="ml-3">
                                <NavLink href="#"> <Icon className="icon-primary" size="lg" icon={faHome} /> </NavLink>
                            </NavItem>
                            <NavItem className="ml-3">
                                <NavLink href="#"> <Icon className="icon-primary" size="lg" icon={faBook} /> </NavLink>
                            </NavItem>
                            <NavItem className="ml-3">
                                <NavLink href="#"> <Icon className="icon-primary" size="lg" icon={faUser} /> </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </Container>
        </section>
    )
    
}