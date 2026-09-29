import { AnimatePresence, motion } from "framer-motion";
import { Activity, ArrowDownLeft, ArrowUpRight, CheckCircle2,Clock3,Search,ShoppingBag, Smartphone,Sparkles,TrendingDown, TrendingUp, Wallet, X, Zap,} from "lucide-react";
import { useMemo, useState } from "react";
const transactions = [
  {
    name: "Amazon",
    category: "Shopping",
    date: "Today 10:32 AM",
    amount: -1299,
    icon: ShoppingBag,
    status: "Completed",
  },
  {
    name: "Salary Deposit",
    category: "Income",
    date: "Today 09:15 AM",
    amount: 58000,
    icon: ArrowDownLeft,
    status: "Completed",
  },
  {
    name: "Electricity Bill",
    category: "Utilities",
    date: "Yesterday 06:42 PM",
    amount: -2450,
    icon: Zap,
    status: "Completed",
  },
  {
    name: "Swiggy",
    category: "Food",
    date: "Yesterday 01:28 PM",
    amount: -689,
    icon: Smartphone,
    status: "Completed",
  },
  {
    name: "Freelance Payment",
    category: "Income",
    date: "Sep 26, 2026",
    amount: 12500,
    icon: ArrowDownLeft,
    status: "Completed",
  },
  {
    name: "Netflix",
    category: "Entertainment",
    date: "Sep 25, 2026",
    amount: -649,
    icon: Activity,
    status: "Completed",
  },
];


function TransactionRow({ transaction, index }) {
  const Icon = transaction.icon;
  const positive = transaction.amount > 0;

  return (
    <motion.div
      layout
      initial={{
        opacity: 0,
        x: -25,
        rotateX: -6,
      }}
      animate={{
        opacity: 1,
        x: 0,
        rotateX: 0,
      }}
      exit={{
        opacity: 0,
        x: 25,
        scale: 0.97,
      }}
      transition={{
        duration: 0.35,
        delay: index * 0.06,
      }}
      whileHover={{
        x: 6,
        y: -4,
        scale: 1.012,
        rotateY: -2,
      }}
      whileTap={{
        scale: 0.985,
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
      className="group relative flex cursor-pointer items-center gap-3 overflow-hidden rounded-2xl border border-transparent p-3 transition-all duration-300 hover:border-slate-200 hover:bg-slate-50 hover:shadow-lg sm:gap-4"
    >
      {/* Hover glow */}

      <div
        className={`pointer-events-none absolute -left-10 top-1/2 h-20 w-20 -translate-y-1/2 rounded-full blur-3xl transition-all duration-500 ${
          positive
            ? "bg-emerald-300/20 group-hover:bg-emerald-300/40"
            : "bg-blue-300/10 group-hover:bg-blue-300/30"
        }`}
      />

      {/* Icon */}

      <motion.div
        whileHover={{
          rotateY: 18,
          rotateX: 8,
          scale: 1.12,
          z: 20,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
        className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl shadow-sm ${
          positive
            ? "bg-gradient-to-br from-emerald-50 to-emerald-100 text-emerald-600"
            : "bg-gradient-to-br from-slate-50 to-slate-100 text-slate-600"
        }`}
      >
        <Icon size={19} />

        {/* Tiny status dot */}

        <motion.span
          animate={{
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className={`absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-white ${
            positive
              ? "bg-emerald-500"
              : "bg-blue-500"
          }`}
        />
      </motion.div>

      {/* Transaction information */}

      <div className="relative min-w-0 flex-1">

        <div className="flex flex-wrap items-center gap-2">

          <p className="truncate text-sm font-black text-slate-800">
            {transaction.name}
          </p>

          <span
            className={`hidden rounded-full px-2 py-0.5 text-[9px] font-bold sm:inline-flex ${
              positive
                ? "bg-emerald-50 text-emerald-600"
                : "bg-slate-100 text-slate-500"
            }`}
          >
            {transaction.category}
          </span>

        </div>

        <div className="mt-1.5 flex flex-wrap items-center gap-2 text-[10px] text-slate-400">

          <span className="flex items-center gap-1">
            <Clock3 size={11} />
            {transaction.date}
          </span>

          <span>•</span>

          <span className="flex items-center gap-1">
            <CheckCircle2
              size={11}
              className="text-emerald-500"
            />
            {transaction.status}
          </span>

        </div>

      </div>

      {/* Amount */}

      <div className="relative shrink-0 text-right">

        <motion.p
          whileHover={{
            scale: 1.06,
          }}
          className={`text-sm font-black sm:text-base ${
            positive
              ? "text-emerald-600"
              : "text-slate-800"
          }`}
        >
          {positive ? "+" : "-"}₹
          {Math.abs(transaction.amount).toLocaleString(
            "en-IN"
          )}
        </motion.p>

        <p
          className={`mt-1 text-[9px] font-bold uppercase tracking-wide ${
            positive
              ? "text-emerald-500"
              : "text-slate-400"
          }`}
        >
          {positive ? "Received" : "Paid"}
        </p>

      </div>

      {/* Arrow */}

      <motion.div
        initial={{
          opacity: 0,
          x: -5,
        }}
        whileHover={{
          opacity: 1,
          x: 0,
        }}
        className="hidden text-slate-300 sm:block"
      >
        {positive ? (
          <ArrowDownLeft size={16} />
        ) : (
          <ArrowUpRight size={16} />
        )}
      </motion.div>

    </motion.div>
  );
}



export default function Transactions({ limit = 6 }) {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return transactions
      .filter((item) =>
        `${item.name} ${item.category}`
          .toLowerCase()
          .includes(search.toLowerCase())
      )
      .slice(0, limit);
  }, [search, limit]);

  const totalIncome = transactions
    .filter((item) => item.amount > 0)
    .reduce((sum, item) => sum + item.amount, 0);

  const totalSpent = transactions
    .filter((item) => item.amount < 0)
    .reduce((sum, item) => sum + Math.abs(item.amount), 0);

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.55,
      }}
      className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm sm:p-6"
    >

   

      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-100/40 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -20, 20, 0],
          y: [0, 20, -10, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-indigo-100/30 blur-3xl"
      />


      <div className="relative mb-6">

        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <div className="flex items-center gap-2">

              <motion.div
                animate={{
                  rotate: [0, 8, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-blue-600"
              >
                <Sparkles size={15} />
              </motion.div>

              <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">
                Activity
              </p>

            </div>

            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950">
              Recent Transactions
            </h2>

            <p className="mt-1 text-xs text-slate-400">
              Monitor your latest financial activity.
            </p>

          </div>

          {/* Search */}

          <motion.div
            whileFocus={{
              scale: 1.02,
            }}
            className="relative w-full lg:w-72"
          >

            <Search
              size={17}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search transactions..."
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-10 text-sm font-medium text-slate-700 outline-none transition-all placeholder:text-slate-400 focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100"
            />

            <AnimatePresence>
              {search && (
                <motion.button
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.7,
                  }}
                  whileHover={{
                    scale: 1.1,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                >
                  <X size={15} />
                </motion.button>
              )}
            </AnimatePresence>

          </motion.div>

        </div>

      </div>


      <div className="relative mb-6 grid gap-3 sm:grid-cols-3">

        {/* Total */}

        <motion.div
          whileHover={{
            y: -4,
            scale: 1.015,
          }}
          className="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-4"
        >

          <div className="flex items-center gap-2">

            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white">
              <Wallet size={16} />
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase text-slate-400">
                Transactions
              </p>
              <p className="text-lg font-black text-slate-900">
                {transactions.length}
              </p>
            </div>

          </div>

        </motion.div>

        {/* Income */}

        <motion.div
          whileHover={{
            y: -4,
            scale: 1.015,
          }}
          className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-4"
        >

          <div className="flex items-center gap-2">

            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500 text-white">
              <TrendingUp size={16} />
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase text-slate-400">
                Received
              </p>

              <p className="text-lg font-black text-emerald-600">
                +₹{totalIncome.toLocaleString("en-IN")}
              </p>
            </div>

          </div>

        </motion.div>

        {/* Spent */}

        <motion.div
          whileHover={{
            y: -4,
            scale: 1.015,
          }}
          className="rounded-2xl border border-red-100 bg-gradient-to-br from-red-50 to-white p-4"
        >

          <div className="flex items-center gap-2">

            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-500 text-white">
              <TrendingDown size={16} />
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase text-slate-400">
                Spent
              </p>

              <p className="text-lg font-black text-red-500">
                -₹{totalSpent.toLocaleString("en-IN")}
              </p>
            </div>

          </div>

        </motion.div>

      </div>


      <div className="relative mb-3 flex items-center justify-between">

        <p className="text-[11px] font-bold text-slate-400">
          {search
            ? `${filtered.length} result${
                filtered.length !== 1 ? "s" : ""
              } found`
            : `Showing ${filtered.length} transactions`}
        </p>

        <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-600">

          <motion.span
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
            }}
            className="h-2 w-2 rounded-full bg-emerald-500"
          />

          Secure activity

        </div>

      </div>

      <div
        className="relative space-y-2"
        style={{
          perspective: "1400px",
        }}
      >

        <AnimatePresence mode="popLayout">

          {filtered.length > 0 ? (
            filtered.map((transaction, index) => (
              <TransactionRow
                key={`${transaction.name}-${index}`}
                transaction={transaction}
                index={index}
              />
            ))
          ) : (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-10 text-center"
            >

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-slate-400 shadow-sm">
                <Search size={22} />
              </div>

              <h3 className="mt-4 text-sm font-black text-slate-800">
                No transactions found
              </h3>

              <p className="mt-1 text-xs text-slate-400">
                Try searching for another name or category.
              </p>

            </motion.div>
          )}

        </AnimatePresence>

      </div>

      <motion.button
        whileHover={{
          y: -3,
          scale: 1.015,
        }}
        whileTap={{
          scale: 0.96,
        }}
        className="group relative mt-6 flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 py-3.5 text-sm font-black text-white shadow-lg shadow-blue-100"
      >

        <motion.span
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-y-0 w-1/3 skew-x-12 bg-white/10"
        />

        <Activity
          size={16}
          className="relative z-10"
        />

        <span className="relative z-10">
          View All Transactions
        </span>

        <ArrowUpRight
          size={16}
          className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />

      </motion.button>

    </motion.div>
  );
}