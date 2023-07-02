import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import api from "./Api";
import {Button, Col, Container, Row} from "react-bootstrap";

function ItemPage(){
    const {itemID} = useParams();
    const [itemData, setItemData] = useState([]);
    const [added, setAdded] = useState(false);

    useEffect(() => {
        api.GetItem(itemID).then(res => {
            setItemData(res.data);
        })
    },
        [])

    function handleAddToCart(e){
        e.preventDefault();
        setAdded(true);
        api.AddToCart(itemData)
    }

    if(!itemData){
        return (<p>Loading...</p>);
    }

    return (
        <Container className="bg-white h-100 flex-grow-1">
            <Row className="justify-content-center mt-5">
                <Col className="col-12 col-sm-12 col-md-12 col-lg-9">
                    <Row>
                        <Col className="col-lg-6 col-12">
                            <div className="d-flex flex-column">
                                <h2>{itemData.name}</h2>
                                    <div className="align-self-center" style={{
                                        width: 500,
                                        height: 200,
                                        backgroundImage: `url('${itemData.imageURL}')`,
                                        backgroundSize: 'contain',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat'
                                    }}>
                                    </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="mt-3">
                                <h5 className="text-muted">Item description:</h5>
                                <h4></h4>
                                {itemData.description}
                                <h5 className="text-muted">Item characteristics:</h5>
                                <h4></h4>
                                {itemData.tags}
                            </div>
                            <div className="mt-5 d-flex flex-column">
                                <h4 className="text-muted">Price: <b className="text-black">₴{itemData.discountPrice}</b></h4>
                                {!added ?
                                    <Button color='primary' onClick={handleAddToCart}>Add to cart</Button>:
                                    <Link to='/cart' className="btn btn-success btn-outline">View cart</Link>
                                }
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default ItemPage;