import {FaArrowRight} from "react-icons/fa";
import {MdOutlineEmail} from "react-icons/md";
import {HiArrowRight} from "react-icons/hi2";
import {LuFacebook, LuLinkedin, LuYoutube} from "react-icons/lu";
import {FaXTwitter} from "react-icons/fa6";
import {footerData} from "../constant/footer.js";

const Footer = () => {
    return <div className={'py-8 bg-black'}>

        <section className={'flex flex-col w-full gap-y-8 px-8'}>
            {/*Text part footer*/}
            <div className='flex flex-col sm:flex-row sm:items-center gap-4'>
                <div className={'flex flex-1 sm:flex-1/2 flex-col gap-y-2 text-light'}>
                    <h3 className='font-semibold text-light/70 '>Daily Fitness Guide</h3>

                    <h1 className='font-bold text-4xl mb-4'>
                        Your Life For Greater Self <br/>
                        Of Yoga Control
                    </h1>
                </div>

                <button className='pl-4 pr-2 py-2 flex items-center gap-x-2 rounded-full bg-gray-200 font-bold w-fit'>
                    Start Doing Today
                    <div className='rounded-full p-2 bg-black'>
                        <FaArrowRight className='text-light size-4'/>
                    </div>
                </button>
            </div>

            {/*Link list*/}
            <div className={'flex flex-col sm:flex-row gap-y-8'}>
                <div className={'flex-1 sm:flex-1/2 flex flex-col gap-y-4 '}>
                    <h2 className={'font-bold text-xl text-light/70'}>Subscribe to stay updated</h2>
                    {/*Email Input*/}
                    <div className={'relative flex items-center'}>
                        <input type={'email'} placeholder={'Your email address'}
                               className={'pl-12 pr-4 py-2 rounded-full bg-light'}
                        />
                        <MdOutlineEmail size={20} className={'absolute text-black left-4 top-2.5'}/>
                        <div className={'p-2 rounded-full bg-black text-light -ml-10'}>
                            <HiArrowRight size={16} className={''}/>
                        </div>
                    </div>

                    {/*Social Media*/}
                    <div className={'flex items-center gap-x-4 text-white/80'}>
                        {
                            [LuFacebook,LuLinkedin,FaXTwitter,LuYoutube].map((Icon, i) => (
                                <div key={i} className={'p-1 border border-gray-300 rounded-full'}>
                                    <Icon className={'size-5'}/>
                                </div>
                            ))
                        }

                    </div>
                </div>

                {/*Links*/}
                <div className={'flex-1 sm:flex-1/2 grid grid-cols-1 sm:grid-cols-3 gap-4 '}>
                    {
                        footerData.map((item) => (
                            <div key={item.id} className={'flex flex-col gap-y-3'}>
                                <h1 className={'font-bold text-xl text-light'}>{item.linkTitle}</h1>

                                <ul className={'flex flex-col gap-y-2 text-light/70'}>
                                    {
                                        item.links.map((link,i) => (
                                            <li key={i}>
                                                {link}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>

            <hr className={'text-gray-400 my-1'}/>

            <div className={'font-medium text-light w-full flex items-center justify-center '}>
                <p>
                    Copyright @2025 Kumneger Derese - All Rights Reserved
                </p>
            </div>
        </section>
    </div>
}
export default Footer
