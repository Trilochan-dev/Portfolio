import Link from 'next/link';
import { BsPatchCheckFill } from 'react-icons/bs';
import AboutMe from '@/components/AllPages/AboutMe';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function About() {
    const { asPath } = useRouter();
    const path = asPath.split('/');
    const [section, setSection] = useState(path[path.length - 1]);
    const header = [
        { name: "About Me", section: "about" },
    ]
    return (
        <div className="bg-white absolute inset-0 w-full m-auto overflow-auto hide_scrollbar ">
            <p className="text-3xl text-center font-medium leading-relaxed my-2 capitalize text-linear-gradient">About Me</p>
            <div className="lg:11/12 xl:w-9/12 lg:mx-auto">
                <div className="px-0 md:px-3">
                    <AboutMe />
                </div>
            </div>
        </div>
    )
}
