import Link from "next/link"
import { IoLogoGithub } from "react-icons/io"
import { TbWorldWww } from "react-icons/tb"
import { projects } from "../resources/resource"

export default function Project() {
    return (
        <div className="bg-white absolute inset-0 w-full overflow-auto hide_scrollbar py-4 pb-8">
            <p className="text-3xl text-center font-medium leading-relaxed my-3 capitalize text-linear-gradient">Projects</p>
            <div className="grid lg:grid-cols-2 xlg:grid-cols-3 gap-8 max-w-final m-auto px-8 sm:px-20 md:px-32 lg:px-8">
                {
                    projects?.map((pro, index) => (
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
