import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2,Eye,EyeOff,LockKeyhole,Mail, User,} from "lucide-react";

export default function SignUpView({ onBack, onLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [created, setCreated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCreated(true);
  };

  if (created) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-2xl"
        >
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              rotateY: [0, 15, 0],
            }}
            transition={{ duration: 1.4 }}
            className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600"
          >
            <CheckCircle2 size={40} />
          </motion.div>

          <h1 className="mt-6 text-2xl font-black">
            Account Created!
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Your demo banking account has been successfully created.
          </p>

          <motion.button
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            onClick={onLogin}
            className="mt-6 w-full rounded-2xl bg-blue-600 px-5 py-3 font-bold text-white shadow-lg"
          >
            Go to Login
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="page-enter mx-auto max-w-full">
      <motion.button
        whileHover={{ x: -4 }}
        whileTap={{ scale: 0.96 }}
        onClick={onBack}
        className="mb-6 flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-white hover:text-blue-600"
      >
        <ArrowLeft size={18} />
        Back
      </motion.button>

      <div className="grid overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl lg:grid-cols-2">
   
        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-600 p-8 text-white lg:p-10">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
              <User size={25} />
            </div>

            <h1 className="mt-10 text-4xl font-black">
              Start Banking
            </h1>

            <p className="mt-4 max-w-sm text-sm leading-6 text-blue-100">
              Create your account and experience a modern,
              secure digital banking dashboard.
            </p>

            <div className="mt-10 rounded-3xl bg-white/10 p-5 backdrop-blur">
              <p className="text-sm font-bold">
                Premium Banking
              </p>

              <p className="mt-2 text-xs leading-5 text-blue-100">
                Manage money, cards and transactions from one
                beautiful dashboard.
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="p-8 lg:p-10">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Create Account
          </p>

          <h2 className="mt-2 text-3xl font-black">
            Sign Up
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Create your new banking account.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-4"
          >
            <Input
              icon={User}
              label="Full Name"
              placeholder="Enter your name"
            />

            <Input
              icon={Mail}
              label="Email Address"
              type="email"
              placeholder="Enter your email"
            />

            <div>
              <label className="mb-2 block text-sm font-bold">
                Password
              </label>

              <div className="relative">
                <LockKeyhole
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  required
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  className="bank-input w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-12 text-sm outline-none"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-600"
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            <label className="flex items-start gap-2 pt-1 text-xs leading-5 text-slate-500">
              <input required type="checkbox" className="mt-1" />
              I agree to the Terms and Privacy Policy.
            </label>

            <motion.button
              whileHover={{
                y: -3,
                scale: 1.02,
                rotateX: 3,
              }}
              whileTap={{ scale: 0.96 }}
              style={{ transformStyle: "preserve-3d" }}
              type="submit"
              className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-4 font-bold text-white shadow-xl shadow-blue-600/20"
            >
              Create Account
            </motion.button>
          </form>

          <div className="mt-7 text-center text-sm text-slate-400">
            Already have an account?{" "}
            <button
              onClick={onLogin}
              className="font-bold text-blue-600 hover:text-blue-700"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input({
  icon: Icon,
  label,
  type = "text",
  placeholder,
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold">
        {label}
      </label>

      <div className="relative">
        <Icon
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          required
          type={type}
          placeholder={placeholder}
          className="bank-input w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm outline-none"
        />
      </div>
    </div>
  );
}