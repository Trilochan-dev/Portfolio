import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { Navigation } from "./Navigation";
import { MenuToggle } from "./MenuToggle";
import { useDimensions } from "@/components/hooks/useDimesions";
import { useRouter } from "next/router";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 246px 42px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(24px at 246px 42px)",
    transition: {
      delay: 0,
      type: "spring",
      stiffness: 200,
      damping: 40
    }
  }
};
export const MenuBar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const { asPath } = useRouter();
  React.useMemo(() => toggleOpen(0), [asPath])

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className={`background`} variants={sidebar} />
      <Navigation />
      <MenuToggle toggle={toggleOpen} />
    </motion.nav>
  );
};
