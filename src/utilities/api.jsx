import Axios from 'axios';

export async function getCat() {
    return Axios.get('https://fakestoreapi.com/products/categories')
        .then(res => res.data)
}
export async function getAllProduct() {
    return Axios.get('https://fakestoreapi.com/products')
        .then(res => res.data)
}
