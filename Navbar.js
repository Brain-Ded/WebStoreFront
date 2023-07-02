import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {faCartShopping, faRightFromBracket, faRightToBracket, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

import {useEffect, useState} from "react";
import api from "./Api";

function NavScrollExample(props) {

    const [cart, setCart] = useState([])

    function handleLogOut(e){
        e.preventDefault();
        console.log("Prevented")
        localStorage.removeItem("ACCESS_TOKEN");
        window.location.href = "/";
    }

    function searchHandle(e){
        localStorage.setItem("search", e.target.value);
        if(e.target.value === null){
            localStorage.setItem("search", "");
        }
    }

    function handleRedirect(){
        window.location.href = "/";
    }

    useEffect(() => {
        if(localStorage.getItem("ACCESS_TOKEN")){
            api.GetCart().then(res => {
                setCart(res.data)
            })
        }
    }, [])

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">WebShop</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="justify-content-around w-100"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Form className="m-lg-auto w-50" onSubmit={handleRedirect}>
                            <Form.Control onChange={searchHandle}
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                        </Form>
                        <div className="d-flex gap-1">
                            {localStorage.getItem("ACCESS_TOKEN") ?
                                <div className="d-flex gap-1">
                                <Button variant="outline-dark">
                                    <FontAwesomeIcon icon={faRightFromBracket} onClick={handleLogOut}/></Button>
                                <Link style={{textDecoration: "none", color: "black"}} to="/Profile">
                                    <Button variant="outline-dark"><FontAwesomeIcon icon={faUser} /></Button></Link>
                                </div>
                                :
                                <Link style={{textDecoration: "none", color: "black"}} to="/Login">
                                    <Button variant="outline-dark"><FontAwesomeIcon icon={faRightToBracket} /></Button></Link>
                            }
                            {
                                localStorage.getItem("ACCESS_TOKEN") ?
                                    cart.length === 0 ?
                                        <Link style={{textDecoration: "none", color: "black"}} to="/Cart">
                                            <Button variant="outline-dark"><FontAwesomeIcon icon={faCartShopping}/></Button></Link>
                                        :
                                        <Link style={{textDecoration: "none", color: "black"}} to="/Cart">
                                            <Button className="bg-success-subtle" variant="outline-dark"><FontAwesomeIcon icon={faCartShopping}/></Button></Link>
                                    :
                                    <div/>
                            }
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;