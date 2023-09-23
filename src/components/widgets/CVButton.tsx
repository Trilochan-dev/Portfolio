import Link from "next/link";

export default function CVButton({ title, ...props }: any) {

    return (
        <Link href="./Resume/Trilochan_Behera_Resume.pdf" download="Trilochan_Behera_Resume" target="_blank">
            <button className={`bg-emerald-500 text-white px-4 py-1 my-4 rounded-lg h-10 text-lg font-bold flex items-center gap-2 shadow-2xl`}>
                <div className="flex items-center justify-center gap-2">
                    {title} <span className="pt-1">{props?.icon}</span> 
                </div>
            </button>
        </Link>
    )
}
