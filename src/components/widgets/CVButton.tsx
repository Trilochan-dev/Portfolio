import Link from "next/link";

export default function CVButton({ title, ...props }: any) {

    return (
        <Link href="./Resume/Trilochan_resume.pdf" download="Trilochan_Behera_Resume" target="_blank"> <button className={`bg-emerald-500 text-white px-4 py-1 my-4 rounded-lg h-10 text-lg font-bold flex items-center gap-2 shadow-2xl`}>
            {props?.icon && props?.left && props.icon} {title} {props?.icon && !props?.left && props.icon}
        </button></Link>
    )
}
