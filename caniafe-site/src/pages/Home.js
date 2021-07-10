import React from 'react';
import { client } from '../client';
// import { Link } from 'react-router-dom'
import MainCarousel from '../components/MainCarousel'
// import KitOptions from '../components/KitOptions'
// import ReviewCarousel from '../components/ReviewCarousel'


class Home extends React.Component {
    // state = {
    //     articles: []
    // }

    // componentDidMount(){
    //     client.getEntries()
    //     .then((response) => {
    //         console.log(response)
    //         this.setState({
    //             articles:response.items
    //         })
    //     })
    //     .catch(console.error)
    // }
    render() {
        return (
            <div>
                <MainCarousel />
                {/* <KitOptions kits={this.state.articles} />
                <ReviewCarousel reviews={this.state.articles} /> */}
             </div>
         );
    }
    
}

export default Home;

