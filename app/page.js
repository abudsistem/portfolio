import Image from 'next/image'
import styles from './page.module.css'
import AboutMe from './about/page'
import Navbar from './components/layout/navbar/page'

export default function Home() {
  return (
    <main className={`${styles.background}`}>
      <Navbar />
      <AboutMe />
    </main>
  )
}
