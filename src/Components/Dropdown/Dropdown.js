import React, { useState } from 'react';

const Dropdown = () => {
    const [value, setValue] = useState('Location')
    const [open, setOpen] = useState(false)
    const handleChose = value => {
        setValue(value)
        setOpen(false)
    }
    return (
        <div className='flex justify-center rounded-full border border-red-300'>
            <div className="relative inline-block text-left">
                <div>
                    <button onClick={() => setOpen(pre => !pre)} type="button" className="inline-flex w-full justify-center items-center rounded-tl-full rounded-bl-full pr-[15px]  bg-main-blue pl-[12px] md:pl-[32px] py-[7px] md:py-[17px] font-semibold  text-[8px]  md:text-base " id="menu-button" aria-expanded="true" aria-haspopup="true">
                        {value}
                        <div className={open ? 'rotate-180 -mr-1 ml-2 h-5 w-5' : '-mr-1 ml-2 h-5 w-5'}>
                            <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </button>
                </div>

                {
                    open && <div className="absolute right-0 px-[14px] text-center z-10 mt-2 w-40 origin-top-right rounded-md bg-main-blue text-white" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                        <div className="py-1" role="none" >
                            <a onClick={() => handleChose('Characters')} href="#d" className="drop-item" role="menuitem" tabindex="-1" id="menu-item-0">Characters </a>
                            <a onClick={() => handleChose('Location')} href="#d" className="drop-item" role="menuitem" tabindex="-1" id="menu-item-1">Location</a>
                            <a href="#d" onClick={() => handleChose('Episodes')} className="drop-item border-0" role="menuitem" tabindex="-1" id="menu-item-2">Episodes</a>
                        </div>
                    </div>
                }
            </div>
            <div className='w-[100px] md:w-full'>
                <div className='relative h-full'>
                    <input className='h-full pl-[30px] md:pl-[60px] w-full bg-transparent  rounded-tr-full rounded-br-full text-[8px] md:text-base' type="text" placeholder='Search' />
                    <img src="https://i.ibb.co/6vFczY9/Vector.png" alt="" className="absolute top-1/2 left-4 -translate-y-1/2 w-[8px] md:w-[20px]" />
                </div>
            </div>
        </div>
    );
};

export default Dropdown;