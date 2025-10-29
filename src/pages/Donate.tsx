import BrutalistButton from "@/components/BrutalistButton";
import BrutalistCard from "@/components/BrutalistCard";
import Console from "@/components/Console";
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";

export default function Donate() {
  const tiers = [
    { amount: "$10", label: "Supporter", desc: "Help fund research" },
    { amount: "$50", label: "Contributor", desc: "Support development" },
    { amount: "$100", label: "Patron", desc: "Accelerate innovation" },
    { amount: "$500", label: "Champion", desc: "Major impact" },
    { amount: "$1000+", label: "Visionary", desc: "Transform the future" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-[#36180a] dark:to-[#0f0b05]">
      <Navigation />
      <Console />

      <div className="max-w-5xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Heart size={64} className="mx-auto mb-6 text-[#FF0080]" />
          <h1
            className="text-6xl md:text-8xl font-black mb-6 tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Support ORIGIN
          </h1>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            Help us build the future of AI. Your contribution accelerates our mission to engineer the edge of intelligence.
          </p>
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <BrutalistCard className="p-12 bg-[#FF6A00] text-white text-center">
            <h2 className="text-4xl font-black mb-6">Make an Impact Today</h2>
            <BrutalistButton
              size="lg"
              variant="secondary"
              onClick={() => window.open("https://example.com", "_blank")}
            >
              Donate Now <ArrowRight className="inline ml-2" />
            </BrutalistButton>
          </BrutalistCard>
        </motion.div>

        {/* Donation Tiers */}
        <section className="mb-16">
          <h2 className="text-4xl font-black mb-8 text-center">Suggested Amounts</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.amount}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.05 }}
              >
                <BrutalistCard
                  className="p-6 text-center cursor-pointer"
                  onClick={() => window.open("https://example.com", "_blank")}
                >
                  <div className="text-3xl font-black mb-2 text-[#FF6A00]">
                    {tier.amount}
                  </div>
                  <div className="font-bold mb-1">{tier.label}</div>
                  <div className="text-sm opacity-80">{tier.desc}</div>
                </BrutalistCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Donate */}
        <section className="mb-16">
          <h2 className="text-4xl font-black mb-8">Why Your Support Matters</h2>
          <div className="space-y-4">
            {[
              "Fund cutting-edge AI research and development",
              "Accelerate the development of ORIGIN AI Core and ORIGIN OS",
              "Support open-source tools and frameworks",
              "Enable breakthrough innovations in AI technology",
              "Help build a future where AI augments human capability",
            ].map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <BrutalistCard className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#00FF80] border-2 border-black flex items-center justify-center font-black shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-lg">{reason}</p>
                  </div>
                </BrutalistCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Legal Fine Print */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <BrutalistCard className="p-8 bg-gray-100 dark:bg-gray-900">
            <h3 className="text-xl font-black mb-4">Tax & Legal Information</h3>
            <div className="text-sm opacity-80 space-y-2">
              <p>
                ORIGIN is a technology company. Donations may not be tax-deductible. Please consult with your tax advisor.
              </p>
              <p>
                All contributions go directly toward research, development, and operational costs.
              </p>
              <p>
                For questions about donations or corporate partnerships, contact us at support@origin.ai
              </p>
            </div>
          </BrutalistCard>
        </motion.div>
      </div>
    </div>
  );
}
