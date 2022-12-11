import React from 'react';
import TopLogo from '../TopLogo/TopLogo';
// import bubble from './assets/Media asset/Home page/Hero Elements/bubble.png'
const BannerText = () => {
    return (
        <div >

            <div className="pt-[80px] 2xl:pt-[130px] text-extra-large   font-bold  flex   justify-center relative">
                <div  >
                    <div className='relative  uppercase'>
                        {/* upper text */}
                        <div className='relative z-10'>
                            <div className='relative inline-block'>
                                <h1 className='font-bold italic'>
                                    The
                                </h1>
                                <div className='absolute top-[-134px] left-[-164px] '>
                                    <img src={process.env.PUBLIC_URL + '/assets/Media asset/Home page/Hero Elements/bubble.png'} alt="bubble" />
                                </div>
                            </div>
                            <div className="inline-block px-2">
                                <img src={process.env.PUBLIC_URL + '/assets/Media asset/Home page/Hero Elements/portal.png'} alt="" />
                            </div>
                            <div className="inline-block relative ">
                                <h2 className='bg-clip-text text-transparent bg-gradient-to-r rick-text-gradient from-[#53ea7d] to-[#21dcce]'>Rick & </h2>
                                <div className="absolute  top-0 right-0">
                                    <img className='w-full' src={process.env.PUBLIC_URL + '/assets/Media asset/Home page/Hero Elements/pill.png'} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-text-gradient-shadow inset-0 blur-3xl opacity-20">


                        </div>
                    </div>
                    {/* bottom text */}
                    <div className='text-extra-large'>
                        <h2>
                            <span className='inline-block bg-clip-text text-transparent bg-gradient-to-r rick-text-gradient from-[#80f631] to-[#4ee984]  pr-4 '>MORTY</span>
                            <span className='italic' >WIKI</span>
                        </h2>
                    </div>

                    {/* button and text area */}
                    <div className='flex justify-center'>
                        <div className='flex items-center  gap-64 '>
                            <button className='bg-gradient-to-r from-main-green to-main-blue rounded-full py-[17px] px-[25px] text-lg flex justify-center items-center'>
                                <img src={process.env.PUBLIC_URL + '/assets/Media asset/Home page/Hero Elements/play.png'} alt="" />
                                <span className='ml-[12px] font-semibold text-lg'>Watch Now</span>
                            </button>
                            <p className='text-sm w-[364px] font-semibold text-main-blue'>
                                Brilliant but boozy scientist Rick hijacks his fretful
                                teenage grandson, Morty, for wild escapades
                                in other worlds and alternate dimensions.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='absolute -right-28 2xl:-right-24 top-1/4 translate-y-0 '>
                    <img className='w-full' src={process.env.PUBLIC_URL + '/assets/Media asset/Home page/Hero Elements/Gun.png'} alt="" />
                </div>

            </div>
        </div>
    );
};

export default BannerText;