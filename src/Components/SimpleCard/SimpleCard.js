import React from 'react';

const SimpleCard = ({ data }) => {
    console.log(data)
    return (
        <div className='cut-card w-[360px]'>
            <div className='py-20 px-24'>
                <span className='text-base '>{data.episode || '#' + data.id}</span>
                <h3 className='text-xl '>{data.name.length <= 20 ? data.name : data.name.slice(0, 20)}</h3>
            </div>
        </div>
    );
};

export default SimpleCard;