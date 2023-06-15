import { IoLogoGithub, IoLogoWhatsapp } from 'react-icons/io';
import { TbCertificate } from 'react-icons/tb';
import { GrLinkedinOption } from 'react-icons/gr';
import { MdWifiCalling, MdOutgoingMail } from 'react-icons/md';
import CVButton from "../widgets/CVButton"

export default function AboutMe() {
    const personalDetails = [
        { key: "Name :", value: "Trilochan Behera" },
        { key: "Email :", value: "trilochan97.dev@gmail.com" },
        { key: "Phone :", value: "+91-9583998665" },
        { key: "Address :", value: "Bhubaneswar, Odisha, India" },
        { key: "Qualification :", value: "Master of Computer Application" },
        { key: "Language Known :", value: "English, Hindi, Odia" },
    ]

    return (
        <div className="grid grid-cols-1 h-[60vh] mb-8 shadow-4xl">
            {/* <div className="bg-primary-light h-full">
                <img src="./Images/a.png" className="bg-cover h-[60vh] w-full" />
            </div> */}
            <div className="bg-primary-dark px-8 overflow-scroll">
                <p className="text-2xl uppercase font-extrabold mt-8 text-white">My Story</p>
                <p className="indent-12 mt-2 text-white text-md break-all">
                    Experienced <em>Full stack developer</em>  with expertise in JavaScript, React (with
                    Next.js), Express.js and MongoDB . Skilled at delivering high quality software
                    applications to the clients in various industries. Proven ability to understand
                    clients needs. Passionate about solving complex problems &  delivering
                    sustainable solutions.
                </p>

                <div className="mb-4">
                    <p className="text-lg uppercase font-extrabold mt-6 text-white leading-8 col-span-2">Personal Info</p>
                    {personalDetails.map((PD,i) => (
                        <div className="flex items-center gap-4" key={i}>
                            <p className="w-[30%] font-bold text-md text-green-200 my-2">{PD.key}</p>
                            <p className="font-medium text-md text-cyan-200 my-2">{PD.value}</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between items-center">
                    <CVButton title="Download CV" icon={<TbCertificate />} />
                    <div className="flex gap-2 h-full text-[#8e8e8e] cursor-pointer">
                        <p className='text-blue-500 bg-[#ffffff] rounded-lg p-2'> <GrLinkedinOption /> </p>
                        <p className='text-red-600 bg-[#ffffff] rounded-lg p-2'> <MdOutgoingMail /> </p>
                        <p className='text-green-300 bg-[#ffffff] rounded-lg p-2'> <IoLogoWhatsapp /></p>
                        <p className='text-cyan-900 bg-[#ffffff] rounded-lg p-2'> <MdWifiCalling /></p>
                        <p className='text-black bg-[#ffffff] rounded-lg p-2'> <IoLogoGithub /></p>
                    </div>
                </div>
            </div>

        </div>
    )
};
