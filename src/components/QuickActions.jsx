import { motion } from "framer-motion";
import { ArrowDownLeft, ArrowUpRight,CreditCard,Plus, Sparkles,} from "lucide-react";

const actions = [
  {
    title: "Add Money",
    subtitle: "Instant deposit",
    icon: Plus,
    gradient: "from-blue-500 to-indigo-600",
    lightBg: "bg-blue-50 text-blue-600",
    borderHover: "hover:border-blue-300",
  },
  {
    title: "Transfer",
    subtitle: "To bank account",
    icon: ArrowUpRight,
    gradient: "from-purple-500 to-pink-600",
    lightBg: "bg-purple-50 text-purple-600",
    borderHover: "hover:border-purple-300",
  },
  {
    title: "Receive",
    subtitle: "Request payment",
    icon: ArrowDownLeft,
    gradient: "from-emerald-500 to-teal-600",
    lightBg: "bg-emerald-50 text-emerald-600",
    borderHover: "hover:border-emerald-300",
  },
  {
    title: "Pay Card",
    subtitle: "Clear dues",
    icon: CreditCard,
    gradient: "from-amber-500 to-orange-600",
    lightBg: "bg-amber-50 text-amber-600",
    borderHover: "hover:border-amber-300",
  },
];

export default function QuickActions() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm [perspective:1000px]">
      
      <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-blue-50/60 blur-2xl pointer-events-none" />

      <div className="relative mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Shortcuts
          </p>
          <h2 className="mt-0.5 text-xl font-black text-slate-900 tracking-tight">
            Quick Actions
          </h2>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-full">
          <Sparkles size={13} className="text-blue-500" />
          <span>Fast</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3.5">
        {actions.map((action, idx) => {
          const Icon = action.icon;

          return (
            <motion.button
              key={action.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{
                y: -5,
                scale: 1.02,
                rotateX: 4,
                rotateY: -4,
                z: 20,
              }}
              whileTap={{
                scale: 0.96,
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
              className={`group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-4 text-left shadow-xs transition-all duration-300 ${action.borderHover} hover:shadow-md`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="relative z-10 flex items-center justify-between">
                <motion.div
                  whileHover={{
                    scale: 1.15,
                    rotate: 8,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${action.lightBg} shadow-xs`}
                >
                  <Icon size={20} />
                </motion.div>

                <div className="h-1.5 w-1.5 rounded-full bg-slate-200 group-hover:bg-blue-500 transition-colors" />
              </div>

              <div className="relative z-10 mt-4">
                <p className="text-sm font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                  {action.title}
                </p>
                <p className="mt-0.5 text-[11px] text-slate-400 font-medium">
                  {action.subtitle}
                </p>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}