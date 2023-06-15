
export default function CVButton({ title, ...props }: any) {

    return (
        <button className='bg-emerald-500 text-white px-4 py-1.5 my-4 rounded-lg h-12 text-lg font-bold flex items-center gap-2' onClick={props?.handleClick}>
            {props?.icon && props?.left && props.icon} {title} {props?.icon && !props?.left && props.icon}
        </button>
    )
}