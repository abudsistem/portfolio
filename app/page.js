import styles from './page.module.css'
import AboutMe from './about/page'
import Navbar from './components/layout/navbar/page'
import Testimonials from './testimonials/page'
import Resume from './resume/page'
import Hero from './hero/page'
import Contact from './contact/page'
import Footer from './footer/page'

export default function Home() {
  return (
    <main className={`${styles.background}`}>
      <Navbar />
      <Hero />
      <Resume/>
      <AboutMe />
      <Testimonials />
      <Contact/>
      <Footer/>
    </main>
  )
}
