'use client';

import ThemeContext from '@/context/themeContext';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';

const Header = () => {

    const {darkTheme, setDarkTheme} = useContext(ThemeContext);

    const {data: session} = useSession();
    console.log(session);
  return (
    
    <header className='py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-between'>
        <div className='flex  items-center w-full md:2/3'>
            <Link href='/' className='font-black text-tertiary-light'>
                NgongHotel
            </Link>
            <ul className='flex items-center ml-7'>
                <li className='flex items-center'>
                 <Link href='/auth'>
                  <FaUserCircle className='cursor-pointer'/>
                 </Link>
                </li>
                <li className='ml-4'>
                    {darkTheme ? (
                        <MdOutlineLightMode className='cursor-pointer'
                          onClick={() =>{
                            setDarkTheme(false);
                            localStorage.removeItem('hotel-theme');
                          }}
                        />
                        )  : ( 
                        <MdDarkMode className='cursor-pointer'
                        onClick={() =>{
                            setDarkTheme(true);
                            localStorage.setItem('hotel-theme', 'true');
                          }}
                        />
                        )}
                </li>
            </ul>
        </div>
        <ul className='flex items-center justify-between w-full md:w-1/3 mt-4'>
            <li className='hover:-translate-x-2 duration-500 translate-all text-slate-500'>
                <Link href='/'>
                    Home
                </Link>
            </li>
            <li className='hover:-translate-x-2 duration-500 translate-all text-slate-500'>
                <Link href='/rooms'>
                    Rooms
                </Link>
            </li>
            <li className='hover:-translate-x-2 duration-500 translate-all text-slate-500'>
                <Link href='/'>
                    Contacts
                </Link>
            </li>
        </ul>
    </header>
  )
}

export default Header