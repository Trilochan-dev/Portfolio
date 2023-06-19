import { useState } from "react";
import { SiHandshake } from 'react-icons/si';

export default function Contact() {
    const [formData, setFormData] = useState({ fullname: "", email: "", message: "" });
    const [errorMsg, setErrorMsg] = useState("");
    const [showSuccessMsg, setShowSuccessMsg] = useState(false);
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const emailValregex = /^[\w.-]+@[\w.-]+\.[\w.-]+$/;
        if (!formData.fullname.trim()) {
            setErrorMsg("* Enter your full name");
        } else if (!formData.email.trim()) {
            setErrorMsg("* Enter your email address");
        } else if (!emailValregex.test((formData.email))) {
            setErrorMsg("* Enter valid email address");
        } else if (!formData.message) {
            setErrorMsg("* Enter your message for me");
        } else {
            setErrorMsg("");
            setShowSuccessMsg(true);
            setFormData({
                ...formData,
                fullname: "", email: "", message: ""
            })
        }
        setTimeout(() => {
            setShowSuccessMsg(false);
        }, 1000);
    }

    return (
        <>
            <div className="bg-white absolute inset-0 w-full overflow-auto hide_scrollbar md:py-4">
                <p className="text-3xl text-center font-medium leading-relaxed mt-2 mb-4 caitalize text-linear-gradient">Contact Me</p>
                <div className="grid lg:grid-cols-2 gap-8 max-w-final m-4 sm:m-8  lg:m-auto mt-4">
                    <div className="contact p-4 m-auto">
                        <p className="text-3xl font-medium text-gray-500 mb-1">Get in touch</p>
                        <p className="text-lg font-medium text-gray-400">My inbox is always open. Whether you have a question or just want to say hello, I will try my best to get back to you!</p>
                        <div className="form flex flex-col gap-4 my-4">
                            <input type="text" className="h-12 w-full px-4 bg-gray-100 rounded-md focus-none outline-none font-medium" placeholder="Full Name *" value={formData?.fullname} onChange={(e) => setFormData({ ...formData, fullname: e.target.value })} />
                            <input type="text" className="h-12 w-full px-4 bg-gray-100 rounded-md focus-none outline-none font-medium" placeholder="Email *" value={formData?.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                            <textarea rows={24} className="resize  h-40  text-primary-dark p-4 rounded-md focus-none outline-none font-medium bg-gray-100" placeholder="Message *" value={formData?.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
                        </div>
                        <div className="float-right">
                            <button type="submit" className={`bg-emerald-500 text-white px-4 my-4 rounded-lg h-10 text-lg font-bold flex justify-center gap-2 shadow-2xl`} onClick={handleSubmit}>
                                <p className="text-gray-200 pt-1.5">Say Hello</p>
                                <img src="./Images/welcome.gif" alt="" className="h-8 w-8" />
                            </button>
                        </div>
                        <p className="text-red-600 text-md font-medium "> {errorMsg}</p>
                    </div>
                    <div className="image">
                        <img src="./Images/website.svg" alt="" className="h-full" />
                    </div>
                </div>
            </div>
            {showSuccessMsg &&
                <p className="absolute bottom-4 right-4 bg-green-500 text-white p-4 flex items-center gap-2 px-8 rounded-lg"> <SiHandshake className="text-yellow-300 text-lg" /> Thank you for contacting me</p>
            }
        </>
    )
};
