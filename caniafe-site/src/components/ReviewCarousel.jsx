import React, {useEffect, useState} from 'react';
import axios from 'axios'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'

function ReviewCarousel(props) {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        function getReview() {
            axios.get(`http://localhost:8000/reviews/`)
            .then(res => {
                setReviews(res.data)
            })
            .catch(console.error)
        }
        getReview()
    }, [])

    return (
       <Carousel>
           {
            reviews.map( (item, i) => <Item key ={i} item={item} /> )
           }
       </Carousel>
    );
}

function Item(props) {
    return (
        <Paper>
            <h2>{props.item.client}</h2>
            <p>{props.item.content}</p>
            {/* <p>{props.item.product}</p> */}
        </Paper>
    )
}

export default ReviewCarousel;