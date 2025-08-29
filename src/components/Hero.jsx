import { FaArrowRight } from 'react-icons/fa'
import { tags } from '../constant'
import Navbar from './Navbar'
import { HiStar } from 'react-icons/hi'
import MainBg from '../assets/main-bg.png'
import { stackedImage } from '../constant/stackeImage.js'

const Hero = () => {
  return (
    <div
      id='home'
      className='flex z-50 relative pt-24 gap-y-12  flex-col sm:flex-row h-screen mb-32'
    >
      <img
        src={MainBg}
        alt={'main-bg'}
        className={'w-full h-full object-cover absolute inset-0'}
      />

      {/* nav */}
      <div className={'absolute inset-0 flex items-center justify-center'}>
        <Navbar />
      </div>

      <section
        className={
          'mt-8  px-8 flex flex-col gap-y-32 sm:flex-row relative w-full'
        }
      >
        {/*Left Content*/}
        <div className='flex flex-1 sm:flex-2/3 flex-col  absolute'>
          {/* Header text */}
          <div className='flex flex-col gap-y-4'>
            <h3 className='font-semibold text-xl text-light/70'>
              Daily Fitness Guide
            </h3>

            <h1 className='font-bold text-6xl mb-4 text-light'>
              Mediation's change <br /> your lifestyle
            </h1>

            <button className='pl-4 pr-2 py-2 flex items-center gap-x-2 rounded-full bg-gray-200 font-bold w-fit'>
              Get in touch
              <div className='rounded-full p-2 bg-black'>
                <FaArrowRight className='text-light size-4' />
              </div>
            </button>
          </div>

          {/* Header tags */}
          <div className='flex items-center mt-8 text-light'>
            <h3 className='font-semibold mr-4'>Popular tags</h3>{' '}
            <ul className={'flex flex-wrap gap-y-4'}>
              {tags.map(tag => (
                <li
                  key={tag.id}
                  className='bg-gray-400/50 shrink-0 backdrop-blur-2xl mx-1 rounded-full px-4 py-2'
                >
                  {tag.title}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/*Right Content*/}
        <div className='flex flex-col relative flex-1 sm:flex-1/3 h-full '>
          {/*Problem here*/}
          <div className='bg-gray-300/50 backdrop-blur-xl p-4 hidden sm:flex flex-col  absolute bottom-4 right-8 rounded-xl w-80'>
            {/* Stacked img */}
            <div className='flex items-center flex-wrap mb-2'>
              {stackedImage.map(item => (
                <div
                  key={item.id}
                  className='rounded-full border-white size-10  border -ml-2'
                >
                  <img
                    src={item.img}
                    alt={'cta-img'}
                    className={'rounded-full size-10 object-cover'}
                  />
                </div>
              ))}
            </div>

            <p>The perfect organizer and developer for dream Life.</p>
            <hr className='text-gray-400 my-4' />
            <div className='flex flex-col'>
              <div className='relative flex flex-col'>
                <h1 className='text-7xl font-bold'>4.9</h1>
                <HiStar className='absolute text-yellow-500 top-1 right-40' />
              </div>
              <p className='self-end'>(RATING)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Hero
