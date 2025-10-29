import BrutalistCard from "@/components/BrutalistCard";
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";

export default function Privacy() {
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
          Privacy Policy
        </motion.h1>

        <BrutalistCard className="p-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-sm opacity-60 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-2xl font-black mb-4">Overview</h2>
            <p className="mb-6">
              ORIGIN respects your privacy. This policy outlines how we collect, use, and protect your information.
            </p>

            <h2 className="text-2xl font-black mb-4">Information We Collect</h2>
            <p className="mb-6">
              We collect information you provide directly, such as email addresses and account information.
            </p>

            <h2 className="text-2xl font-black mb-4">How We Use Information</h2>
            <p className="mb-6">
              Your information is used to provide services, improve our platform, and communicate with you.
            </p>

            <h2 className="text-2xl font-black mb-4">Contact</h2>
            <p>
              For privacy questions, contact us at privacy@origin.ai
            </p>
          </div>
        </BrutalistCard>
      </div>
    </div>
  );
}
