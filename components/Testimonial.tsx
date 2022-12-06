import type { NextPage } from 'next'
import Image from 'next/image'


interface Props {
    picture: string; 
    message: string; 
    fullname: string; 
    job: string;
}

const Testimonial = ({picture, fullname, job, message}: Props) => {


  return (
    <article className='flex flex-col justify-around items-center text-black h-full w-full '>
        <div>
            <Image src={picture} alt={fullname} height={60} width={60} className="rounded-full" />
        </div>
        <div className='flex justify-center items-center'>
            <p className='text-center'>{message}</p>
        </div>
        <div>
            <p className='text-center font-semibold'>{fullname}</p>
            <p className='text-center font-semibold'>{job}</p>
        </div>
    </article>
  )
}


export default Testimonial