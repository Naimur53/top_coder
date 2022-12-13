import axios from 'axios';
import React, { useEffect, useState } from 'react';

const DetailsInfo = ({ status, species, gender, origin, location, episode }) => {
    const [episodes, setEpisodes] = useState([])

    useEffect(() => {
        if (episode) {
            const ids = episode.map(single => single.split('episode/')[1]).slice(0, 5)
            axios.get(`https://rickandmortyapi.com/api/episode/${ids.join(',')}`)
                .then(res => {
                    if (ids.length === 1) {
                        setEpisodes([res.data])

                    } else {

                        setEpisodes(res.data)
                    }
                })
        }
    }, [episode])

    const baseURl = '/assets/Media asset/Cast Details/Icons/PNG/'
    const info = [
        { name: 'Status', value: status, img: process.env.PUBLIC_URL + baseURl + 'Status.png' },
        { name: 'Species', value: species, img: process.env.PUBLIC_URL + baseURl + 'Species.png' },
        { name: 'Gender', value: gender, img: process.env.PUBLIC_URL + baseURl + 'Gender.png' },
        { name: 'Origin', value: origin?.name, img: process.env.PUBLIC_URL + baseURl + 'Origin.png' },
        { name: 'Last Known Location', value: location?.name, img: process.env.PUBLIC_URL + baseURl + 'location.png' },
    ]
    console.log(episodes)
    return (
        <div >
            <div className="grid grid-cols-3 gap-[17px] md:gap-[40px]">
                {
                    info.slice(0, 3).map(single => <div key={single.name} className='details-box'>
                        <div>
                            <img className='w-[17px] md:w-[40px]' src={single.img} alt="" />
                        </div>
                        <div className='mt-[9px] md:mt-20'>
                            <span className='text-[8px] md:text-lg font-normal'>{single.name}</span>
                            <h2 className='text-base 2xl:text-semi-xl font-semibold'>{single.value}</h2>
                        </div>
                    </div>)
                }
                {
                    info.slice(3, 5).map(single => <div key={single.name} className='details-box col-span-3 flex justify-between'>
                        <div>
                            <div>
                                <img className='w-[17px] md:w-[40px]' src={single.img} alt="" />
                            </div>
                            <div className='mt-[9px] md:mt-20'>
                                <span className='text-[8px] md:text-lg font-normal'>{single.name}</span>
                                <h2 className='2xl:text-semi-xl font-semibold'>{single.value}</h2>
                            </div>
                        </div>
                        <div className='h-full flex items-end'>

                            <img className='w-[10px] md:w-[32px]' src={baseURl + 'Redirect.png'} alt="redirect" />
                        </div>
                    </div>)
                }
                <div className='details-box col-span-3 flex justify-between'>
                    <div>
                        <div>
                            <img className='w-[17px] md:w-[40px] ' src={baseURl + 'Episode.png'} alt="" />
                        </div>
                        <div className='mt-[9px] md:mt-20'>
                            <span className='text-[8px] md:text-lg font-normal'>Episodes(s)</span>
                            <ul className='list-disc pl-[32px] mt-[16px] md:mt-[36px]'>
                                {
                                    episodes?.map(single => <li className='text-base 2xl:text-semi-xl font-semibold' key={single?.id}>{single?.name}</li>)
                                }
                            </ul>
                        </div>
                    </div>

                </div>


            </div>

        </div>
    );
};

export default DetailsInfo;