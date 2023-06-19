import Link from 'next/link';
import { CgBoy } from 'react-icons/cg'
import { IoMdSettings } from 'react-icons/io'
import { RiCodeSSlashLine } from 'react-icons/ri'
import { MenuBar } from './Menu/MenuBar';
import { FaCertificate, FaGraduationCap, FaTelegramPlane } from 'react-icons/fa'

export default function Navbar() {
    const navItem = [
        { name: "About Me", link: "/about", icon: <CgBoy /> },
        { name: "Skills", link: "/skill", icon: <IoMdSettings /> },
        { name: "Experience", link: "/experience", icon: <FaGraduationCap /> },
        { name: "Projects", link: "/project", icon: <RiCodeSSlashLine /> },
        { name: "Certificates", link: "/certificate", icon: <FaCertificate /> },
        { name: "Contact", link: "/contact", icon: <FaTelegramPlane /> },
    ]
    return (
        <>
            <div className=" flex flex-row justify-between items-center py-4 mx-8 mt-2">
                <Link href={"/"}> <div className="logo flex items-center">
                    <div className="bg-white h-8 w-8 text-center rounded-lg m-auto text-2xl font-bold">T</div>
                    <div className="text-2xl font-bold text-white pl-1">rilochan </div>
                </div>
                </Link>

                <div className="hire flex gap-4 items-center hidden md:block">
                    <div className=" text-white flex gap-4 lg:gap-6 text-lg font-semibold items-center">
                        {
                            navItem.map((NI, i) => (
                                <Link href={NI.link} key={i}>  <p className='text-[14px] lg:text-lg flex items-center gap-1'> <span className='text-[18px] text-yellow-300'> {NI.icon} </span>{NI.name}</p></Link>
                            ))
                        }
                    </div>
                </div>
                <div className="block md:hidden">
                    <div className="text-lg uppercase font-bold cursor-pointer ">
                        <MenuBar />
                    </div>
                </div>
            </div>
        </>
    )
}
