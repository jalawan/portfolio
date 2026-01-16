import Home from "./Components/HomePage"
import Navbar from "./Components/navbar"
import About from "./Components/About"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"  
import Footer from "./Components/Footer"

function App() {
   return (
    <>
      <div className="max-w-7xl mx-auto bg-linear-to-br from-blue-950 via-slate-900 to-black">
        <Navbar />
        <Home />
        <About />
        <Projects/>
        <Contact/>
        <Footer/>
        
      </div>
    </>
  );
}

export default App;
