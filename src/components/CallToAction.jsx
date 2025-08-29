import { FaArrowRight } from 'react-icons/fa'
import CtaImage from '../assets/cta-img.jpg'
import { stackedImage } from '../constant/stackeImage.js'
import ImageScroll from '../assets/demo1.jpg'

const CallToAction = () => {
  return (
    <div className='relative mb-32 h-screen sm:h-[50vh] lg:h-[90vh]'>
      {/* Content Section */}
      <section className='p-8 flex flex-col sm:flex-row absolute size-full gap-x-4 gap-y-12 z-10'>
        <div className='flex-1 sm:flex-3/5 gap-y-12 flex flex-col justify-between text-light'>
          <div className={''}>
            <p className='mb-2 font-medium'>More Power Efficiency</p>
            <h1 className='font-bold text-5xl mb-8'>
              Where Sustainablity <br /> Meets Mediation
            </h1>

            <button className='pl-4 pr-2 py-2 flex items-center gap-x-2 rounded-full bg-gray-200 text-black font-bold w-fit'>
              Start Doing Today
              <div className='rounded-full p-2 bg-black'>
                <FaArrowRight className='text-light size-4' />
              </div>
            </button>
          </div>

          {/* bottom card */}
          <div className='flex flex-col w-80  rounded-xl gap-y-4 p-4 bg-gray-400/30 backdrop-blur-lg '>
            <div className='flex items-center gap-x-2'>
              {/* Stacked img */}
              <div className='flex items-center'>
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

              <button className='bg-gray-500/40 px-3 py-1 rounded-full backdrop-blur-lg'>
                Plus 28k
              </button>

              <p className='font-medium underline'>Try now</p>
            </div>

            <p>The perfect organizer and developer for dream Life</p>
            <hr className='text-gray-400 my-2' />
          </div>
        </div>

        {/* Right Scroller */}
        <div className='flex-1 h-full sm:flex-2/5 relative'>
          <div className='absolute bottom-2 right-0 w-72 rounded-xl p-2 bg-gray-400/60 backdrop-blur-lg flex gap-x-2'>
            <img
              src={ImageScroll}
              alt='scroller'
              className='size-12 rounded-xl'
            />

            <div>
              <h2 className='font-bold mb-1 text-light'>Improved Health</h2>
              <p className='line-clamp-2 text-light/80'>
                Experience improved strength, balance, and clarity
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Background Image */}
      <img
        src={CtaImage}
        alt={'cta-image'}
        className='w-full  mx-auto h-full object-cover brightness-50 absolute inset-0'
      />
    </div>
  )
}
export default CallToAction
