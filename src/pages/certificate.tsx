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
    ]


    return (
        <div className="absolute inset-0 w-full pb-24 pt-12 bg-primary-light overflow-y-auto hide_scrollbar">
            <p className="text-3xl text-center font-medium leading-relaxed mb-4 capitalize text-linear-gradient">Online Certificates</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 m-auto px-8 max-w-final">
                {
                    certificate.map((cert, i) => (
                        <div className=" p-6 shadow-2xl aspect-auto hover:bg-white shadow-gray-400 cursor-pointer " key={i}>
                            <img src={cert.link} className="w-full" />
                        </div>
                    ))
                }
            </div>
        </div >
    )
};
