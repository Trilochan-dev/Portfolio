import Link from 'next/link';
import CVButton from "../widgets/CVButton"
import { IoLogoGithub, IoLogoWhatsapp } from 'react-icons/io';
import { GrLinkedinOption } from 'react-icons/gr';
import { MdOutgoingMail } from 'react-icons/md';
import { TbCertificate } from 'react-icons/tb';
import { MdCall } from 'react-icons/md';


export default function AboutMe() {
    const personalDetails = [
        { key: "Name :", value: "Trilochan Behera" },
        { key: "Email :", value: "trilochanbeherak@gmail.com" },
        { key: "Phone :", value: "+91-9583998665" },
        { key: "Address :", value: "Bhubaneswar, Odisha, India" },
        { key: "Qualification :", value: "Master of Computer Application" },
        { key: "Language Known :", value: "English, Hindi, Odia" },
    ]
    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 bg-primary-dark divide-y-2 md:divide-x-2 ">
            <div className="image col-span-3 px-4">
                <p className="text-2xl uppercase font-extrabold mt-8 text-white">My Story</p>
                <p className="indent-16 mt-2 text-gray-300 text-md break-words font-bold">
                    Unleashing my expertise in crafting user-friendly, cutting-edge web applications that precisely align with clients unique requirements. With meticulous attention to detail, I focus on building scalable and high-performance solutions that seamlessly integrate innovative design elements, ensuring an exceptional user experience. My commitment to excellence drives me to deliver bespoke web applications that surpass expectations, blending form and function harmoniously. By harnessing the power of robust technologies and a keen eye for aesthetics, I engineer elegant web solutions that propel businesses forward in the digital landscape. Emphasizing precision, scalability, and performance, I am dedicated to delivering remarkable web experiences that captivate users and contribute to the success of my clients.
                </p>
                <CVButton title="My Resume" icon={<TbCertificate />} />
            </div>
            <div className="col-span-2 px-4">
                <p className="text-lg uppercase font-extrabold mt-6 text-white leading-8 col-span-2">Personal Info</p>
                {personalDetails.map((PD, i) => (
                    <div className="flex items-center gap-4 " key={i}>
                        <p className="w-[33%] font-bold text-[12px] xs:text-[14px] sm:text-[14px] md:text-[16px] lg:text-[14px] xl:text-[15px] text-green-200 my-2 whitespace-nowrap">{PD.key}</p>
                        <p className="font-medium text-[12px] xs:text-[14px] sm:text-[14px] md:text-[16px] lg:text-[14px] xl:text-[15px] text-cyan-200 my-2">{PD.value}</p>
                    </div>
                ))}
                <div className="flex justify-between items-center my-8">
                    <div className="flex gap-2 h-full text-[#8e8e8e] cursor-pointer">
                        <Link href="https://www.linkedin.com/in/trilochanbehera/"><p className='text-blue-500 bg-[#ffffff] rounded-lg p-2'> <GrLinkedinOption /> </p></Link>
                        <Link href="mailto:trilochanbeherak@gmail.com"> <p className='text-red-600 bg-[#ffffff] rounded-lg p-2'> <MdOutgoingMail /> </p></Link>
                        <Link href="https://wa.me/+919583998665"><p className='text-green-300 bg-[#ffffff] rounded-lg p-2'> <IoLogoWhatsapp /></p></Link>
                        <Link href="tel:+919583998665"><p className='text-cyan-900 bg-[#ffffff] rounded-lg p-2'> <MdCall /></p></Link>
                        <Link href="https://github.com/trilochan-behera-dev"><p className='text-black bg-[#ffffff] rounded-lg p-2'> <IoLogoGithub /></p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
};
