import React from 'react';

const SimpleCard = ({ data }) => {
    console.log(data)
    return (
        <div className='cut-card w-[150px] md:w-[360px]'>
            <div className='py-[8px] md:py-20 px-[10px] md:px-24'>
                <span className='text-[8px] md:text-base '>{data.episode || '#' + data.id}</span>
                <h3 className='text-[12px] md:text-xl '>{data.name.length <= 18 ? data.name : data.name.slice(0, 18)}</h3>
            </div>
        </div>
    );
};

export default SimpleCard;