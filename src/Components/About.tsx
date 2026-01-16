import Embu from '../assets/Embu.jpg';
import Teach2Give from '../assets/Teach2Give.jpg';
import Bunimation from '../assets/Bunimation.png';  

const About = () => {
  const education = [
    { id: 1, name: 'Computer Science', description: 'at University of Embu graduated  in September 2025', image: Embu},
    { id: 2, name: 'Software Engineering', description: 'Software engineering  Graduated in December 2025', image: Teach2Give },
    { id: 3, name: 'Bunimation', description: '2D Animation ', image: Bunimation },
  ]
  return (

    <div id='about' >
        <div className='justify-center'>
            <div className='md: px-6' >
                <h1 className='text-center text-3xl font-extrabold text-cyan-400 p-10'>About me</h1>
                <p className='text-amber-50  text-center'>My name is Aky Wanjala Masoni, and I am a  2D animator ,a graphic designer and a passionate software engineer with a strong foundation in both frontend and backend technologies. 
                    I specialize in creating efficient, scalable, and user-friendly applications using modern frameworks like React and Node.js.
                    My journey in software engineering began with a curiosity for problem-solving and a desire to build impactful digital solutions.
                </p>
            </div>
             
            <div className='text-center text-3xl font-extrabold  text-cyan-400 p-10'>
                <h1>Education  </h1>
            </div>
            {/* Education cards */}
            <div className='grid md:grid-cols-3 my-8 gap-5 cursor-pointer'>
        {
          education.map(school => <div key={school.id} className='service-card flex flex-col justify-center items-center p-6 text-center text-white hover-3d'>
            <img src={school.image} alt="" className='mb-3' width={120} height={120} />
            <h6 className='text-2xl'>{school.name}</h6>
            <p className='text-base '>{school.description}</p>
          </div>)
        }
      </div>
        </div>
      </div>
  
  )
}
export default About