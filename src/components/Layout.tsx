import { FaHome } from 'react-icons/fa';
import { IoIosContact, IoLogoGithub, IoLogoWhatsapp } from 'react-icons/io';
import { HiCode } from 'react-icons/hi';
import { TbCertificate } from 'react-icons/tb';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { FiMail } from 'react-icons/fi';
import { GrLinkedinOption } from 'react-icons/gr';
import { MdWifiCalling, MdOutgoingMail } from 'react-icons/md';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Banner from './AllPages/Banner';
import Navbar from './AllPages/Navbar';

import { motion, AnimatePresence } from "framer-motion";

const variants = {
    in: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 1.5,
            delay: 0.2
        }
    },
    out: {
        opacity: 0,
        scale: 1,
        y: 100,
        transition: {
            duration: 1.5
        }
    }
};

export default function Layout({ children }: any) {
    const [isActive, setIsActive] = useState(1) as any;
    const { asPath } = useRouter();

    return (
        <>
            <div className=" h-full  overflow-hidden">
                {/* <div className=" text-center text-[#9d8080] font-bold cursor-pointer h-screen bg-[#1f2849] w-12 justify-between flex flex-col pb-4">
                    <p className="text-4xl text-emerald-500 bg-black py-4">T</p>
                    <div className="flex flex-col gap-4 items-center text-[20px]">
                        <p className={`${isActive == 1 && "text-emerald-500"} hover:text-emerald-500`} onClick={() => handleClick(1, "")}><FaHome /></p>
                        <p className={`${isActive == 2 && "text-emerald-500"} hover:text-emerald-500`} onClick={() => handleClick(2, "about")}><IoIosContact /></p>
                        <p className={`${isActive == 3 && "text-emerald-500"} hover:text-emerald-500`} onClick={() => handleClick(3, "skills")}><HiCode /></p>
                        <p className={`${isActive == 5 && "text-emerald-500"} hover:text-emerald-500`} onClick={() => handleClick(5, "projects")}><HiOutlineDocumentText /></p>
                        <p className={`${isActive == 4 && "text-emerald-500"} hover:text-emerald-500`} onClick={() => handleClick(4, "certificate")}><TbCertificate /></p>
                        <p className={`${isActive == 6 && "text-emerald-500"} hover:text-emerald-500`} onClick={() => handleClick(6, "contact")}><FiMail /></p>
                    </div>
                    <div className="flex flex-col gap-2 items-center text-[16px]">
                        <p className='hover:text-blue-500'> <GrLinkedinOption /> </p>
                        <p className='hover:text-red-600'> <MdOutgoingMail /> </p>
                        <p className='hover:text-green-300'> <IoLogoWhatsapp /></p>
                        <p className='hover:text-cyan-300'> <MdWifiCalling /></p>
                        <p className='hover:text-black'> <IoLogoGithub /></p>
                    </div>
                </div> */}
                <div className='max-w-[1640px] m-auto h-8 mb-12'>
                    <Navbar />
                </div>
                <div className='h-[calc(100%-32px)] '>
                    <AnimatePresence initial={false}>
                        <motion.div
                            key={asPath}
                            variants={variants}
                            animate="in"
                            initial="out"
                        >
                            {children}
                        </motion.div>
                    </AnimatePresence>
                </div>

                
                {/* <div>
                    <Banner />
                </div> */}
                {/* <div className="relative">
        <img src="/images/banners.png" className="h-screen  w-full bg-cover"/> 
            <div className="absolute top-[45%] right-[30%] flex justify-center items-center flex-col">
            <div className="w-max text-center">
                <h1 className="w-full pr-5 text-4xl text-white font-bold"> Hi, I am <span className="text-emerald-400">Trilochan</span>. </h1>
                </div>
                <p className="text-4xl font-bold text-white pl-2">I design & develop web applications.</p>
                
                <div className="w-max text-center">
                 <h1 className=" animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-xl text-white font-bold text-center"> Full Stack Developer </h1>

                 <button className='bg-emerald-500 text-white px-4 py-1.5 my-4 rounded-lg uppercase font-bold text-xs'>Contact Me</button>
                </div>
                </div>

               
        </div> */}

            </div>
        </>
    )
}