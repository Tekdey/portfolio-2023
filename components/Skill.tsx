import type { NextPage } from 'next'


interface Props {
    title: string,
    level: number
}

const Skill = ({title, level}: Props) => {


  return (
    <li>
        <div className='flex justify-between text-lg text-t-white'>
            <h3 className='font-semibold'>{title}</h3>
            <span>{level}%</span>
        </div>
        <div className='bg-t-light-black w-full h-2 overflow-hidden rounded-full'>
            <div className='bg-t-orange h-full' style={{
                width: level + "%"
            }}></div>
        </div>
    </li>
  )
}


export default Skill