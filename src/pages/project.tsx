export default function Project() {
    const projects = [
        {
            name: "Portfolio",
            link: "",
            tags: ["#Personal", "#Portfolio"],
            title: "Personal Portfolio website",
            image: "./Images/project/portfolio.png",
            desc: "This project is my Personal Porfolio website."
        },
        {
            name: "4hamlet",
            link: "",
            tags: ["#Health", "#Treatment"],
            title: "Sexual health medicare",
            image: "./Images/project/hamlet.jpeg",
            desc: "4hamlet projects based on online telemedicine and a variety of customized treatment plans for men's health.It's a healthcare telemedicine ecommerce store with a user-friendly medicine purchase questionnaire and an order management admin panel, including email notifications and order tracking with payment gateway."
        },
        {
            name: "Epiq-Script",
            link: "",
            tags: ["#Health", "#Ecommerce"],
            title: "Sexual Health ecommerce",
            image: "./Images/project/epiq.jpeg",
            desc: "A HIPAA-compliant telemedicine e-commerce store hair ,skin sexual health & erectile dysfunction Treatment with a user-friendly medicine purchase questionnaire and an order management admin panel, including email notifications and parcel tracking with payment gateway."
        },
        {
            name: "Online Discussion Forum",
            link: "",
            tags: ["#Education", "#Discussion"],
            title: "Online message platform",
            image: "./Images/project/forum.jpeg",
            desc: "The project aims to develop an online discussion forum, providing a platform for users to engage in discussions, ask questions, share knowledge, and collaborate with others on various topics of interest."
        },
        {
            name: "Talent Acquisition System",
            link: "",
            tags: ["#Interview", "#Hiring"],
            title: "Interview process management",
            image: "./Images/project/interview.png",
            desc: "The project aims to providing a comprehensive platform for organizations to streamline their recruitment process. The system will automate various stages of the hiring process, from candidate applications and screening to interview scheduling and selection, ultimately facilitating efficient and effective talent acquisition."
        },
        {
            name: "Book Slot Now",
            link: "",
            tags: ["#Covid", "#Health"],
            title: "Covid test slot booking",
            image: "./Images/project/vaccine.jpg",
            desc: "The project aims to develop a slot booking portal. The portal will streamline the process of scheduling appointments, eliminating the need for manual coordination and allowing users to book slots at their convenience."
        },
        {
            name: "E-learning",
            link: "",
            tags: ["#Online-course", "#Leaning"],
            title: "Online learning website",
            image: "./Images/project/elearning.jpg",
            desc: "This project aims to develop an eLearning course provider portal, a comprehensive online platform that offers a variety of courses to learners. The portal will provide a user-friendly interface for learners to browse, enroll in, and access courses."
        },
        {
            name: "Alumni Feedback System",
            link: "",
            tags: ["#Alumni", "#Feedback"],
            title: "Alumni feedback for institution",
            image: "./Images/project/alumni.jpg",
            desc: "This project aims to gather feedback from alumni to gain insights into their experiences and collect suggestions. By reaching out to past graduates, the project seeks to understand their perspectives, identify areas of strength and weakness, and implement changes for continuous improvement."
        }
    ]

    return (
        <div className="bg-white absolute inset-0 w-full overflow-auto hide_scrollbar py-4">
            <p className="text-3xl text-center font-medium leading-relaxed mt-2 mb-4 capitalize text-linear-gradient">Projects</p>
            <div className="grid grd-cols-1 sm:grid-cols-2 lg:grid-cols-3 xlg:grid-cols-4 gap-4 m-auto px-8 max-w-final">
                {
                    projects.map((pdata, i) => (
                        <div className="h-96 w-full flip" key={i}>
                            <div className="flip-content">
                                <div className="flip-front rounded shadow-2xl">
                                    <img className="w-full h-60" src={pdata.image} alt="image" />
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2 text-cyan-600">{pdata.name}</div>
                                        <p className="text-gray-700 text-base">
                                            {pdata.title}
                                        </p>
                                    </div>
                                    <div className="px-6 pb-2">
                                        {
                                            pdata.tags.map((tdata, i) => (
                                                <span className="inline-block bg-gray-200 rounded-xl items-center  px-3 py-1.5 text-xs font-semibold text-gray-700 mr-2 mb-2 lowercase" key={i}>{tdata}</span>
                                            )
                                            )
                                        }
                                    </div>
                                </div>
                                <div className="flip-back bg-cyan-600 p-8">
                                    <p className="font-bold text-xl uppercase text-white">{pdata.name}</p>
                                    <p className="py-4 text-white text-md">{pdata.desc}</p>
                                </div>
                            </div>
                        </div>

                    ))
                }
            </div>
        </div>
    )
};
