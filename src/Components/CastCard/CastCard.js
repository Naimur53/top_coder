import React from 'react';

const CastCard = ({ data }) => {
    // console.log(data)
    return (
        <div className='cut-card select-none px-16 w-[290px] bg-transparent pt-16'>
            <div>
                <img src={data.image} alt="" />
            </div>
            <div>
                <h4 className='py-[24px] text-base leading-[15px]'>{data.name}</h4>
            </div>
        </div>
    );
};

export default CastCard;