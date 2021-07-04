import React from 'react';
import { Link } from 'react-router-dom'

function HomeImage({ article }) {
    console.log(article)
    const {name, image, buttonTitle, linkRoute} = article.fields
    return (
        <div className='kitOption'>
            <div className="kitItem">
                <h3 className='kitTitle'>{name}</h3>
            </div>
            <div className="kitItem">
                {image && <img className='kitImage' src={image.fields.file.url} alt={name} title={name} />}
            </div>
            <div className="kitItem">
                <Link to={linkRoute}><button className='kitButtons'>{buttonTitle}</button></Link>
            </div>
            
        </div>
    );
}

export default HomeImage;