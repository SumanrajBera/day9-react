import axios from "axios"

export async function getData() {
    let data = await axios.get("https://fakestoreapi.com/products")
    return data.data
}