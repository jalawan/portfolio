import { motion } from "framer-motion"
import { Typewriter } from "react-simple-typewriter";
import img1 from "../assets/IMG-20250912-WA0041.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen  text-white flex items-center"
    >
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1 space-y-6 text-center md:text-left"
        >
          <p className="text-lg text-blue-300 tracking-wide">
            Hello, my name is
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            <span className="bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              <Typewriter
                words={["Aky Wanjala "]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={120}
                deleteSpeed={80}
                delaySpeed={2000}
              />
            </span>
          </h1>

          <p className="text-gray-300 max-w-xl">
            A passionate Full-Stack Developer focused on building clean,
            scalable, and user-friendly web applications.
          </p>

          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-medium shadow-lg"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-black transition font-medium"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative">
            <div className="absolute  rounded-2xl bg-blue-500 blur-2xl opacity-20"></div>

            <img
              src={img1}
              alt="Aky Wanjala Masoni"
              className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-2xl border-2 border-blue-500 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
