import { features } from '../constant/features'

const Features = () => {
  return (
    <div id='features' className='flex flex-col mb-32'>
      <h1 className='font-bold text-center text-4xl mb-8'>
        Start Your Journey Today
      </h1>

      {/* Feature List */}
      <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-y-8 gap-x-4'>
        {features.map(feature => (
          <div key={feature.id} className='h-96 w-80 relative rounded-xl'>
            <img
              src={feature.img}
              alt={feature.title}
              className='size-full rounded-xl object-cover'
            />

            <div className='absolute bottom-0  bg-black/10 rounded-xl backdrop-blur-3xl text-light  p-2 mx-auto inset-x-0'>
              <h2 className='font-bold'>{feature.title}</h2>
              <p>{feature.content}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
export default Features
