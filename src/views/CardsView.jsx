import VirtualCards from "../components/VirtualCards";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Smartphone, Lock, Unlock, CreditCard, Sparkles, Zap, RefreshCw, Briefcase, Globe } from "lucide-react";
import { useState } from "react";

export default function CardsView() {
  const [cardsLocked, setCardsLocked] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="space-y-8 pb-10">
      
   
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-100/60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-indigo-100/40 blur-3xl" />

        <div className="relative flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <div className="flex items-center gap-2">
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="h-2.5 w-2.5 rounded-full bg-blue-500"
              />
              <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Payment Center
              </p>
            </div>

            <h1 className="mt-2 text-3xl font-black text-slate-900 tracking-tight sm:text-4xl">
              Cards Management
            </h1>

            <p className="mt-1.5 text-sm text-slate-400">
              Manage physical & virtual cards, secure online limits, and settings in real-time.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-slate-50 border border-slate-200/80 p-3.5 rounded-2xl">
            <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${cardsLocked ? "bg-red-50 text-red-500" : "bg-emerald-50 text-emerald-600"}`}>
              {cardsLocked ? <Lock size={18} /> : <Unlock size={18} />}
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800">
                {cardsLocked ? "All Cards Frozen" : "Cards Unlocked"}
              </p>
              <p className="text-[11px] text-slate-400">
                {cardsLocked ? "Instant security lock active" : "Ready for payments"}
              </p>
            </div>
            <button
              onClick={() => setCardsLocked(!cardsLocked)}
              className={`ml-3 px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-sm ${
                cardsLocked 
                  ? "bg-emerald-600 hover:bg-emerald-700 text-white" 
                  : "bg-red-500 hover:bg-red-600 text-white"
              }`}
            >
              {cardsLocked ? "Unlock All" : "Freeze All"}
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {[
          { id: "all", label: "All Cards", icon: CreditCard },
          { id: "virtual", label: "Virtual Cards", icon: Globe },
          { id: "physical", label: "Physical Cards", icon: CreditCard },
          { id: "business", label: "Business Cards", icon: Briefcase },
        ].map((tab) => {
          const IconComponent = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === tab.id
                  ? "bg-slate-900 text-white shadow-md shadow-slate-200 scale-102"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              <IconComponent size={14} />
              {tab.label}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
        >
          {activeTab === "all" && (
            <div className="space-y-6">
              <VirtualCards isFrozen={cardsLocked} />
            </div>
          )}

          {activeTab === "virtual" && (
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-black text-slate-900">Virtual Cards Hub</h2>
                  <p className="text-xs text-slate-400 mt-1">Generate burner or single-use subscription cards instantly.</p>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-xs font-bold transition">
                  + Create Virtual Card
                </button>
              </div>
              <VirtualCards isFrozen={cardsLocked} filter="virtual" />
            </div>
          )}

          {activeTab === "physical" && (
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-black text-slate-900">Physical Cards & Delivery</h2>
                  <p className="text-xs text-slate-400 mt-1">Track shipped metal cards, PIN changes, and ATM settings.</p>
                </div>
                <button className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-xl text-xs font-bold transition">
                  Order New Metal Card
                </button>
              </div>
              <VirtualCards isFrozen={cardsLocked} filter="physical" />
            </div>
          )}

          {activeTab === "business" && (
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-black text-slate-900">Corporate & Business Cards</h2>
                  <p className="text-xs text-slate-400 mt-1">Manage employee spending limits, expense categories, and reports.</p>
                </div>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl text-xs font-bold transition">
                  + Issue Employee Card
                </button>
              </div>
              <VirtualCards isFrozen={cardsLocked} filter="business" />
            </div>
          )}
        </motion.div>
      </AnimatePresence>

    
      <div className="grid gap-5 md:grid-cols-3">
        <FeatureCard
          icon={ShieldCheck}
          title="Advanced Security"
          text="Zero liability protection with instant freeze and custom geographic control."
          color="blue"
          badge="Protected"
        />

        <FeatureCard
          icon={Smartphone}
          title="Instant Apple/Google Pay"
          text="Tokenized tap-to-pay instantly available on all supported mobile devices."
          color="purple"
          badge="Contactless"
        />

        <FeatureCard
          icon={Zap}
          title="Dynamic CVV Security"
          text="Rolling CVV numbers that refresh every 10 minutes to stop online skimming."
          color="amber"
          badge="AI Guard"
        />
      </div>

    </div>
  );
}

function FeatureCard({ icon: Icon, title, text, color, badge }) {
  const colorStyles = {
    blue: "bg-blue-50 text-blue-600 border-blue-100 group-hover:border-blue-300",
    purple: "bg-purple-50 text-purple-600 border-purple-100 group-hover:border-purple-300",
    amber: "bg-amber-50 text-amber-600 border-amber-100 group-hover:border-amber-300",
  };

  return (
    <div className="h-full [perspective:1200px]">
      <motion.div
        whileHover={{
          y: -8,
          scale: 1.02,
          rotateX: 4,
          rotateY: -4,
          z: 20,
        }}
        whileTap={{ scale: 0.98 }}
        style={{ transformStyle: "preserve-3d" }}
        className="group relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl"
      >
       
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.15, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className={`flex h-12 w-12 items-center justify-center rounded-2xl ${colorStyles[color]} shadow-xs`}
          >
            <Icon size={22} />
          </motion.div>

          <span className="rounded-full bg-slate-50 border border-slate-200/80 px-2.5 py-1 text-[10px] font-bold text-slate-600">
            {badge}
          </span>
        </div>

        <div className="relative z-10 mt-5">
          <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-slate-400 font-medium">
            {text}
          </p>
        </div>

        {/* Micro footer hint */}
        <div className="relative z-10 mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-semibold">
          <span>Learn more</span>
          <span className="text-blue-600 group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </motion.div>
    </div>
  );
}