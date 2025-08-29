import {instructors} from "../constant/instructor.js";
import {useState} from "react";
import {FaInstagram, FaLinkedinIn, FaXTwitter} from "react-icons/fa6";

const Instructors = () => {
    const [isHover, setIsHover] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    return <div id='trainers' className={'flex flex-col gap-y-8 mb-32'}>
        {/*Heading Text*/}
        <div className={'flex flex-col sm:flex-row gap-x-8 gap-y-4 items-start'}>
            <h1 className={'text-4xl font-bold w-2/3'}>Meet Expert Instructor</h1>
            <p>Learn from certified yoga experts dedicated to your growth,
                Every class is designed to guide, inspire, and support you.</p>
        </div>

        {/*Instructor list*/}
        <div className={'grid grid-cols-1 sm:grid-cols-2 gap-y-8 lg:grid-cols-3 justify-items-center'}>
            {
                instructors.map((instructor, index) => (
                    <div
                        onMouseEnter={() => {
                            setCurrentIndex(index)

                            if (index === currentIndex) {
                                setIsHover(true)
                            }
                        }}
                        onMouseLeave={() => setIsHover(false)}
                        key={instructor.id}
                        className={'flex flex-col pointer-events-auto gap-y-2 relative w-80 h-96 rounded-xl '}>
                        <img src={instructor.img} alt={instructor.name}
                             className={'rounded-xl size-full absolute inset-0 object-cover'}/>

                        <div className={'absolute text-light  bg-black/40 backdrop-blur-md w-full bottom-0 flex flex-col rounded-b-xl px-4 py-1'}>
                            <h2 className={'font-semibold text-xl '}>{instructor.name}</h2>
                            <p className={'text-light/70'}>{instructor.position}</p>
                        </div>

                        {/*Icon on hover*/}
                        {
                            isHover && currentIndex === index && (
                                <div className={'absolute flex flex-col top-1 right-2 gap-y-2 '}>
                                    {
                                        [FaXTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                                            <div key={i} className={'bg-gray-300/40 backdrop-blur-lg rounded-full p-2'}>
                                                <Icon className={'text-light'}/>
                                            </div>
                                        ))
                                    }
                                </div>
                            )
                        }


                    </div>
                ))
            }
        </div>
    </div>
}
export default Instructors
