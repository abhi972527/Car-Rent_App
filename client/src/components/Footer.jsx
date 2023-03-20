import React from 'react';

import { footerData } from '../constants/index';

const Footer = () => {
    return (
        <div className='border bg-white p-[60px] pt-[80px] mt-auto'>
            <div className='flex justify-between'>
                <div className='flex flex-col gap-4'>
                    <div className='text-[#3563E9] text-[24px] md:text-[32px] font-bold'>
                        MORENT
                    </div>
                    <div className='text-[16px] text-[#13131399] font-medium'>
                        Our vision is to provide convenience <br /> and help increase your sales business.
                    </div>
                </div>
                <div className='flex gap-[60px]'>
                    {footerData.map((item, i) => (
                        <div key={i} className='flex flex-col gap-6'>
                            <div className='text-[20px] text-[#424B5C] font-semibold'>
                                {item.heading}
                            </div>
                            {item.content.map((data, i) => (
                                <div key={i} className='text-[16px] text-[#13131399] font-medium flex flex-col gap-5'>
                                    {data}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className='hidden md:block h-[1px] bg-[#C3D4E9] w-full mt-[60px] mb-12 ' />
            <div className='flex justify-between text-[16px] text-[#424B5C]  font-semibold'>
                <div>
                    ©2022 MORENT. All rights reserved
                </div>
                <div className='flex gap-[60px]'>
                    <div>
                        Privacy & Policy
                    </div>
                    <div>
                        Terms & Condition
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;