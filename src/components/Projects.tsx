
const Projects = () => {
  return (
    <div className='flex justify-center items-center  '>
      <div className='grid lg:grid-cols-2 grid-cols-1 relative lg:w-1/2 w-full max-w-full scale-75 sm:scale-100 '>
            <div className='font-poppins col-span-1 flex justify-start items-center lg:ml-[50px] lg:mb-[200px] mb-10 '>
                <div>

                <h2 className='text-[#9857D3] font-semibold text-base'>Featured Project</h2>
                <h1 className='text-[#CCD6F6] font-semibold text-4xl mb-10'>Example Project</h1>
                <div className='blend-mode h-[165px] w-[669px] bg-[#693B9320] rounded-3xl z-30 flex justify-center items-center text-left p-8'>
                    <p className='text-[#CCD6F6] font-medium text-lg z-40'>A web app for visualizing personalized Spotify data. View your
top artists, top tracks, recently played tracks, and detailed audio
information about each track. Create and save new playlists of
recommended tracks based on your existing playlists and more.</p>
                </div>
                </div>

            </div>

            <div className='col-span-1 relative'>
                <div className='circle h-[700px] w-[650px] rounded-full z-20 flex justify-center items-center'>
                    
                    <div className='w-[642px] h-[380px] bg-[#2B0B3A] rounded-lg z-20'>
                    </div>
                    
                </div>
                
            </div>



        </div>
    </div>
  )
}

export default Projects
