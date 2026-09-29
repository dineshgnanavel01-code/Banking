import { motion, AnimatePresence } from "framer-motion";
import { ArrowDownLeft,ArrowUpRight, Building2, Wallet, CreditCard,Landmark, Plus, ChevronRight, CalendarDays, Percent, Receipt, Clock3, Bike, Coins, Home,ShieldCheck,IndianRupee,} from "lucide-react";
import { useState } from "react";
const accountsData = [
 
  {
    id: 1,
    name: "Primary Savings",
    number: "•••• 4829",
    balance: "₹1,25,450.80",
    type: "Savings Account",
    category: "savings",
    icon: Wallet,
    status: "Active",
    gradient: "from-slate-900 via-blue-950 to-indigo-950",
    textColor: "text-white",
    badgeBg: "bg-emerald-500/20 text-emerald-300",
    accentColor: "blue",
  },

  {
    id: 2,
    name: "Salary Current",
    number: "•••• 1738",
    balance: "₹68,920.25",
    type: "Current Account",
    category: "current",
    icon: Building2,
    status: "Active",
    gradient: "from-slate-900 via-slate-900 to-slate-950",
    textColor: "text-white",
    badgeBg: "bg-emerald-500/20 text-emerald-300",
    accentColor: "slate",
  },

  
  {
    id: 3,
    name: "Platinum Rewards Card",
    number: "•••• 9012",
    balance: "-₹24,500.00",
    type: "Credit Card",
    category: "credit",
    icon: CreditCard,
    status: "Due Soon",
    gradient: "from-amber-950 via-slate-950 to-orange-950",
    textColor: "text-white",
    badgeBg: "bg-amber-500/20 text-amber-300",
    accentColor: "amber",
  },

  
  {
    id: 4,
    name: "Home Loan",
    number: "•••• 6248",
    balance: "-₹28,75,000",
    type: "Home Loan",
    category: "loan",
    loanType: "home",
    icon: Home,
    status: "On Track",
    gradient: "from-blue-950 via-indigo-950 to-slate-950",
    textColor: "text-white",
    badgeBg: "bg-blue-500/20 text-blue-300",
    accentColor: "blue",

    loanAmount: "₹35,00,000",
    remainingPrincipal: "₹28,75,000",
    emi: "₹31,850",
    interestRate: "8.10%",
    nextEmiDate: "05 Oct 2026",
    tenure: "11 Years 2 Months",
    paidInstallments: 46,
    totalInstallments: 180,
    remainingInstallments: 134,
  },

  {
    id: 5,
    name: "Home Mortgage Loan",
    number: "•••• 3341",
    balance: "-₹32,50,000",
    type: "Mortgage Loan",
    category: "loan",
    loanType: "mortgage",
    icon: Landmark,
    status: "On Track",
    gradient: "from-purple-950 via-slate-950 to-indigo-950",
    textColor: "text-white",
    badgeBg: "bg-purple-500/20 text-purple-300",
    accentColor: "purple",

    loanAmount: "₹40,00,000",
    remainingPrincipal: "₹32,50,000",
    emi: "₹38,450",
    interestRate: "8.25%",
    nextEmiDate: "05 Oct 2026",
    tenure: "12 Years 4 Months",
    paidInstallments: 44,
    totalInstallments: 180,
    remainingInstallments: 136,
  },

  {
    id: 6,
    name: "Premium Bike Loan",
    number: "•••• 7816",
    balance: "-₹1,84,600",
    type: "Two-Wheeler Loan",
    category: "loan",
    loanType: "bike",
    icon: Bike,
    status: "Active",
    gradient: "from-cyan-950 via-slate-950 to-blue-950",
    textColor: "text-white",
    badgeBg: "bg-cyan-500/20 text-cyan-300",
    accentColor: "cyan",

    loanAmount: "₹2,80,000",
    remainingPrincipal: "₹1,84,600",
    emi: "₹8,750",
    interestRate: "9.15%",
    nextEmiDate: "10 Oct 2026",
    tenure: "1 Year 9 Months",
    paidInstallments: 15,
    totalInstallments: 36,
    remainingInstallments: 21,
  },

  {
    id: 7,
    name: "Gold Loan",
    number: "•••• 4527",
    balance: "-₹3,45,000",
    type: "Gold Loan",
    category: "loan",
    loanType: "gold",
    icon: Coins,
    status: "Due Soon",
    gradient: "from-yellow-950 via-amber-950 to-slate-950",
    textColor: "text-white",
    badgeBg: "bg-yellow-500/20 text-yellow-300",
    accentColor: "yellow",

    loanAmount: "₹5,00,000",
    remainingPrincipal: "₹3,45,000",
    emi: "₹14,250",
    interestRate: "10.25%",
    nextEmiDate: "12 Oct 2026",
    tenure: "2 Years 1 Month",
    paidInstallments: 11,
    totalInstallments: 36,
    remainingInstallments: 25,
  },

 
  {
    id: 8,
    name: "Personal Loan",
    number: "•••• 9125",
    balance: "-₹4,20,500",
    type: "Personal Loan",
    category: "loan",
    loanType: "personal",
    icon: IndianRupee,
    status: "On Track",
    gradient: "from-rose-950 via-slate-950 to-pink-950",
    textColor: "text-white",
    badgeBg: "bg-rose-500/20 text-rose-300",
    accentColor: "rose",

    loanAmount: "₹6,00,000",
    remainingPrincipal: "₹4,20,500",
    emi: "₹17,850",
    interestRate: "11.40%",
    nextEmiDate: "15 Oct 2026",
    tenure: "2 Years 8 Months",
    paidInstallments: 16,
    totalInstallments: 48,
    remainingInstallments: 32,
  },
];


export default function AccountsView() {
  const [filter, setFilter] = useState("all");
  const [showAddModal, setShowAddModal] = useState(false);

  const filteredAccounts =
    filter === "all"
      ? accountsData
      : accountsData.filter((acc) => acc.category === filter);

  
  const handlePayEmi = (account) => {
    alert(
      `Pay EMI\n\n${account.name}\nMonthly EMI: ${account.emi}`
    );
  };

  
  const handleSchedule = (account) => {
    alert(
      `Repayment Schedule\n\n${account.name}\nNext EMI: ${account.nextEmiDate}\nRemaining EMIs: ${account.remainingInstallments}`
    );
  };

  return (
    <div className="space-y-8 pb-10">

      
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-100/50 blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-indigo-100/40 blur-3xl"
        />

        <div className="relative flex flex-col justify-between gap-6 lg:flex-row lg:items-center">

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

              <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Multi-Bank Portfolio
              </p>
            </div>

            <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Accounts & Assets
            </h1>

            <p className="mt-1.5 max-w-2xl text-sm leading-6 text-slate-400">
              Manage your savings, current accounts, credit cards and
              multiple loan accounts from one unified banking hub.
            </p>

          </div>

          <motion.button
            whileHover={{
              scale: 1.04,
              y: -2,
            }}
            whileTap={{
              scale: 0.96,
            }}
            onClick={() => setShowAddModal(true)}
            className="flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-xs font-bold text-white shadow-lg shadow-blue-200 transition-all hover:bg-blue-700"
          >
            <Plus size={16} />
            Link New Account
          </motion.button>

        </div>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-1">

        {[
          {
            key: "all",
            label: "All Accounts",
          },
          {
            key: "savings",
            label: "Savings",
          },
          {
            key: "current",
            label: "Current",
          },
          {
            key: "credit",
            label: "Credit Cards",
          },
          {
            key: "loan",
            label: "All Loans",
          },
        ].map((tab) => (

          <motion.button
            key={tab.key}
            whileTap={{
              scale: 0.95,
            }}
            onClick={() => setFilter(tab.key)}
            className={`whitespace-nowrap rounded-xl px-4 py-2 text-xs font-bold transition-all ${
              filter === tab.key
                ? "bg-slate-900 text-white shadow-md shadow-slate-200"
                : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
            }`}
          >
            {tab.label}
          </motion.button>

        ))}

      </div>

     
      <div className="grid gap-6 md:grid-cols-2">

        <AnimatePresence mode="popLayout">

          {filteredAccounts.map((account, idx) => {

            const Icon = account.icon;

            const loanProgress =
              account.category === "loan"
                ? (account.paidInstallments /
                    account.totalInstallments) *
                  100
                : 0;

            return (

              <motion.div
                layout
                key={account.id}
                initial={{
                  opacity: 0,
                  y: 25,
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -15,
                  scale: 0.97,
                }}
                transition={{
                  delay: idx * 0.06,
                  duration: 0.4,
                }}
                className="h-full [perspective:1400px]"
              >

                <motion.div
                  whileHover={{
                    y: -8,
                    rotateX: 3,
                    rotateY: -3,
                    scale: 1.015,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                  className={`relative h-full overflow-hidden rounded-3xl bg-gradient-to-br ${account.gradient} p-6 text-white shadow-xl`}
                >

                  
                  <motion.div
                    animate={{
                      scale: [1, 1.15, 1],
                      opacity: [0.15, 0.25, 0.15],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                    }}
                    className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/10 blur-2xl"
                  />

                  <div className="pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-white/5 blur-3xl" />

                  
                  {account.category === "loan" && (
                    <div className="absolute right-5 top-5">

                      <span className="rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white/70 backdrop-blur-md">
                        {account.loanType === "home" && "Home Finance"}

                        {account.loanType === "mortgage" &&
                          "Mortgage"}

                        {account.loanType === "bike" &&
                          "Two Wheeler"}

                        {account.loanType === "gold" &&
                          "Gold Finance"}

                        {account.loanType === "personal" &&
                          "Personal Finance"}
                      </span>

                    </div>
                  )}

                  
                  <div className="relative z-10 flex items-start justify-between">

                    <div className="flex items-center gap-3">

                      <motion.div
                        whileHover={{
                          rotateY: 15,
                          rotateX: 10,
                          scale: 1.1,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 18,
                        }}
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white shadow-inner backdrop-blur-md"
                      >
                        <Icon size={22} />
                      </motion.div>

                      <div className="min-w-0">

                        <h3 className="truncate pr-2 text-base font-bold tracking-wide">
                          {account.name}
                        </h3>

                        <p className="text-xs text-slate-300">
                          {account.type}
                        </p>

                      </div>

                    </div>

                    <span
                      className={`shrink-0 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wider backdrop-blur-md ${account.badgeBg}`}
                    >
                      {account.status}
                    </span>

                  </div>

                 
                  <div className="relative z-10 mt-8">

                    <p className="text-xs font-medium text-slate-400">
                      {account.category === "credit"
                        ? "Outstanding Dues"
                        : account.category === "loan"
                        ? "Remaining Principal"
                        : "Available Balance"}
                    </p>

                    <motion.h2
                      initial={{
                        opacity: 0,
                        x: -10,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      className="mt-1 text-3xl font-black tracking-tight"
                    >
                      {account.balance}
                    </motion.h2>

                  </div>

                 
                  {account.category === "loan" && (

                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: idx * 0.06 + 0.15,
                      }}
                      className="relative z-10 mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md"
                    >

                     
                      <div className="grid grid-cols-2 gap-4">

                        {/* EMI */}

                        <LoanDetail
                          icon={Wallet}
                          label="Monthly EMI"
                          value={account.emi}
                          iconClass="bg-purple-500/20 text-purple-300"
                        />

                        {/* INTEREST */}

                        <LoanDetail
                          icon={Percent}
                          label="Interest Rate"
                          value={account.interestRate}
                          iconClass="bg-blue-500/20 text-blue-300"
                        />

                        {/* NEXT EMI */}

                        <LoanDetail
                          icon={CalendarDays}
                          label="Next EMI"
                          value={account.nextEmiDate}
                          iconClass="bg-emerald-500/20 text-emerald-300"
                        />

                        {/* REMAINING */}

                        <LoanDetail
                          icon={Clock3}
                          label="Remaining"
                          value={`${account.remainingInstallments} EMIs`}
                          iconClass="bg-orange-500/20 text-orange-300"
                        />

                      </div>

                     
                      <div className="mt-5">

                        <div className="mb-2 flex items-center justify-between">

                          <div className="flex items-center gap-2">

                            <Receipt
                              size={13}
                              className="text-purple-300"
                            />

                            <span className="text-[10px] font-semibold text-slate-400">
                              Repayment Progress
                            </span>

                          </div>

                          <span className="text-[10px] font-black text-purple-300">
                            {Math.round(loanProgress)}%
                          </span>

                        </div>

                        <div className="h-2 overflow-hidden rounded-full bg-white/10">

                          <motion.div
                            initial={{
                              width: 0,
                            }}
                            animate={{
                              width: `${loanProgress}%`,
                            }}
                            transition={{
                              duration: 1.2,
                              ease: "easeOut",
                              delay: 0.2,
                            }}
                            className="h-full rounded-full bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400"
                          />

                        </div>

                        <div className="mt-2 flex items-center justify-between">

                          <span className="text-[9px] font-medium text-slate-500">
                            {account.paidInstallments} paid
                          </span>

                          <span className="text-[9px] font-medium text-slate-500">
                            {account.totalInstallments} total
                          </span>

                        </div>

                      </div>

                      
                      <div className="mt-4 space-y-2 border-t border-white/10 pt-3">

                        <div className="flex items-center justify-between">

                          <span className="text-[10px] text-slate-500">
                            Original Loan
                          </span>

                          <span className="text-xs font-bold text-slate-300">
                            {account.loanAmount}
                          </span>

                        </div>

                        <div className="flex items-center justify-between">

                          <span className="text-[10px] text-slate-500">
                            Remaining Principal
                          </span>

                          <span className="text-xs font-bold text-slate-300">
                            {account.remainingPrincipal}
                          </span>

                        </div>

                        <div className="flex items-center justify-between">

                          <span className="text-[10px] text-slate-500">
                            Loan Tenure
                          </span>

                          <span className="text-xs font-bold text-slate-300">
                            {account.tenure}
                          </span>

                        </div>

                      </div>

                    </motion.div>
                  )}

                  
                  <div className="relative z-10 mt-4 flex items-center justify-between border-t border-white/10 pt-4 font-mono text-xs tracking-widest text-slate-400">

                    <span>
                      {account.number}
                    </span>

                    <button
                      onClick={() =>
                        alert(
                          `Opening statement for ${account.name}`
                        )
                      }
                      className="flex items-center gap-1 font-sans text-[11px] font-semibold text-slate-300 transition hover:text-white hover:underline"
                    >
                      Statement
                      <ChevronRight size={13} />
                    </button>

                  </div>

                

                  <div className="relative z-10 mt-6 flex gap-3">

                    {account.category === "loan" ? (

                      <>
                        <motion.button
                          whileHover={{
                            y: -2,
                            scale: 1.02,
                          }}
                          whileTap={{
                            scale: 0.96,
                          }}
                          onClick={() =>
                            handlePayEmi(account)
                          }
                          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white py-3 text-xs font-bold text-slate-900 shadow-sm transition hover:bg-slate-100"
                        >
                          <Wallet size={15} />
                          Pay EMI
                        </motion.button>

                        <motion.button
                          whileHover={{
                            y: -2,
                            scale: 1.02,
                          }}
                          whileTap={{
                            scale: 0.96,
                          }}
                          onClick={() =>
                            handleSchedule(account)
                          }
                          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 py-3 text-xs font-bold text-white backdrop-blur-md transition hover:bg-white/20"
                        >
                          <CalendarDays size={15} />
                          Schedule
                        </motion.button>
                      </>

                    ) : (

                      <>
                        <motion.button
                          whileHover={{
                            y: -2,
                            scale: 1.02,
                          }}
                          whileTap={{
                            scale: 0.96,
                          }}
                          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 py-3 text-xs font-bold text-white backdrop-blur-md transition hover:bg-white/20"
                        >
                          <ArrowUpRight size={15} />
                          Transfer
                        </motion.button>

                        <motion.button
                          whileHover={{
                            y: -2,
                            scale: 1.02,
                          }}
                          whileTap={{
                            scale: 0.96,
                          }}
                          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white py-3 text-xs font-bold text-slate-900 shadow-sm transition hover:bg-slate-100"
                        >
                          <ArrowDownLeft size={15} />
                          Receive
                        </motion.button>
                      </>

                    )}

                  </div>

                </motion.div>

              </motion.div>
            );
          })}

        </AnimatePresence>

      </div>

      
      <AnimatePresence>
        {showAddModal && (

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm"
            onClick={() => setShowAddModal(false)}
          >

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 20,
              }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 22,
              }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl"
            >

              {/* MODAL HEADER */}

              <div className="flex items-center justify-between border-b border-slate-100 pb-4">

                <div>

                  <div className="flex items-center gap-2">

                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Landmark size={17} />
                    </div>

                    <h3 className="text-lg font-black text-slate-900">
                      Link Account
                    </h3>

                  </div>

                  <p className="mt-2 text-xs text-slate-400">
                    Connect another bank or financial account.
                  </p>

                </div>

                <button
                  onClick={() => setShowAddModal(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200"
                >
                  ✕
                </button>

              </div>

              {/* FORM */}

              <div className="space-y-4 py-5">

                <div>

                  <label className="text-xs font-bold text-slate-700">
                    Bank / Financial Institution
                  </label>

                  <select className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm font-medium outline-none transition focus:ring-2 focus:ring-blue-500">

                    <option>HDFC Bank</option>
                    <option>State Bank of India (SBI)</option>
                    <option>ICICI Bank</option>
                    <option>Axis Bank</option>
                    <option>Kotak Mahindra Bank</option>

                  </select>

                </div>

                <div>

                  <label className="text-xs font-bold text-slate-700">
                    Account Type
                  </label>

                  <select className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm font-medium outline-none transition focus:ring-2 focus:ring-blue-500">

                    <option>Savings Account</option>
                    <option>Current Account</option>
                    <option>Credit Card</option>
                    <option>Home Loan</option>
                    <option>Mortgage Loan</option>
                    <option>Bike Loan</option>
                    <option>Gold Loan</option>
                    <option>Personal Loan</option>

                  </select>

                </div>

                <div>

                  <label className="text-xs font-bold text-slate-700">
                    Account Number / Registered Phone
                  </label>

                  <input
                    type="text"
                    placeholder="Enter account number or UPI ID"
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm font-medium outline-none transition focus:ring-2 focus:ring-blue-500"
                  />

                </div>

                {/* SECURITY */}

                <div className="flex gap-3 rounded-2xl border border-blue-100 bg-blue-50 p-4">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <ShieldCheck size={17} />
                  </div>

                  <div>

                    <p className="text-xs font-bold text-blue-800">
                      Secure Verification
                    </p>

                    <p className="mt-1 text-[10px] leading-relaxed text-blue-700">
                      Your financial information is securely verified
                      before it is added to your portfolio.
                    </p>

                  </div>

                </div>

              </div>

              {/* BUTTONS */}

              <div className="flex gap-3 pt-2">

                <button
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 rounded-xl bg-slate-100 py-3 text-xs font-bold text-slate-600 transition hover:bg-slate-200"
                >
                  Cancel
                </button>

                <button
                  onClick={() => {
                    alert("Account linked successfully!");
                    setShowAddModal(false);
                  }}
                  className="flex-1 rounded-xl bg-blue-600 py-3 text-xs font-bold text-white shadow-md shadow-blue-200 transition hover:bg-blue-700"
                >
                  Verify & Link
                </button>

              </div>

            </motion.div>

          </motion.div>

        )}
      </AnimatePresence>

    </div>
  );
}


function LoanDetail({
  icon: Icon,
  label,
  value,
  iconClass,
}) {
  return (
    <div className="flex min-w-0 items-start gap-2">

      <div
        className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${iconClass}`}
      >
        <Icon size={14} />
      </div>

      <div className="min-w-0">

        <p className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">
          {label}
        </p>

        <p className="mt-0.5 truncate text-sm font-black text-white">
          {value}
        </p>

      </div>

    </div>
  );
}