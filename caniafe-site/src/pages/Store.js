import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom'
import Grid from "@material-ui/core/Grid";
import axios from 'axios'

function Store(props) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        function getProduct() {
            axios.get(`http://localhost:8000/products/`)
            .then(res => {
                setProducts(res.data)
            })
            .catch(console.error)
        }
        getProduct()
    }, [])

    return (
        <div>
           <h2>Caniafe Ordo Forges Store</h2>
           <Grid container className="product-grid">
           {products.map((product) => {
               return(
                   <Grid item xs={8} sm={4} md={3} lg={2} xl={1} className="product-item">
                            <Link to={`product/${product.id}`}>
                            <img src={product.image} alt={product.name} />
                            <p>{product.name}</p>
                            <p>${product.price}</p>
                            </Link>
                        </Grid>
                   )
                })}
            </Grid>
        </div>
    );
}

export default Store;