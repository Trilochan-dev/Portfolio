import { skills } from "../resources/resource"

export default function Skills() {

    return (
        <>
            <div className="absolute inset-0 w-full bg-primary-light overflow-y-auto hide_scrollbar">
                <p className="text-3xl text-center font-medium leading-relaxed my-3 capitalize text-linear-gradient">Technical Skills</p>
                <div className="w-full max-w-[1180px] mx-auto py-4">
                    <div className="grid grid-cols-3 xs:grid-cols-4 md:grid-cols-6 gap-4 py-4 place-items-center" >
                        {
                            skills?.map((sdata, i) => (
                                <div className="relative test aspect-square rounded-lg group bg-primary-light hover:bg-primary-dark flex flex-col gap-2 h-[75%] items-center justify-center shadow-lg shadow-[#8e8e8e] uppercase cursor-pointer" key={sdata?.name + i}>
                                    <img src={sdata?.link} className='h-[60%] w-[60%] group-hover:hidden' />
                                    <p className='absolute text-xs md:text-sm group-hover:text-white group-hover:block hidden break-words text-center'>{sdata?.name}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div >
        </>
    )

};
