import React, { useState, useEffect } from 'react';

import 'swiper/css';
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
const CustomSlider = props => {
    const data = props.data;
    const Component = props.component;
    const [my_swiper, set_my_swiper] = useState({});
    const [my_swiper_status, set_my_swiper_status] = useState({
        isBeginning: true,
        isEnd: false
    });
    useEffect(() => {
        if (props?.getSwiper) {
            props.getSwiper(my_swiper)
        }

    }, [props, my_swiper])
    return (
        <>
            <div className='relative'>
                <div >
                    <Swiper
                        breakpoints={props.breakpoints}
                        slidesPerView={4}
                        modules={[Navigation]}
                        grabCursor={true}
                        onSlideChange={(ev) => {
                            set_my_swiper(ev)
                            set_my_swiper_status({
                                isBeginning: ev.isBeginning,
                                isEnd: ev.isEnd,
                            })
                        }}
                        onInit={(ev) => {
                            set_my_swiper(ev)
                        }}
                    >
                        {
                            data?.map((single, i) => <SwiperSlide key={i}><Component data={single} /></SwiperSlide>)
                        }
                    </Swiper>
                </div>
                <div className='absolute top-[50%] -translate-y-1/2 pointer-events-none w-full  z-20 flex justify-between'>

                    {
                        my_swiper_status.isBeginning ? <div></div> : <div
                            className='pointer-events-auto slider-button' onClick={() => my_swiper.slidePrev()}>
                            <img className='rotate-180 select-none' src={process.env.PUBLIC_URL + "/assets/Media asset/Cast Details/Icons/PNG/arrow.png"} alt="arrow" />
                        </div>
                    }
                    {
                        my_swiper_status.isEnd ? <div></div> : <div
                            className='pointer-events-auto slider-button' onClick={() => my_swiper.slideNext()}

                        >
                            <img className='select-none' src={process.env.PUBLIC_URL + "/assets/Media asset/Cast Details/Icons/PNG/arrow.png"} alt="arrow" />
                            <div>

                            </div>

                        </div>
                    }

                </div>
            </div>
        </>
    );
};

export default CustomSlider;