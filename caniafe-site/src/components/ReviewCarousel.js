import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

function ReviewCarousel({reviews}) {
    return (
        <div>
            <Carousel>
            <div className="reviewCarousel">
            {/* {reviews.map((article, index) => <HomeImage article={article} key={index}/>)} */}
            </div>
            </Carousel>
            
        </div>
    );
}

function Item(props)
{
    return (
        <Paper>
            <div className="carousel">{props.item.img}</div>
        </Paper>
    )
}

export default ReviewCarousel;