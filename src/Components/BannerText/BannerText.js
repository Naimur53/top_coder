import React from 'react';
import TopLogo from '../TopLogo/TopLogo';
// import bubble from './assets/Media asset/Home page/Hero Elements/bubble.png'
const BannerText = () => {
    return (
        <div >

            <div className="pt-[43px] md:pt-[80px] 2xl:pt-[130px] text-semi-xl md:text-extra-large  font-bold  flex   justify-center relative">
                <div  >
                    <div className='relative  uppercase'>
                        {/* upper text */}
                        <div className='relative z-10'>
                            <div className='relative inline-block'>
                                <h1 className='font-bold italic'>
                                    The
                                </h1>
                                <div className='absolute top-[-20px] left-[-20px] md:top-[-134px] md:left-[-164px] '>
                                    <img className='w-[52px] md:w-full' src={process.env.PUBLIC_URL + '/assets/Media asset/Home page/Hero Elements/bubble.png'} alt="bubble" />
                                </div>
                            </div>
                            <div className="inline-block px-2">
                                <img className='w-[68px] md:w-full' src={process.env.PUBLIC_URL + '/assets/Media asset/Home page/Hero Elements/portal.png'} alt="" />
                            </div>
                            <div className="inline-block relative ">
                                <h2 className='bg-clip-text text-transparent bg-gradient-to-r rick-text-gradient from-[#53ea7d] to-[#21dcce]'>Rick & </h2>
                                <div className="absolute hidden md:block  top-0 right-0">
                                    <img className='w-full' src={process.env.PUBLIC_URL + '/assets/Media asset/Home page/Hero Elements/pill.png'} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-text-gradient-shadow inset-0  blur-xl md:blur-3xl rounded-full opacity-20">


                        </div>
                    </div>
                    {/* bottom text */}
                    <div className='text-semi-xl md:text-extra-large'>
                        <h2>
                            <span className='inline-block bg-clip-text text-transparent bg-gradient-to-r rick-text-gradient from-[#80f631] to-[#4ee984]  pr-4 '>MORTY</span>
                            <span className='italic' >WIKI</span>
                        </h2>
                    </div>

                    {/* button and text area */}
                    <div className='flex md:justify-center pt-[18px] md:pt-0'>
                        <div className='flex items-start flex-col-reverse md:flex-row md:items-center gap-[32px] md:gap-64 '>
                            <button className='bg-gradient-to-r from-main-green to-main-blue rounded-full py-[10px] md:py-[17px] px-[16px] md:px-[25px] text-lg flex justify-center items-center'>
                                <img className='w-[12px] md:w-[20px]' src={process.env.PUBLIC_URL + '/assets/Media asset/Home page/Hero Elements/play.png'} alt="" />
                                <span className='ml-[12px] font-semibold text-[12px] md:text-lg'>Watch Now</span>
                            </button>
                            <p className='text-[10px] leading-[12px] md:text-sm w-[260px] md:w-[364px] font-semibold text-main-blue'>
                                Brilliant but boozy scientist Rick hijacks his fretful
                                teenage grandson, Morty, for wild escapades
                                in other worlds and alternate dimensions.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='absolute right-[-40px] top-[80px] md:-right-28 2xl:-right-24 md:top-1/4 md:translate-y-0 '>
                    <img className='w-[119px] md:w-full' src={process.env.PUBLIC_URL + '/assets/Media asset/Home page/Hero Elements/Gun.png'} alt="" />
                </div>

            </div>
        </div>
    );
};

export default BannerText;