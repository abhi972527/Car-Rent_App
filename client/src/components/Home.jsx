import React from 'react';

import CarCard from './CarCard';
import { data } from '../constants/index';

const Home = () => {
    return (
        <div className='border p-16 pt-8 bg-[#F6F7F9] flex flex-wrap gap-8 justify-around '>
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