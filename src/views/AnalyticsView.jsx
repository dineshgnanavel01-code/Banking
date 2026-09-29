
import Analytics from "../components/Analytics";
import { motion, AnimatePresence } from "framer-motion";
import {TrendingUp, TrendingDown, Wallet, PieChart, Calendar,ArrowUpRight,ArrowDownLeft,Download,BarChart3, Activity,} from "lucide-react";
import { useState } from "react";


const analyticsData = {
  daily: {
    label: "Today",
    description:
      "Track today's income, spending activity, and available savings.",
    stats: [
      {
        title: "Today's Income",
        value: "₹8,450",
        change: "+8.6%",
        isPositive: true,
        icon: TrendingUp,
        color: "emerald",
        progress: 78,
      },
      {
        title: "Today's Expenses",
        value: "₹2,380",
        change: "-6.4%",
        isPositive: true,
        icon: TrendingDown,
        color: "red",
        progress: 42,
      },
      {
        title: "Today's Savings",
        value: "₹6,070",
        change: "+14.2%",
        isPositive: true,
        icon: Wallet,
        color: "blue",
        progress: 86,
      },
      {
        title: "Daily Avg. Spend",
        value: "₹2,380",
        change: "-4.8%",
        isPositive: true,
        icon: PieChart,
        color: "purple",
        progress: 36,
      },
    ],
    trend: [35, 52, 44, 68, 55, 72, 88],
  },

  weekly: {
    label: "This Week",
    description:
      "Review your weekly cash flow, expenses, and savings performance.",
    stats: [
      {
        title: "Weekly Income",
        value: "₹18,200",
        change: "+5.1%",
        isPositive: true,
        icon: TrendingUp,
        color: "emerald",
        progress: 72,
      },
      {
        title: "Weekly Expenses",
        value: "₹6,450",
        change: "-1.2%",
        isPositive: true,
        icon: TrendingDown,
        color: "red",
        progress: 48,
      },
      {
        title: "Weekly Savings",
        value: "₹11,750",
        change: "+8.4%",
        isPositive: true,
        icon: Wallet,
        color: "blue",
        progress: 82,
      },
      {
        title: "Avg. Daily Spend",
        value: "₹920",
        change: "-4.5%",
        isPositive: true,
        icon: PieChart,
        color: "purple",
        progress: 34,
      },
    ],
    trend: [48, 62, 55, 76, 64, 82, 70],
  },

  monthly: {
    label: "This Month",
    description:
      "Deep dive into your monthly cash flow, expenditure patterns, and savings.",
    stats: [
      {
        title: "Monthly Income",
        value: "₹70,500",
        change: "+12.4%",
        isPositive: true,
        icon: TrendingUp,
        color: "emerald",
        progress: 84,
      },
      {
        title: "Monthly Expenses",
        value: "₹24,380",
        change: "-4.8%",
        isPositive: true,
        icon: TrendingDown,
        color: "red",
        progress: 55,
      },
      {
        title: "Net Savings",
        value: "₹46,120",
        change: "+18.2%",
        isPositive: true,
        icon: Wallet,
        color: "blue",
        progress: 91,
      },
      {
        title: "Avg. Daily Spend",
        value: "₹3,482",
        change: "-2.1%",
        isPositive: true,
        icon: PieChart,
        color: "purple",
        progress: 44,
      },
    ],
    trend: [42, 58, 52, 70, 63, 82, 92],
  },

  yearly: {
    label: "This Year",
    description:
      "Understand your yearly financial growth, spending trends, and savings.",
    stats: [
      {
        title: "Yearly Income",
        value: "₹8,45,000",
        change: "+24.8%",
        isPositive: true,
        icon: TrendingUp,
        color: "emerald",
        progress: 94,
      },
      {
        title: "Yearly Expenses",
        value: "₹2,95,000",
        change: "+6.2%",
        isPositive: false,
        icon: TrendingDown,
        color: "red",
        progress: 61,
      },
      {
        title: "Yearly Savings",
        value: "₹5,50,000",
        change: "+32.5%",
        isPositive: true,
        icon: Wallet,
        color: "blue",
        progress: 96,
      },
      {
        title: "Avg. Daily Spend",
        value: "₹3,150",
        change: "-1.8%",
        isPositive: true,
        icon: PieChart,
        color: "purple",
        progress: 39,
      },
    ],
    trend: [50, 60, 72, 65, 78, 88, 96],
  },
};


const iconColorStyles = {
  emerald:
    "bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-500 group-hover:text-white",
  red:
    "bg-red-50 text-red-500 border-red-100 group-hover:bg-red-500 group-hover:text-white",
  blue:
    "bg-blue-50 text-blue-600 border-blue-100 group-hover:bg-blue-500 group-hover:text-white",
  purple:
    "bg-purple-50 text-purple-600 border-purple-100 group-hover:bg-purple-500 group-hover:text-white",
};

export default function AnalyticsView() {
  const [timeframe, setTimeframe] = useState("monthly");

  const currentData = analyticsData[timeframe];

  return (
    <div className="space-y-8 pb-10">

      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      >

        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-purple-100/40 blur-3xl" />

        <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">


          <div>
            <div className="flex items-center gap-2">
              <motion.span
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
                className="h-2.5 w-2.5 rounded-full bg-blue-500"
              />

              <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-600">
                Financial Intelligence
              </p>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={timeframe}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                  Analytics & Insights
                </h1>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  {currentData.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

      

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">

            <div className="flex items-center rounded-2xl border border-slate-200 bg-slate-100 p-1.5">

              {["daily", "weekly", "monthly", "yearly"].map((tab) => {
                const active = timeframe === tab;

                return (
                  <button
                    key={tab}
                    onClick={() => setTimeframe(tab)}
                    className="relative rounded-xl px-3.5 py-2 text-xs font-bold capitalize transition-all sm:px-4"
                  >
                    {active && (
                      <motion.div
                        layoutId="activeTimeframe"
                        className="absolute inset-0 rounded-xl bg-white shadow-sm"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}

                    <span
                      className={`relative z-10 ${
                        active
                          ? "text-slate-900"
                          : "text-slate-500 hover:text-slate-900"
                      }`}
                    >
                      {tab}
                    </span>
                  </button>
                );
              })}

            </div>

            

            <motion.button
              whileHover={{
                scale: 1.03,
                y: -2,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-slate-800"
            >
              <Download size={14} />
              Export PDF
            </motion.button>
          </div>
        </div>
      </motion.div>

      
      <motion.div
        key={`period-${timeframe}`}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 px-5 py-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
            <Calendar size={18} />
          </div>

          <div>
            <p className="text-xs font-medium text-slate-400">
              Analytics period
            </p>

            <p className="text-sm font-black text-slate-900">
              {currentData.label}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-bold text-blue-600">
          <Activity size={15} />
          Live financial overview
        </div>
      </motion.div>

      
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

        <AnimatePresence mode="popLayout">
          {currentData.stats.map((stat, idx) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={`${timeframe}-${stat.title}`}
                layout
                initial={{
                  opacity: 0,
                  y: 20,
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                  scale: 0.97,
                }}
                transition={{
                  delay: idx * 0.07,
                }}
                className="h-full [perspective:1200px]"
              >
                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    rotateX: 4,
                    rotateY: -4,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                  className="group relative h-full overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-xl"
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-50 via-transparent to-blue-50/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full border-[12px] border-slate-50 transition-transform duration-500 group-hover:scale-150" />

                  <div className="relative z-10 flex items-center justify-between">

                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-300 ${iconColorStyles[stat.color]}`}
                    >
                      <Icon size={21} />
                    </div>


                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1.5 text-[10px] font-black ${
                        stat.isPositive
                          ? "bg-emerald-50 text-emerald-600"
                          : "bg-red-50 text-red-500"
                      }`}
                    >
                      {stat.isPositive ? (
                        <ArrowUpRight size={12} />
                      ) : (
                        <ArrowDownLeft size={12} />
                      )}

                      {stat.change}
                    </span>
                  </div>

                 

                  <div className="relative z-10 mt-6">

                    <p className="text-xs font-semibold text-slate-400">
                      {stat.title}
                    </p>

                    <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-900 transition-colors group-hover:text-blue-600">
                      {stat.value}
                    </h2>
                  </div>


                  <div className="relative z-10 mt-5">

                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-[10px] font-medium text-slate-400">
                        Performance
                      </span>

                      <span className="text-[10px] font-black text-slate-600">
                        {stat.progress}%
                      </span>
                    </div>

                    <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{
                          width: `${stat.progress}%`,
                        }}
                        transition={{
                          duration: 0.8,
                          delay: idx * 0.1,
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
                      />
                    </div>
                  </div>


                  <div className="relative z-10 mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-[10px]">
                    <span className="text-slate-400">
                      vs previous period
                    </span>

                    <span
                      className={
                        stat.isPositive
                          ? "font-bold text-emerald-600"
                          : "font-bold text-red-500"
                      }
                    >
                      {stat.isPositive ? "Improving" : "Needs attention"}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

     
      <motion.div
        key={`trend-${timeframe}`}
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
      >
        <div className="mb-6 flex items-center justify-between">

          <div>
            <div className="flex items-center gap-2">
              <BarChart3
                size={17}
                className="text-blue-600"
              />

              <h3 className="text-sm font-black text-slate-900">
                {currentData.label} Trend
              </h3>
            </div>

            <p className="mt-1 text-xs text-slate-400">
              Financial activity over the selected period
            </p>
          </div>

          <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-[10px] font-black text-emerald-600">
            +18.2%
          </span>
        </div>

        {/* Animated bars */}

        <div className="flex h-40 items-end gap-2 sm:gap-4">

          {currentData.trend.map((height, index) => (
            <div
              key={index}
              className="group flex h-full flex-1 flex-col justify-end"
            >
              <motion.div
                initial={{
                  height: 0,
                }}
                animate={{
                  height: `${height}%`,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="relative w-full rounded-t-xl bg-gradient-to-t from-blue-600 to-indigo-400 opacity-80 transition-opacity group-hover:opacity-100"
              >
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 rounded-lg bg-slate-900 px-2 py-1 text-[9px] font-bold text-white opacity-0 transition-opacity group-hover:opacity-100">
                  {height}%
                </div>
              </motion.div>
            </div>
          ))}

        </div>

        <div className="mt-3 flex justify-between text-[10px] font-medium text-slate-400">
          <span>Start</span>
          <span>Activity</span>
          <span>Current</span>
        </div>
      </motion.div>

      <motion.div
        key={timeframe}
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
        }}
      >
        <Analytics timeframe={timeframe} />
      </motion.div>

    </div>
  );
}
