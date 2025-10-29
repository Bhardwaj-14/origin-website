import { motion } from "framer-motion";

interface OriginLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  onClick?: () => void;
}

export default function OriginLogo({ size = "md", className = "", onClick }: OriginLogoProps) {
  const sizes = {
    sm: "text-2xl",
    md: "text-4xl",
    lg: "text-6xl",
    xl: "text-8xl",
  };

  return (
    <motion.div
      className={`font-black tracking-tighter ${sizes[size]} ${className} ${onClick ? "cursor-pointer" : ""}`}
      onClick={onClick}
      whileHover={onClick ? { scale: 1.02 } : {}}
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <span className="text-black dark:text-white">ORIG</span>
      <span style={{ color: "#FF6A00" }}>IN</span>
    </motion.div>
  );
}
