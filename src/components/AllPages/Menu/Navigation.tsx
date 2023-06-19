import * as React from "react";
import { MenuItem } from "./MenuItem";
import { CgBoy } from "react-icons/cg";
import { motion } from "framer-motion";
import { IoMdSettings } from "react-icons/io";
import { RiCodeSSlashLine } from "react-icons/ri";
import { FaCertificate, FaGraduationCap, FaTelegramPlane } from 'react-icons/fa'
const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

const navItem = [
    { name: "About Me", link: "/about", icon: <CgBoy /> },
    { name: "Skills", link: "/skill", icon: <IoMdSettings /> },
    { name: "Experience", link: "/experience", icon: <FaGraduationCap /> },
    { name: "Projects", link: "/project", icon: <RiCodeSSlashLine /> },
    { name: "Certificates", link: "/certificate", icon: <FaCertificate /> },
    { name: "Contact", link: "/contact", icon: <FaTelegramPlane /> },
]

export const Navigation = () => (
    <motion.ul variants={variants} className="navmenu-ul">
        {navItem.map((item, i) => (
            <MenuItem item={item} key={i} />
        ))}
    </motion.ul>
);

