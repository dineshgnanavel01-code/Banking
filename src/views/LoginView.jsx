import { useState } from "react";
import { motion } from "framer-motion";
import {ArrowLeft,Eye, EyeOff, LockKeyhole,Mail, ShieldCheck,} from "lucide-react";

export default function LoginView({ onBack, onSignUp }) {
  const [showPassword, setShowPassword] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoggedIn(true);
  };

  if (loggedIn) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateX: -8 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-2xl"
        >
          <motion.div
            animate={{
              scale: [1, 1.12, 1],
              rotateY: [0, 10, 0],
            }}
            transition={{ duration: 1.5 }}
            className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600"
          >
            <ShieldCheck size={38} />
          </motion.div>

          <h1 className="mt-6 text-2xl font-black">
            Login Successful
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Welcome back to your banking dashboard.
          </p>

          <motion.button
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            onClick={onBack}
            className="mt-6 w-full rounded-2xl bg-blue-600 px-5 py-3 font-bold text-white shadow-lg shadow-blue-600/20"
          >
            Continue to Dashboard
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
        {/* Left */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-8 text-white lg:p-10">
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-cyan-300/10 blur-2xl" />

          <div className="relative z-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
              <LockKeyhole size={25} />
            </div>

            <h1 className="mt-10 text-4xl font-black">
              Welcome Nova Bank
            </h1>

            <p className="mt-4 max-w-sm text-sm leading-6 text-blue-100">
              Sign in securely to manage your accounts, cards,
              transactions and financial activity.
            </p>

            <div className="mt-10 space-y-4">
              {[
                "Secure account access",
                "Real-time transaction monitoring",
                "Advanced banking protection",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                    ✓
                  </div>
                  <span className="text-sm text-blue-50">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="p-8 lg:p-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Secure Login
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-900">
              Sign in
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              Enter your account details below.
            </p>
          </div>

          <form onSubmit={handleLogin} className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  required
                  type="email"
                  placeholder="Enter your email"
                  className="bank-input w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm outline-none"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
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
                  placeholder="Enter your password"
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

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-slate-500">
                <input type="checkbox" />
                Remember me
              </label>

              <button
                type="button"
                className="font-bold text-blue-600 hover:text-blue-700"
              >
                Forgot password?
              </button>
            </div>

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
              Sign In
            </motion.button>
          </form>

          <div className="mt-7 text-center text-sm text-slate-400">
            Don't have an account?{" "}
            <button
              onClick={onSignUp}
              className="font-bold text-blue-600 hover:text-blue-700"
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}