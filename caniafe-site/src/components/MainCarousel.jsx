import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


export default function MainCarousel(props)
{
    var slideImages = [
        'https://res.cloudinary.com/dl3d3eyto/image/upload/v1624646145/Caniafe%20Ordo%20Forges%20Website/96798283_3763959957012479_6183776398180614144_n_lsymyc.jpg',
        
        'https://res.cloudinary.com/dl3d3eyto/image/upload/v1624641859/96859082_173268460696591_6785600594519261184_n_dfbizs.jpg', 
       
        'https://res.cloudinary.com/dl3d3eyto/image/upload/v1624645888/Caniafe%20Ordo%20Forges%20Website/96795446_2519323721666688_3098384300618285056_n_aealfi.jpg' 
        
    ]
    return (
          <div className="slide-container">
            <Slide>
              <div className="each-slide">
                <div style={{'backgroundImage': `url(${slideImages[0]})`, }}>
                </div>
              </div>
              <div className="each-slide">
                <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                </div>
              </div>
              <div className="each-slide">
                <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                </div>
              </div>
            </Slide>
          </div>
        )
    
}




