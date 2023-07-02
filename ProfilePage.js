import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import api from "./Api";
import {HttpStatusCode} from "axios";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Item} from "./MainPage";


function ProfilePage(){

    const [user,  setUser] = useState(null);
    const [items, setItems] = useState(null);

    useEffect(() => {
        api.GetUser().then(res => {
            if(res.status === HttpStatusCode.Ok){
                setUser(res.data);
            }else{
                window.location.href = "/";
            }
        })
    },
        [])

    useEffect(() => {
            api.GetReceipts().then(res => {
                if(res.status === HttpStatusCode.Ok){
                    setItems(res.data);
                }else{
                    window.location.href = "/";
                }
            })
        },
        [])

    if(!user){
        return (<p>Loading...</p>);
    }

    return(
        <Container>
            <Row className="row-gap-5">
                <Col className="col-12 col-sm-12 col-md-12 col-lg-9">
                    <h3>Name: {user.name}</h3>
                    <h3>Email: {user.email}</h3>
                </Col>
            </Row>
            <Row>
                <div><h2>Придбані предмети:</h2></div>
                <Col className="d-flex gap-3">
                {
                    items ?
                    items.map(item => {
                        return(
                            <div className="d-flex justify-content-around">
                                <Row>
                                    <Col>
                                        <Item item={item}/>
                                    </Col>
                                </Row>
                            </div>
                        )
                    })
                        :
                        <h2></h2>
                }
                </Col>
            </Row>
        </Container>
    )
}

export default ProfilePage;