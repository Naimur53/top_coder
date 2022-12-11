import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
        <div className='container px-[30px] 2xl:px-[90px]'>
            <div className='flex justify-between items-center mb-[25px]'>
                <h3 className='text-xl'>Meet the cast</h3>
                <Link to='/cast'>
                    <button className='text-md py-[10px] px-[24px] rounded-[8px] border border-main-green'>View All</button>
                </Link>
            </div>
            <div className='grid table-column-5'>

            </div>
        </div>
    );
};

export default HomeCast;