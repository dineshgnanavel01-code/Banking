import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Bell, Lock, Moon, ShieldCheck, Smartphone,Globe,Eye,CreditCard,Volume2,} from "lucide-react";

const settingsGroups = [
  {
    category: "Security & Privacy",
    items: [
      {
        title: "Two-Factor Authentication",
        description: "Add an extra layer of security via SMS or Authenticator app.",
        icon: ShieldCheck,
      },
      {
        title: "Privacy Lock",
        description: "Hide balances and sensitive info on your dashboard by default.",
        icon: Lock,
      },
      {
        title: "Biometric Login",
        description: "Use fingerprint or face recognition for quick access.",
        icon: Smartphone,
      },
    ],
  },
  {
    category: "Alerts & Notifications",
    items: [
      {
        title: "Push Notifications",
        description: "Receive instant updates about your deposits and payments.",
        icon: Bell,
      },
      {
        title: "Email Statements",
        description: "Get monthly account statements delivered securely to your inbox.",
        icon: Globe,
      },
      {
        title: "Transaction Sound Effects",
        description: "Play an audible chime when money is sent or received.",
        icon: Volume2,
      },
    ],
  },
  {
    category: "Appearance & Display",
    items: [
      {
        title: "Dark Mode",
        description: "Use a darker interface for low-light environments.",
        icon: Moon,
      },
      {
        title: "Hide Sensitive Balances",
        description: "Mask your total funds with asterisks until tapped.",
        icon: Eye,
      },
    ],
  },
];

export default function SettingsView() {
  const [enabled, setEnabled] = useState({
    "Two-Factor Authentication": true,
    "Privacy Lock": false,
    "Biometric Login": true,
    "Push Notifications": true,
    "Email Statements": true,
    "Transaction Sound Effects": false,
    "Dark Mode": false,
    "Hide Sensitive Balances": false,
  });


  useEffect(() => {
    const isDarkMode = enabled["Dark Mode"];
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [enabled]);

  const toggle = (title) => {
    setEnabled((previous) => ({
      ...previous,
      [title]: !previous[title],
    }));
  };

  return (
    <div className="space-y-8 pb-12">
  
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          Preferences
        </p>
        <h1 className="mt-1 text-3xl font-black text-slate-900 dark:text-white">
          Settings
        </h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Customize your banking experience, security rules, and interface display.
        </p>
      </div>

     
      <div className="space-y-6">
        {settingsGroups.map((group) => (
          <div key={group.category} className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wide text-slate-400 dark:text-slate-500 px-1">
              {group.category}
            </h2>

            <div className="rounded-3xl border border-slate-200/80 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 overflow-hidden">
              {group.items.map((item, index) => {
                const Icon = item.icon;
                const active = enabled[item.title];

                return (
                  <motion.div
                    key={item.title}
                    whileHover={{ x: 4, scale: 1.002 }}
                    className={`flex items-center gap-4 p-5 transition-colors ${
                      index !== group.items.length - 1
                        ? "border-b border-slate-100 dark:border-slate-800"
                        : ""
                    }`}
                  >
                    <motion.div
                      whileHover={{ rotateY: 15, rotateX: 8, scale: 1.1 }}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400"
                    >
                      <Icon size={19} />
                    </motion.div>

                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-slate-800 dark:text-slate-100">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 text-xs text-slate-400 dark:text-slate-500">
                        {item.description}
                      </p>
                    </div>

                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      whileHover={{ scale: 1.04 }}
                      onClick={() => toggle(item.title)}
                      className={`relative h-7 w-12 rounded-full transition-colors ${
                        active ? "bg-blue-600" : "bg-slate-200 dark:bg-slate-700"
                      }`}
                    >
                      <motion.span
                        animate={{
                          x: active ? 20 : 2,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                        }}
                        className="absolute left-0 top-1 h-5 w-5 rounded-full bg-white shadow-md"
                      />
                    </motion.button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

   
      <motion.div
        whileHover={{ y: -4, rotateX: 2, rotateY: -1 }}
        className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white shadow-xl"
      >
        <h2 className="text-xl font-black">Your account is fully protected</h2>
        <p className="mt-2 max-w-xl text-sm text-blue-100">
          NovaBank continuously monitors your account for unusual activity, offering end-to-end encryption and multi-layered fraud detection.
        </p>
      </motion.div>
    </div>
  );
}