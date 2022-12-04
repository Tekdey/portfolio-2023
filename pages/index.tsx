import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <section className='flex justify-center items-center h-full p-3'>
        <div className='flex flex-col justify-around items-center h-4/6'>
          <header className='w-full'>
              <h1 className=' font-bold text-2xl'>Mon nom est <span>Bardi Nathan</span></h1>
              <h2 className=' font-bold text-2xl'>Je suis un Développeur Web</h2>
          </header>
            <article>
              <p className='text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At dolor, ratione dicta corporis omnis assumenda! Possimus vitae provident voluptatum exercitationem.</p>
              <p className='text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At dolor, ratione dicta corporis omnis assumenda! Possimus vitae provident voluptatum exercitationem.</p>
              <p className='text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At dolor, ratione dicta corporis omnis assumenda! Possimus vitae provident voluptatum exercitationem.</p>
            </article>
            <Link href="#" className='bg-orange-500 rounded-full px-5 py-4 '>
              <p className='text-white font-bold'>En savoir plus sur moi</p>
            </Link>
        </div>
      </section>
    </>
  )
}

export default Home
