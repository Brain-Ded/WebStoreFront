import {Button, Container, Form} from "react-bootstrap";
import api from "./Api";
import {create} from "axios";
import {Link, redirect, useNavigate} from "react-router-dom";

function RegisterPage(props){
    let setLoggedIn = props.setLoggedIn;
    const navigate = useNavigate();

    function RegisterHandle(e){
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const userTypeId = 1;

        api.Register({name, email, password, userTypeId}).then(res => {
            localStorage.setItem("ACCESS_TOKEN", res.data);
            setLoggedIn(true);
            navigate("/")
        }).catch(err => {
            console.log("Error")
        })
    }

    return (
        <div style={{marginBottom: 150}} className="flex-grow-1 d-flex align-items-center justify-content-center">
            <Form onSubmit={RegisterHandle}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Enter your name"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default RegisterPage;