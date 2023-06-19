import * as React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};
export const MenuItem = ({ item }: any) => {
    const router = useRouter();
    const routerChange = (link: URL) => {
        router.push(link)
    }
    return (
        <motion.li
            variants={variants}
            onClick={() => routerChange(item?.link)}
            className="navmenu-li"
        >
            <div className="flex gap-4 items-center text-primary-dark z-50" >
                <div className="z-auto text-xl text-yellow-500" >{item?.icon}</div>
                <div className="z-auto">{item?.name}</div>
            </div>

        </motion.li>
    );
};
