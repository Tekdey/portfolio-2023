import type { NextPage } from 'next'
import Link from 'next/link'
import Testimonial from '../components/Testimonial'
import Carousel from "../public/carousel.json"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Home: NextPage = () => {



  return (
    <>
      <section className='flex justify-center items-center h-full w-full p-3'>
        <div className='flex flex-col justify-around items-center h-full'>
          <header className='w-full'>
              <h1 className=' font-semibold text-t-white text-center text-xl sm:text-3xl
              md:text-4xl lg:text-5xl'>Mon nom est <span className='font-bold text-t-orange'>Bardi Nathan</span></h1>
              <h2 className=' font-semibold text-t-white text-center text-2xl sm:text-4xl
              md:text-3xl lg:text-4xl'>Je suis un <span className='font-bold text-t-orange'>Développeur Web</span></h2>
          </header>
            <div className=' max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-[500px] flex cursor-grab px-2'>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
              clickable: true,
              }}
              autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
              }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
            >

              {Carousel.map((slide) => {
                  return (
                    <SwiperSlide key={slide.id}>
                      <Testimonial key={slide.id} picture={slide.avatar} message={slide.text} fullname={slide.author} job={slide.job} />
                    </SwiperSlide>
                  )
                })}
           
            </Swiper>
                
            </div>
            <Link href="/about" className='bg-t-orange rounded-full px-5 py-4 '>
              <p className='text-white font-bold text-sm sm:text-lg'>En savoir plus sur moi</p>
            </Link>
        </div>
      </section>
    </>
  )
}

export default Home
