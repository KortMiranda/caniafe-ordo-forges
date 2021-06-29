import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

export default function MainCarousel(props)
{
    var items = [
        {
            img: <img src='https://res.cloudinary.com/dl3d3eyto/image/upload/v1624646145/Caniafe%20Ordo%20Forges%20Website/96798283_3763959957012479_6183776398180614144_n_lsymyc.jpg' alt="Mandalorian in battle"/>
        },
        {
            img: <img src='https://res.cloudinary.com/dl3d3eyto/image/upload/v1624641859/96859082_173268460696591_6785600594519261184_n_dfbizs.jpg' alt="Mandalorian helmet in sand"/>
        },
        {
            img: <img src='https://res.cloudinary.com/dl3d3eyto/image/upload/v1624645888/Caniafe%20Ordo%20Forges%20Website/96795446_2519323721666688_3098384300618285056_n_aealfi.jpg' alt="Mandalorian helmet in sand"/>
        },
    ]

    return (
        <Carousel
            NextIcon={<ArrowForwardIosIcon/>}
            PrevIcon={<ArrowBackIosIcon/>}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
            <div className="carousel">{props.item.img}</div>
        </Paper>
    )
}


