import { motion } from "framer-motion";
import { Activity,BarChart3, CreditCard,  Home, Settings,WalletCards,X, Sparkles,ShieldCheck,ChevronRight, Landmark,LogOut} from "lucide-react";

const navigation = [
  { name: "Dashboard", icon: Home },
  { name: "Accounts", icon: WalletCards },
  { name: "Transactions", icon: Activity },
  { name: "Cards", icon: CreditCard },
  { name: "Analytics", icon: BarChart3 },
  { name: "Settings", icon: Settings },
  { name: "Log Out", icon: LogOut, isAction: true }, 
];

export default function Sidebar({
  activeView,
  setActiveView,
  sidebarOpen,
  setSidebarOpen,
}) {
  const handleNavClick = (item) => {
    if (item.isAction && item.name === "Log Out") {
      // Handle logout action
      setActiveView("Login");
      if (setSidebarOpen) setSidebarOpen(false);
      return;
    }

    setActiveView(item.name);
    if (setSidebarOpen) {
      setSidebarOpen(false);
    }
  };

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 w-72 transform border-r border-slate-600 bg-slate-700 p-5 shadow-2xl backdrop-blur-2xl transition-transform duration-300 lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Background Neon Glow Effects */}
      <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-blue-500/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-indigo-500/15 blur-3xl pointer-events-none" />

      <div className="relative z-10 flex h-full flex-col justify-between">
        
        {/* Top Header & Logo */}
        <div>
          <div className="flex items-center justify-between px-2">
            <div 
              onClick={() => setActiveView("Dashboard")}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <motion.div
                whileHover={{ rotateY: 15, rotateX: 10, scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 border border-white/10"
              >
                <Landmark size={22} />
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute -top-1 -right-1 text-amber-300"
                >
                  <Sparkles size={12} />
                </motion.div>
              </motion.div>

              <div>
                <div className="flex items-center gap-1.5">
                  <h1 className="text-lg font-black tracking-tight text-white group-hover:text-blue-400 transition-colors">
                    NovaBank
                  </h1>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-blue-400">
                  SMART BANKING
                </p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSidebarOpen(false)}
              className="rounded-xl p-2 text-slate-400 hover:bg-slate-900 hover:text-white lg:hidden"
            >
              <X size={20} />
            </motion.button>
          </div>

     
          <nav className="mt-8 space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              const active = activeView === item.name;
              const isLogout = item.name === "Log Out";

              return (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  whileHover={{ x: 6, scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`group relative flex w-full items-center justify-between rounded-2xl px-4 py-3.5 text-left text-xs font-bold transition-all ${
                    active
                      ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg shadow-blue-500/25 border border-white/10"
                      : isLogout 
                        ? "text-red-400 hover:bg-red-500/10 hover:text-red-300 mt-4 border border-red-500/20" 
                        : "text-slate-400 hover:bg-slate-900/80 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      size={18}
                      className={`transition-transform duration-300 group-hover:scale-110 ${
                        active 
                          ? "text-white" 
                          : isLogout 
                            ? "text-red-400" 
                            : "text-slate-400 group-hover:text-blue-400"
                      }`}
                    />
                    <span>{item.name}</span>
                  </div>

                  {active && !isLogout ? (
                    <motion.div
                      layoutId="activeDot"
                      className="h-2 w-2 rounded-full bg-white shadow-sm"
                    />
                  ) : !isLogout ? (
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 text-slate-500 transition-opacity" />
                  ) : null}
                </motion.button>
              );
            })}
          </nav>
        </div>

        
        <div className="space-y-4 pt-6">
          <motion.div
            whileHover={{ y: -4, scale: 1.02 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-5 text-white shadow-xl border border-slate-800"
          >
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-500/20 blur-2xl pointer-events-none" />

            <div className="flex items-center gap-1.5 text-blue-400">
              <Sparkles size={13} />
              <p className="text-[10px] font-black uppercase tracking-wider">
                NovaAI Guard
              </p>
            </div>

            <h3 className="mt-1.5 text-sm font-black text-white">
              Fraud Protection Active
            </h3>

            <p className="mt-1 text-[11px] leading-relaxed text-slate-400">
              Your assets are monitored 24/7 with military-grade encryption.
            </p>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-3.5 w-full rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 py-2 text-center text-xs font-bold text-white transition-all backdrop-blur-md"
            >
              View Security Log
            </motion.button>
          </motion.div>

          <div className="flex items-center justify-between text-[11px] text-slate-500 px-2">
            <span>© 2026 NovaBank</span>
            <span className="flex items-center gap-1 text-emerald-400 font-semibold">
              <ShieldCheck size={13} /> v3.4.2
            </span>
          </div>
        </div>

      </div>
    </aside>
  );
}