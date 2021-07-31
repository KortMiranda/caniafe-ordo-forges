import React from 'react';
import { Link } from 'react-router-dom'
import MainCarousel from '../components/MainCarousel'
import ReviewCarousel from '../components/ReviewCarousel';



class Home extends React.Component {
 
    render() {
        return (
            <div>
                <MainCarousel />
                <div className="kit-options">
                    <div className="kit-option">
                        <div className="kit-item">
                            <h3 className="kit-title">Molded and Painted Kits</h3>
                        </div>
                        <div className="kit-item">
                            <img src="https://res.cloudinary.com/dl3d3eyto/image/upload/v1624653928/Caniafe%20Ordo%20Forges%20Website/il_1588xN.3046129678_syqu_lzshfn.jpg" alt="Custom Mandalorian Armor" />
                        </div>
                        <div className="kit-item">
                            <Link to="/store/painted-kits"><button>Explore Painted Armor</button></Link>
                        </div>
                    </div>
                    <div className="kit-option">
                        <div className="kit-item">
                            <h3 className="kit-title">DIY Mandalorian Armor</h3>
                        </div>
                        <div className="kit-item">
                            <img src="https://res.cloudinary.com/dl3d3eyto/image/upload/v1624654628/Caniafe%20Ordo%20Forges%20Website/il_1588xN.3090738657_7do5_xyjabo.jpg" alt="Custom Mandalorian Armor" />
                        </div>
                        <div className="kit-item">
                            <Link to="/store/painted-kits"><button>Explore DIY Kits</button></Link>
                        </div>
                    </div>  
                </div>
                <ReviewCarousel />
            </div>
         );
    }
    
}

export default Home;

