import React from 'react';

import CarCard from './CarCard';
import { data } from '../constants/index';
import { useGetCarQuery, useAddCarMutation } from '../services/carRent';
// import { useAddCarMutation } from '../services/carRent.js';


const Home = () => {
    const { data: file, isLoading, error } = useGetCarQuery();
    // console.log("🚀 ~ file: Home.jsx:9 ~ Home ~ data:", file)
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>An error occurred: {error}</div>;
    }

    if (!file) {
        return null; // or a loading indicator, depending on your preference
    }

    const hitApi = () => {
        const { data: file } = useAddCarMutation();
        console.log("🚀 ~ file: Home.jsx:25 ~ hitApi ~ file:", file)

    }

    console.log("🚀 ~ file: Home.jsx:9 ~ Home ~ data:", file)
    return (
        <div className='border p-16 pt-8 bg-[#F6F7F9] flex flex-wrap gap-8 justify-around '>
            <button onClick={hitApi} >Api button</button>
            {data.map((item, i) => (
                <CarCard
                    key={i}
                    title={item.title}
                    carType={item.carType}
                    rentPrice={item.rentPrice}
                    peopleCapacity={item.peopleCapacity}
                    fuelTankCapacity={item.fuelTankCapacity}
                    carGearType={item.carGearType}
                />
            ))}
        </div>
    )
}

export default Home;