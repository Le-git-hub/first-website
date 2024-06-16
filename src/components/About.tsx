import { BiLogoFacebookCircle } from "react-icons/bi";

const About = () => {
    return (
        <div className='h-[450px] mx-auto flex flex-col text-white font-preahvihear md:scale-40 lg:scale-100 sm:scale-75 2xs:scale-[65%] scale-[55%] items-center'>
            <div className="flex flex-col items-start">
                    <h1 className="text-5xl tracking-wide">I'm a Software Engineer.|</h1>
                    <p className='flex justify-center text-xl md:mr-[90px] mt-4 md:scale-100 whitespace-nowrap tracking-wider'>Currently, I'm a Software Engineer at <BiLogoFacebookCircle className="mt-1 ml-2 mr-0.5 text-[#1877F2]" /><span className='text-[#1877F2]'>Facebook</span>,</p>
                    <p className="text-xl sm:w-[800px] mt-20 tracking-wider">A self-taught UI/UX designer, functioning in the industry for 3+ years now.
                    I make meaningful and delightful digital products that create an equilibrium
                    between user needs and business goals.</p>
            </div>
        </div>
    );
}
export default About;