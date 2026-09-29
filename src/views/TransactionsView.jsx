import { motion } from "framer-motion";
import { Activity, ArrowDownLeft,ArrowUpRight,BarChart3, CheckCircle2,Clock3,CreditCard, Filter,Search,ShieldCheck,Sparkles,TrendingUp, Wallet,} from "lucide-react";

import Transactions from "../components/Transactions";

const summaryCards = [
  {
    title: "Total Transactions",
    value: "1,284",
    change: "+12.8%",
    icon: Activity,
    iconBg: "bg-blue-50 dark:bg-blue-950/50",
    iconColor: "text-blue-600 dark:text-blue-400",
    changeColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Money Received",
    value: "₹84,200",
    change: "+8.4%",
    icon: ArrowDownLeft,
    iconBg: "bg-emerald-50 dark:bg-emerald-950/50",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    changeColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Money Spent",
    value: "₹35,680",
    change: "-4.6%",
    icon: ArrowUpRight,
    iconBg: "bg-red-50 dark:bg-red-950/50",
    iconColor: "text-red-500 dark:text-red-400",
    changeColor: "text-red-500 dark:text-red-400",
  },
  {
    title: "Success Rate",
    value: "98.6%",
    change: "+2.1%",
    icon: ShieldCheck,
    iconBg: "bg-purple-50 dark:bg-purple-950/50",
    iconColor: "text-purple-600 dark:text-purple-400",
    changeColor: "text-emerald-600 dark:text-emerald-400",
  },
];



function SummaryCard({
  title,
  value,
  change,
  icon: Icon,
  iconBg,
  iconColor,
  changeColor,
  delay,
}) {
  return (
    <div className="h-full [perspective:1200px]">
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
          rotateX: -8,
        }}
        animate={{
          opacity: 1,
          y: 0,
          rotateX: 0,
        }}
        transition={{
          duration: 0.55,
          delay,
          type: "spring",
          stiffness: 100,
        }}
        whileHover={{
          y: -8,
          scale: 1.025,
          rotateX: 4,
          rotateY: -4,
          z: 20,
        }}
        whileTap={{
          scale: 0.97,
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
        className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900"
      >

        <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-100/50 blur-3xl transition-all duration-500 group-hover:scale-150 dark:bg-blue-900/20" />

        <div className="relative">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{
                rotate: 8,
                scale: 1.1,
                z: 15,
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
              className={`flex h-12 w-12 items-center justify-center rounded-2xl ${iconBg} ${iconColor} shadow-sm`}
            >
              <Icon size={21} />
            </motion.div>

            <span
              className={`rounded-full bg-slate-50 px-2.5 py-1 text-[10px] font-black dark:bg-slate-800 ${changeColor}`}
            >
              {change}
            </span>
          </div>

          <p className="mt-5 text-xs font-semibold text-slate-400 dark:text-slate-500">
            {title}
          </p>

          <motion.p
            whileHover={{ x: 3 }}
            className="mt-1 text-2xl font-black tracking-tight text-slate-900 dark:text-white"
          >
            {value}
          </motion.p>

          <div className="mt-4 h-1 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
            <motion.div
              initial={{ width: "0%" }}
              animate={{
                width: ["25%", "70%", "45%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`h-full rounded-full ${
                changeColor.includes("red")
                  ? "bg-red-400"
                  : "bg-blue-500"
              }`}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
export default function TransactionsView() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.99 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -12, scale: 0.99 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="relative space-y-7 pb-10"
    >
  
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl dark:bg-blue-950/20"
        />
        <motion.div
          animate={{
            x: [0, -30, 30, 0],
            y: [0, 30, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 top-[45%] h-72 w-72 rounded-full bg-indigo-100/30 blur-3xl dark:bg-indigo-950/20"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-blue-50/60 to-indigo-50/80 p-6 shadow-sm sm:p-8 dark:border-slate-800 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/40"
      >
        <div className="relative flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-white shadow-lg shadow-blue-200 dark:shadow-none">
                <Activity size={14} />
              </span>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                Financial Activity
              </p>
            </div>

            <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl dark:text-white">
              Transactions
            </h1>

            <p className="mt-3 max-w-full text-sm leading-6 text-slate-500 sm:text-base dark:text-slate-400">
              Review, search and monitor your financial activity with a complete view of your recent transactions.
            </p>
          </div>

          
          <div className="flex items-center gap-3 rounded-2xl border border-emerald-100 bg-white/80 px-4 py-3 shadow-lg backdrop-blur dark:border-emerald-900/50 dark:bg-slate-900/80">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-lg shadow-emerald-200 dark:shadow-none">
              <motion.span
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.4, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute inset-0 rounded-xl bg-emerald-400"
              />
              <Activity size={19} className="relative z-10" />
            </div>
            <div>
              <p className="text-xs font-black text-slate-900 dark:text-white">
                Live monitoring
              </p>
              <p className="mt-0.5 text-[11px] text-emerald-600 dark:text-emerald-400">
                All systems operational
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {summaryCards.map((card, index) => (
          <SummaryCard key={card.title} {...card} delay={index * 0.08} />
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Search, color: "bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400", title: "Search", desc: "Find transactions" },
          { icon: Filter, color: "bg-purple-50 text-purple-600 dark:bg-purple-950/50 dark:text-purple-400", title: "Filter", desc: "Sort activity" },
          { icon: TrendingUp, color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400", title: "Growth", desc: "+12.8% this month" },
          { icon: Clock3, color: "bg-amber-50 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400", title: "Activity", desc: "Updated recently" },
        ].map((item, idx) => {
          const ItemIcon = item.icon;
          return (
            <motion.div
              key={idx}
              whileHover={{ y: -4, scale: 1.02 }}
              className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${item.color}`}>
                <ItemIcon size={18} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  {item.title}
                </p>
                <p className="text-sm font-black text-slate-800 dark:text-slate-200">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

       <div className="relative">
        <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-blue-600 dark:text-blue-400" />
              <p className="text-xs font-black uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Transaction history
              </p>
            </div>
            <h2 className="mt-1 text-2xl font-black text-slate-950 dark:text-white">
              Recent Activity
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 dark:text-slate-500">
            <CheckCircle2 size={15} className="text-emerald-500" />
            Secure & verified
          </div>
        </div>

        <div className="[perspective:1600px]">
          <motion.div
            whileHover={{ rotateX: 1, y: -3 }}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
            style={{ transformStyle: "preserve-3d" }}
            className="transform-gpu"
          >
            <Transactions limit={20} />
          </motion.div>
        </div>
      </div>

     
      <motion.div
        whileHover={{ scale: 1.01, y: -3 }}
        className="relative overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-6 text-white shadow-xl dark:border-blue-900"
      >
        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
              <ShieldCheck size={27} />
            </div>
            <div>
              <p className="text-sm font-black">Your transactions are protected</p>
              <p className="mt-1 text-xs text-blue-100">
                Every transaction is monitored and securely verified.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-white/15 px-4 py-2.5 text-xs font-bold backdrop-blur">
            <CreditCard size={15} />
            Secure Banking
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}