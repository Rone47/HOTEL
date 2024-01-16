import Link from 'next/link';
import { BiSolidMessageDetail } from 'react-icons/bi';
import { BsFillSendFill, BsTelephoneOutbound } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="mt-16">
        <div className="container mx-auto px-2">
            <Link href='/' className='font-black text-tertiary-light'>
                NgongHotel
            </Link>
            <h4 className='font-semibold text-[40px] py-6 text-slate-700'>Contact</h4>
            <div className='flex flex-wrap gap-16 items-center justify-between text-slate-500'>
                <div className='flex-1'>
                    <p>Ngong Road</p>
                    <div className='flex items-center py-4'>
                        <BsFillSendFill/>
                        <p className='ml-2'>codewithme</p>
                    </div>
                    <div className='flex items-center'>
                        <BsTelephoneOutbound/>
                        <p className='ml-2'>+2547191744</p>
                    </div>
                    <div className='flex items-center pt-4'>
                        <BiSolidMessageDetail/>
                        <p className='ml-2'>codewithme</p>
                    </div>
                </div>
                <div className='flex-1 md:text-right justify-between pr-5'>
                    <p className='pb-4'>Our Story</p>
                    <p className='pb-4'>Get in Touch</p>
                    <p className='pb-4'>Our Privacy Commitments</p>
                    <p className='pb-4'>Terms of Service</p>
                    <p>Customer Assitance</p>
                </div>
                
                <div className="flex-1md:text-right justify justify-between">
                    <p className='pb-4'>Dinning Experince</p>
                    <p className='pb-4'>Wellnes</p>
                    <p className='pb-4'>Fitness</p>
                    <p className='pb-4'>Sports</p>
                    <p>Events</p>
                </div>
            </div>
        </div>
        <div className='bg-tertiary-light h-10 md:h-[70px] mt-16 w-full bottom-0 left-0'/>
    </footer>
  )
}

export default Footer