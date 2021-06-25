import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export default function App() {
return (
    <div className="carousel-container">
	<div class="w-100 mh-25" style={{ display: 'block', }}>
	<Carousel>
		<Carousel.Item interval={5000}>
		<img
			className="d-block w-100"
            src="https://res.cloudinary.com/dl3d3eyto/image/upload/v1624641859/96859082_173268460696591_6785600594519261184_n_dfbizs.jpg"
			alt="Three Mandalorians in the desert"
		/>
		</Carousel.Item>
		<Carousel.Item interval={5000}>
		<img
			className="d-block w-100"
            src="https://res.cloudinary.com/dl3d3eyto/image/upload/v1624645888/Caniafe%20Ordo%20Forges%20Website/96795446_2519323721666688_3098384300618285056_n_aealfi.jpg"
			alt="One mandalorian in the desert"
		/>
		</Carousel.Item>
		<Carousel.Item interval={5000}>
		<img
			className="d-block w-100"
            src="https://res.cloudinary.com/dl3d3eyto/image/upload/v1624646145/Caniafe%20Ordo%20Forges%20Website/96798283_3763959957012479_6183776398180614144_n_lsymyc.jpg"
			alt="One mandalorian in a stand off"
		/>
		</Carousel.Item>
		<Carousel.Item interval={5000}>
		<img
			className="d-block w-100"
            src="https://res.cloudinary.com/dl3d3eyto/image/upload/v1624646470/Caniafe%20Ordo%20Forges%20Website/96381221_253687189165995_5762594158329987072_n_yrwyzk.jpg"
			alt="One mandalorian in the desert"
		/>
		</Carousel.Item>
	</Carousel>
	</div>
    </div>
);
}
