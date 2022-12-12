import React from 'react';
import HomeBanner from '../../Components/HomeBanner/HomeBanner';
import SimpleCardSlider from '../../Components/SimpleCardSlider/SimpleCardSlider';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <div className='pt-[110px] overflow-hidden  simpleCardSliderWrap bottom-left-blur-effect relative bg-no-repeat '>
                <SimpleCardSlider name='episode'></SimpleCardSlider>
                <SimpleCardSlider className='pt-[60px] 2xl:pt-[108px] pb-[79px]' name='location'></SimpleCardSlider>
            </div>

        </div>
    );
};

export default Home;