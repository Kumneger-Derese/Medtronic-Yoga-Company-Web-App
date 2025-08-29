import {testimonials} from "../constant/testimonials.js";
import {FaQuoteLeft,FaArrowRight} from "react-icons/fa6";

const Testimonials = () => {
    return <div id='testimonials' className={'flex flex-col gap-y-8 mb-32'}>
   <div className={'flex flex-col sm:flex-row gap-y-8 sm:items-center justify-between'}>
       <h1 className={'font-bold text-4xl'}>What Our Client Says</h1>
       <button className='pl-4 pr-2 py-2 flex items-center gap-x-2 rounded-full bg-black text-light font-bold w-fit'>
           View All Reviews
           <div className='rounded-full p-2 bg-light'>
               <FaArrowRight className='text-black size-4' />
           </div>
       </button>
   </div>

        {/*Testimonial list*/}
        <section className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center'}>
            {
                testimonials.map((testimonial) => (
                    <div key={testimonial.id}
                         className={`flex flex-col gap-y-2 p-4 rounded-xl bg-gray-300/40
                         `}>
                        <FaQuoteLeft/>
                        <h1 className={'font-bold text-xl text-black/90'}>{testimonial.highlight}</h1>
                        <p>{testimonial.quote}</p>

                        <hr className={'text-gray-400 my-2'}/>
                        <div className={'flex flex-col'}>
                            <h2 className={'font-bold text-black/80'}>
                                {testimonial.name}
                            </h2>
                            <p className={'text-sm'}>{testimonial.place}</p>
                        </div>
                    </div>
                ))
            }
        </section>
    </div>
}
export default Testimonials
