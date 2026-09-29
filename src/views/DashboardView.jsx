
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {ArrowDownLeft,ArrowUpRight,Activity, CheckCircle2, Clock3,CreditCard,IndianRupee, TrendingDown,TrendingUp,Users,Wallet,Zap,} from "lucide-react";

import AccountsOverview from "../components/AccountsOverview";
import Analytics from "../components/Analytics";
import QuickActions from "../components/QuickActions";
import Transactions from "../components/Transactions";
import VirtualCards from "../components/VirtualCards";


const customers = [
  "Rahul Sharma",
  "Priya Patel",
  "Arjun Mehta",
  "Sneha Verma",
  "Amit Kumar",
  "Neha Singh",
  "Vikram Rao",
  "Ananya Gupta",
];


const liveTransactions = [
  {
    name: "Rahul Sharma",
    type: "received",
    amounts: [1000, 1200, 1500, 1800, 2000],
  },
  {
    name: "Priya Patel",
    type: "sent",
    amounts: [200, 300, 500, 750, 1000],
  },
  {
    name: "Arjun Mehta",
    type: "received",
    amounts: [1000, 1500, 1800, 2000, 2500],
  },
  {
    name: "Sneha Verma",
    type: "sent",
    amounts: [200, 500, 750, 1000, 1200],
  },
  {
    name: "Amit Kumar",
    type: "received",
    amounts: [1200, 1500, 2000, 2500, 3000],
  },
  {
    name: "Neha Singh",
    type: "received",
    amounts: [1000, 1500, 2000],
  },
  {
    name: "Vikram Rao",
    type: "sent",
    amounts: [200, 500, 800, 1000],
  },
  {
    name: "Ananya Gupta",
    type: "received",
    amounts: [1000, 1200, 1500, 2000],
  },
];


function LiveCard({ children, className = "" }) {
  return (
    <div className="h-full [perspective:1400px]">
      <motion.div
        whileHover={{
          y: -7,
          scale: 1.015,
          rotateX: 3,
          rotateY: -3,
          z: 15,
        }}
        whileTap={{
          scale: 0.98,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 18,
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
        className={`transform-gpu ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
}


function AnimatedMoney({ value }) {
  return (
    <motion.span
      key={Math.floor(value)}
      initial={{
        opacity: 0.3,
        y: 10,
        scale: 0.96,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.35,
      }}
    >
      ₹{Math.floor(value).toLocaleString("en-IN")}
    </motion.span>
  );
}


export default function DashboardView() {
  const [balanceVisible, setBalanceVisible] = useState(true);

  const [balance, setBalance] = useState(258450);
  const [income, setIncome] = useState(84200);
  const [expenses, setExpenses] = useState(35680);

  const [liveChange, setLiveChange] = useState(0);
  const [activity, setActivity] = useState(0);

  const [lastUpdated, setLastUpdated] = useState(new Date());

  
  const [liveFeed, setLiveFeed] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      type: "received",
      amount: 8500,
      time: "Just now",
    },
    {
      id: 2,
      name: "Priya Patel",
      type: "sent",
      amount: 2400,
      time: "Just now",
    },
    {
      id: 3,
      name: "Arjun Mehta",
      type: "received",
      amount: 12500,
      time: "Just now",
    },
    {
      id: 4,
      name: "Sneha Verma",
      type: "sent",
      amount: 1850,
      time: "Just now",
    },
  ]);

  
  useEffect(() => {
    const interval = setInterval(() => {

      const transaction =
        liveTransactions[
          Math.floor(
            Math.random() * liveTransactions.length
          )
        ];


      const amount =
        transaction.amounts[
          Math.floor(
            Math.random() * transaction.amounts.length
          )
        ];

    

      const direction =
        transaction.type === "received" ? 1 : -1;

      const change = amount * direction;

      
      setBalance((prev) =>
        Math.max(0, prev + change)
      );

      
      if (direction > 0) {
        setIncome((prev) => prev + amount);
      } else {
        setExpenses((prev) => prev + amount);
      }

     
      const newTransaction = {
        id: Date.now(),
        name: transaction.name,
        type: transaction.type,
        amount,
        time: new Date().toLocaleTimeString(),
      };

      
      setLiveFeed((prev) => [
        newTransaction,
        ...prev,
      ].slice(0, 5));

      
      setLiveChange(change);

      setActivity((prev) => prev + 1);

      setLastUpdated(new Date());
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  
  const greeting = useMemo(() => {
    const hour = new Date().getHours();

    if (hour < 12) {
      return "Good morning";
    }

    if (hour < 17) {
      return "Good afternoon";
    }

    return "Good evening";
  }, []);

  const randomCustomer =
    customers[activity % customers.length];

  
  return (
    <div className="space-y-6 pb-10">

      
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      >

        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-100/60 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-indigo-100/50 blur-3xl"
        />

        <div className="relative flex flex-col justify-between gap-5 lg:flex-row lg:items-center">

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
                className="h-2.5 w-2.5 rounded-full bg-emerald-500"
              />

              <p className="text-sm font-semibold text-emerald-600">
                Live banking
              </p>

            </div>

            <p className="mt-3 text-sm font-medium text-blue-600">
              {greeting}, Dinesh 👋
            </p>

            <h1 className="mt-1 text-3xl font-black tracking-tight sm:text-4xl">
              Welcome back
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              Here's what's happening with your finances today.
            </p>

          </div>

       

          <motion.div
            whileHover={{
              scale: 1.04,
              y: -3,
              rotateY: -4,
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
            className="flex items-center gap-3 rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-3 shadow-sm"
          >

            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-lg shadow-emerald-200"
            >
              <Activity size={19} />
            </motion.div>

            <div>

              <p className="text-xs font-bold text-emerald-700">
                Account is active
              </p>

              <p className="mt-0.5 text-[11px] text-emerald-600">
                Updated {lastUpdated.toLocaleTimeString()}
              </p>

            </div>

          </motion.div>

        </div>
      </motion.div>
     
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <LiveCard>
          <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 p-5 text-white shadow-xl">

            <motion.div
              animate={{
                x: [0, 25, 0],
                y: [0, -20, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-400/20 blur-2xl"
            />

            <div className="relative">

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-2">

                  <Wallet size={18} />

                  <span className="text-xs font-medium text-blue-100">
                    Total Balance
                  </span>

                </div>

                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                  }}
                  className="h-2 w-2 rounded-full bg-emerald-400"
                />

              </div>

              {/* Balance */}

              <div className="mt-5 text-2xl font-black sm:text-3xl">

                {balanceVisible ? (
                  <AnimatedMoney value={balance} />
                ) : (
                  "••••••"
                )}

              </div>

              {/* Live Increase / Decrease */}

              <AnimatePresence mode="wait">

                {liveChange !== 0 && (

                  <motion.div
                    key={activity}
                    initial={{
                      opacity: 0,
                      y: 12,
                      scale: 0.9,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: -12,
                      scale: 0.9,
                    }}
                    className={`mt-2 flex items-center gap-1 text-xs font-bold ${
                      liveChange > 0
                        ? "text-emerald-300"
                        : "text-red-300"
                    }`}
                  >

                    {liveChange > 0 ? (
                      <ArrowUpRight size={14} />
                    ) : (
                      <ArrowDownLeft size={14} />
                    )}

                    {liveChange > 0 ? "+" : "-"}₹
                    {Math.abs(liveChange).toLocaleString("en-IN")}

                    <span className="ml-1 text-blue-200">
                      live update
                    </span>

                  </motion.div>

                )}

              </AnimatePresence>

              <p className="mt-3 text-[10px] text-blue-200">
                Live updates: {activity}
              </p>

            </div>

            {/* Shine */}

            <motion.div
              initial={{
                x: "-130%",
              }}
              whileHover={{
                x: "130%",
              }}
              transition={{
                duration: 0.8,
              }}
              className="pointer-events-none absolute inset-y-0 w-20 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/10 to-transparent"
            />

          </div>

        </LiveCard>

        <LiveCard>

          <div className="group h-full rounded-3xl border border-emerald-100 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-emerald-100">

            <div className="flex items-center justify-between">

              <motion.div
                whileHover={{
                  rotateY: 15,
                  rotateX: 8,
                  scale: 1.1,
                }}
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600"
              >
                <TrendingUp size={20} />
              </motion.div>

              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-600">
                +12.8%
              </span>

            </div>

            <p className="mt-5 text-xs font-medium text-slate-400">
              Total Income
            </p>

            <motion.p
              key={income}
              initial={{
                opacity: 0.3,
                y: 8,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              className="mt-1 text-2xl font-black text-slate-900"
            >
              ₹{income.toLocaleString("en-IN")}
            </motion.p>

            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100">

              <motion.div
                animate={{
                  width: ["45%", "75%", "60%", "78%"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                }}
                className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-green-500"
              />

            </div>

            <p className="mt-2 text-[10px] text-slate-400">
              Income increases with received transactions
            </p>

          </div>

        </LiveCard>

        
        <LiveCard>

          <div className="group h-full rounded-3xl border border-red-100 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-red-100">

            <div className="flex items-center justify-between">

              <motion.div
                whileHover={{
                  rotateY: -15,
                  rotateX: 8,
                  scale: 1.1,
                }}
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-red-50 text-red-500"
              >
                <TrendingDown size={20} />
              </motion.div>

              <span className="rounded-full bg-red-50 px-2.5 py-1 text-[10px] font-bold text-red-500">
                -4.6%
              </span>

            </div>

            <p className="mt-5 text-xs font-medium text-slate-400">
              Total Expenses
            </p>

            <motion.p
              key={expenses}
              initial={{
                opacity: 0.3,
                y: 8,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              className="mt-1 text-2xl font-black text-slate-900"
            >
              ₹{expenses.toLocaleString("en-IN")}
            </motion.p>

            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100">

              <motion.div
                animate={{
                  width: ["62%", "48%", "58%", "52%"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                }}
                className="h-full rounded-full bg-gradient-to-r from-red-400 to-rose-500"
              />

            </div>

            <p className="mt-2 text-[10px] text-slate-400">
              Expenses increase with sent transactions
            </p>

          </div>

        </LiveCard>

      
        <LiveCard>

          <div className="group h-full rounded-3xl border border-blue-100 bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-blue-100">

            <div className="flex items-center justify-between">

              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotateY: 12,
                }}
                className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600"
              >
                <Users size={20} />
              </motion.div>

              <motion.div
                animate={{
                  rotate: [0, 8, -8, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                }}
              >
                <Zap
                  size={17}
                  className="text-amber-500"
                />
              </motion.div>

            </div>

            <p className="mt-5 text-xs font-medium text-slate-400">
              Latest Activity
            </p>

            <AnimatePresence mode="wait">

              <motion.p
                key={`${randomCustomer}-${activity}`}
                initial={{
                  opacity: 0,
                  x: -15,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                className="mt-1 truncate text-lg font-black text-slate-900"
              >
                {randomCustomer}
              </motion.p>

            </AnimatePresence>

            <div className="mt-2 flex items-center gap-1.5 text-xs text-emerald-600">

              <CheckCircle2 size={13} />

              Transaction verified

            </div>

          </div>

        </LiveCard>

      </div>

      
      <AccountsOverview
        balanceVisible={balanceVisible}
        setBalanceVisible={setBalanceVisible}
        balance={balance}
      />

      
      <div className="grid gap-6 xl:grid-cols-3">

        <QuickActions />

        <div className="xl:col-span-2">
          <Analytics />
        </div>

      </div>

      
      <VirtualCards />

      
      <LiveCard>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

          {/* Header */}

          <div className="flex flex-col justify-between gap-3 border-b border-slate-100 p-5 sm:flex-row sm:items-center">

            <div>

              <div className="flex items-center gap-2">

                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600"
                >
                  <Activity size={17} />
                </motion.div>

                <h2 className="font-black text-slate-900">
                  Live Activity
                </h2>

              </div>

              <p className="mt-1 text-xs text-slate-400">
                New transactions update automatically every 7 seconds
              </p>

            </div>

            <div className="flex items-center gap-3">

              <motion.span
                key={activity}
                initial={{
                  scale: 0.8,
                }}
                animate={{
                  scale: 1,
                }}
                className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold text-blue-600"
              >
                {activity} updates
              </motion.span>

              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600">

                <span className="relative flex h-2 w-2">

                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />

                </span>

                Live

              </div>

            </div>

          </div>

          {/* Transaction List */}

          <div className="divide-y divide-slate-100">

            <AnimatePresence initial={false}>

              {liveFeed.map((transaction) => {

                const received =
                  transaction.type === "received";

                return (
                  <motion.div
                    key={transaction.id}
                    initial={{
                      opacity: 0,
                      x: -35,
                      scale: 0.97,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      x: 35,
                      scale: 0.97,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                    whileHover={{
                      x: 6,
                      scale: 1.005,
                    }}
                    className="flex items-center justify-between gap-4 p-4 transition-colors hover:bg-slate-50"
                  >

                    {/* Left */}

                    <div className="flex min-w-0 items-center gap-3">

                      <motion.div
                        animate={
                          transaction.id ===
                          liveFeed[0]?.id
                            ? {
                                scale: [1, 1.15, 1],
                                rotate: [0, 3, -3, 0],
                              }
                            : {}
                        }
                        transition={{
                          duration: 0.7,
                        }}
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${
                          received
                            ? "bg-emerald-50 text-emerald-600"
                            : "bg-red-50 text-red-500"
                        }`}
                      >

                        {received ? (
                          <ArrowDownLeft size={18} />
                        ) : (
                          <ArrowUpRight size={18} />
                        )}

                      </motion.div>

                      <div className="min-w-0">

                        <p className="truncate text-sm font-bold text-slate-800">
                          {transaction.name}
                        </p>

                        <div className="mt-1 flex items-center gap-2 text-[11px] text-slate-400">

                          <Clock3 size={11} />

                          {transaction.time}

                          <span>•</span>

                          <CreditCard size={11} />

                          Bank transfer

                        </div>

                      </div>

                    </div>

                    {/* Right */}

                    <div className="shrink-0 text-right">

                      <motion.p
                        initial={{
                          scale: 0.75,
                          opacity: 0,
                        }}
                        animate={{
                          scale: 1,
                          opacity: 1,
                        }}
                        className={`text-sm font-black ${
                          received
                            ? "text-emerald-600"
                            : "text-red-500"
                        }`}
                      >

                        {received ? "+" : "-"}₹
                        {transaction.amount.toLocaleString(
                          "en-IN"
                        )}

                      </motion.p>

                      <p className="mt-1 text-[10px] font-medium text-slate-400">
                        Completed
                      </p>

                    </div>

                  </motion.div>
                );
              })}

            </AnimatePresence>

          </div>

        </div>

      </LiveCard>

      

      <Transactions />

      
      <div className="grid gap-4 md:grid-cols-3">

        {/* Balance */}

        <LiveCard>

          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">

            <motion.div
              whileHover={{
                rotateY: 15,
                scale: 1.1,
              }}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600"
            >
              <IndianRupee size={18} />
            </motion.div>

            <div>

              <p className="text-xs text-slate-400">
                Available balance
              </p>

              <p className="text-sm font-black text-slate-900">

                {balanceVisible ? (
                  <AnimatedMoney value={balance} />
                ) : (
                  "••••••"
                )}

              </p>

            </div>

          </div>

        </LiveCard>

        

        <LiveCard>

          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">

            <motion.div
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600"
            >
              <CheckCircle2 size={18} />
            </motion.div>

            <div>

              <p className="text-xs text-slate-400">
                Successful transactions
              </p>

              <motion.p
                key={activity}
                initial={{
                  scale: 0.8,
                  opacity: 0.5,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                className="text-sm font-black text-slate-900"
              >
                {(1284 + activity).toLocaleString(
                  "en-IN"
                )}
              </motion.p>

            </div>

          </div>

        </LiveCard>

        <LiveCard>

          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">

            <motion.div
              whileHover={{
                scale: 1.1,
                rotateY: -15,
              }}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600"
            >
              <Users size={18} />
            </motion.div>

            <div>

              <p className="text-xs text-slate-400">
                Active customers
              </p>

              <p className="text-sm font-black text-slate-900">
                24,892
              </p>

            </div>

          </div>

        </LiveCard>

      </div>

    </div>
  );
}
