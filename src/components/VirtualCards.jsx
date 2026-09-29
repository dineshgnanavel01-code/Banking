import { motion, AnimatePresence } from "framer-motion";
import { CreditCard, Plus, Eye, EyeOff, ShieldCheck, Lock, Sparkles, Copy, Check } from "lucide-react";
import { useState } from "react";

const initialCards = [
  {
    id: 1,
    number: "4532 •••• •••• 4829",
    rawNumber: "4532 8920 1184 4829",
    type: "VISA",
    name: "DINESH G",
    expiry: "09/29",
    cvv: "482",
    limit: "₹1,50,000",
    gradient: "from-slate-950 via-blue-950 to-indigo-900",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30"
  },
  {
    id: 2,
    number: "5412 •••• •••• 7391",
    rawNumber: "5412 7731 9022 7391",
    type: "MASTERCARD",
    name: "DINESH G",
    expiry: "12/28",
    cvv: "912",
    limit: "₹3,00,000",
    gradient: "from-indigo-950 via-purple-950 to-fuchsia-900",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30"
  },
];

export default function VirtualCards({ isFrozen = false }) {
  const [cards, setCards] = useState(initialCards);
  const [flippedCardId, setFlippedCardId] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [copiedId, setCopiedId] = useState(null);

  // New Card Form State
  const [cardType, setCardType] = useState("VISA");
  const [spendLimit, setSpendLimit] = useState("₹1,00,000");

  const handleAddCard = (e) => {
    e.preventDefault();
    const newCard = {
      id: Date.now(),
      number: `${cardType === "VISA" ? "4532" : "5412"} •••• •••• ${Math.floor(1000 + Math.random() * 9000)}`,
      rawNumber: `${cardType === "VISA" ? "4532" : "5412"} ${Math.floor(1000 + Math.random() * 9000)} ${Math.floor(1000 + Math.random() * 9000)} ${Math.floor(1000 + Math.random() * 9000)}`,
      type: cardType,
      name: "DINESH G",
      expiry: "06/31",
      cvv: Math.floor(100 + Math.random() * 900).toString(),
      limit: spendLimit,
      gradient: "from-slate-900 via-slate-950 to-emerald-950",
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
    };
    setCards([...cards, newCard]);
    setShowAddModal(false);
  };

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm">
      
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-1.5">
            <Sparkles size={14} className="text-blue-600" />
            <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Secure Wallet
            </p>
          </div>
          <h2 className="mt-0.5 text-xl font-black text-slate-900 tracking-tight">
            Virtual Cards ({cards.length})
          </h2>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 rounded-2xl bg-blue-600 hover:bg-blue-700 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-200 transition-all"
        >
          <Plus size={16} />
          Add Virtual Card
        </motion.button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 [perspective:1400px]">
        {cards.map((card) => {
          const isFlipped = flippedCardId === card.id;

          return (
            <div key={card.id} className="h-56 w-full cursor-pointer [perspective:1000px]" onClick={() => setFlippedCardId(isFlipped ? null : card.id)}>
              <motion.div
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative h-full w-full rounded-3xl shadow-xl"
              >
                <div className={`absolute inset-0 h-full w-full rounded-3xl bg-gradient-to-br ${card.gradient} p-6 text-white [backface-visibility:hidden] border border-white/10 flex flex-col justify-between overflow-hidden group`}>
                  
                  {/* Background Glow */}
                  <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-white/10 blur-2xl pointer-events-none" />

                  {/* Top row */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-10 rounded-md bg-amber-400/80 backdrop-blur-md border border-amber-300/40 flex items-center justify-center">
                        <div className="h-4 w-6 rounded-xs border border-amber-700/40 grid grid-cols-2 gap-0.5 p-0.5">
                          <div className="bg-amber-700/30 rounded-2xs" />
                          <div className="bg-amber-700/30 rounded-2xs" />
                        </div>
                      </div>
                      {isFrozen && (
                        <span className="rounded-full bg-red-500/20 border border-red-500/30 px-2 py-0.5 text-[9px] font-black text-red-300 flex items-center gap-1">
                          <Lock size={10} /> Frozen
                        </span>
                      )}
                    </div>

                    <span className="text-sm font-black tracking-widest bg-white/10 px-3 py-1 rounded-xl backdrop-blur-md">
                      {card.type}
                    </span>
                  </div>

                  {/* Middle Number */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="font-mono text-lg tracking-[0.2em] font-semibold text-slate-100">
                      {card.number}
                    </div>
                    <span className="text-[10px] text-white/50 bg-white/10 px-2 py-1 rounded-lg backdrop-blur-xs group-hover:bg-white/20 transition-colors">
                      Click to flip 🔄
                    </span>
                  </div>

                  {/* Footer Info */}
                  <div className="relative z-10 flex items-end justify-between">
                    <div>
                      <p className="text-[9px] uppercase tracking-wider text-white/40 font-bold">Card Holder</p>
                      <p className="mt-0.5 text-xs font-black tracking-wide">{card.name}</p>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-wider text-white/40 font-bold">Expires</p>
                      <p className="mt-0.5 text-xs font-black font-mono">{card.expiry}</p>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-wider text-white/40 font-bold">Limit</p>
                      <p className="mt-0.5 text-xs font-black text-emerald-400">{card.limit}</p>
                    </div>
                  </div>
                </div>

                <div className={`absolute inset-0 h-full w-full rounded-3xl bg-gradient-to-br ${card.gradient} p-6 text-white [backface-visibility:hidden] [transform:rotateY(180deg)] border border-white/10 flex flex-col justify-between overflow-hidden`}>
                  
                  {/* Magnetic Strip */}
                  <div className="-mx-6 mt-2 h-10 bg-slate-900/90 w-full" />

                  <div className="relative z-10 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="bg-white/90 text-slate-900 font-mono font-bold px-4 py-1.5 rounded-lg text-sm tracking-widest shadow-inner">
                        {card.cvv}
                      </div>
                      <span className="text-[10px] text-slate-300 font-medium">Secure CVV Code</span>
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-300 bg-white/10 p-2.5 rounded-xl backdrop-blur-md">
                      <span className="font-mono truncate">{card.rawNumber}</span>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          copyToClipboard(card.rawNumber, card.id);
                        }}
                        className="p-1.5 rounded-lg bg-white/20 hover:bg-white/30 transition-colors"
                      >
                        {copiedId === card.id ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                      </button>
                    </div>
                  </div>

                  <div className="relative z-10 flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-white/10">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <ShieldCheck size={13} /> Bank Grade Encrypted
                    </span>
                    <span>Click to flip back</span>
                  </div>

                </div>

              </motion.div>
            </div>
          );
        })}
      </div>

      <AnimatePresence>
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl border border-slate-200"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 className="text-lg font-black text-slate-900">Generate Virtual Card</h3>
                <button 
                  onClick={() => setShowAddModal(false)}
                  className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 font-bold"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleAddCard} className="space-y-4 py-4">
                <div>
                  <label className="text-xs font-bold text-slate-700">Card Network</label>
                  <select 
                    value={cardType}
                    onChange={(e) => setCardType(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-slate-200 p-3 text-sm font-medium bg-slate-50 focus:outline-blue-500"
                  >
                    <option value="VISA">VISA Platinum</option>
                    <option value="MASTERCARD">Mastercard World</option>
                    <option value="RUPAY">RuPay Secure</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700">Monthly Spending Limit</label>
                  <select 
                    value={spendLimit}
                    onChange={(e) => setSpendLimit(e.target.value)}
                    className="mt-1 w-full rounded-xl border border-slate-200 p-3 text-sm font-medium bg-slate-50 focus:outline-blue-500"
                  >
                    <option value="₹50,000">₹50,000</option>
                    <option value="₹1,00,000">₹1,00,000</option>
                    <option value="₹2,50,000">₹2,50,000</option>
                    <option value="₹5,00,000">₹5,00,000</option>
                  </select>
                </div>

                <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl text-xs text-blue-700">
                  💡 Virtual cards are instantly issued and ready for secure online subscriptions and contactless purchases.
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="flex-1 rounded-xl bg-slate-100 py-3 text-xs font-bold text-slate-600 hover:bg-slate-200 transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 rounded-xl bg-blue-600 py-3 text-xs font-bold text-white hover:bg-blue-700 transition-all shadow-md shadow-blue-200"
                  >
                    Create Card
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}