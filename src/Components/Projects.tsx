
import { StarsIcon } from 'lucide-react';
import Lemcee from '../assets/Lemcee.png';
import Banje_Dishes from '../assets/Banje Dishes.png';

 const Projects = () => {
    const projects=[
        {
            title:"Lemcee",
            description:
            "Lemcee is vehicle renting system that allows users to rent vehicles for a specific period of time. I developed using React With Typescript and Hono & MSQL for the backend.",
            image:Lemcee,
            link:  "",
            github:"https://github.com/jalawan/Lemcee-Frontend" ,
        },
        {
            title:"Banje Dishes",
            description:
            "Banje Dishes is a restaurant management system that assists restaurants in their day to day operations. I developed using React With Typescript and Hono & MSQL for the backend",
            image:Banje_Dishes,
            link:  "",
            github:"https://github.com/jalawan/Banje-Restaurant" ,
        }
    ]
  return (
    <div className="md:px-10 px-7 my-8" id="projects">
        <div className='md:flex justify-center items-center my-7 '>
            <div className=' justify-center'>
                <h1 className='flex gap-3 text-4xl p-10  text-cyan-400 font-extrabold'> <StarsIcon/> My Projects <StarsIcon/>   </h1>
            </div>
        </div>
            <div className='grid grid-cols-1 md.grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center'>
                {projects.map((project,index)=>{
                    return(
                        <div 
                        key={index}
                        className='flex flex-col shadow-sm md:w-85.75 bg-[#31313F] p-4 rounded'
                        >
                            <a 
                            href={project.image}
                            target="_blank"
                            rel="noreferrer"
                            className="mb-4"
                            >
                                <img src={project.image} alt={project.title} />
                            </a>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="mt-5">
                                <button className="btn transition-all duration-500 bg-primary py-2 px-6 rounded text-white hover:bg-white hover:text-primary">
                                <a href={project.link}>Live Link</a>
                                </button>
                                <button className="btn outline py-1.5 px-9 rounded border-none ml-5 text-white ">
                                <a href={project.github}>GitHub</a>
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
       
    </div>
  )
}
export default Projects;