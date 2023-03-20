import React from 'react';

import img from '../assets/index.js';

const CarCard = ({ title, carType, rentPrice, peopleCapacity, fuelTankCapacity, carGearType }) => {
    return (
        <div className='h-[388px] w-[304px] p-6 bg-white flex flex-col justify-between rounded-[10px]'>
            <div className='flex flex-col gap-1'>
                <div className='flex justify-between'>
                    <div className='text-[20px] text-[#1A202C] font-bold'>
                        {title}
                    </div>
                    <div>
                        <img src={img.wishListHeart} alt="Wishlist" />
                    </div>
                </div>
                <div className='text-[14px] text-[#90A3BF] font-bold'>
                    {carType}
                </div>
            </div>
            <div className='h-full flex justify-center items-center'>
                <img src={img.car} alt="car" className='object-cover' />
            </div>
            <div className='flex flex-col gap-6'>
                <div className='flex justify-between text-[14px] text-[#90A3BF] font-medium'>
                    <div className='flex items-center gap-1'>
                        <img src={img.fuelCapacity} alt="Fuel capacity" /> <span>{fuelTankCapacity}L</span>
                    </div>
                    <div className='flex items-center gap-1'>
                        <img src={img.carGearType} alt="Car type" /> <span>{carGearType}</span>
                    </div>
                    <div className='flex items-center gap-1'>
                        <img src={img.carPeopleCapacity} alt="Car type" /> <span>{peopleCapacity}People</span>
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='text-[14px] text-[#1A202C] font-bold ' >
                        $ {rentPrice}/<span className='text-[10px] text-[#90A3BF] '>day</span>
                    </div>
                    <button className='bg-[#3563E9] text-[16px] text-[#FFFFFF] font-semibold h-11 w-[116px] rounded'>
                        Rent Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CarCard;