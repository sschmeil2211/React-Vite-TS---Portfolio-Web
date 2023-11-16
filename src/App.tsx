import styles from './App.module.css';
import { About } from './views/about/about';   
import { Experience } from './views/experience/experience';
import { Footer } from './views/footer/footer';
import { Hero } from './views/hero/hero';
import { Knowledge } from './views/knowledge/knowledge';
import { NavBar } from './views/nav_bar/nav_bar'; 
import { Projects } from './views/projects/projects';

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
