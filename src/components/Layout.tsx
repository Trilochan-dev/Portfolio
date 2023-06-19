import { useRouter } from 'next/router';
import Navbar from './AllPages/Navbar';
import { motion, AnimatePresence } from "framer-motion";

export default function Layout({ children }: any) {
    const { asPath } = useRouter();

    return (
        <>
            <AnimatePresence initial={true}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: 'easeInOut', duration: 1.5, delay: 0.2 }}
                    className='flex flex-col justify-between h-screen gap-8'
                >
                    <div className='w-full max-w-final h-4 mb-8 mx-auto'>
                        <Navbar />
                    </div>
                    <div className='w-full h-[calc(100%-40px)] mx-auto relative'>
                        <motion.div
                            key={asPath}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                ease: 'easeInOut',
                                duration: 1.5,
                                delay: 0.5,
                            }}
                        >
                            {children}
                        </motion.div>
                    </div>
                </motion.div>
            </AnimatePresence >
        </>
    )
}
