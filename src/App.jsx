import Faq from './components/Faq.jsx'
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'
import Features from './components/Features.jsx'
import Benefits from './components/Benefits.jsx'
import Instructors from './components/Instructors.jsx'
import CallToAction from './components/CallToAction.jsx'
import Testimonials from './components/Testimonials.jsx'

const App = () => {
  return (
    <div className={'bg-light text-zinc-950'}>
        <Hero />
      <div className=' px-8'>
        <Features />
        <Benefits />
      </div>

      <CallToAction />

      <div className='px-8'>
        <Instructors />
        <Faq />
        <Testimonials />
      </div>

        <Footer />
    </div>
  )
}

export default App
