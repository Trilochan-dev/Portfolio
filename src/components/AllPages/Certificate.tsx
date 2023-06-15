import { motion } from "framer-motion"
export default function Certificate() {
    const certificate = [
        { name: "React Js", link: "./Images/certificate/react.jpg" },
        { name: "JavaScript", link: "./Images/certificate/javaScript.jpg" },
        { name: "Python", link: "./Images/certificate/python.jpg" },
        { name: "MySQL", link: "./Images/certificate/mySql.jpg" },
        { name: "Google", link: "./Images/certificate/google.png" },
        { name: "Microsoft", link: "./Images/certificate/microsoft.jpg" },
        { name: "Intel", link: "./Images/certificate/intel.png" },
        { name: "IBM", link: "./Images/certificate/ibm.png" },
        // { name: "DS", link: "./Images/certificate/python_ds.png" }
    ]
    // const marqueeVariants = {
    //     animate: {
    //         x: [0, -1035],
    //         transition: {
    //             x: {
    //                 repeat: Infinity,
    //                 repeatType: "loop",
    //                 duration: 5,
    //                 ease: "linear",
    //             },
    //         },
    //     },
    // };

    return (
        <div className="grid grd-cols-1 sm:grid-cols-2 lg:grid-cols-3 xlg:grid-cols-4 gap-4 px-20 m-auto py-10 sm:py-20 lg:py-30 xlg:py-40 bg-primary-light h-screen overflow-y-auto">
            {
                certificate.map((cert,i) => (
                    <div className=" p-6 shadow-2xl aspect-auto shadow-primary-dark cursor-pointer hover:transform hover:scale-125 duration-1000" key={i}>
                        <img src={cert.link} className="w-full" />
                    </div>

                ))
            }
        </div>
    )
};
