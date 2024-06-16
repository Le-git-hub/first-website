import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Work />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
}
export default App;