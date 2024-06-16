import { useState } from 'react';
import logo from '../assets/logo.png';
import { AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'


const Navbar = () => {
    const [used, Change] = useState(false);

    const handleNav = () => {
        Change(!used);
    }
    return (
        <div className=''>
        <div className='flex items-center justify-between h-[100px] bg-[#1A0B2E] text-white shadow-xl'>
            <div className='flex justify-center sm:w-1/2 w-full pl-8'>
                 <img className='' src={logo}></img>
            </div>
            <div className='hidden sm:block sm:flex lg:pr-[20%] pr-[10%] justify-between min-w-[400px] ml-auto md:w-[50%] w-[%10] text-xl font-medium font-jakarta'>
                <p className='hover:scale-105 duration-75' >Home</p>
                <p className='hover:scale-105 duration-75'>About</p>
                <p className='hover:scale-105 duration-75'>Lab</p>
            </div>
            <div className='sm:hidden flex justify-end pr-[15%]' onClick={handleNav}>
                {!used ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20}/>}
            </div>
        </div>
        <div className={used ? 'fixed left-0 top-0 h-full w-[60%] bg-[#301934] text-xl text-white shadow-2xl ease-in-out duration-300 z-50' : 'fixed left-[-100%] z-50'}>
            <ul className='pt-24 uppercase'>
                <li className='pl-12 pt-4 hover:scale-105 duration-75' >Home</li>
                <li className='pl-12 pt-4 hover:scale-105 duration-75' >About</li>
                <li className='pl-12 pt-4 hover:scale-105 duration-75' >Lab</li>
            </ul>
        </div>
        </div>
    );
}
export default Navbar;