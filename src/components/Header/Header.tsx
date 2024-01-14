import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa';
import { MdDarkMode } from 'react-icons/md';

const Header = () => {
  return (
    <header className='py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-between'>
        <div className='flex  items-center w-full md:2/3'>
            <Link href='/' className='font-black text-tertiary-light'>
                Hotel
            </Link>
            <ul className='flex items-center ml-7'>
                <li className='flex items-center'>
                 <Link href='/auth'>
                  <FaUserCircle className='cursor-pointer'/>
                 </Link>
                </li>
                <li className='ml-4'>
                    <MdDarkMode className='cursor-pointer'/>
                </li>
            </ul>
        </div>
        <ul className='flex items-center justify-between w-full md:w-1/3 mt-4'>
            <li className='hover:-translate-x-2 duration-500 translate-all text-slate-700'>
                <Link href='/'>
                    Home
                </Link>
            </li>
            <li className='hover:-translate-x-2 duration-500 translate-all text-slate-700'>
                <Link href='/rooms'>
                    Rooms
                </Link>
            </li>
            <li className='hover:-translate-x-2 duration-500 translate-all text-slate-800'>
                <Link href='/'>
                    Contacts
                </Link>
            </li>
        </ul>
    </header>
  )
}

export default Header