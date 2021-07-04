import React from 'react';
import HomeImage from './KitOption'

const HomeImages = ({kits}) => {
    return (
        <div className="kitOptions">
            {kits.map((article, index) => <HomeImage article={article} key={index}/>)}
        </div>
    )
}



export default HomeImages;