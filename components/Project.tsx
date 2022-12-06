import Image from "next/image"
import Link from 'next/link'

interface Props {
    title: string,
    image: string,
    description: string,
    link: string
}

const Project = ({title, image, description, link}: Props) => {


  return (
    <div className='border-4 border-t-light-black rounded-xl bg-t-light-black h-[250px] w-[400px] relative cursor-pointer
     group/card overflow-hidden'>
        <div className="bg-t-orange h-full w-full z-30 absolute opacity-0 
        group-hover/card:opacity-100 group-hover/card:bg-opacity-80 transition-all">
          <div className="h-2/3 w-full flex flex-col justify-around items-center px-2">
            <h3 className="text-t-black font-semibold text-2xl">{title}</h3>
            <p className="text-t-black font-semibold text-lg text-center">{description}</p>
          </div>
          <div className="h-1/3 w-full flex justify-center items-center">
            <Link target="_blank" rel="external" href={link} className="rounded-full bg-t-black text-lg px-5 py-1 hover:text-t-white transition-colors"
            >Visite</Link>
          </div>
        </div>
       <Image src={image} height={300} width={400} alt={title} draggable={false}
       className="rounded-lg h-full w-full group-hover/card:w-[calc(100%_+_5px)] group-hover/card:h-[calc(100%_+_5px)] 
       transition-all object-cover object-center"  />
    </div>
  )
}


export default Project