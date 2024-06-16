import React from 'react'
import coffee from '../assets/coffee.png'
import Drop from '../assets/Drop.png'
import Star from '../assets/Star.png'
import light from '../assets/light.png'

const Work = () => {
  return (
    <div className='lg:h-[650px] h-[1050px] mx-auto flex flex-col text-white items-center'>
            <div className="flex flex-col items-start ">
                    <p className="text-4xl w-full tracking-wider font-preahvihear md:ml-0 ml-3">Work Experience</p>
                    <div className='grid lg:grid-cols-2 grid-cols-1 gap-6 mt-12 relative sm:w-full'>
                        <div className='flex justify-center items-center absolute inset-0 z-20'>
                            <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#763CAC] via-transparent to-transparent h-[750px] w-[750px] bg-opacity-50'></div>
                        </div>
                        <div className='rectangle h-[192px] w-[576px] rounded-2xl shadow-xl z-30 mb-3 xl:mb-0'>
                            <div className='grid grid-cols-3 font-poppins h-full'>
                                <div className='flex justify-center items-center col-span-1'>
                                    <img src={Star} className=''></img>
                                </div>
                                <div className=' col-span-2 flex flex-col justify-center'>
                                    <h1 className=' font-semibold text-2xl'>CIB on the Mobile</h1>
                                    <p className='text-xs mt-2 mb-3'>Take your client onboard seamlessly by our amazing tool of digital onboard process.</p>
                                    <button className='text-center bg-[#2C1250] border-[#693B93] border-2 h-[45px] w-[160px] rounded-xl'>LEARN MORE</button>
                                </div>
                            </div>
                        </div>
                        <div className='rectangle h-[192px] w-[576px] rounded-2xl shadow-xl z-30 mb-3 xl:mb-0'>
                            <div className='grid grid-cols-3 font-poppins h-full'>
                                    <div className='flex justify-center items-center col-span-1'>
                                        <img src={light} className=''></img>
                                    </div>
                                    <div className=' col-span-2 flex flex-col justify-center'>
                                        <h1 className=' font-semibold text-2xl'>CIB on the Mobile</h1>
                                        <p className='text-xs mt-2 mb-3'>Take your client onboard seamlessly by our amazing tool of digital onboard process.</p>
                                        <button className='text-center bg-[#2C1250] border-[#693B93] border-2 h-[45px] w-[160px] rounded-xl'>LEARN MORE</button>
                                    </div>
                            </div>
                        </div>
                        <div className='rectangle h-[192px] w-[576px] rounded-2xl shadow-xl z-30 mb-3 xl:mb-0'>
                            <div className='grid grid-cols-3 font-poppins h-full'>
                                    <div className='flex justify-center items-center col-span-1'>
                                        <img src={coffee} className=''></img>
                                    </div>
                                    <div className=' col-span-2 flex flex-col justify-center'>
                                        <h1 className=' font-semibold text-2xl'>CIB on the Mobile</h1>
                                        <p className='text-xs mt-2 mb-3'>Take your client onboard seamlessly by our amazing tool of digital onboard process.</p>
                                        <button className='text-center bg-[#2C1250] border-[#693B93] border-2 h-[45px] w-[160px] rounded-xl'>LEARN MORE</button>
                                    </div>
                            </div>
                        </div>
                        <div className='rectangle h-[192px] w-[576px] rounded-2xl shadow-xl z-30 mb-3 sm:mb-0'>
                            <div className='grid grid-cols-3 font-poppins h-full'>
                                    <div className='flex justify-center items-center col-span-1'>
                                        <img src={Drop} className=''></img>
                                    </div>
                                    <div className=' col-span-2 flex flex-col justify-center'>
                                        <h1 className=' font-semibold text-2xl'>CIB on the Mobile</h1>
                                        <p className='text-xs mt-2 mb-3'>Take your client onboard seamlessly by our amazing tool of digital onboard process.</p>
                                        <button className='text-center bg-[#2C1250] border-[#693B93] border-2 h-[45px] w-[160px] rounded-xl'>LEARN MORE</button>
                                    </div>
                            </div>
                        </div>
                    </div>
            </div>

        </div>
  )
}

export default Work
