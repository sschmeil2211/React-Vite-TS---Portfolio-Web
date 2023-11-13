import styles from './App.module.css';
import { About } from './components/About/About'; 
import { Experience } from './components/Experience/Experience';
import { Footer } from './components/Footer/Footer';
import { Hero } from './components/Hero/Hero';
import { Knowledge } from './components/Knowledge/Knowledge';
import { NavBar } from './components/NavBar/NavBar';
import { Projects } from './components/Projects/Projects';

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Hero />
      <About />
      <Experience />
      <Knowledge />
      <Projects /> 
      <Footer />
    </div>
  )
}

export default App
