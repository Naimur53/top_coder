import React from 'react';
import BannerText from '../BannerText/BannerText';
import HomeCast from '../HomeCast/HomeCast';
import TopLogo from '../TopLogo/TopLogo';

const HomeBanner = () => {
    return (
        <div className="md:home-banner ">
            <TopLogo></TopLogo>


            <div className="custom-container pb-[85px]">
                <BannerText></BannerText>
            </div>
            <div>
                <HomeCast></HomeCast>
            </div>

            {/* top corner blur */}
            <div className="top-left-blur-effect"></div>
        </div>
    );
};

export default HomeBanner;