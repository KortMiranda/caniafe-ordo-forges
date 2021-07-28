import React, {useEffect, useState} from 'react';
import axios from 'axios'

function Store(props) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        function getProduct() {
            axios.get(`http://localhost:8000/products/`)
            .then(res => {
                setProducts(res.data)
                console.log(res.data)
            })
            .catch(console.error)
        }
        getProduct()
    }, [])
    return (
        <div>
            Store page
        </div>
    );
}

export default Store;