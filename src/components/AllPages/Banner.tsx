import { useRouter } from 'next/router';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import { TbCertificate } from 'react-icons/tb';
import CVButton from '../widgets/CVButton';

export default function Banner() {
  const { push } = useRouter();
  return (
    <>
        <div className="lg:flex justify-between items-center h-screen max-w-[1640px] m-auto">
          <div className="flex justify-center items-center flex-col h-[30%] lg:h-[80%] gap-2  px-8">
            <div className="w-max">
              <h1 className="w-full text-4xl text-white font-bold"> Hi, I am <span className="text-emerald-400">Trilochan</span>. </h1>
            </div>
            <p className="text-xl font-bold text-white">I design & develop web applications.</p>
            <div className="w-max">
              <h1 className=" animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-xl text-white font-bold"> Full Stack Developer </h1>
              <CVButton title="Download CV" icon={<TbCertificate />} />
            </div>
          </div>
          <div className="flex justify-end h-[60%] lg:h-[80%] ">
            <img src="./Images/webpage.svg" className="w-full h-full" />
          </div>











        {/* <div className="flex justify-end">
          <img src="./Images/webpage.svg" className="w-[50%]" />
        </div>
        <div className="absolute top-0 bottom-0 left-12 flex items-center justify-center flex-col">
          <div className="w-max">
            <h1 className="w-full text-4xl text-white font-bold"> Hi, I am <span className="text-emerald-400">Trilochan</span>. </h1>
          </div>
          <p className="text-4xl font-bold text-white">I design & develop web applications.</p>
          <div className="w-max">
            <h1 className=" animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-xl text-white font-bold"> Full Stack Developer </h1>
            <CVButton title="Download CV" icon={<TbCertificate />} />
          </div>
        </div> */}
        {/* <div className="absolute flex flex-col items-center justify-center gap-2 text-white mb-2 left-0 right-0">
          <BsFillArrowDownCircleFill className="animate-bounce text-[30px] rounded-full cursor-pointer" onClick={() => push("/about")} />
        </div> */}
      </div>
    </>
  )
}