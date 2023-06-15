import { motion } from "framer-motion"
import { MdWifiCalling, MdOutgoingMail } from 'react-icons/md';
import { BiCurrentLocation } from 'react-icons/bi';
import { FaTelegramPlane } from 'react-icons/fa';

import CVButton from "../widgets/CVButton";


export default function Contact() {
    const dataList = [
        {
            name: "Location",
            icon: <BiCurrentLocation />,
            details: "Bhubaneswar, Odisha, India"
        },
        {
            name: "Email",
            icon: <MdOutgoingMail />,
            details: "trilochan97.dev@gmail.com"
        },
        {
            name: "Call",
            icon: <MdWifiCalling />,
            details: "+91-9583998665"
        }
    ]

    return (
        <div className=" h-screen bg-primary-light">
            <div className="flex justify-center items-center h-full gap-8 px-24">
                <div className=" contact-box  px-8 h-[75%] w-[30%] p-[30px]">
                    {
                        dataList.map((dl, i) => (
                            <div className="flex items-center gap-8" key={dl.name + i}>
                                <div className="text-primary-dark text-2xl bg-white p-4 rounded-full my-4 hover:bg-primary-dark hover:text-white  transition ease-in-out delay-200 cursor-pointer">
                                    {dl.icon}
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-2xl capitalize font-bold Raleway">{dl.name} :</p>
                                    <p className="text-md">{dl.details}</p>
                                </div>
                            </div>
                        ))
                    }
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119743.5337494484!2d85.75041271337584!3d20.300870219682118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33fa8!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1686668131437!5m2!1sen!2sin" width="100%" height="55%" className="mt-8"></iframe>
                </div>
                <div className="contact-box h-[75%] w-[60%] py-[30px] px-20 ">
                    <div className="grid grid-cols-2 gap-8">
                        <div className="flex flex-col gap-2 h-28">
                            <p>First Name</p>
                            <input type="text" className="text h-12 w-full" />
                            <p className="text-yellow-400">* Please enter your first name</p>
                        </div>
                        <div className="flex flex-col gap-2 h-28">
                            <p>Last Name</p>
                            <input type="text" className="text h-12 w-full" />
                            <p className="text-yellow-400">* Please enter your last name</p>

                        </div>
                        <div className="flex flex-col gap-2 h-28">
                            <p>Email</p>
                            <input type="text" className="text h-12 w-full" />
                            <p className="text-yellow-400">* Please enter your email address</p>

                        </div>
                        <div className="flex flex-col gap-2 h-28">
                            <p>Mobile</p>
                            <input type="text" className="text h-12 w-full" />
                            <p className="text-yellow-400">* Please enter your mobile number</p>

                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <p>Message</p>
                            <textarea rows={24} className="resize  h-40  text-primary-dark outline-none p-4"></textarea>
                        </div>
                    </div>
                    <div className="mt-8">
                        <CVButton title="Send Message" icon={<FaTelegramPlane />} left={true} />
                    </div>
                </div>
            </div>
        </div>
    )
};
