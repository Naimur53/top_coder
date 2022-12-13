import React from 'react';
import { NavLink } from 'react-router-dom';

const CastCard = ({ data }) => {
    // console.log(data)
    return (
        <NavLink to={'/details/' + data.id} className='cut-card block select-none px-[8px] md:px-16  bg-transparent pt-[8px] md:pt-16'>
            <div>
                <img className='rounded-[2px] md:rounded-[3px]' src={data.image} alt="" />
            </div>
            <div>
                <h4 className='py-[12px] md:py-[24px] text-[10px] md:text-base leading-[15px]'>{data.name}</h4>
            </div>
        </NavLink>
    );
};

export default CastCard;