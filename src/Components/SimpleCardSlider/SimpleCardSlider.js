import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CustomSlider from '../CustomSlider/CustomSlider';
import SimpleCard from '../SimpleCard/SimpleCard';

const SimpleCardSlider = ({ name, className }) => {
    const [data, setData] = useState({ info: {}, results: [] })
    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/${name}`)
            .then(res => {
                setData(res.data)
                console.log({ res })
            })
    }, [name])

    return (
        <div className={className}>
            <div className='container px-[30px] 2xl:px-[20px]'>

                <div className='flex justify-between items-center mb-[25px]'>
                    <h3 className='text-xl capitalize'>{name + "s"}</h3>

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
                                slidesPerView: 2.5,
                                spaceBetween: 32
                            },
                            1500: {
                                slidesPerView: 3.5,
                                spaceBetween: 32
                            },
                        }}
                        data={data.results} component={SimpleCard}></CustomSlider>

                </div>
            </div>
        </div>
    );
};

export default SimpleCardSlider;