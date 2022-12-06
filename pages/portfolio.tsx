import type { NextPage } from 'next'
import Link from 'next/link'
import Title from '../components/Title'
import Project from '../components/Project'

const Portfolio: NextPage = () => {
  return (
    <>
      <section className='w-full'>
        <Title title={"Portfolio"} />
        <div className='flex flex-wrap justify-center items-center gap-6 w-full py-10'>
            <Project title={"Delaby Construction"} image={"/images/delabyconstruction.webp"} description={"Entreprise de maçonnerie"} link={"https://www.delabyconstruction.com/"} />
            <Project title={"Keep'Up"} image={"/images/keepup.webp"} description={"Keep'Up permet d'organiser et/ou rejoindre des evenement sportif en France."} link={"https://keepup-sport.netlify.app"} />
        </div>
      </section>
    </>
  )
}

export default Portfolio
