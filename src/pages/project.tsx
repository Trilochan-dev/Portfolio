import Link from "next/link"
import { IoLogoGithub } from "react-icons/io"
import { TbWorldWww } from "react-icons/tb"

export default function Project() {
    const projects = [
        {
            name: "Fintrack",
            gitLink: "https://github.com/trilochan-behera-dev/FinTrack",
            webLink: "https://fintracks.vercel.app/",
            tags: ["Finance", "Savings", "Expense"],
            title: "Finance Tracking platform",
            image: "./Images/project/fintrack.png",
            projectFor: "Personal",
            desc: "Empower your financial journey with our intuitive finance tracking website. Seamlessly manage expenses, track income, and gain valuable insights into your financial health for a more secure and informed future."
        },
        {
            name: "Portfolio",
            gitLink: "https://github.com/trilochan-behera-dev/Portfolio",
            webLink: "https://trilochan-behera.vercel.app/",
            tags: ["Personal", "Portfolio"],
            title: "Personal Portfolio",
            image: "./Images/project/portfolio.png",
            projectFor: "Personal",
            desc: "Welcome to my personal portfolio website, where creativity meets functionality. Explore my diverse projects, delve into my skills and experiences, and discover how I bring innovation and passion to every endeavor."
        },
        {
            name: "TimeWise",
            gitLink: "https://github.com/trilochan-behera-dev/Time-Wise",
            webLink: "https://timewise.vercel.app/",
            tags: ["Google", "Calendar", "Events"],
            title: "Simple Calendar",
            image: "./Images/project/calendar.jpg",
            projectFor: "Personal",
            desc: "This project aims to create a calendar design like google and user can create, update and delete event."
        },
        // {
        //     name: "Online Invoice App",
        //     gitLink: "https://github.com/trilochan-behera-dev/invoice_app",
        //     webLink: "https://simple-invoice-app.vercel.app/",
        //     tags: ["Invoice", "Tax", "Profit"],
        //     title: "Simple invoice app",
        //     image: "./Images/project/invoice.png",
        //     projectFor: "Personal",
        //     desc: "This project aims to create a simple invoice data, show the calculate data and update or delete the data."
        // },
        {
            name: "Book Slot Now",
            gitLink: "https://github.com/trilochan-behera-dev/BookYourSlot",
            webLink: "",
            tags: ["Covid", "Healthcare"],
            title: "Healthcare",
            image: "./Images/project/vaccine.jpg",
            projectFor: "Personal",
            desc: "The project aims to develop a slot booking portal. The portal will streamline the process of scheduling appointments, eliminating the need for manual coordination and allowing users to book slots at their convenience."
        },
        {
            name: "E-learning",
            gitLink: "https://github.com/trilochan-behera-dev/E-Learning",
            webLink: "",
            tags: ["Online-course", "Leaning"],
            title: "Online learning",
            image: "./Images/project/elearning.jpg",
            projectFor: "Personal",
            desc: "This project aims to develop an eLearning course provider portal, a comprehensive online platform that offers a variety of courses to learners. The portal will provide a user-friendly interface for learners to browse, enroll in, and access courses."
        },
        {
            name: "Alumni Feedback System",
            gitLink: "https://github.com/trilochan-behera-dev/Alumni_feeback_system",
            webLink: "",
            tags: ["Alumni", "Feedback"],
            title: "Institute",
            image: "./Images/project/alumni.jpg",
            projectFor: "Personal",
            desc: "This project aims to gather feedback from alumni to gain insights into their experiences and collect suggestions. By reaching out to past graduates, the project seeks to understand their perspectives, identify areas of strength and weakness, and implement changes for continuous improvement."
        }
    ]

    return (
        <div className="bg-white absolute inset-0 w-full overflow-auto hide_scrollbar py-4 pb-8">
            <p className="text-3xl text-center font-medium leading-relaxed my-3 capitalize text-linear-gradient">Projects</p>
            <div className="grid lg:grid-cols-2 xlg:grid-cols-3 gap-8 max-w-final m-auto px-8 sm:px-20 md:px-32 lg:px-8">

                {
                    projects.map((pro, index) => (
                        <div className=" bg-white rounded-lg shadow-lg p-8 h-fit " key={index}>
                            <div className="sm:flex items center gap-2">
                                <div className="w-full sm:w-4/5 flex flex-col">
                                    <p className="text-md font-bold text-green-800 uppercase">{pro.name}</p>
                                    <p className="font-bold text-lg text-gray-600 leading-6"><span className="sm:block text-base"> {pro.title} </span></p>
                                    <p className={`font-semibold text-sm ${pro.projectFor === "Office" ? "text-blue-500" : "text-green-500"}`}> # {pro.projectFor} Project</p>
                                </div>
                                <div className="w-full sm:w-1/5 h-20 my-auto">
                                    <img src={pro.image} alt={pro.name} className="h-full object-cover" />
                                </div>
                            </div>
                            <div className="my-4">
                                <p className="text-sm font-semibold text-gray-400 h-16 line-clamp-3">{pro.desc}</p>
                            </div>
                            <div className="my-4 flex flex-nowrap gap-2 items-center">
                                {pro.tags.map((p, i) => (
                                    <p className="bg-gray-300 text-xs text-black px-3 rounded-lg py-1" key={i}>{p}</p>
                                ))}
                            </div>
                            <div className="mt-2 flex flex-nowrap gap-4 items-center text-lg">
                                {
                                    pro?.gitLink ?
                                        <Link href={pro?.gitLink} target="_blank">
                                            <p className='text-blue-400'> <IoLogoGithub /></p>
                                        </Link> :
                                        <p className='text-gray-800'> <IoLogoGithub /></p>
                                }
                                {
                                    pro?.webLink ?
                                        <Link href={pro?.webLink} target="_blank">
                                            <p className='text-blue-400'> <TbWorldWww /></p>
                                        </Link> :
                                        <p className='text-gray-800'> <TbWorldWww /></p>
                                }

                            </div>
                        </div>
                    ))
                }
            </div >
        </div >
    )
};
