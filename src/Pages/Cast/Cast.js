import { data } from 'autoprefixer';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CastCard from '../../Components/CastCard/CastCard';
import Dropdown from '../../Components/Dropdown/Dropdown';
import TopLogo from '../../Components/TopLogo/TopLogo';

const Cast = () => {
    const [data, setData] = useState({ info: {}, results: [] })
    const [loading, setLoading] = useState(true)
    const [url, setUrl] = useState('https://rickandmortyapi.com/api/character')
    useEffect(() => {
        setLoading(true)
        axios.get(url)
            .then(res => {
                setData(res.data)
                setLoading(false)
            })
    }, [url])

    return (
        <div className='cast-wrap bg-no-repeat relative overflow-hidden bottom-left-blur-effect'>
            <div className=' container px-[30px] 2xl:px-[0px] relative z-10'>
                <TopLogo></TopLogo>
                <div className='flex justify-between items-center pt-[64px] md:pt-[110px]'>
                    <div>
                        <h3 className='font-semibold text-base md:text-xxl text-main-blue'>The Cast</h3>
                    </div>
                    <div>
                        <Dropdown></Dropdown>
                    </div>

                </div>
                {
                    loading ? <div className='flex justify-center items-center'>
                        <h2>Loading...</h2>
                    </div> :
                        <div className="pt-[40px] grid grid-cols-2 gap-[36px]  md:grid-cols-4 2xl:grid-cols-5 md:gap-4 2xl:gap-[67px]">
                            {
                                data?.results?.slice(0, window.innerWidth >= 500 ? 15 : 6).map(single => <CastCard data={single} key={single.id}>

                                </CastCard>)
                            }
                        </div>
                }
                <div className="flex justify-center items-center pt-[64px] pb-[42px]">
                    <div className='font-medium flex  items-center gap-[10px] md:gap-[22px] text-[10px] md:text-lg'>
                        <span>Page</span>
                        <div className='flex gap-[18px] items-center'>
                            <div className="w-[13px] md:w-full ">
                                {
                                    data.info?.prev ? <img className='cursor-pointer rotate-180' onClick={() => setUrl(data.info?.prev)} src="https://i.ibb.co/fFLw8h8/rounded-Arrow.png" alt="" /> : <img src="https://i.ibb.co/cXfDSqx/rounded-Arrow-Gray.png" alt="" />
                                }

                            </div>
                            <div className="px-[22px] md:px-[40px] py-[5px] md:py-[10px] rounded-full gradient-border text-main-blue ">
                                <span>{url.split('=')[1] ?? 1}</span>
                            </div>
                            <div className="w-[13px] md:w-full ">
                                {
                                    data.info?.next ? <img onClick={() => setUrl(data.info?.next)} className='cursor-pointer' src="https://i.ibb.co/fFLw8h8/rounded-Arrow.png" alt="" /> : <img
                                        className='rotate-180' src="https://i.ibb.co/cXfDSqx/rounded-Arrow-Gray.png" alt="" />
                                }

                            </div>
                        </div>
                        <span>of {data.info?.pages}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cast;