import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailsInfo from '../../Components/DetailsInfo/DetailsInfo';
import TopLogo from '../../Components/TopLogo/TopLogo';

const Details = () => {
    const { id } = useParams()
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res => {
                setData(res.data)
                setLoading(false)
            })
    }, [id])
    console.log(data)
    return (
        <div className='details-wrap bottom-left-blur-effect bottom-0 translate-y-0 overflow-hidden   bg-no-repeat'>
            <div className='container px-[20px] md:px-[0px] pb-[31px] md:pb-[86px]'>
                <TopLogo></TopLogo>
                <div className='pt-[32px] md:pt-[146px] relative '>
                    <div>
                        <div className='hidden md:flex -translate-x-1/2 left-0   absolute  top-1/2 text-[101px]  translate-y-1/2 -rotate-90 font-extrabold text-xxl   justify-center '>
                            <h2 className='rotated-text whitespace-nowrap' >{data.name}</h2>
                        </div>
                    </div>

                    <div className="md:grid grid grid-cols-1 md:grid-cols-2 gap-[16px] md:gap-[155px]">
                        <div className='flex flex-col justify-center items-center relative '>
                            <h2 className='text-main-blue text-center text-[24px] md:text-mid-xl pb-[20px] md:pb-[32px] font-semibold'>{data.name}</h2>
                            <div className='w-full'>
                                <div className='relative  w-full'>
                                    <div className=' flex justify-center items-center relative'>
                                        <div className='p-[30px] md:p-[50px] details-box'>
                                            <img className='w-[180px] md:w-full rounded-[8px]' src={data.image} alt={data.name} />
                                        </div>
                                    </div>
                                    <hr className="hidden md:block ml-[175px] top-1/2 -translate-y-1/2 absolute right-0 h-[320px] w-[1px] border-l border-main-green " />
                                </div>

                            </div>

                        </div>
                        <div>
                            <DetailsInfo {...data}></DetailsInfo>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Details;