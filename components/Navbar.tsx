import type { NextPage } from 'next'
import * as icons from "../utils/icons"
import Link from 'next/link'
import Image from 'next/image'
import ProfileImage from "../public/images/nathanbardi.jpg"

const Navbar: NextPage = () => {

    const handleClick = () => {
        console.log("Hellow");
        document.getElementById('navbar')?.classList.toggle('active')
    }

  return (
    <>
      <nav  id="navbar" className='group h-full flex absolute w-auto top-0 left-0 
      [&.active]:h-full [&.active]:w-full [&.active]:bg-black [&.active]:bg-opacity-50
      md:relative md:w-full md:max-w-[25rem] md:shadow-lg md:bg-none z-30'>
       
       <div className='w-0 transition-all opacity-100 flex flex-col justify-start items-center
                    group-[.active]:opacity-100 group-[.active]:w-4/6 group-[.active]:bg-t-light-black
                    md:group-[.active]:w-full md:bg-t-light-black md:w-full'>
         
        <div className='w-0 h-4/6 transition-all opacity-100 flex flex-col justify-around items-center
                    group-[.active]:opacity-100 group-[.active]:w-full sm:group-[.active]:w-2/3
                    md:w-full md:bg-t-light-black md:group-[.active]:w-full'>

                <Image src={ProfileImage} alt='nathan bardi profil' width={100} height={100} className="hidden group-[.active]:block rounded-full w-36 h-36 object-cover border-2 border-t-white 
                md:block" />
                
                <ul className='hidden w-2/3 gap-3
                 group-[.active]:flex group-[.active]:flex-col
                 md:flex md:flex-col'>
                    <li className='border-b-[1px] flex items-center justify-center border-t-white border-opacity-25 pb-2 text-t-white hover:text-orange-500  hover:fill-orange-500 transition-colors'>
                        <Link href="#" className='flex justify-center items-center text-lg font-semibold group/item1  h-full w-full gap-5'>
                            <icons.Home className='fill-t-white group-hover/item1:fill-t-orange transition-all' /> <span>Home</span>
                        </Link>
                    </li>
                    <li className='border-b-[1px] flex items-center justify-center border-t-white border-opacity-25 text-t-white  hover:text-orange-500  hover:fill-orange-500 transition-colors pb-2'>
                        <Link href="#" className='flex justify-center items-center text-lg font-semibold group/item1  h-full w-full gap-5'>
                            <icons.About className='fill-t-white group-hover/item1:fill-t-orange transition-all' /> <span>About</span>
                        </Link>
                    </li>
                    <li className='border-b-[1px] flex items-center justify-center border-t-white border-opacity-25 text-t-white  hover:text-orange-500  hover:fill-orange-500 transition-colors pb-2'>
                        <Link href="#" className='flex justify-center items-center text-lg font-semibold group/item1 h-full w-full gap-5'>
                            <icons.Service className='fill-t-white group-hover/item1:fill-t-orange transition-all' /> <span>Services</span>
                        </Link>
                    </li>
                    <li className='border-b-[1px] flex items-center justify-center border-t-white border-opacity-25 text-t-white hover:text-orange-500  hover:fill-orange-500 transition-colors pb-2'>
                        <Link href="#" className='flex justify-center items-center text-lg font-semibold  group/item1  h-full w-full gap-5'>
                            <icons.Portfolio className='fill-t-white group-hover/item1:fill-t-orange transition-all' /> <span>Portfolio</span>
                        </Link>
                    </li>
                    <li className='border-b-[1px] flex items-center justify-center border-t-white text-t-white  border-opacity-25 hover:text-orange-500  hover:fill-orange-500 transition-colors pb-2'>
                        <Link href="#" className='flex justify-center items-center text-lg font-semibold  group/item1  h-full w-full gap-5'>
                            <icons.Contact className='fill-t-white group-hover/item1:fill-t-orange transition-all' /> <span>Contact</span>
                        </Link>
                    </li>
                </ul>
            </div>
       </div>

        <div onClick={handleClick} className="bg-t-light-black h-[4.2rem] border border-t-white rounded-lg p-2 cursor-pointer
        md:hidden">
            <icons.MenuOpen className=" fill-t-orange block group-[.active]:hidden" />
            <icons.MenuClose className=" fill-t-orange hidden group-[.active]:block" />
        </div>
      </nav>
    </>
  )
}

export default Navbar
