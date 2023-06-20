import DropDown from "@/components/widgets/Dropdown";
import { useState } from "react"

export default function Skills() {
    const [selectedHeader, setSelectedHeader] = useState("Frontend");
    const skillHeader = [
        "Frontend", "Backend", "Database", "Others"
    ]
    const skills = [
        {
            key: "Frontend",
            value: [
                { name: "Html", link: "./Images/svg/html.svg" },
                { name: "css", link: "./Images/svg/css.svg" },
                { name: "javascript", link: "./Images/svg/javascript.svg" },
                { name: "react", link: "./Images/svg/react.svg" },
                { name: "next", link: "./Images/svg/nextjs.svg" },
                { name: "redux", link: "./Images/svg/redux.svg" },
                { name: "tailwind", link: "./Images/svg/tailwindcss.svg" },
                { name: "Bootsrap", link: "./Images/svg/bootstrap.svg" },
            ]
        },
        {
            key: "Backend",
            value: [
                { name: "node js", link: "./Images/svg/nodejs.svg" },
                { name: "express js", link: "./Images/svg/express.svg" },
                { name: "python", link: "./Images/svg/python.svg" },
                { name: "django", link: "./Images/svg/django.svg" },
                { name: "laravel", link: "./Images/svg/laravel.svg" },
                { name: "go lang", link: "./Images/svg/go.svg" },
            ]
        },
        {
            key: "Database",
            value: [
                { name: "mongodb", link: "./Images/svg/mongodb.svg" },
                { name: "my sql", link: "./Images/svg/mysql.svg" },
                { name: "postgress", link: "./Images/svg/postgress.svg" },
            ]
        },
        {
            key: "Others",
            value: [
                { name: "redis", link: "./Images/svg/redis.svg" },
                { name: "git", link: "./Images/svg/git.svg" },
                { name: "docker", link: "./Images/svg/docker.svg" },
                { name: "graphql", link: "./Images/svg/graphql.svg" },
                { name: "elastic", link: "./Images/svg/elasticsearch.svg" },
                { name: "cypress", link: "./Images/svg/cypress.svg" },
                { name: "Looker", link: "./Images/svg/looker.svg" },
                { name: "Pusher", link: "./Images/svg/pusher.svg" },
                { name: "Salesforce", link: "./Images/svg/salesforce.svg" },
                { name: "postman", link: "./Images/svg/postman.svg" },
                { name: "Ubuntu", link: "./Images/svg/ubuntu.svg" },
                { name: "Vs Code", link: "./Images/svg/vscode.svg" },
            ]
        },

    ]

    return (
        <>
            <div className="absolute inset-0 w-full pb-24 pt-16 bg-primary-light overflow-y-auto hide_scrollbar">
                <p className="text-3xl text-center font-medium leading-relaxed mb-4 capitalize text-linear-gradient">Technical Skills</p>
                <div className="py-2 w-fit px-8 max-w-[1180px] m-auto hidden lg:flex items-center justify-center shadow-md rounded-lg  ">
                    {
                        skillHeader.map((sm, i) => (
                            <>
                                <div className={`px-4 py-2 w-48 rounded-lg  shadow-lg shadow-white text-center cursor-pointer mx-4 border-2 border-white ${selectedHeader === sm ? "bg-primary-dark text-white" : "bg-white text-primary-dark hover:bg-gray-200"}`} onClick={() => setSelectedHeader(sm)} key={i}>
                                    {sm}
                                </div >
                            </>
                        ))
                    }
                </div>
                <div className="block lg:hidden w-1/2 mx-auto bg-primary-dark h-12 text-white rounded-xl ">
                    <DropDown
                        dataList={skills}
                        label={"key"}
                        value={"key"}
                        setSelectedValue={(value) => setSelectedHeader(value)}
                        initialSelect="Frontend"
                    />
                </div>
                <div className="w-full max-w-[1180px] mx-auto my-8">
                    {
                        skills.map((sdata) => sdata.key === selectedHeader && (
                            <>
                                <div className="grid grid-cols-3 xs:grid-cols-4 md:grid-cols-6 gap-4 py-4 place-items-center">
                                    {sdata.value.map((svalue, i) => (
                                        <div className="relative test aspect-square rounded-lg group bg-primary-light hover:bg-primary-dark flex flex-col gap-2 h-[75%] items-center justify-center shadow-lg shadow-[#8e8e8e] uppercase cursor-pointer" key={svalue.name + i}>
                                            <img src={svalue.link} className='h-[60%] w-[60%] group-hover:hidden' />
                                            <p className='absolute text-xs md:text-sm group-hover:text-white group-hover:block hidden break-words text-center'>{svalue.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </>


                        ))
                    }
                </div>

            </div >
        </>
    )

};
