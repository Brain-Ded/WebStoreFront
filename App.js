import "./style.css"
import {Button, Container} from "react-bootstrap";
import NavScrollExample from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from "./MainPage";
import {Routes, Route} from "react-router-dom";
import SearchPageTech from "./SearchPageTech";
import SearchPageHome from "./SearchPageHome";
import SearchPageEducation from "./SearchPageEducation";
import SearchPageElectronics from "./SearchPageElectronics";
import SearchPageBooks from "./SearchPageBooks";
import {useEffect, useState} from "react";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import api from "./Api";
import ItemPage from "./ItemPage";
import ProfilePage from "./ProfilePage";
import CartPage from "./CartPage";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [Filter, setFilter] = useState("");
    const [itemsData, setItemsData] = useState([]);

    useEffect(() => {
        api.GetItems().then(res => {
            setItemsData(res.data);
        })
    }, []);



  return (
    <Container fluid className="min-vh-100 d-flex flex-column p-0 m-0">
        <NavScrollExample isLoggedIn = {isLoggedIn}/>
        <Routes>
            <Route path="/" element={<MainPage itemsData={itemsData}/>}></Route>
            <Route path="/Tech" element={<SearchPageTech/>}></Route>
            <Route path="/Home" element={<SearchPageHome/>}></Route>
            <Route path="/Electronics" element={<SearchPageElectronics/>}></Route>
            <Route path="/Books" element={<SearchPageBooks/>}></Route>
            <Route path="/Education" element={<SearchPageEducation/>}></Route>
            <Route path="/Login" element={<LoginPage setLoggedIn={setIsLoggedIn}/>}></Route>
            <Route path="/Register" element={<RegisterPage setLoggedIn={setIsLoggedIn}/>}></Route>
            <Route path="/Item/:itemID" element={(<ItemPage/>)}></Route>
            <Route path="/Profile" element={<ProfilePage/>}></Route>
            <Route path="/Cart" element={<CartPage/>}></Route>
        </Routes>
    </Container>
  );
}

export default App;
