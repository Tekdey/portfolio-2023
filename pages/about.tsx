import type { NextPage } from 'next'
import Link from 'next/link'
import Skill from '../components/Skill'
import Title from '../components/Title'

const About: NextPage = () => {
  return (
    <>
      <section className='w-full'>
        <Title title={"A propos sur moi"} />
        <article className='py-10 w-full flex flex-col justify-center items-center gap-5'>
            <h2 className='text-2xl font-semibold text-t-white py-5 text-center'>Mon nom est <span className='text-t-orange font-bold'>Bardi Nathan</span> et je suis un <span className='text-t-orange font-bold'>Développeur Web</span></h2>
           <ul>
            <li className='text-t-white text-md md:text-lg list-disc text-center'>
                Acquisition du Titre Professionnel Développeur Web et Web Mobile
            </li>
            <li className='text-t-white text-md md:text-lg list-disc text-center'>
                O&apos;Clock Formation Développeur Fullstack JavaScript
            </li>
           </ul>
        </article>
        <article className='flex flex-col md:flex-row md:justify-around'>
            <ul className='flex flex-col gap-3'>
                <li className='border-b border-t-white py-2'>
                    <h3 className='font-bold text-t-white'>Date de naissance :</h3>
                    <p className='text-t-white opacity-50'>6 mars 2000</p>
                </li>
                <li className='border-b border-t-white py-2'>
                    <h3 className='font-bold text-t-white'>Portfolio :</h3>
                    <p className='text-t-white opacity-50'>www.nathanbardi.com</p>
                </li>
                <li className='border-b border-t-white py-2'>
                    <h3 className='font-bold text-t-white'>Titre :</h3>
                    <p className='text-t-white opacity-50'>Titre Professionel Développeur Web et Web Mobile</p>
                </li>
            </ul>
            <ul className='flex flex-col gap-3'>
                <li className='border-b border-t-white py-2'>
                    <h3 className='font-bold text-t-white'>Age :</h3>
                    <p className='text-t-white opacity-50'>22</p>
                </li>
                <li className='border-b border-t-white py-2'>
                    <h3 className='font-bold text-t-white'>Email :</h3>
                    <p className='text-t-white opacity-50'>devw.nbardi@gmail.com</p>
                </li>
                <li className='border-b border-t-white py-2'>
                    <h3 className='font-bold text-t-white'>Mobilité :</h3>
                    <p className='text-t-white opacity-50'>Occitanie, PACA, Remote Partiel / Full</p>
                </li>
            </ul>
        </article>
        <div className='w-full flex justify-around py-20 md:py-10'>
            <Link download target="_blank" href="/NATHAN_BARDI-CV_2022.pdf" className='bg-t-orange rounded-full px-5 py-4 '>
                Télécharger mon CV
            </Link>
            <Link href="/contact" className='bg-t-orange rounded-full px-5 py-4 '>
                Me contacter
            </Link>
        </div>
        <article className='pb-10 text-center w-full flex justify-center'>
            <div className='max-w-2xl w-full'>
            <h2 className='text-2xl font-semibold text-t-white py-5'>Stack Technique</h2>
            <ul>
               <Skill title={"Html"} level={90} />
               <Skill title={"CSS / SCSS"} level={83} />
               <Skill title={"Javascript"} level={88} />
               <Skill title={"Typescript"} level={70} />
               <Skill title={"Python"} level={67} />
            </ul>
            <h3 className='text-xl font-semibold text-t-white py-5 text-center'>Front</h3>
            <ul>
               <Skill title={"React"} level={78} />
               <Skill title={"Tailwind"} level={80} />
               <Skill title={"Redux / Toolkit"} level={82} />
            </ul>
            <h3 className='text-xl font-semibold text-t-white py-5 text-center'>Back</h3>
            <ul>
               <Skill title={"Nextjs"} level={78} />
               <Skill title={"Django"} level={60} />
               <Skill title={"Nodejs"} level={80} />
               <Skill title={"Express"} level={80} />
               <Skill title={"MongoDB"} level={78} />
               <Skill title={"PostgreSQL"} level={76} />
               <Skill title={"Mongoose"} level={83} />
               <Skill title={"Sequelize"} level={81} />
               <Skill title={"GraphQL"} level={69} />
               <Skill title={"Apollo Server"} level={70} />
               <Skill title={"Socket io"} level={73} />
               <Skill title={"Sqitch"} level={68} />
            </ul>
            <h3 className='text-xl font-semibold text-t-white py-5 text-center'>Test</h3>
            <ul>
               <Skill title={"Jest"} level={65} />
               <Skill title={"SuperTest"} level={65} />
            </ul>
            <h3 className='text-xl font-semibold text-t-white py-5 text-center'>Environnement</h3>
            <ul>
               <Skill title={"Windows"} level={76} />
               <Skill title={"Mac"} level={64} />
               <Skill title={"Ubuntu"} level={54} />
            </ul>
            </div>
        </article>
      </section>
    </>
  )
}

export default About
