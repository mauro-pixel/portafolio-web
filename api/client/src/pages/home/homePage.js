import React from 'react';

import Hero from '../../components/hero/Hero.componenets';
import Carousel from '../../components/carousel/Carousel.components';

function HomePage(props) {

    return(
        <div>
          <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
          <Carousel />
        </div>
    );

}

export default HomePage;