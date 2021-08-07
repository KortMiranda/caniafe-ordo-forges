import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom'
import axios from "axios"


function ProductDetails(props) {
    const [loading, setLoading] = useState(false)
    const [product, setProduct] = useState([])
    const { id } = useParams()

    useEffect(() => {
        setLoading(true)
        function getProduct() {
            axios.get(`http://localhost:8000/products/${id}`)
            .then(res => {
                setProduct(res.data)
            })
            .catch(console.error)
        }
        setLoading(false)
        getProduct()
    },[id])
    return (
        <div>
        <div className="product-page">
            <Link to="/store"><button>Back</button></Link>
            <div className="product-container">
                <div className="product-image">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="product-details">
                    <h3>{product.name}</h3>
                    <p className="product-price">${product.price}</p>
                    <h5>Description</h5>
                    <p>{product.description}</p>
                    <form>
                        <h5>Add your personalization</h5>
                        <textarea name="personalization" className="personlization-textarea"></textarea>
                        <br />
                        <br />
                        <button type="submit">Add to cart</button>
                    </form>
                </div>
            </div>
        </div>
        <div className="review-container">
        <h3>Add a Review</h3>
        <form>
            <div className="review-form">
            <div className="review-form-items">
            <input type="text" name="name" placeholder="Name*" required/>
            </div>
            <div className="review-form-items">
            <input type="text" name="email" placeholder="Email*" required/>
            </div>
            <br />
            <br />
            <textarea name="review" placeholder="Your Review*" className="review-textarea" required />
            <br />
            <br />
            <button type="submit">Submit</button>
            </div>
        </form>
    </div>
    </div>
    );
}

export default ProductDetails;