import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const links = [
    {
        href: '/',
        text: 'Home',
    },
    {
        href: '/searchCar',
        text: 'Search Cars',
    },
    {
        href: '/addCar',
        text: 'Add Car',
    },
];

const Navbar = () => {
    const user = useSelector((state) => state.user.user);
    console.log("🚀 ~ file: Navbar.jsx:23 ~ Navbar ~ user:", user)
    const { pathname } = useLocation();

    return (
        <div className='border bg-white h-[100px] w-full px-12 flex justify-between items-center'>
            <div className='text-[#3563E9] text-[24px] md:text-[32px] font-bold'>
                <Link to={'/'}>
                    MORENT
                </Link>
            </div>
            <div className='flex items-center gap-[30px]'>
                {
                    links.map((link, index) => (
                        <Link to={link.href} key={index} className={`text-[16px] ${link.href === pathname ? 'text-[#3563E9] font-semibold' : 'text-[#3D5278] font-medium'}`} >
                            {link.text}
                        </Link>
                    ))
                }
                <Link to="/login">
                    <button className='h-[44px] w-[110px] rounded-[4px] bg-[#3563E9] text-[#FFFFFF] text-[16px] font-semibold'>
                        Login
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;