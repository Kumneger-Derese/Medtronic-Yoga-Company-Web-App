import FaqImage from '../assets/yoga-faq.jpg';
import {FaArrowRight} from "react-icons/fa";
import {useState} from "react";
import {faqData} from "../constant/faq.js";
import {HiPlus} from "react-icons/hi2";

const Faq = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const toggleAccordion = (index) => {
        if (currentIndex === index) {
            setCurrentIndex(null);
        } else {
            setCurrentIndex(index);
        }
    }

    return <div className={'flex flex-col mb-32'}>
        <h1 className={'text-4xl font-bold mb-8 text-center'}>Common Questions</h1>

        <section className={'flex flex-col sm:flex-row gap-8 items-center '}>
            {/*Left Section*/}
            <div className={'flex-1 sm:flex-1/2 flex flex-col gap-y-4 rounded-xl relative '}>
                <img src={FaqImage} alt="faq-image" className={'rounded-xl h-96 w-full object-cover bg-top mx8'}/>

                <div className={'flex flex-col  gap-y-4 absolute bottom-2 p-2 rounded-xl'}>
                    <h1 className={'font-bold text-2xl text-light '}>Need any help? Don't <br/>
                        hesitate to join us
                    </h1>

                    <button
                        className='pl-4 pr-2 py-2 flex items-center gap-x-2 rounded-full bg-gray-200 font-bold w-fit'>
                        Get in touch
                        <div className='rounded-full p-2 bg-black'>
                            <FaArrowRight className='size-4 text-light '/>
                        </div>
                    </button>
                </div>
            </div>

            {/*Left Section*/}
            <div className={'flex-1 sm:flex-1/2 flex flex-col gap-y-4'}>
                {
                    faqData.map((faq, index) => (
                        <div key={faq.id} className={' flex flex-col'}>
                            <div className={'flex items-center justify-between bg-black/40 text-light/90 p-2 rounded-t-xl'}>
                                <h1 onClick={() => toggleAccordion(index)}
                                    className={'font-bold text-xl cursor-pointer flex-9/12 '}>
                                    {faq.title}
                                </h1>

                                <div className={'p-1 flex-3/12 rounded-full bg-light max-w-fit cursor-pointer'}>
                                    <HiPlus strokeWidth={1.2} className={'text-black '}
                                            onClick={() => toggleAccordion(index)}/>
                                </div>
                            </div>


                            {
                                currentIndex === index && (
                                    <div className={'bg-black/20 p-2 rounded-b-xl'}>
                                        {faq.description}
                                    </div>
                                )
                            }

                        </div>
                    ))
                }
            </div>
        </section>
    </div>
}
export default Faq
