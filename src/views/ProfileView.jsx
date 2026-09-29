import { motion } from "framer-motion";
import { ArrowLeft,CheckCircle2, CreditCard,Mail,Phone,ShieldCheck,User,} from "lucide-react";

export default function ProfileView({ onBack }) {
  return (
    <div className="page-enter space-y-6">
      <motion.button
        whileHover={{ x: -4, scale: 1.02 }}
        whileTap={{ scale: 0.96 }}
        onClick={onBack}
        className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-white hover:text-blue-600 hover:shadow-sm"
      >
        <ArrowLeft size={18} />
        Back to Dashboard
      </motion.button>

      <div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
          Account
        </p>

        <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900">
          My Profile
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Manage your personal information and banking account details.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
       
        <motion.div
          whileHover={{
            y: -6,
            rotateX: 2,
            rotateY: -2,
            scale: 1.01,
          }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          style={{ transformStyle: "preserve-3d" }}
          className="overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-6 text-white shadow-xl"
        >
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{
                rotateY: 15,
                rotateX: 10,
                scale: 1.08,
              }}
              className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/15 text-2xl font-black shadow-lg backdrop-blur-xl"
            >
              DG
            </motion.div>

            <div>
              <h2 className="text-2xl font-black">Dinesh G</h2>

              <div className="mt-1 flex items-center gap-1.5 text-sm text-blue-100">
                <CheckCircle2 size={15} />
                Premium Member
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
              <p className="text-xs text-blue-100">Customer ID</p>
              <p className="mt-1 font-bold">NB-48291</p>
            </div>

            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
              <p className="text-xs text-blue-100">Member Since</p>
              <p className="mt-1 font-bold">January 2024</p>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 rounded-2xl bg-emerald-400/15 p-4">
            <ShieldCheck size={20} />
            <div>
              <p className="text-sm font-bold">Account Protected</p>
              <p className="text-xs text-blue-100">
                Your account security is active.
              </p>
            </div>
          </div>
        </motion.div>

     
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm"
        >
          <div className="mb-6">
            <h2 className="text-xl font-black text-slate-900">
              Personal Information
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Your registered account information
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <InfoBox
              icon={User}
              title="Full Name"
              value="Dinesh G"
            />

            <InfoBox
              icon={Mail}
              title="Email"
              value="dinesh@example.com"
            />

            <InfoBox
              icon={Phone}
              title="Phone"
              value="+91 ••••• •4829"
            />

            <InfoBox
              icon={CreditCard}
              title="Account"
              value="•••• 4829"
            />
          </div>
        </motion.div>
      </div>

     
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard
          icon={CreditCard}
          title="Account Type"
          value="Premium"
        />

        <StatCard
          icon={ShieldCheck}
          title="Security"
          value="Protected"
        />

        <StatCard
          icon={CheckCircle2}
          title="Status"
          value="Active"
        />
      </div>
    </div>
  );
}

function InfoBox({ icon: Icon, title, value }) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.015,
        rotateX: 2,
        rotateY: -2,
      }}
      style={{ transformStyle: "preserve-3d" }}
      className="rounded-2xl border border-slate-100 bg-slate-50 p-4"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
          <Icon size={18} />
        </div>

        <div className="min-w-0">
          <p className="text-xs font-medium text-slate-400">
            {title}
          </p>

          <p className="mt-1 truncate text-sm font-bold text-slate-800">
            {value}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function StatCard({ icon: Icon, title, value }) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.02,
        rotateX: 2,
        rotateY: -2,
      }}
      style={{ transformStyle: "preserve-3d" }}
      className="rounded-3xl border border-slate-200/70 bg-white p-5 shadow-sm"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          <Icon size={20} />
        </div>

        <div>
          <p className="text-xs text-slate-400">{title}</p>
          <p className="mt-1 font-black text-slate-800">{value}</p>
        </div>
      </div>
    </motion.div>
  );
}