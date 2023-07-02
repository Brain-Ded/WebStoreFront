import {Button, Row, Col, ListGroup, Image} from "react-bootstrap";
import {Container} from "react-bootstrap";
import "./style.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLaptop, faBook, faLightbulb, faPencil, faHammer, faHouse} from "@fortawesome/free-solid-svg-icons";
import {Link, useLocation} from "react-router-dom";
import {useEffect} from "react";

export function Item({item}){
    useEffect(() => {
        localStorage.removeItem("search");
    })

    return(
        <Link className="d-flex flex-column shadow-sm gap-0 text-decoration-none text-black" to={`/Item/${item.id}`} style={{width: 150, height: 270}}>
            <div className="d-flex" style={{height: 150}} >
                <Image className="align-self-center w-100" src={item.imageURL}/>
            </div>
            <div>
                <p>{item.name}</p>
                <p style={{textDecoration: "line-through"}}>{item.actualPrice}₴</p>
                <p  style={{fontWeight: 500}}>{item.discountPrice}₴</p>
            </div>
        </Link>
    )
}

function MainPage({itemsData}) {

    return(
        <Container>
            <Row>
                <Col className="col-lg-3 col-sm-3 d-none d-sm-block d-sm-none d-md-block">
                    <ListGroup className="gap-1" variant="flush">
                        <ListGroup.Item style={{fontSize: 14}}><Link style={{textDecoration: "none", color: "black"}} to="/Tech">
                            <FontAwesomeIcon className="m-0" icon={faLaptop}/> Laptops, computers and tech</Link></ListGroup.Item>

                        <ListGroup.Item style={{fontSize: 14}}><Link style={{textDecoration: "none", color: "black"}} to="/Home">
                            <FontAwesomeIcon icon={faHouse}/> Home</Link></ListGroup.Item>
                        <ListGroup.Item style={{fontSize: 14}}><Link style={{textDecoration: "none", color: "black"}} to="/Electronics">
                            <FontAwesomeIcon icon={faLightbulb}/> Electronics</Link></ListGroup.Item>
                        <ListGroup.Item style={{fontSize: 14}}><Link style={{textDecoration: "none", color: "black"}} to="/Books">
                            <FontAwesomeIcon icon={faBook}/> Books</Link></ListGroup.Item>
                        <ListGroup.Item style={{fontSize: 14}}><Link style={{textDecoration: "none", color: "black"}} to="/Education">
                            <FontAwesomeIcon icon={faPencil}/> Education</Link></ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col>
                    <div style={{height: 200}} className="d-flex flex-wrap justify-content-start">
                        <Row className="gap-3">
                            {itemsData.map(item => {
                                if(localStorage.getItem("search") !== null) {
                                    if (!item.name.toLowerCase().includes(localStorage.getItem("search").toLowerCase())) {
                                        return null;
                                    }
                                }
                                return (
                                        <Item item = {item}/>
                                )
                                })}
                        </Row>
                    </div>
                    <div style={{height: 50}}></div>
                    <div style={{height: 200}} className="d-flex flex-wrap gap-3 justify-content-start">
                        <Row className="gap-3">
                        </Row>
                    </div>
                    <div style={{height: 50}}></div>
                    <div className="d-flex flex-wrap gap-3 justify-content-start">
                        <Row className="gap-3">
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default MainPage;