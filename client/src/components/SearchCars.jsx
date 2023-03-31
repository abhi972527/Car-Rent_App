import React, { useState, useEffect, useRef } from 'react';
import img from '../assets/index.js';

import { useGetCarByFilterMutation, useGetCarQuery } from '../services/carRent';
import CarCard from './CarCard.jsx';

const SearchCars = () => {
    let filters = {};
    const { data: file, isLoading, error, refetch } = useGetCarQuery({filter: filters});
    // const [filterCar, { data: file, isLoading, error }] = useGetCarByFilterMutation();
    // console.log("🚀 ~ file: SearchCars.jsx:11 ~ SearchCars ~ file:", file)
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>An error occurred</div>;
    }
    console.log("🚀 ~ file: SearchCars.jsx:10 ~ SearchCars ~ file:", file)
    const [checkboxes, setCheckboxes] = useState({
        "Sport": false,
        "SUV": false,
        "MPV": false,
        "Sedan": false,
        "Coupe": false,
        "Hatchback": false,
        "2Person": false,
        "4Person": false,
        "6Person": false,
        "8Person": false,
    });

    const [price, setPrice] = useState(200);

    function handlePriceChange(event) {
        setPrice(parseInt(event.target.value));
    };

    const carType = ["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"];
    const capacity = ["2Person", "4Person", "6Person", "8Person"];

    // const filtersRef = useRef(checkboxes);

    const handleCheckboxChange = (event) => {
        const checkboxName = event.target.name;
        // console.log("🚀 ~ file: SearchCars.jsx:18 ~ handleCheckboxChange ~ checkboxName:", checkboxName)
        const isChecked = event.target.checked;
        // console.log("🚀 ~ file: SearchCars.jsx:20 ~ handleCheckboxChange ~ isChecked:", isChecked);
        setCheckboxes({
            ...checkboxes,
            [checkboxName]: isChecked
        });
        filters = {
            ...checkboxes,
            [checkboxName]: isChecked
        };
        console.log("🚀 ~ file: SearchCars.jsx:51 ~ handleCheckboxChange ~ filters:", filters)
        refetch(filters);
        // filterCar(filters);
    };

    // useEffect(async () => {
    //     // const filters = {
    //     //     ...checkboxes,
    //     //     price,
    //     // };
    //     // filterCar(filters);
    //     // let response = await filterCar();
    //     // console.log("🚀 ~ file: SearchCars.jsx:67 ~ useEffect ~ response:", response)
    // }, [checkboxes, filterCar]);

    return (
        <div className='flex' >
            <div className='min-w-[360px] px-8 py-10 bg-white '>
                <div className='text-[12px] text-[#94A7CB] font-semibold'>
                    SEARCH
                </div>
                <div className='border h-[44px] w-full my-7 rounded-full flex items-center px-[14px] gap-[10px] '>
                    <img src={img.searchIcon} className='h-[24px] w-[24px]' alt="Search" />
                    <input type="text" className='h-full w-full outline-none text-[14px] text-[#3D5278] font-medium' placeholder='Search by brand or title ' />
                </div>
                <div className='py-7 text-[12px] text-[#94A7CB] font-semibold'>
                    T Y P E
                </div>
                <div className='flex flex-col gap-8'>
                    {
                        carType.map((label, i) => (
                            <label key={i} className='flex items-center gap-[10px] text-[20px] text-[#3D5278] font-semibold'>
                                <input className='h-5 w-5 rounded-full'
                                    type="checkbox"
                                    name={label}
                                    checked={checkboxes[label]}
                                    onChange={handleCheckboxChange}
                                />
                                {label}
                            </label>
                        ))
                    }
                </div>
                <div className='my-7 pt-7 text-[12px] text-[#94A7CB] font-semibold'>
                    C A P A C I T Y
                </div>
                <div className='flex flex-col gap-8'>
                    {
                        capacity.map((label, i) => (
                            <label key={i} className='flex items-center gap-[10px] text-[20px] text-[#3D5278] font-semibold'>
                                <input className='h-5 w-5 rounded-full'
                                    type="checkbox"
                                    name={label}
                                    checked={checkboxes[label]}
                                    onChange={handleCheckboxChange}
                                />
                                {label}
                            </label>
                        ))
                    }
                </div>
                <div className='my-7 pt-7 text-[12px] text-[#94A7CB] font-semibold'>
                    P R I C E
                </div>
                <div>
                    <input className='w-full'
                        type="range"
                        min="50"
                        max="200"
                        step="50"
                        value={price}
                        onChange={handlePriceChange}
                    />
                    <p>Max: ${price}</p>
                </div>
            </div>
            <div className='border w-full p-16 pt-8 bg-[#F6F7F9] flex flex-wrap gap-8 justify-around '>
                {file.data.map((item, i) => (
                    <CarCard
                        key={i}
                        title={item.name}
                        carType={item.carType}
                        rentPrice={item.rent}
                        peopleCapacity={item.capacity}
                        fuelTankCapacity={item.fuelCapacity}
                        carGearType={item.engineType}
                        image={item.image}
                    />
                ))}
            </div>
        </div>
    )
}

export default SearchCars;