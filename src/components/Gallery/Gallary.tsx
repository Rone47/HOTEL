import Image from 'next/image';

const Gallery = () => {
  return (
    <div className='mx-auto container py-14 h-full'>
      <div className='flex flex-wrap md:-m-2'>
        <div className='flex w-1/2 flex-wrap'>
          <div className='w-1/2 p-1 md:p-2 h-48'>
            <Image
              alt='gallery'
              className='img'
              src='/images/hero-6.jpg'
              width={200}
              height={200}
            />
          </div>
          <div className='w-1/2 p-1 md:p-2 h-48'>
            <Image
              alt='gallery'
              className='img'
              src='/images/hero-4.jpeg'
              width={200}
              height={200}
            />
          </div>
          <div className='w-full p-1 md:p-2 h-48'>
            <Image
              alt='gallery'
              className='img'
              src='/images/hero-7.jpg'
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className='flex w-1/2 flex-wrap'>
          <div className='w-full p-1 md:p-2 h-48'>
            <Image
              alt='gallery'
              className='img'
              src='/images/hero-8.jpg'
              width={200}
              height={200}
            />
          </div>
          <div className='w-1/2 p-1 md:p-2 h-48'>
            <Image
              alt='gallery'
              className='img'
              src='/images/hero-5.jpeg'
              width={200}
              height={200}
            />
          </div>
          <div className='w-1/2 p-1 md:p-2 h-48'>
            <Image
              alt='gallery'
              className='img'
              src='/images/hero-3.jpg'
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;