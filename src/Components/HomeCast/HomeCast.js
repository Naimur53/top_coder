import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CastCard from '../CastCard/CastCard';
import CustomSlider from '../CustomSlider/CustomSlider';

const HomeCast = () => {
    const [data, setData] = useState({ info: {}, results: [] })
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then(res => {
                setData(res.data)
                setLoading(false)
            })
    }, [])
    return (
        <div className='container px-[30px] 2xl:px-[2 0px]'>

            <div className='flex justify-between items-center mb-[25px]'>
                <h3 className='text-xl'>Meet the cast</h3>
                <Link to='/cast'>
                    <button className='text-md py-[10px] px-[24px] rounded-[8px] border border-main-green'>View All</button>
                </Link>
            </div>
            <div className=''>
                <CustomSlider
                    breakpoints={{
                        // when window width is >= 640px
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 32
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