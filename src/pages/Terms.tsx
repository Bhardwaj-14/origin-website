import BrutalistCard from "@/components/BrutalistCard";
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";

export default function Terms() {
  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-[#36180a] dark:to-[#0f0b05]">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-5xl md:text-7xl font-black mb-8 tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Terms of Service
        </motion.h1>

        <BrutalistCard className="p-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-sm opacity-60 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-2xl font-black mb-4">Agreement</h2>
            <p className="mb-6">
              By using ORIGIN services, you agree to these terms.
            </p>

            <h2 className="text-2xl font-black mb-4">Use of Services</h2>
            <p className="mb-6">
              You may use our services for lawful purposes only.
            </p>

            <h2 className="text-2xl font-black mb-4">Intellectual Property</h2>
            <p className="mb-6">
              All content and technology are property of ORIGIN.
            </p>

            <h2 className="text-2xl font-black mb-4">Contact</h2>
            <p>
              For terms questions, contact us at legal@origin.ai
            </p>
          </div>
        </BrutalistCard>
      </div>
    </div>
  );
}
