import Link from 'next/link';
import CVButton from "../widgets/CVButton"
import { IoLogoGithub, IoLogoWhatsapp } from 'react-icons/io';
import { GrLinkedinOption } from 'react-icons/gr';
import { MdOutgoingMail } from 'react-icons/md';
import { TbCertificate } from 'react-icons/tb';
import { MdCall } from 'react-icons/md';
import { useEffect, useState } from 'react';


export default function AboutMe() {
    const personalDetails = [
        { key: "Name :", value: "Trilochan Behera" },
        { key: "Email :", value: "trilochanbeherak@gmail.com" },
        { key: "Phone :", value: "+91-9583998665" },
        { key: "Address :", value: "Bhubaneswar, Odisha, India" },
        { key: "Qualification :", value: "Master of Computer Application" },
        { key: "Language Known :", value: "English, Hindi, Odia" },
    ]
    const [experience, setExperience] = useState(0);
    const [age, setAge] = useState(27);
    useEffect(() => {
        const startDate = new Date('2021-11-08');
        const birthDate = new Date('1997-02-28');
        const currentDate = new Date();

        const diffInMonths = (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
            currentDate.getMonth() - startDate.getMonth();
        const decimalExperience = diffInMonths % 12 === 0 ? Math.round(diffInMonths / 12) : (diffInMonths % 12) <= 6 ? Math.floor(diffInMonths / 12) + 0.5 : Math.floor(diffInMonths / 12) + 1;


        let years = currentDate.getFullYear() - birthDate.getFullYear();
        let months = currentDate.getMonth() - birthDate.getMonth();

        const totalAge = 12 - months > 6 ? years : years + 1
        setAge(totalAge)
        setExperience(decimalExperience);
    }, []);

    return (
        <>
            <div className="md:p-16">
                <div className="p-8 bg-white shadow mt-24">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                            <div>
                                <Link href={"/experience"}><p className="font-bold text-gray-700 text-xl hover:text-blue-500">{experience} yrs</p> </Link>
                                <p className="text-gray-400">Experience</p>
                            </div>
                            <div>
                                <Link href={"/skill"}> <p className="font-bold text-gray-700 text-xl hover:text-blue-500">25+</p></Link>
                                <p className="text-gray-400">Skills</p>
                            </div>
                            <div>
                                <Link href="https://www.linkedin.com/in/trilochanbehera/" target='__blank'> <p className="font-bold text-gray-700 text-xl hover:text-blue-500">500+</p></Link>
                                <p className="text-gray-400">Connections</p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute overflow-hidden inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500 p-2">
                                <img src="./Images/trilochan.jpeg" className='rounded-full' alt="profile" />
                            </div>
                        </div>
                        <div className="space-x-8 flex items-center mt-32 md:mt-0 justify-center">
                            <div className="flex gap-2 h-full text-[#8e8e8e] cursor-pointer text-2xl">
                                <Link href="https://www.linkedin.com/in/trilochanbehera/"><p className='text-blue-500 bg-[#ffffff] rounded-lg p-2'> <GrLinkedinOption /> </p>
                                </Link>
                                <Link href="mailto:trilochanbeherak@gmail.com"> <p className='text-red-600 bg-[#ffffff] rounded-lg p-2'> <MdOutgoingMail /> </p>
                                </Link>
                                <Link href="https://wa.me/+919583998665"><p className='text-green-300 bg-[#ffffff] rounded-lg p-2'> <IoLogoWhatsapp /></p>
                                </Link>
                                <Link href="tel:+919583998665"><p className='text-cyan-900 bg-[#ffffff] rounded-lg p-2'> <MdCall /></p></Link>
                                <Link href="https://github.com/trilochan-behera-dev"><p className='text-black bg-[#ffffff] rounded-lg p-2'> <IoLogoGithub /></p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 text-center border-b pb-12">
                        <h1 className="text-4xl font-medium text-gray-700">Trilochan Behera, <span className="font-light text-gray-500">{age}</span></h1>
                        <p className='font-bold shadow-2xl'>{`< MERN Developer 🚀/>`}</p>
                        <p className="mt-2 text-black">Master of Computer Application (MCA)</p>
                        <p className="mt-6 text-gray-500">Bhubaneswar, Odisha, India</p>
                        <p className="mt-2 text-gray-500">Coding, Mentoring and Music ...</p>
                    </div>
                    <div className="mt-12 flex flex-col justify-center">
                        <p className="text-gray-600 text-center font-light lg:px-16">
                            Experienced MERN Stack Developer with more than two years of proven expertise in building full-stack applications using modern
                            JavaScript frameworks. Skilled in problem-solving, mentoring junior developers, and collaborating with global teams. Specialized in domains like e-commerce, healthcare, forums, finance and music.
                        </p>
                        <div className='text-center'>
                            <Link href={"/skill"}><button className="text-indigo-500 py-2 px-4  font-medium mt-4">
                                View Skills
                            </button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};


{/* <div className=" flex items-center justify-center md:px-5 text-start">
                            <div className="w-96 rounded-lg shadow-xl bg-gray-900 text-white">
                                <div className="border-b border-gray-800 px-8 py-3">
                                    <div className="inline-block w-3 h-3 mr-2 rounded-full bg-red-500">
                                    </div>
                                    <div className="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-300">
                                    </div>
                                    <div className="inline-block w-3 h-3 mr-2 rounded-full bg-green-400">
                                    </div>
                                </div>

                                <div className="px-8 py-6">
                                    <p><em className="text-blue-400">const</em> <span className="text-green-400">aboutMe</span> <span className="text-pink-500">=</span> <em className="text-blue-400">function</em>() {"{"}</p>
                                    <p>&nbsp;&nbsp;<span className="text-pink-500">return</span> {"{"}</p>
                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;name: <span className="text-yellow-300">'Scott Windon'</span>,</p>
                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;position: <span className="text-yellow-300">'fullstack-developer'</span>,</p>
                                    <p>&nbsp;&nbsp;&nbsp;&nbsp;website: <span className="text-yellow-300">'<a href="https://scottwindon.com" target="_blank" className="text-yellow-300 hover:underline focus:border-none">https://scottwindon.com</a>'</span>,</p>
                                    <p>&nbsp;&nbsp;{"}"}</p>
                                    <p>{"}"}</p>
                                </div>

                            </div>

                        </div> */}