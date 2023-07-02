import axios from "axios";

class Api {
    constructor() {
        this.api_token = null;
        this.client = null;
        this.api_url = "https://localhost:7154/api";
    }

    init = () => {
        this.api_token = localStorage.getItem("ACCESS_TOKEN");

        let headers = {
            Accept: "application/json",
        };

        if (this.api_token) {
            headers.Authorization = `Bearer ${this.api_token}`;
        }

        this.client = axios.create({
            baseURL: this.api_url,
            timeout: 31000,
            headers: headers,
        });

        return this.client;
    };

    LogIn = (params) => {
        return this.init().post("/Auth/LogIn", params);
    };

    Register = (params) => {
        return this.init().post("/Auth/Register", params);
    }

    GetItems = () => {
        return this.init().get("/Item");
    }

    GetItem = (id) => {
        return this.init().get(`/Item/${id}`);
    }

    GetByCategory = (category) => {
        return this.init().get(`/Item/Get_By_Category?categoryName=${category}`)
    }

    GetByName = (search) => {
        return this.init().get(`/Item/Get_By_Name?search=${search}`)
    }
    GetUser = () => {
        return this.init().post(`/Auth/VerifyToken?token=${this.api_token}`);
    }

    GetReceipts = () => {
        return this.init().get(`/Receipt/Get_users_items?token=${this.api_token}`);
    }

    AddToCart = (item) => {
        return this.init().post(`/Cart/Add_To_Cart?itemName=${item.name}&token=${this.api_token}`);
    }

    GetCart = () => {
        return this.init().get(`/Cart/GetCart?token=${this.api_token}`);
    }

    ClearCart = () => {
        return this.init().get(`/Cart/ClearCart?token=${this.api_token}`);
    }

    PostReceipt = () => {
        return this.init().post(`/Receipt/Post_Receipt?token=${this.api_token}`);
    }
}

const api = new Api();

export default api;