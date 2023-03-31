import React from 'react';

import CarCard from './CarCard';
// import { data } from '../constants/index';
import { useGetCarQuery } from '../services/carRent';
// import { useAddCarMutation } from '../services/carRent.js';

const Home = () => {
    // let data = []
    const { data: file, isLoading, error } = useGetCarQuery({ staleTime: 0 });
    console.log("🚀 ~ file: Home.jsx:9 ~ Home ~ data:", file)
    // data = file;
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>An error occurred</div>;
    }
    
    // console.log("🚀 ~ file: Home.jsx:9 ~ data:", data)
    // if (!file) {
    //     return null; // or a loading indicator, depending on your preference
    // }

    // const hitApi = () => {
    //     const { data: file } = useAddCarMutation();
    //     console.log("🚀 ~ file: Home.jsx:25 ~ hitApi ~ file:", file)

    // }

    // console.log("🚀 ~ file: Home.jsx:9 ~ Home ~ data:", file)
    return (
        <div className='border p-16 pt-8 bg-[#F6F7F9] flex flex-wrap gap-8 justify-around '>

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
    )
}

export default Home;