import {Col, Container, Form, ListGroup, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import api from "./Api";
import {Item} from "./MainPage";

function SearchPageElectronics(){

    const [items, setItems] = useState([]);

    useEffect(() => {
        api.GetByCategory("Electronics").then(res => {
            setItems(res.data)
        })
    },[])

    return(
        <Container>
            <Row>
                <Col className="col-lg-2 col-sm-2 d-none d-sm-block d-sm-none d-md-block">
                    <ListGroup className="gap-1" variant="flush">

                        <ListGroup.Item style={{fontSize: 20, fontWeight: 500, color: "#3399ff"}}>
                            Електроінстр...</ListGroup.Item>
                        <ListGroup>
                            <ListGroup.Item><Form.Check class="TagsList" label="Дрелі"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="Болгарки"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="Шуруповерти"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="Перфоратори"></Form.Check></ListGroup.Item>
                        </ListGroup>
                    </ListGroup>

                    <ListGroup className="gap-1" variant="flush">
                        <ListGroup.Item style={{fontSize: 20, fontWeight: 500, color: "#3399ff"}}>
                            Люстри</ListGroup.Item>
                        <ListGroup>
                            <ListGroup.Item><Form.Check class="TagsList" label="Люстри Каскадні"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="Люстри На ланцюгах"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="Люстри-Підвіси"></Form.Check></ListGroup.Item>
                        </ListGroup>
                    </ListGroup>

                    <ListGroup className="gap-1" variant="flush">
                        <ListGroup.Item style={{fontSize: 20, fontWeight: 500, color: "#3399ff"}}>
                            Бензоінстр...</ListGroup.Item>
                        <ListGroup>
                            <ListGroup.Item><Form.Check class="TagsList" label="Бензопили"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="Бензокосарки"></Form.Check></ListGroup.Item>
                        </ListGroup>
                    </ListGroup>
                </Col>
                <Col>
                    <div className="d-flex flex-wrap justify-content-start">
                        <Row className="d-flex flex-wrap gap-3 justify-content-start">
                            {
                                items.map(item => {
                                    return(
                                        <Item item = {item}/>
                                    )
                                })
                            }
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default SearchPageElectronics;