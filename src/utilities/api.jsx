import Axios from 'axios';

export async function getCat() {
    return Axios.get('https://fakestoreapi.com/products/categories')
        .then(res => res.data)
}

