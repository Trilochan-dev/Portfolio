import DropDown from "@/components/widgets/Dropdown";
import { useState } from "react"

export default function Skills() {
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
                { name: "node js", link: "./Images/svg/nodejs.svg" },
                { name: "express js", link: "./Images/svg/express.svg" },
                { name: "python", link: "./Images/svg/python.svg" },
                { name: "mongodb", link: "./Images/svg/mongodb.svg" },
                { name: "my sql", link: "./Images/svg/mysql.svg" },
                { name: "git", link: "./Images/svg/git.svg" },
                { name: "docker", link: "./Images/svg/docker.svg" },
                { name: "graphql", link: "./Images/svg/graphql.svg" },
                { name: "elastic", link: "./Images/svg/elasticsearch.svg" },
                { name: "cypress", link: "./Images/svg/cypress.svg" },
                { name: "redis", link: "./Images/svg/redis.svg" },
            ]
        }
    ]

    return (
        <>
            <div className="absolute inset-0 w-full bg-primary-light overflow-y-auto hide_scrollbar">
                <p className="text-3xl text-center font-medium leading-relaxed my-3 capitalize text-linear-gradient">Technical Skills</p>
                <div className="w-full max-w-[1180px] mx-auto">
                    {
                        skills.map((sdata) => (
                            <div className="grid grid-cols-3 xs:grid-cols-4 md:grid-cols-6 gap-4 py-4 place-items-center">
                                {sdata.value.map((svalue, i) => (
                                    <div className="relative test aspect-square rounded-lg group bg-primary-light hover:bg-primary-dark flex flex-col gap-2 h-[75%] items-center justify-center shadow-lg shadow-[#8e8e8e] uppercase cursor-pointer" key={svalue.name + i}>
                                        <img src={svalue.link} className='h-[60%] w-[60%] group-hover:hidden' />
                                        <p className='absolute text-xs md:text-sm group-hover:text-white group-hover:block hidden break-words text-center'>{svalue.name}</p>
                                    </div>
                                ))}
                            </div>
                        ))
                    }
                </div>

            </div >
        </>
    )

};
