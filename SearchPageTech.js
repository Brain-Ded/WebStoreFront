import {Col, Container, Form, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBook, faHammer, faHouse, faLaptop, faLightbulb, faPencil} from "@fortawesome/free-solid-svg-icons";

import "./style.css"
import {useEffect, useState} from "react";
import api from "./Api";
import {Item} from "./MainPage";

function SearchPageTech(){

    const [items, setItems] = useState([]);

    useEffect(() => {
        api.GetByCategory("Tech").then(res => {
            setItems(res.data)
        })
    },[])
    return(
        <Container className="">
            <Row>
                <Col className="col-lg-2 col-sm-2 d-none d-sm-block d-sm-none d-md-block">
                    <ListGroup className="gap-1" variant="flush">
                        <ListGroup.Item style={{fontSize: 20, fontWeight: 500, color: "#3399ff"}}>
                            Бренд</ListGroup.Item>
                        <ListGroup>
                            <ListGroup.Item><Form.Check class="TagsList" label="HP"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="Gigabyte"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="MSI"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="Acer"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="Asus"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="Lenovo"></Form.Check></ListGroup.Item>
                        </ListGroup>
                    </ListGroup>

                    <ListGroup className="gap-1" variant="flush">
                        <ListGroup.Item style={{fontSize: 20, fontWeight: 500, color: "#3399ff"}}>
                            Діагональ</ListGroup.Item>
                        <ListGroup>
                            <ListGroup.Item><Form.Check class="TagsList" label="13''"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="14''"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="16''"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="17''"></Form.Check></ListGroup.Item>
                        </ListGroup>
                    </ListGroup>

                    <ListGroup className="gap-1" variant="flush">
                        <ListGroup.Item style={{fontSize: 20, fontWeight: 500, color: "#3399ff"}}>
                            Відеокарта</ListGroup.Item>
                        <ListGroup>
                            <ListGroup.Item><Form.Check class="TagsList" label="GTX1050"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="GTX1050TI"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="GTX1060"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="GTX1070"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="GTX1080"></Form.Check></ListGroup.Item>
                        </ListGroup>
                    </ListGroup>

                    <ListGroup className="gap-1" variant="flush">
                        <ListGroup.Item style={{fontSize: 20, fontWeight: 500, color: "#3399ff"}}>
                            Процессор</ListGroup.Item>
                        <ListGroup>
                            <ListGroup.Item><Form.Check class="TagsList" label="Intel Core I3"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="Intel Core I5"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="Intel Core I7"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="Intel Core I9"></Form.Check></ListGroup.Item>
                        </ListGroup>
                    </ListGroup>

                    <ListGroup className="gap-1" variant="flush">
                        <ListGroup.Item style={{fontSize: 20, fontWeight: 500, color: "#3399ff"}}>
                            Обсяг диску</ListGroup.Item>
                        <ListGroup>
                            <ListGroup.Item><Form.Check class="TagsList" label="128 ГБ"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="256 ГБ"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="512 ГБ"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="1024 ГБ"></Form.Check></ListGroup.Item>
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

export default SearchPageTech;