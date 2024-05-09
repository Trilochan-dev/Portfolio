export default function Process() {
    return (

        <div className="grid grid-rows-1 lg:grid-cols-5 place-content-center lg:place-content-start py-8 gap-8 md:gap-0">
            <div className="timeline1 flex flex-start lg:flex-col gap-0 lg:gap-8">
                <div className="module-border-wrap w-1/2 md:w-full">
                    <div className="module">
                        <img src="./Images/about/bulb.svg" className="rotate-[135deg] m-auto w-[3rem] h-[2rem] sm:h-[3.5rem] sm:w-[3.5rem]" />
                    </div></div>
                <div className="flex justify-center flex-col items-center gap-2"><p className="text-md font-medium leading-6 uppercase border-b border-primarydark text-blue-500">Vision</p><p className="text-center px-4 lg:px-8 text-gray-600">Envisioning a better future by developing innovative technology solutions that improve lives.</p>
                </div></div>
            <div className="timeline2 flex flex-start lg:flex-col gap-0 lg:gap-8">
                <div className="flex justify-center flex-col items-center gap-2"><p className="text-md font-medium leading-6 uppercase border-b border-primarydark text-blue-500">Skills</p><p className="text-center px-4 lg:px-8 text-gray-600">Continuously sharpening my technical abilities to master cutting-edge tools and frameworks</p></div>
                <div className="module-border-wrap w-1/2 md:w-full">
                    <div className="module">
                        <img src="./Images/about/skills.svg" className="-rotate-[45deg] m-auto w-[2rem] h-[2rem] sm:h-[3.5rem] sm:w-[3.5rem]" />
                    </div></div></div>
            <div className="timeline1 flex flex-start lg:flex-col gap-0 lg:gap-8">
                <div className="module-border-wrap w-1/2 md:w-full">
                    <div className="module">
                        <img src="./Images/about/curios.svg" className="-rotate-[45deg] m-auto w-[2rem] h-[2rem] sm:h-[3.5rem] sm:w-[3.5rem] p-1" />
                    </div></div>
                <div className="flex justify-center flex-col items-center gap-2"><p className="text-md font-medium leading-6 uppercase border-b border-primarydark text-blue-500">Curious</p><p className="text-center px-4 lg:px-8 text-gray-600">Constantly curious, forever exploring emerging technologies and new programming paradigms</p>
                </div></div>
            <div className="timeline2 flex flex-start lg:flex-col gap-0 lg:gap-8">
                <div className="flex justify-center flex-col items-center gap-2"><p className="text-md font-medium leading-6 uppercase border-b border-primarydark text-blue-500">Improve</p><p className="text-center px-4 lg:px-8 text-gray-600">Embracing challenges, learning from failures, and persistently enhancing my craft</p></div>
                <div className="module-border-wrap w-1/2 md:w-full">
                    <div className="module">
                        <img src="./Images/about/growth.svg" className="-rotate-[45deg] m-auto w-[2rem] h-[2rem] sm:h-[3.5rem] sm:w-[3.5rem] p-1" />
                    </div></div></div>
            <div className="timeline1 flex flex-start lg:flex-col gap-0 lg:gap-8">
                <div className="module-border-wrap w-1/2 md:w-full">
                    <div className="module">
                        <img src="./Images/about/target.svg" className="rotate-[135deg] m-auto w-[2rem] h-[2rem] sm:h-[3.5rem] sm:w-[3.5rem] p-1" />
                    </div></div>
                <div className="flex justify-center flex-col items-center gap-2"><p className="text-md font-medium leading-6 uppercase border-b border-primarydark text-blue-500">Goals</p><p className="text-center px-4 lg:px-8 text-gray-600">Setting ambitious goals to advance technological innovations and shape the future of the tech industry.</p>
                </div>
            </div>
        </div>
    )

};
