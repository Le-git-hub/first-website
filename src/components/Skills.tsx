
import skills from "../assets/skills.png"
const Skills = () => {
  return (
    <div>
        <div className='text-white md:h-[1000px] h-[750px] flex items-center flex-col font-preahvihear'>
            <p className='text-2xl mb-2 text-center sm:text-left'>I'm currently looking to join a <span className='text-[#A362FF]'>cross-functional</span> team</p>
            <p>that values improving people's lives through accessible design</p>
            <img src={skills} className='mt-10'></img>
        </div>
    </div>
  )
}

export default Skills
