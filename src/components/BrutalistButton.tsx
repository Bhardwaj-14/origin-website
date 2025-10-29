import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BrutalistButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "accent" | "danger";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function BrutalistButton({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  type = "button",
}: BrutalistButtonProps) {
  const variants = {
    primary: "bg-[#FF6A00] text-white border-black dark:border-white",
    secondary: "bg-white dark:bg-black text-black dark:text-white border-black dark:border-white",
    accent: "bg-[#00FF80] text-black border-black",
    danger: "bg-[#FF0080] text-white border-black dark:border-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      type={type}
      className={`
        ${variants[variant]}
        ${sizes[size]}
        border-2
        font-bold
        shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
        dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)]
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      whileHover={!disabled ? {
        transform: "translate(-3px, -3px)",
        boxShadow: "7px 7px 0px 0px rgba(0,0,0,1)",
      } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
}