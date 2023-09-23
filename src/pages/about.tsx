import Link from 'next/link';
import { BsPatchCheckFill } from 'react-icons/bs';
import AboutMe from '@/components/AllPages/AboutMe';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function About() {
    const { asPath } = useRouter();
    const path = asPath.split('/');
    const [section, setSection] = useState(path[path.length - 1]);
    const header = [
        { name: "About Me", section: "about" },
    ]
    return (
        <div className="bg-white absolute inset-0 w-full m-auto overflow-auto hide_scrollbar md:py-4">
            <div className="lg:11/12 xl:w-9/12 lg:mx-auto mb-8">
                <header className="flex flex-wrap items-center p-4 md:py-8">
                    <div className="md:w-3/12">
                        <img className="w-20 h-20 sm:h-32 sm:w-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-primary-dark p-1" src="./Images/trilochan.jpeg" alt="profile" />
                    </div>
                    <div className="w-8/12 md:w-7/12 ml-4">
                        <div className="flex flex-wrap items-center mb-4">
                            <h2 className=" text-xl md:text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0">
                                Trilochan Behera
                            </h2>
                            <span className="inline-block ml-2 text-blue-500 
                               relative mr-6 text-xl transform -translate-y-1">
                                <BsPatchCheckFill />
                            </span>
                            <Link href="https://www.linkedin.com/in/trilochanbehera/" className="bg-blue-500 px-2 py-1 text-white font-semibold text-sm rounded text-center sm:inline-block block" target="_blank">Follow</Link>
                        </div>

                        <ul className="hidden md:flex space-x-8 mb-4">
                            <Link href={"/experience"}>
                                <li>
                                    <span className="font-semibold cursor-pointer hover:text-blue-500">2+ Years </span>
                                    Exp.
                                </li>
                            </Link>
                            <Link href={"/skill"}>
                                <li>
                                    <span className="font-semibold cursor-pointer hover:text-blue-500">25+ </span>
                                    Skills
                                </li>
                            </Link>
                            <Link href="https://www.linkedin.com/in/trilochanbehera/" target='__blank'>
                                <li>
                                    <span className="font-semibold cursor-pointer hover:text-blue-500">500+  </span>
                                    Connections
                                </li>
                            </Link>
                        </ul>

                        <div className="hidden md:block">
                            <h1 className="font-medium">Mr Trilochan Behera</h1>
                            <p className='font-bold shadow-2xl'>{`< MERN Developer 🚀/>`}</p>
                            <span>Coding, Mentoring and Music ...</span>
                        </div>

                    </div>

                    <div className="md:hidden text-sm my-2">
                        <h1 className="font-semibold">Mr Trilochan Behera</h1>
                        <p className='font-bold shadow-2xl'>{`< MERN Developer 🚀/>`}</p>
                        <span>Coding, Mentoring and Music ...</span>
                    </div>

                </header>

                <div className="px-0 md:px-3">
                    <ul className="flex md:hidden justify-around space-x-8 border-t text-center p-2 text-gray-600 leading-snug text-sm">
                        <Link href={"/experience"}>
                            <li>
                                <span className="font-semibold cursor-pointer hover:text-blue-500">2+ Years </span>
                                Exp.
                            </li>
                        </Link>
                        <Link href={"/skill"}>
                            <li>
                                <span className="font-semibold cursor-pointer hover:text-blue-500">25+ </span>
                                Skills
                            </li>
                        </Link>
                        <Link href="https://www.linkedin.com/in/trilochanbehera/" target='__blank'>
                            <li>
                                <span className="font-semibold cursor-pointer hover:text-blue-500">500+  </span>
                                Connections
                            </li>
                        </Link>
                    </ul>

                    <ul className="flex items-center justify-around md:justify-center space-x-12 uppercase tracking-widest font-semibold text-xs text-gray-600 border-t">
                        {header.map((h, i) => (
                            <li className={`${section === h.section && "border-t-2 border-gray-700"}  md:-mt-px text-gray-700 cursor-pointer`} key={h.section + i}>
                                <p className="inline-block p-2 text-linear-gradient text-lg capitalize" onClick={() => setSection(h.section)}>{h.name}</p>
                            </li>
                        ))}
                    </ul>
                    <AboutMe />
                </div>
            </div>
        </div>
    )
}
