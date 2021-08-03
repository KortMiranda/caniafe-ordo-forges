import React from 'react';
import { Link } from 'react-router-dom'

function Services(props) {
    return (
        <div className="services">
            <h2>Caniafe's Services</h2>
            <div className="services-content-top">
                <div className="top-item">
                <h3>Custom Design and Paint</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <h3>Hand Crafted</h3>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <h3>DIY Kits</h3>
                <p> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="top-item">
                <img src="https://res.cloudinary.com/dl3d3eyto/image/upload/v1624646432/Caniafe%20Ordo%20Forges%20Website/94787762_525385041475541_226208643215785984_n_xjepsh.jpg" alt="mandalorian helmet"/>
                </div>
            </div>
            <div className="services-content-review">
                <h3>What clients are saying about their custom armor</h3>
                <p className="review-caption">I cannot describe how awesome the armor came out. It’s exactly what I wanted and I was able to communicate with Caniafe directly.</p>
                <p className="review-client">-David</p>   
            </div>
            <div className="services-content-bottom">
                <div className="grid-item">
                    <h3>Your Very Own Masterpiece</h3>
                    <p>Blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada. Ultricies lacus sed turpis tincidunt id. Pellentesque elit eget gravida cum sociis natoque penatibus et. Tincidunt nunc pulvinar sapien et ligula. Elit scelerisque mauris pellentesque pulvinar pellentesque.</p>
                </div>
                <div className="grid-item">
                    <h3>Weathered and Battle Worn</h3>
                    <p>Arcu bibendum at varius vel. Massa enim nec dui nunc mattis. Sit amet tellus cras adipiscing enim eu. Felis eget velit aliquet sagittis. Convallis tellus id interdum velit laoreet id donec ultrices. Felis donec et odio pellentesque diam.Elementum nisi quis eleifend quam adipiscing.</p>
                </div>
                <div className="grid-item">
                    <h3>Personalization</h3>
                    <p>Sagittis id consectetur purus ut faucibus pulvinar. Quis imperdiet massa tincidunt nunc pulvinar sapien. Morbi tempus iaculis urna id volutpat lacus laoreet. Faucibus nisl tincidunt eget nullam non nisi est sit amet.Eu facilisis sed odio morbi quis commodo odio. Viverra justo nec ultrices dui. </p>
                </div>
                <div className="grid-item">
                    <h3>Attention To Detail</h3>
                    <p>Est placerat in egestas erat imperdiet sed. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Ac feugiat sed lectus vestibulum mattis. Tincidunt augue interdum velit euismod in pellentesque massa. Et malesuada fames ac turpis egestas.</p>
                </div>
            </div>
            <h2>Let's begin your own forge today!</h2>
            <Link to="/store"><button>Shop Kits</button></Link>
        </div>
    );
}

export default Services;