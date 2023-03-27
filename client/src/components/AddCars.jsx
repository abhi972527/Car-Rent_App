import React, { useState } from 'react';
// import FormData from 'form-data';

import CarRentConfirmation from './CarRentConfirmation.jsx';
import img from '../assets/index.js';
import { useAddCarMutation } from '../services/carRent.js';

const AddCars = () => {
    const [addCar, { data: carData, error: addCarError, isLoading },] = useAddCarMutation();
    // carData ? console.log("🚀 ~ file: AddCars.jsx:9 ~ AddCars ~ carData:", carData) : console.log("🚀 ~ file: AddCars.jsx:9 ~ AddCars ~ addCarError:", addCarError)
    const [showConfirmation, setShowConfirmation] = useState(false)
    const [input, setInput] = useState({
        title: '',
        brand: '',
        rent: '',
        capacity: '',
        carType: '',
        location: '',
        pickUp: '',
        dropOff: '',
        availableFrom: '',
        availableTo: '',
        image: '',
    })

    const handleClickApi = async () => {
        console.log("button clicked");
        try {
            const formData = new FormData();
            formData.append('name', 'Mustang');
            formData.append('brand', 'Ford');
            formData.append('rent', '10000');
            formData.append('location', 'Pakistan');
            formData.append('userId', '64132c30a362a5e0d499b3fa');
            formData.append('image', input.image);
            // input.image.forEach((image, index) => {
            //     formData.append(`image${index}`, image);
            // });

            const response = await addCar(formData);
            // const response = await addCar({
            //     "name": "Mustang",
            //     "brand": "Ford",
            //     "rent": 10000,
            //     "location": "Pakistan",
            //     "userId": "64132c30a362a5e0d499b3fa",
            //     "image": input.image,
            // });
            console.log("🚀 ~ file: AddCars.jsx:28 ~ handleClickApi ~ response:", response)

        } catch (error) {
            console.error('Error:', error);
        }
        // console.log("🚀 ~ file: AddCars.jsx:9 ~ AddCars ~ data:", data)

    }

    const handleInputChange = (event) => {
        console.log("🚀 ~ file: AddCars.jsx:48 ~ handleInputChange ~ event.target:", event.target.files)
        const { name, value, files } = event.target;
        setInput((prevFormData) => ({
            ...prevFormData,
            [name]: files ? files[0] : value,
            // [name]: value,
        }));
    };

    // const handleInputChange = (event) => {
    //     const { name, value, files } = event.target;
    //     if (name === "image") {
    //         setInput((prevFormData) => ({
    //             ...prevFormData,
    //             [name]: [...prevFormData[name], ...files],
    //         }));
    //     } else {
    //         setInput((prevFormData) => ({
    //             ...prevFormData,
    //             [name]: value,
    //         }));
    //     }
    // };

    // const handleImageChange = (event) => {
    //     setInput((prevFormData) => ({
    //         ...prevFormData,
    //         // image: event.target.files[0],
    //     }));
    // };

    const print = () => {
        console.log("🚀 ~ file: AddCars.jsx:20 ~ AddCars ~ input:", input)
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (addCarError) {
        return <div>An error occurred: {error}</div>;
    }

    return (
        <div className='flex py-[50px]'>
            <div className='bg-white w-[852px] px-6 py-[30px] rounded-[10px] mx-auto flex flex-col'>
                <div className='text-[20px] text-[#1A202C] font-bold mb-1'>
                    Add a Car for Rent
                </div>
                <div className='text-[14px] text-[#90A3BF] font-medium'>
                    Please enter your car info
                </div>
                <div className='text-[18px] text-[#3563E9] font-extrabold mt-10 mb-9'>
                    Car Info
                </div>
                <div className='flex flex-wrap justify-between gap-6'>
                    <div className='flex flex-col gap-4'>
                        <div className='text-[16px] text-[#1A202C] font-semibold'>
                            Car Title
                        </div>
                        <input type="text" name="title" value={input.title} onChange={handleInputChange} className='bg-[#F6F7F9] rounded-[10px] h-14 w-96 pl-6 text-[14px] text-[#90A3BF] font-normal outline-none' placeholder='Your title' />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='text-[16px] text-[#1A202C] font-semibold'>
                            Car Brand
                        </div>
                        <input type="text" name="brand" value={input.brand} onChange={handleInputChange} className='bg-[#F6F7F9] rounded-[10px] h-14 w-96 pl-6 text-[14px] text-[#90A3BF] font-normal outline-none' placeholder='Your title' />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='text-[16px] text-[#1A202C] font-semibold'>
                            Rent Price
                        </div>
                        <input type="text" name="rent" value={input.rent} onChange={handleInputChange} className='bg-[#F6F7F9] rounded-[10px] h-14 w-96 pl-6 text-[14px] text-[#90A3BF] font-normal outline-none' placeholder='Your title' />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='text-[16px] text-[#1A202C] font-semibold'>
                            Capacity
                        </div>
                        <input type="text" name="capacity" value={input.capacity} onChange={handleInputChange} className='bg-[#F6F7F9] rounded-[10px] h-14 w-96 pl-6 text-[14px] text-[#90A3BF] font-normal outline-none' placeholder='Your title' />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='text-[16px] text-[#1A202C] font-semibold'>
                            Car Type
                        </div>
                        <input type="text" name="carType" value={input.carType} onChange={handleInputChange} className='bg-[#F6F7F9] rounded-[10px] h-14 w-96 pl-6 text-[14px] text-[#90A3BF] font-normal outline-none' placeholder='Your title' />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='text-[16px] text-[#1A202C] font-semibold'>
                            Location
                        </div>
                        <input type="text" name="location" value={input.location} onChange={handleInputChange} className='bg-[#F6F7F9] rounded-[10px] h-14 w-96 pl-6 text-[14px] text-[#90A3BF] font-normal outline-none' placeholder='Your title' />
                    </div>
                </div>
                <div className='text-[18px] text-[#3563E9] font-extrabold mt-10 mb-9'>
                    Pickup  Info
                </div>
                <div className='flex flex-wrap justify-between gap-6'>
                    <div className='flex flex-col gap-4'>
                        <div className='text-[16px] text-[#1A202C] font-semibold'>
                            Pickup Location
                        </div>
                        <input type="text" name="pickUp" value={input.pickUp} onChange={handleInputChange} className='bg-[#F6F7F9] rounded-[10px] h-14 w-96 pl-6 text-[14px] text-[#90A3BF] font-normal outline-none' placeholder='Your title' />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='text-[16px] text-[#1A202C] font-semibold'>
                            Drop Off Location
                        </div>
                        <input type="text" name="dropOff" value={input.dropOff} onChange={handleInputChange} className='bg-[#F6F7F9] rounded-[10px] h-14 w-96 pl-6 text-[14px] text-[#90A3BF] font-normal outline-none' placeholder='Your title' />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='text-[16px] text-[#1A202C] font-semibold'>
                            Availability From
                        </div>
                        <input type="text" name="availableFrom" value={input.availableFrom} onChange={handleInputChange} className='bg-[#F6F7F9] rounded-[10px] h-14 w-96 pl-6 text-[14px] text-[#90A3BF] font-normal outline-none' placeholder='Your title' />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='text-[16px] text-[#1A202C] font-semibold'>
                            Availability To
                        </div>
                        <input type="text" name="availableTo" value={input.availableTo} onChange={handleInputChange} className='bg-[#F6F7F9] rounded-[10px] h-14 w-96 pl-6 text-[14px] text-[#90A3BF] font-normal outline-none' placeholder='Your title' />
                    </div>
                </div>
                <div className='text-[16px] text-[#1A202C] font-bold mt-10 mb-4 '>
                    Upload Images
                </div>
                <div className='border border-dashed cursor-pointer border-[#90A3BF] rounded-[6px] h-[184px] w-full flex flex-col justify-center items-center '>
                    <input type="file" name="image" onChange={handleInputChange} accept="image/*" multiple placeholder='upload file' />
                    <img src={img.upload} alt="upload" className='h-6 w-6 mb-3' />
                    <div className='text-[14px] text-[#556987] font-medium '>
                        Drag and drop an image, or <span className='text-[#3563E9] font-bold'>Browse</span>
                    </div>
                    <div className='text-[14px] text-[#90A3BF] font-normal '>
                        High resolution images (png, jpg, gif)
                    </div>
                </div>
                <button onClick={print} className='bg-[#3563E9] text-white text[16px] font-bold rounded-lg h-14 w-[140px] mt-10 ml-auto'>
                    Rent Now
                </button>
                <button onClick={handleClickApi} className='bg-[#3563E9] text-white text[16px] font-bold rounded-lg h-14 w-[140px] mt-10 ml-auto'>
                    Hit api
                </button>
            </div>
            {showConfirmation &&
                <CarRentConfirmation />
            }
        </div>
    )
}

export default AddCars;