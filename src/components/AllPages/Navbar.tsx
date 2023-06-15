import Link from 'next/link';
import { FaUserAlt } from 'react-icons/fa'
import { IoDocuments } from 'react-icons/io5'
import { FaCertificate, FaGraduationCap, FaTelegramPlane } from 'react-icons/fa'
import { TfiMenu } from 'react-icons/tfi'
import { RxCross1 } from 'react-icons/rx'
import { useState } from 'react';


export default function Navbar() {
    const navItem = [
        { name: "About Me", link: "/about", icon: <FaUserAlt /> },
        { name: "Skills", link: "/skill", icon: <FaGraduationCap /> },
        { name: "Projects", link: "/project", icon: <IoDocuments /> },
        { name: "Certificates", link: "/certificate", icon: <FaCertificate /> },
        { name: "Contact", link: "/contact", icon: <FaTelegramPlane /> },
    ]
    const [menuOpen, setmenuOpen] = useState(false)
    return (
        <>
            <div className=" flex justify-between item-center py-4 mx-8">
                <Link href={"/"}> <div className="logo flex items-center mt-4">
                    <div className="bg-white h-8 w-8 text-center rounded-lg m-auto text-2xl font-bold">T</div>
                    <div className="text-2xl font-bold text-white pl-1">rilochan</div>
                </div>
                </Link>

                <div className="hire flex gap-4 items-center hidden md:block">
                    <div className=" text-white flex gap-8 text-lg font-semibold items-center">
                        {
                            navItem.map((NI,i) => (
                                <Link href={NI.link} key={i}>  <p className='text-[16px] flex items-center gap-1'> <span className='text-[16px]'> {NI.icon} </span>{NI.name}</p></Link>
                            ))
                        }
                    </div>
                    {/* <button className='bg-emerald-500 text-white px-4 py-1.5 rounded-lg text-lg font-bold'>Hire Me</button> */}
                </div>
                <div className="block md:hidden">
                    <div className="text-white text-2xl font-bold cursor-pointer" onClick={() => setmenuOpen(prev => !prev)}>
                        {!menuOpen ? <TfiMenu /> : <RxCross1 />}
                    </div>
                </div>
            </div>
            <div className={`${menuOpen ? "block" : "hidden"} block md:hidden bg-primary-light h-screen z-50 relative w-full  flex flex-col p-8 transition delay-200`}>
                {
                    navItem.map((NI,i) => (
                        <Link href={NI.link} key={i}>  <p className='text-[16px] font-bold flex items-center gap-1 uppercase text-primary-dark leading-10' onClick={() => setmenuOpen(prev => !prev)}> <span> {NI.icon} </span>{NI.name}</p></Link>
                    ))
                }
            </div>
        </>
    )
}