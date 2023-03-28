import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
    const user = useSelector((state) => state.user.user)

    return (
        <div className='border p-12 '>
            <div className='text-[20px] text-[#1A202C] font-bold mb-[30px]'>
                My Profile
            </div>
            <div className='border rounded-[12px]'>
                <div className='border bg-slate-500 rounded-t-[12px] h-[180px] relative'>
                    Background wallpaper
                    <button className="text-white bg-[#3563E9] absolute bottom-0 right-0 m-4 rounded-lg text-[14px] font-bold px-5 py-2.5 text-center">
                        Edit Cover
                    </button>
                </div>
                <div className='flex'>
                    <div className='border-2 z-50 bg-white min-h-[160px] mt-[-80px] mx-[30px] mb-5 min-w-[160px] grid justify-center items-center rounded-full'>
                        Pic
                    </div>
                    <div className='w-full flex items-center justify-between'>
                        <div className='grid gap-1'>
                            <div className='text[20px] text-[#1A202C] font-bold'>
                                {user.data.name}
                            </div>
                            <div className='text-[14px] text-[#1A202C] font-normal'>
                                {user.data.email}
                            </div>
                        </div>
                        <div className='mx-[50px]'>
                            <button
                                className="text-white bg-[#3563E9] rounded-lg text-[14px] font-bold px-5 py-2.5 text-center"
                            >
                                Edit Profile
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-[50px]'>
                Cars for rent
            </div>

        </div>
    )
}

export default MyProfile;