import {Col, Container, Form, ListGroup, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import api from "./Api";
import {Item} from "./MainPage";

function SearchPageBooks(){

    const [items, setItems] = useState([]);

    useEffect(() => {
        api.GetByCategory("Books").then(res => {
            setItems(res.data)
        })
    },[])

    return(
        <Container>
            <Row>
                <Col className="col-lg-2 col-sm-2 d-none d-sm-block d-sm-none d-md-block">
                    <ListGroup className="gap-1" variant="flush">

                        <ListGroup.Item style={{fontSize: 20, fontWeight: 500, color: "#3399ff"}}>
                            Автор</ListGroup.Item>
                        <ListGroup>
                            <ListGroup.Item><Form.Check class="TagsList" label="Юрій Андрухович"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="Іван Андрусяк"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="Данте Аліг'єрі"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="Франц Кафка"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="Марк Твен"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="Джордж Байрон"></Form.Check></ListGroup.Item>
                        </ListGroup>
                    </ListGroup>

                    <ListGroup className="gap-1" variant="flush">
                        <ListGroup.Item style={{fontSize: 20, fontWeight: 500, color: "#3399ff"}}>
                            Жанр</ListGroup.Item>
                        <ListGroup>
                            <ListGroup.Item><Form.Check class="TagsList" label="Комедія"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="Фантастика"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="Драма"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="Фентезі"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="Детектив"></Form.Check></ListGroup.Item>
                        </ListGroup>
                    </ListGroup>

                    <ListGroup className="gap-1" variant="flush">
                        <ListGroup.Item style={{fontSize: 20, fontWeight: 500, color: "#3399ff"}}>
                            Обсяг</ListGroup.Item>
                        <ListGroup>
                            <ListGroup.Item><Form.Check class="TagsList" label="20-100 сторінок"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="100-200 сторінок"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="200-300 сторінок"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="300-400 сторінок"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label=">500 сторінок"></Form.Check></ListGroup.Item>
                        </ListGroup>
                    </ListGroup>

                    <ListGroup className="gap-1" variant="flush">
                        <ListGroup.Item style={{fontSize: 20, fontWeight: 500, color: "#3399ff"}}>
                            Тип обгортки</ListGroup.Item>
                        <ListGroup>
                            <ListGroup.Item><Form.Check class="TagsList" label="Тверда"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="М'яка"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="Тканина"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="Шкіра"></Form.Check></ListGroup.Item>
                        </ListGroup>
                    </ListGroup>

                    <ListGroup className="gap-1" variant="flush">
                        <ListGroup.Item style={{fontSize: 20, fontWeight: 500, color: "#3399ff"}}>
                            Мова</ListGroup.Item>
                        <ListGroup>
                            <ListGroup.Item><Form.Check class="TagsList" label="Українська"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="Англійська"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="Німецька"></Form.Check></ListGroup.Item>
                            <ListGroup.Item><Form.Check class="TagsList" label="Японська"></Form.Check></ListGroup.Item>
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

export default SearchPageBooks;