import { motion } from "framer-motion";
import { TrendingUp, Sparkles, BarChart3, Calendar } from "lucide-react";
import { useState } from "react";

const weeklyData = [
  { day: "Mon", value: 3200, label: "₹3,200" },
  { day: "Tue", value: 4700, label: "₹4,700" },
  { day: "Wed", value: 2900, label: "₹2,900" },
  { day: "Thu", value: 6100, label: "₹6,100" },
  { day: "Fri", value: 4200, label: "₹4,200" },
  { day: "Sat", value: 7600, label: "₹7,600 (Peak)" },
  { day: "Sun", value: 5100, label: "₹5,100" },
];

const monthlyData = [
  { day: "Week 1", value: 24000, label: "₹24,000" },
  { day: "Week 2", value: 31000, label: "₹31,000" },
  { day: "Week 3", value: 19500, label: "₹19,500" },
  { day: "Week 4", value: 28200, label: "₹28,200" },
];

export default function Analytics() {
  const [timeframe, setTimeframe] = useState("weekly");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const data = timeframe === "weekly" ? weeklyData : monthlyData;
  const max = Math.max(...data.map((item) => item.value));

  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm [perspective:1400px]">
      
      
      <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-100/40 blur-3xl pointer-events-none" />

   
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
        <div>
          <div className="flex items-center gap-1.5">
            <Sparkles size={14} className="text-blue-600" />
            <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Cash Flow Analytics
            </p>
          </div>

          <h2 className="mt-0.5 text-xl font-black text-slate-900 tracking-tight">
            Spending Overview
          </h2>

          <p className="mt-0.5 text-xs text-slate-400 font-medium">
            Interactive breakdown of your outgoing expenditure
          </p>
        </div>

        <div className="flex items-center gap-3">
          
          <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200/60">
            <button
              onClick={() => setTimeframe("weekly")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                timeframe === "weekly"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              Weekly
            </button>
            <button
              onClick={() => setTimeframe("monthly")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                timeframe === "monthly"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              Monthly
            </button>
          </div>

          <motion.div
            whileHover={{ rotateY: 15, rotateX: 10, scale: 1.1 }}
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 shadow-xs"
          >
            <TrendingUp size={20} />
          </motion.div>
        </div>
      </div>

     
      <div className="my-5 flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 border border-slate-100">
        <span className="text-xs text-slate-500 font-medium">
          {hoveredIndex !== null ? `Selected (${data[hoveredIndex].day}):` : "Hover over bars to inspect values"}
        </span>
        <span className="text-sm font-black text-slate-900">
          {hoveredIndex !== null ? data[hoveredIndex].label : `Peak: ₹${max.toLocaleString()}`}
        </span>
      </div>

      <div className="mt-6 flex h-64 items-end justify-between gap-3 sm:gap-6 pt-8">
        {data.map((item, index) => {
          const height = (item.value / max) * 100;
          const isHovered = hoveredIndex === index;

          return (
            <div
              key={item.day}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="flex h-full flex-1 flex-col items-center justify-end gap-3 group relative cursor-pointer"
            >
              
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 5, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className="absolute -top-10 z-20 whitespace-nowrap rounded-xl bg-slate-900 px-3 py-1 text-[11px] font-black text-white shadow-xl"
                >
                  {item.label}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2 w-2 rotate-45 bg-slate-900" />
                </motion.div>
              )}

              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  scaleX: 1.12,
                  scaleY: 1.04,
                }}
                className={`w-full max-w-12 rounded-2xl bg-gradient-to-t from-blue-600 via-indigo-500 to-blue-400 shadow-md transition-shadow ${
                  isHovered ? "shadow-blue-500/30 ring-2 ring-blue-300" : ""
                }`}
              />

              <span className={`text-xs font-bold transition-colors ${isHovered ? "text-blue-600" : "text-slate-400"}`}>
                {item.day}
              </span>
            </div>
          );
        })}
      </div>

    </div>
  );
}