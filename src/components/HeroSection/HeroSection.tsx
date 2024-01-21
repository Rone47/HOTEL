'use client'

import Image from 'next/image';
import CountUpNumber from '../CountUpNumber/CountUpNumber';

const HeroSection = () => {
  return (
    <section className="flex px-4 items-center gap-12 container mx-auto">
        <div className="py-10 h-full">
            {/*HEad section*/}
             <h1 className="font-heading mb-6">Discover our Luxurious Hotel</h1>
             <p className="text-[#4a4a4a] dark:text-[#fffffea] mb-12 max-w-lg">
               Indulge in a superb hotel steeped in rich history and timeless elegance.
             </p>
             <button className="btn-primary">Get Started</button>

            {/*Rooms Description section*/}
            <div className="flex justify-between mt-12">
              <div className="flex gap-3 flex-col items-center justify-center">
                <p className="text-xs lg:text-xl text-center">Basic Room</p>
                < CountUpNumber duration={3000} endValue={256} />
              </div>

              <div className="flex gap-3 flex-col items-center justify-center">
                <p className="text-xs lg:text-xl text-center">Luxury Room</p>
                < CountUpNumber duration={3000} endValue={120} />
              </div>

              <div className="flex gap-3 flex-col items-center justify-center">
                <p className="text-xs lg:text-xl text-center">Suite</p>
                < CountUpNumber duration={3000} endValue={210} />
              </div>
            </div>

            {/*Images*/}
            <div className="md:grid hidden gap-8 grid-cols-1">
              <div className="rounded-2xl overflow-hidden h-48">
                 <Image 
                   src='/images/hero-1.jpg'
                   alt='hero-1' 
                   width={300} 
                   height={300} 
                   className='img scale-animation'
                   />
              </div>

              <div className='grid grid-cols-2 gap-8 h-48'>
                <div className='rounded-2xl overflow-hidden'>
                  <Image 
                   src='/images/hero-2.jpg'
                   alt='hero-2'
                   width={300} 
                   height={300} 
                   className='img scale-animation'
                   />
                </div>
                <div className='rounded-2xl overflow-hidden'>
                  <Image 
                   src='/images/hero-3.jpg'
                   alt='hero-3'
                   width={300} 
                   height={300} 
                   className='img scale-animation'
                   />
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection;