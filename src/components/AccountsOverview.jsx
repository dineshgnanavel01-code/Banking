import { motion, AnimatePresence } from "framer-motion";
import { ArrowDownLeft,ArrowUpRight,Eye,EyeOff, Wallet, TrendingUp,Sparkles,ShieldCheck,ChevronRight} from "lucide-react";
import { useState } from "react";

export default function AccountsOverview({
  balanceVisible,
  setBalanceVisible,
}) {
  const [activeTab, setActiveTab] = useState("total"); // 'total' | 'liquid' | 'investments'

  return (
    <div className="grid gap-6 lg:grid-cols-3 [perspective:1400px]">
      
   
      <div className="lg:col-span-2 h-full [perspective:1200px]">
        <motion.div
          whileHover={{
            y: -8,
            scale: 1.012,
            rotateX: 3,
            rotateY: -3,
            z: 20,
          }}
          whileTap={{ scale: 0.98 }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 p-6 sm:p-8 text-white shadow-2xl h-full flex flex-col justify-between border border-white/10"
        >

          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none" />

          
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <p className="text-xs font-bold uppercase tracking-wider text-blue-200">
                Primary Net Worth Portfolio
              </p>
            </div>

            <div className="flex items-center gap-2 bg-white/10 p-1 rounded-2xl backdrop-blur-md border border-white/10">
              {["total", "liquid", "investments"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1.5 rounded-xl text-[10px] font-bold capitalize transition-all ${
                    activeTab === tab
                      ? "bg-white text-slate-900 shadow-md"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

         
          <div className="relative z-10 my-8">
            <div className="flex items-center gap-3">
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white font-sans">
                {balanceVisible ? (
                  activeTab === "total" ? "₹1,25,450.80" : activeTab === "liquid" ? "₹68,920.25" : "₹56,530.55"
                ) : (
                  "••••••••••••"
                )}
              </h2>

              <motion.button
                whileHover={{ scale: 1.15, rotateY: 15 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setBalanceVisible(!balanceVisible)}
                className="rounded-2xl bg-white/10 hover:bg-white/20 p-2.5 backdrop-blur-md border border-white/20 transition-all text-white"
                title={balanceVisible ? "Hide Balance" : "Show Balance"}
              >
                {balanceVisible ? <EyeOff size={18} /> : <Eye size={18} />}
              </motion.button>
            </div>

            <div className="mt-3 flex items-center gap-2 text-xs text-emerald-300 font-bold">
              <span className="flex items-center gap-0.5 bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-500/30">
                <TrendingUp size={12} /> +14.2%
              </span>
              <span className="text-slate-300 font-normal">overall growth this quarter</span>
            </div>
          </div>

         
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-6 border-t border-white/10">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                Linked Account Number
              </p>
              <p className="mt-1 font-mono text-sm tracking-widest text-slate-200">
                •••• •••• 4829 (HDFC Bank)
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                  Monthly Cash Flow
                </p>
                <p className="mt-1 font-black text-emerald-300 text-sm">
                  +₹18,420 Net
                </p>
              </div>

              <motion.div
                whileHover={{ rotateY: 15, rotateX: 10, scale: 1.1 }}
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-inner"
              >
                <Wallet size={22} />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

     
      <div className="grid gap-5">
        <AccountMiniCard
          title="Total Income"
          amount="₹70,500"
          percentage="+12.4%"
          icon={ArrowDownLeft}
          positive={true}
          delay={0.1}
        />

        <AccountMiniCard
          title="Total Expenses"
          amount="₹24,380"
          percentage="-4.8%"
          icon={ArrowUpRight}
          positive={false}
          delay={0.2}
        />
      </div>

    </div>
  );
}

function AccountMiniCard({
  title,
  amount,
  percentage,
  icon: Icon,
  positive,
  delay,
}) {
  return (
    <div className="h-full [perspective:1000px]">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay }}
        whileHover={{
          y: -7,
          rotateX: 4,
          rotateY: -4,
          scale: 1.02,
          z: 15,
        }}
        whileTap={{ scale: 0.97 }}
        style={{ transformStyle: "preserve-3d" }}
        className="group relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-lg flex items-center justify-between"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

        <div className="relative z-10">
          <p className="text-xs font-semibold text-slate-400">
            {title}
          </p>

          <h3 className="mt-1 text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">
            {amount}
          </h3>

          <div className="mt-2 flex items-center gap-1.5">
            <span
              className={`inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-[10px] font-black ${
                positive
                  ? "bg-emerald-50 text-emerald-600"
                  : "bg-red-50 text-red-500"
              }`}
            >
              {percentage}
            </span>
            <span className="text-[11px] text-slate-400 font-medium">this month</span>
          </div>
        </div>

        <motion.div
          whileHover={{ rotateY: 15, rotateX: 10, scale: 1.15 }}
          className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl border ${
            positive
              ? "bg-emerald-50 text-emerald-600 border-emerald-100"
              : "bg-red-50 text-red-500 border-red-100"
          } shadow-xs`}
        >
          <Icon size={21} />
        </motion.div>
      </motion.div>
    </div>
  );
}