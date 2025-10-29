import { motion } from "framer-motion";
import { Terminal, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Console() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Array<{ type: "input" | "output"; text: string }>>([
    { type: "output", text: "ORIGIN Console v1.0.0" },
    { type: "output", text: "Engineering the Edge of Intelligence" },
    { type: "output", text: "---" },
    { type: "output", text: "ORIGIN is building the future of AI-first computing." },
    { type: "output", text: "Our mission: Create AGI systems that augment human capability." },
    { type: "output", text: "Current projects: ORIGIN AI Core, ORIGIN OS, Neural Compiler" },
    { type: "output", text: "Type 'help' for available commands" },
  ]);
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    setHistory(prev => [...prev, { type: "input", text: `>>> ${cmd}` }]);

    let output = "";
    
    if (trimmed === "help") {
      output = "Available commands: help, about, projects, status, clear, print()";
    } else if (trimmed === "about") {
      output = "ORIGIN - Engineering the Edge of Intelligence. Founded 2024.";
    } else if (trimmed === "projects") {
      output = "Active: ORIGIN AI Core, ORIGIN OS, Neural Compiler, Quantum Bridge";
    } else if (trimmed === "status") {
      output = "All systems operational. AI training: 94% complete.";
    } else if (trimmed === "clear") {
      setHistory([{ type: "output", text: "Console cleared." }]);
      return;
    } else if (trimmed.startsWith("print(") && trimmed.endsWith(")")) {
      const content = trimmed.slice(6, -1).replace(/['"]/g, "");
      output = content;
    } else if (trimmed.includes("+") || trimmed.includes("-") || trimmed.includes("*") || trimmed.includes("/")) {
      try {
        // Simple math evaluation (safe for basic operations)
        const result = Function(`"use strict"; return (${trimmed})`)();
        output = String(result);
      } catch {
        output = "Error: Invalid expression";
      }
    } else if (trimmed) {
      output = `Command not recognized: ${trimmed}. Type 'help' for commands.`;
    }

    if (output) {
      setHistory(prev => [...prev, { type: "output", text: output }]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput("");
    }
  };

  return (
    <>
      {!isOpen && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-6 left-6 z-50 p-4 bg-black dark:bg-[#00FF80] text-[#00FF80] dark:text-black border-4 border-[#00FF80] dark:border-black shadow-[4px_4px_0px_0px_rgba(0,255,128,1)]"
          onClick={() => setIsOpen(true)}
          whileHover={{ transform: "translate(-2px, -2px)" }}
        >
          <Terminal size={24} />
        </motion.button>
      )}

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed bottom-6 left-6 z-50 w-[500px] max-w-[calc(100vw-3rem)] bg-black border-4 border-[#00FF80] shadow-[8px_8px_0px_0px_rgba(0,255,128,1)]"
        >
          <div className="flex items-center justify-between p-3 border-b-4 border-[#00FF80]">
            <div className="flex items-center gap-2 text-[#00FF80] font-bold">
              <Terminal size={20} />
              <span>ORIGIN Console</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#00FF80] hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div
            ref={outputRef}
            className="h-[300px] overflow-y-auto p-4 font-mono text-sm"
          >
            {history.map((line, i) => (
              <div
                key={i}
                className={line.type === "input" ? "text-white" : "text-[#00FF80]"}
              >
                {line.text}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="border-t-4 border-[#00FF80] p-3">
            <div className="flex items-center gap-2">
              <span className="text-white font-mono">&gt;&gt;&gt;</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent text-[#00FF80] font-mono outline-none"
                placeholder="Type command..."
                autoFocus
              />
            </div>
          </form>
        </motion.div>
      )}
    </>
  );
}
