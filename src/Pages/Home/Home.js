import React from 'react';
import HomeBanner from '../../Components/HomeBanner/HomeBanner';
import SimpleCardSlider from '../../Components/SimpleCardSlider/SimpleCardSlider';

const Home = () => {
    return (
        <div className='bg-[url(https://i.ibb.co/Q9DJvRQ/Backgraund.png)] bg-no-repeat bg-cover bg-left md:bg-none overflow-hidden'>
            <HomeBanner></HomeBanner>
            <div className='pt-[32px] md:pt-[110px] overflow-hidden   md:simpleCardSliderWrap bottom-left-blur-effect relative bg-no-repeat '>
                <SimpleCardSlider name='episode'></SimpleCardSlider>
                <SimpleCardSlider className='pt-[32px] md:pt-[60px] 2xl:pt-[108px] pb-[79px]' name='location'></SimpleCardSlider>
            </div>

        </div>
    );
};

export default Home;