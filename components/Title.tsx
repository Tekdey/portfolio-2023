interface Props {
    title: string,
}

const Title = ({title}: Props) => {


  return (
    <div className='flex flex-col gap-3'>
        <h1 className='text-t-white font-bold text-4xl'>{title}</h1>
        <div className='flex flex-col gap-2 max-w-xs'>
            <div className='bg-t-orange h-2 w-2/3 rounded-full'></div>
            <div className='bg-t-orange h-2 w-1/3 rounded-full'></div>
        </div>
    </div>
  )
}


export default Title