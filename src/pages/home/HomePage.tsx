import { useReveal } from '@/shared/hooks'
import About from './components/About'
import Band from './components/Band'
import Cta from './components/Cta'
import Hero from './components/Hero'
import Platform from './components/Platform'
import Steps from './components/Steps'
import UseCases from './components/UseCases'
import styles from './HomePage.module.css'

const HomePage = () => {
  useReveal()

  return (
    <div className={styles.home}>
      <Hero />
      <About />
      <Platform />
      <Steps />
      <Band />
      <UseCases />
      <Cta />
    </div>
  )
}

export default HomePage
