import * as icons from "../utils/icons"

const Setting = () => {

  const handleClick = () => {
    document.getElementById("setting")?.classList.toggle('active')
  }

  return (
    <>
        <div id="setting" className='group/setting flex justify-center items-center absolute top-5 right-0 z-10'>

          <div onClick={handleClick} className='bg-t-light-black h-12 w-12 m-3 rounded-full flex justify-center items-center border border-t-white cursor-pointer'>
              <icons.Setting className='fill-t-white setting-anim' />
          </div>
          <div className='bg-t-light-black border border-r-0 border-t-white rounded-l-lg w-0 h-28 transition-all opacity-0
          group-[.active]/setting:w-44 group-[.active]/setting:opacity-100'>
              <span className='hidden group-[.active]/setting:block'>Hello</span>
          </div>
        </div>
    </>
  )
}

export default Setting
