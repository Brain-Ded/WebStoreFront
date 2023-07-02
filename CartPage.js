import {Button, Col, Container, Row} from "react-bootstrap";
import {Item} from "./MainPage";
import {useEffect, useState} from "react";
import api from "./Api";

function CartPage(){

    const [items, setItems] = useState([]);

    useEffect(() => {
        api.GetCart().then(res => {
            setItems(res.data)
        })
    }, [])

    function handleBuy(e){
        e.preventDefault();
        api.PostReceipt().then(() => {
            setItems([]);
            window.location.href = "/";
        });
    }

    function handleClear(e){
        e.preventDefault();
        api.ClearCart().then(() => {
            setItems([]);
        });
    }

    return(
        <Container>
            <Row>
                <div><h2>Корзина:</h2></div>
                <Col className="d-flex gap-3">
                    {
                        items ?
                        items.map(item => {
                            return(
                                <Item item={item}/>
                            )
                        })
                            :
                            <h2></h2>
                    }
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-end"><Button onClick={handleBuy}>Buy</Button></Col>
                <Col><Button onClick={handleClear}>Clear cart</Button></Col>
            </Row>
        </Container>
    )
}

export default CartPage;