/* eslint-disable no-unused-vars */
import { benefits } from '../constant/benefits'
import BenefitIamge from '../assets/benefit1.jfif'
import { HiPlay } from 'react-icons/hi2'

const Benefits = () => {
  return (
    <div id='about' className='flex flex-col md:flex-row items-start mb-24'>
      {/* Text part */}
      <div className='flex-1 sm:flex-1/2 flex flex-col'>
        <h1 className='font-bold text-4xl mb-8'>
          Your Life For Greater <br /> Self of Yoga
        </h1>

        {/* benefit list */}
        <section className='flex flex-col gap-y-4 mb-32'>
          {benefits.map(({ id, icon: Icon, color, content, title }) => (
            <div key={id} className='flex gap-4'>
              <div
                className='rounded-md p-2 size-fit'
                style={{ background: color }}
              >
                <Icon size={32} />
              </div>

              <div className='flex flex-col gap-y-2'>
                <h1 className='text-xl font-bold'>{title}</h1>
                <p className='sm:text-sm'>{content}</p>
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* Image Part */}
      <div className='flex-1 relative sm:flex-1/2 flex items-center justify-center'>
        <img
          src={BenefitIamge}
          alt='benefit image'
          className='rounded-xl w-full object-cover h-96 m-8'
        />

        <div className='absolute bottom-10 right-4 lg:right-12 rounded-xl bg-gray-400/60 p-4 flex flex-col gap-y-4 backdrop-blur-md'>
          <h1 className='font-semibold text-light'>View Patient Stories</h1>

          <div className='bg-light/80 rounded-full flex gap-x-4 p-2 self-end'>
            <HiPlay className='text-black' />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Benefits
