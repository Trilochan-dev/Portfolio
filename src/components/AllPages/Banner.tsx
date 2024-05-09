import { TbCertificate } from 'react-icons/tb';
import CVButton from '../widgets/CVButton';

export default function Banner() {
  const mernStack = [
    { name: "mongodb", link: "./Images/svg/mongodb.svg" },
    { name: "express", link: "./Images/svg/expressjs.svg" },
    { name: "react", link: "./Images/svg/react.svg" },
    { name: "react", link: "./Images/svg/node.svg" },

  ]
  return (
    <>
      <div className="lg:flex justify-between py-8 absolute inset-0 w-full m-auto max-w-final overflow-y-auto hide_scrollbar">
        <div className="flex justify-center items-center lg:items-start flex-col gap-2  px-8 m-auto w-full md:w-2/3 lg:w-1/2">
          <div className="flex items-end justify-center gap-4">
            <img src="./Images/welcome.gif" className='w-12 h-12' />
            <p className='font-bold text-2xl text-white'>Hey, Geeks</p>
          </div>
          <div className="w-max">
            <h1 className="w-full text-3xl text-center md:text-start md:text-4xl text-white font-bold">I{"'"}m <span className="text-emerald-300 shadow-2xl">Trilochan Behera</span></h1>
            <div className="wrapper">
              <div className="static-txt">Experience in</div>
              <ul className="dynamic-txt">
                <li><span>Full Stack Development</span></li>
                <li><span>Frontend Development</span></li>
                <li><span>Backend Development</span></li>
                <li><span>Application Development</span></li>
              </ul>
            </div>
          </div>
          <p className="text-lg font-bold text-gray-300 text-center lg:text-left">
            I{"'"}m a passionate software engineer creating user-friendly software applications with meticulous attention to detail, scalability, and performance.</p>
          <div className="w-max">
            <h1 className='text-gray-300 font-bold'>Code. Create. Innovate.</h1>
            <CVButton title="My Resume" icon={<TbCertificate />} />
          </div>
          <div className="flex gap-4 items-center ">
            {mernStack.map((mern, i) => (
              <img src={mern.link} className={`w-7 ${i == 1 && "bg-white rounded-full p-1"}`} key={mern.name+i} />
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <img src="./Images/image.svg" className=" lg:w-full h-full" />
        </div>
      </div>
    </>
  )
}
