import person from '../assets/person.png';
import arrow from '../assets/Arrow.png';
const Hero = () => {
    return (
        <div className='lg:h-[560px] h-[30%] md:h-[450px]'>
            <div className="flex justify-center pt-36 xl:scale-125 md:scale-100 scale-[75%]">
                <div className='flex items-center justify-center'>
                    <img className="relative z-30 " src={person}></img>
                    <div className='absolute bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] bg-opacity-50 from-white via-transparent to-transparent h-[350px] w-[350px] z-20 '></div>
                    <div className='absolute circle h-[400px] w-[400px] z-10 '></div>
                </div>
                <div className='pl-5 pt-[80px] relative z-30 text-white font-preahvihear'>
                    <p className="">A Developer who</p>
                    <div className='relative'>
                        <div className='ellipse absolute inset-0 w-[188.58px] h-[52.9px] -rotate-6 z-0 sm:mt-[15.4%] sm:ml-[37.7%] mt-[15.4%] ml-[37.7%]'></div>
                        <h1 className=" text-5xl py-2 relative z-30 whitespace-nowrap">Judges a book<br></br> by its <span className='relative z-40 text-[#7127BA]'>cover</span>...</h1>
                        
                    </div>
                    <p className="text-[10px]">Because if the cover does not impress you what else can?</p>
                </div>
            </div>
            <div className='absolute top-[16%] md:left-[40%] xl:left-[45%] left-[33%] scale-75 md:scale-100' >
                <div className='text-white flex justify-between'>
                    <img src={arrow} className=''></img>
                    <p className=' whitespace-nowrap mt-6'>Hello! I Am <span className='text-[#7127BA]'>Itai Avganim</span></p>
                    
                </div>
            </div>
        </div>
    );
}
export default Hero;