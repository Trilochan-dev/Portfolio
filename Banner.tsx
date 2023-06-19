import { useRouter } from 'next/router';
import { TbCertificate } from 'react-icons/tb';
import CVButton from '../widgets/CVButton';

export default function Banner() {
  return (
    <>
      <div className="lg:flex justify-between py-8 absolute inset-0 w-full m-auto max-w-final overflow-y-auto hide_scrollbar">
        <div className="flex justify-center items-center lg:items-start flex-col gap-2  px-8 m-auto w-full md:w-2/3 lg:w-1/2">
          <div className="flex items-end gap-4">
            <img src="./Images/welcome.gif" className='w-12 h-12' />
            <p className='font-bold text-2xl text-white'>Hey,</p>
          </div>
          <div className="w-max">
            <h1 className="w-full text-3xl text-center md:text-start md:text-4xl text-white font-bold">I'm <span className="text-emerald-400">Trilochan Behera</span></h1>
            <div className="wrapper">
              <div className="static-txt">Experience in</div>
              <ul className="dynamic-txt">
                <li><span>Full Stack Development</span></li>
                <li><span>Frontend Development</span></li>
                <li><span>Backend Development</span></li>
                <li><span>Application Development</span></li>
              </ul>
            </div>
            {/* <h1 className=" animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-xl text-white font-bold">I'm into
              <span className='text-yellow-300'> Full Stack Development </span>
            </h1> */}
          </div>
          <p className="text-lg font-bold text-gray-400 text-center lg:text-left">
            I'm a passionate developer creating user-friendly web applications with meticulous attention to detail, scalability, and performance.</p>
          <div className="w-max">
            <h1 className='text-gray-300'>Code. Create. Innovate.</h1>
            <CVButton title="Download CV" icon={<TbCertificate />} />
          </div>
        </div>
        <div className="flex justify-center">
          <img src="./Images/webpage.svg" className=" lg:w-full h-full" />
        </div>
      </div>
    </>
  )
}