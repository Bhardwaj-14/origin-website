import { useAuth } from "@/hooks/use-auth";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import BrutalistButton from "./BrutalistButton";
import OriginLogo from "./OriginLogo";

export default function Navigation() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = stored === "dark" || (!stored && prefersDark);
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle("dark", shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newTheme);
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Founders", path: "/founders" },
    { label: "Donate", path: "/donate" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-black border-b-2 border-black dark:border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <OriginLogo size="sm" onClick={() => navigate("/")} />

          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className="px-4 py-2 border-2 border-black dark:border-white font-bold hover:bg-[#00FF80] transition-colors"
              >
                {item.label}
              </button>
            ))}
            
            <button
              onClick={toggleTheme}
              className="p-2 border-2 border-black dark:border-white hover:bg-[#FF0080] hover:text-white transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {isAuthenticated ? (
              <BrutalistButton size="sm" onClick={() => navigate("/dashboard")}>
                Dashboard
              </BrutalistButton>
            ) : (
              <BrutalistButton size="sm" onClick={() => navigate("/auth")}>
                Login
              </BrutalistButton>
            )}
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 border-2 border-black dark:border-white"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}