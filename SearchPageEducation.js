import {Col, Container, Form, ListGroup, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import api from "./Api";
import {Item} from "./MainPage";

function SearchPageEducation(){

    const [items, setItems] = useState([]);

    useEffect(() => {
        api.GetByCategory("Education").then(res => {
            setItems(res.data)
        })
    },[])

    return(
        <Container>
            <Row>
                <Col className="col-lg-2 col-sm-2 d-none d-sm-block d-sm-none d-md-block">
                    <ListGroup className="gap-1" variant="flush">

                        <ListGroup.Item style={{fontSize: 20, fontWeight: 500, color: "#3399ff"}}>
                            Зошити</ListGroup.Item>
                        <ListGroup>
                            <ListGroup.Item><Form.Check class="TagsList" label="Крісла"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="Дивани"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="Столи"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="Комп'ютерні столи"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="Геймерські крісла"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="Шафи"></Form.Check></ListGroup.Item>
                        </ListGroup>
                    </ListGroup>

                    <ListGroup className="gap-1" variant="flush">
                        <ListGroup.Item style={{fontSize: 20, fontWeight: 500, color: "#3399ff"}}>
                            Ручки</ListGroup.Item>
                        <ListGroup>
                            <ListGroup.Item><Form.Check class="TagsList" label="Тарілки"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="Бокали"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="Вилки"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="Ложки"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="Кружки"></Form.Check></ListGroup.Item>
                        </ListGroup>
                    </ListGroup>

                    <ListGroup className="gap-1" variant="flush">
                        <ListGroup.Item style={{fontSize: 20, fontWeight: 500, color: "#3399ff"}}>
                            Олівці</ListGroup.Item>
                        <ListGroup>
                            <ListGroup.Item><Form.Check class="TagsList" label="Шеф-Ніж"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="Сокирка"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="Філейний ніж"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="Пила для хлібу"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="Слайсерний ніж"></Form.Check></ListGroup.Item>
                        </ListGroup>
                    </ListGroup>

                    <ListGroup className="gap-1" variant="flush">
                        <ListGroup.Item style={{fontSize: 20, fontWeight: 500, color: "#3399ff"}}>
                            Побутова хімія</ListGroup.Item>
                        <ListGroup>
                            <ListGroup.Item><Form.Check class="TagsList" label="Засоби для прання"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="Засоби для миття посуду"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="Засоби для миття підлоги"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="Захист від комах"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="Засоби для чистки ванни та туалету"></Form.Check></ListGroup.Item>
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

export default SearchPageEducation;