import React from 'react';
import { Link } from 'react-router-dom';

const TopLogo = () => {
    return (
        <div className='flex justify-center items-center pt-[51px] md:pt-58'>
            <Link to='/'><img className='h-[48px]' src="/assets/Media asset/Logo.png" alt="" /></Link>
        </div>
    );
};

export default TopLogo;