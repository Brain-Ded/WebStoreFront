import {Button, Container, Form} from "react-bootstrap";
import api from "./Api";
import {create} from "axios";
import {Link, redirect, useNavigate} from "react-router-dom";

function LoginPage(props){
    let setLoggedIn = props.setLoggedIn;
    const navigate = useNavigate();

    function loginHandle(e){
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        api.LogIn({email, password}).then(res => {
            localStorage.setItem("ACCESS_TOKEN", res.data);
            setLoggedIn(true);
            navigate("/")
        }).catch(err => {
            console.log("Error")
        })
    }

    return (
        <div style={{marginBottom: 150}} className="flex-grow-1 d-flex align-items-center justify-content-center">
            <Form onSubmit={loginHandle}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Log In
                </Button>
                <br/>
                <Link to="/Register">Not have a profile? Register</Link>
            </Form>
        </div>
    )
}

export default LoginPage;