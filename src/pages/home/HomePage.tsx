import { useReveal } from '@/shared/hooks/useReveal'
import About from './components/About/About'
import Band from './components/Band/Band'
import Cta from './components/Cta/Cta'
import Hero from './components/Hero/Hero'
import Platform from './components/Platform/Platform'
import Steps from './components/Steps/Steps'
import UseCases from './components/UseCases/UseCases'
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
