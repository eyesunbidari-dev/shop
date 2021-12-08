import axios from "axios";
const BASE_URL = "https://fakestoreapi.com"

export const getProduct = async () => {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data
}

