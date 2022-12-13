import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CastCard from '../CastCard/CastCard';
import CustomSlider from '../CustomSlider/CustomSlider';

const HomeCast = () => {
    const [data, setData] = useState({ info: {}, results: [] })
    const [loading, setLoading] = useState(true)
    const [upSwiper, setUpSwiper] = useState()
    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then(res => {
                setData(res.data)
                setLoading(false)
            })
    }, [])
    const getSwiper = (my_swiper) => {
        setUpSwiper(my_swiper)

    }
    console.log(upSwiper)
    return (
        <div className='container px-[30px] 2xl:px-[20px]'>

            <div className='flex justify-between items-center mb-[25px]'>
                <div className='flex '>
                    <h3 className='text-[16px] md:text-xl'>Meet the cast</h3>
                    {/* <div className='ml-2'>
                        <div onClick={() => upSwiper.slidePrev()}>
                            <img src="https://i.ibb.co/bdhLV5h/Frame.png" alt="" />
                        </div>
                    </div> */}
                </div>
                <Link to='/cast'>
                    <button className='text-[8px] md:text-md py-[6px] md:py-[10px] px-[16px] md:px-[24px] rounded-[8px] border border-main-green'>View All</button>
                </Link>
            </div>
            <div className=''>
                <CustomSlider
                    getSwiper={getSwiper}
                    breakpoints={{
                        // when window width is >= 640px
                        320: {
                            slidesPerView: 2.5,
                            spaceBetween: 14
                        },
                        // when window width is >= 768px
                        600: {
                            slidesPerView: 2,
                            spaceBetween: 32
                        },
                        900: {
                            slidesPerView: 3.5,
                            spaceBetween: 32
                        },
                        1500: {
                            slidesPerView: 4.5,
                            spaceBetween: 32
                        },
                    }}
                    data={data?.results} component={CastCard}></CustomSlider>

            </div>
        </div>
    );
};

export default HomeCast;