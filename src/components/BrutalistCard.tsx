import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BrutalistCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  onClick?: () => void;
}

export default function BrutalistCard({ 
  children, 
  className = "", 
  hoverEffect = true,
  onClick 
}: BrutalistCardProps) {
  return (
    <motion.div
      className={`
        border-2 border-black dark:border-white
        bg-white dark:bg-black
        shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
        dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.3)]
        ${onClick ? "cursor-pointer" : ""}
        ${className}
      `}
      whileHover={hoverEffect ? {
        transform: "translate(-6px, -6px)",
        boxShadow: "14px 14px 0px 0px rgba(255,106,0,1)",
      } : {}}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}