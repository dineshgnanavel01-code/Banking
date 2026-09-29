
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bell, CheckCircle2,Search, Menu, X, User, UserPlus, LogIn, ShieldCheck, Lock,Sparkles,ChevronDown,} from "lucide-react";

export default function Header({
  activeView,
  setActiveView,
  setSidebarOpen,
}) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [notifications, setNotifications] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const closeAll = () => {
    setNotifications(false);
    setProfileOpen(false);
  };

  const handleNavigate = (viewName) => {
    closeAll();
    setSearchOpen(false);

    setActiveView(viewName);

    if (setSidebarOpen) {
      setSidebarOpen(false);
    }
  };

  const toggleSearch = () => {
    setSearchOpen((prev) => !prev);
    setNotifications(false);
    setProfileOpen(false);
  };

  const toggleNotifications = () => {
    setNotifications((prev) => !prev);
    setProfileOpen(false);
    setSearchOpen(false);
  };

  const toggleProfile = () => {
    setProfileOpen((prev) => !prev);
    setNotifications(false);
    setSearchOpen(false);
  };

  return (
    <>
      <header
        className="
          fixed
          inset-x-0
          top-0
          z-50
          w-full
          border-b
          border-slate-200/70
          bg-white/90
          backdrop-blur-2xl
        "
      >
        <div
          className="
            mx-auto
            flex
            h-16
            w-full
            max-w-[1920px]
            items-center
            justify-between
            gap-2
            px-2.5
            sm:gap-3
            sm:px-5
            md:px-6
            lg:px-8
            xl:px-10
          "
        >
          <div className="flex min-w-0 flex-1 items-center gap-1.5 sm:gap-3">

            <motion.button
              whileHover={{
                scale: 1.08,
                rotateY: -10,
                rotateX: 5,
              }}
              whileTap={{
                scale: 0.9,
              }}
              onClick={() => setSidebarOpen(true)}
              className="
                shrink-0
                rounded-xl
                p-2
                text-slate-600
                transition
                hover:bg-slate-100
                hover:text-blue-600
                sm:p-2.5
                lg:hidden
              "
              aria-label="Open sidebar"
            >
              <Menu
                size={21}
                className="sm:h-[22px] sm:w-[22px]"
              />
            </motion.button>

            <motion.button
              onClick={() => handleNavigate("Dashboard")}
              whileHover={{
                scale: 1.025,
                y: -1,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                group
                flex
                min-w-0
                shrink-0
                items-center
                gap-1.5
                sm:gap-3
              "
            >
              <motion.div
                whileHover={{
                  rotateY: 18,
                  rotateX: 8,
                  scale: 1.08,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 18,
                }}
                className="
                  relative
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-xl
                  bg-gradient-to-br
                  from-blue-600
                  via-indigo-600
                  to-emerald-500
                  text-white
                  shadow-xl
                  shadow-blue-500/25
                  sm:h-11
                  sm:w-11
                  sm:rounded-2xl
                "
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
               
                <div
                  className="
                    absolute
                    inset-0
                    rounded-xl
                    bg-gradient-to-br
                    from-white/30
                    via-transparent
                    to-transparent
                    sm:rounded-2xl
                  "
                />

                <motion.div
                  animate={{
                    opacity: [0.25, 0.5, 0.25],
                    scale: [0.95, 1.05, 0.95],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    inset-1
                    rounded-xl
                    bg-white/10
                    blur-sm
                    sm:rounded-2xl
                  "
                />
             
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    h-7
                    w-7
                    rounded-full
                    border
                    border-white/35
                    sm:h-9
                    sm:w-9
                  "
                />
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    h-8
                    w-8
                    sm:h-10
                    sm:w-10
                  "
                >
                  <span
                    className="
                      absolute
                      -right-0.5
                      top-0
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-emerald-300
                      shadow-[0_0_8px_rgba(110,231,183,0.9)]
                    "
                  />
                </motion.div>
                <motion.span
                  animate={{
                    y: [0, -1, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    relative
                    z-10
                    text-[22px]
                    font-black
                    italic
                    tracking-[-0.08em]
                    text-white
                    drop-shadow-lg
                    sm:text-[27px]
                  "
                >
                  N
                </motion.span>

               <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="
                    absolute
                    -right-1
                    -top-1
                    z-20
                    rounded-full
                    bg-emerald-400
                    p-0.5
                    text-white
                    shadow-md
                    sm:p-1
                  ">
                  <Sparkles
                    size={6}
                    className="sm:h-2 sm:w-2"
                  />
                </motion.div>
              </motion.div>

              
              <div className="min-w-0 text-left">
                <div className="flex items-center gap-0.5 sm:gap-1.5">
                  <h1
                    className="
                      text-[15px]
                      font-black
                      tracking-tight
                      text-slate-900
                      sm:text-lg
                    "  >
                    Nova
                  </h1>

                  <h1
                    className="
                      text-[15px]
                      font-black
                      tracking-tight
                      text-blue-600
                      sm:text-lg
                    "  >
                    Bank
                  </h1>
                </div>

                <p
                  className="
                    mt-1
                    block
                    whitespace-nowrap
                    text-[7px]
                    font-bold
                    uppercase
                    leading-none
                    tracking-[0.16em]
                    text-slate-400
                    sm:mt-1
                    sm:text-[9px]
                    sm:tracking-[0.2em]
                  ">
                  Smart Banking
                </p>
              </div>
            </motion.button>
            <div className="hidden h-9 w-px bg-slate-200 md:block" />
            <div className="hidden min-w-0 md:block">
              <p
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.16em]
                  text-slate-400
                " >
                Nova Banking
              </p>

              <motion.h2
                key={activeView}
                initial={{
                  opacity: 0,
                  y: 5,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="
                  max-w-[240px]
                  truncate
                  text-lg
                  font-bold
                  tracking-tight
                  text-slate-900
                  lg:max-w-[320px]
                " >
                {activeView}
              </motion.h2>
            </div>
          </div>

         <div
            className="
              flex
              shrink-0
              items-center
              gap-0.5
              sm:gap-2
            " >
            <div className="relative">
              <AnimatePresence>
                {searchOpen && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      width: 0,
                      scale: 0.9,
                      y: -5,
                    }}
                    animate={{
                      opacity: 1,
                      width: "min(280px, calc(100vw - 110px))",
                      scale: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      width: 0,
                      scale: 0.9,
                      y: -5,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                    className="
                      absolute
                      right-0
                      top-12
                      overflow-hidden
                      sm:top-14
                    "   >
                    <div
                      className="
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        p-1.5
                        shadow-2xl
                      "   >
                     <div className="flex items-center gap-2">
                        <Search
                          size={17}
                          className="
                            ml-3
                            shrink-0
                            text-slate-400
                          "  />

                        <input
                          autoFocus
                          type="text"
                          placeholder="Search Nova Bank..."
                          className="
                            min-w-0
                            flex-1
                            bg-transparent
                            px-1
                            py-3
                            text-sm
                            font-medium
                            text-slate-700
                            outline-none
                            placeholder:text-slate-400
                          " />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                whileHover={{
                  scale: 1.08,
                  rotateY: -8,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                onClick={toggleSearch}
                className="
                  rounded-xl
                  p-2
                  text-slate-500
                  transition
                  hover:bg-blue-50
                  hover:text-blue-600
                  sm:p-2.5
                "
                aria-label="Search"  >
                {searchOpen ? (
                  <X
                    size={19}
                    className="sm:h-5 sm:w-5"
                  />
                ) : (
                  <Search
                    size={19}
                    className="sm:h-5 sm:w-5"
                  />
                )}
              </motion.button>
            </div>

                       <div className="relative">
              <motion.button
                whileHover={{
                  scale: 1.1,
                  rotateY: -8,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                onClick={toggleNotifications}
                className="
                  relative
                  rounded-xl
                  p-2
                  text-slate-500
                  transition
                  hover:bg-blue-50
                  hover:text-blue-600
                  sm:p-2.5
                "
                aria-label="Notifications"   >
                <Bell
                  size={19}
                  className="sm:h-5 sm:w-5"
                />

                <motion.span
                  animate={{
                    scale: [1, 1.35, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                  }}
                  className="
                    absolute
                    right-1.5
                    top-1.5
                    h-2
                    w-2
                    rounded-full
                    bg-red-500
                    ring-2
                    ring-white
                    sm:right-2
                    sm:top-2
                  " />
              </motion.button>

              <AnimatePresence>
                {notifications && <NotificationPanel />}
              </AnimatePresence>
            </div>

            <div className="relative">
              <motion.button
                whileHover={{
                  scale: 1.04,
                  rotateY: -4,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={toggleProfile}
                className="
                  group
                  flex
                  items-center
                  gap-1
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  px-1
                  py-1
                  shadow-sm
                  transition
                  hover:border-blue-200
                  hover:shadow-xl
                  sm:gap-2
                  sm:px-2
                  sm:py-1.5
                ">
                <motion.div
                  whileHover={{
                    rotateY: 15,
                    rotateX: 8,
                    scale: 1.08,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 18,
                  }}
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-xl
                    bg-gradient-to-br
                    from-blue-600
                    to-indigo-600
                    text-white
                    shadow-md
                  "  >
                  <User size={17} />
                </motion.div>

                <div className="hidden text-left sm:block">
                  <p className="text-xs font-bold text-slate-800">
                    Dinesh G
                  </p>

                  <p className="text-[10px] font-medium text-slate-400">
                    Premium
                  </p>
                </div>

                <motion.div
                  animate={{
                    rotate: profileOpen ? 180 : 0,
                  }}
                  className="hidden text-slate-400 sm:block"
                >
                  <ChevronDown size={15} />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {profileOpen && (
                  <ProfileDropdown
                    onNavigate={handleNavigate}
                  />
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
function ProfileDropdown({ onNavigate }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -15,
        scale: 0.9,
        rotateX: -8,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
      }}
      exit={{
        opacity: 0,
        y: -15,
        scale: 0.9,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 22,
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
      className="
        fixed
        right-3
        top-[70px]
        z-[60]
        w-[calc(100vw-24px)]
        max-w-80
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-3
        shadow-2xl
        sm:absolute
        sm:right-0
        sm:top-14
        sm:w-80
      "  >
           <motion.div
        whileHover={{
          y: -3,
          rotateX: 2,
          rotateY: -2,
        }}
        onClick={() => onNavigate("My Profile")}
        className="
          cursor-pointer
          rounded-2xl
          bg-gradient-to-br
          from-blue-600
          via-indigo-600
          to-purple-700
          p-4
          text-white
          shadow-lg
        "
        style={{
          transformStyle: "preserve-3d",
        }}  >
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{
              rotateY: 12,
              rotateX: 8,
            }}
            className="
              flex
              h-14
              w-14
              shrink-0
              items-center
              justify-center
              rounded-2xl
              bg-white/15
              text-xl
              font-black
              backdrop-blur
            " >
            DG
          </motion.div>

          <div className="min-w-0">
            <h3 className="font-bold">
              Dinesh G
            </h3>

            <p className="truncate text-xs text-blue-100">
              dinesh@example.com
            </p>

            <div
              className="
                mt-1
                flex
                items-center
                gap-1
                text-[10px]
                text-blue-100
              "  >
              <CheckCircle2 size={11} />
              Premium Member
            </div>
          </div>
        </div>
      </motion.div>
      <div className="mt-3 space-y-1">
        <ProfileButton
          icon={User}
          title="My Profile"
          description="Personal information and account"
          onClick={() => onNavigate("My Profile")} />

        <ProfileButton
          icon={LogIn}
          title="Login"
          description="Sign in to your banking account"
          onClick={() => onNavigate("Login")} />

        <ProfileButton
          icon={UserPlus}
          title="Sign Up"
          description="Create a new banking account"
          onClick={() => onNavigate("Sign Up")} />
      </div>

      <div className="my-3 h-px bg-slate-100" />

      <ProfileButton
        icon={ShieldCheck}
        title="Security"
        description="2FA, password and login protection"
        onClick={() => onNavigate("Security")}/>

      <ProfileButton
        icon={Lock}
        title="Privacy"
        description="Data and privacy preferences"
        onClick={() => onNavigate("Privacy")}/>
    </motion.div>
  );
}

function ProfileButton({
  icon: Icon,
  title,
  description,
  onClick,
}) {
  return (
    <motion.button
      whileHover={{
        x: 4,
        scale: 1.015,
        rotateY: -2,
      }}
      whileTap={{
        scale: 0.97,
      }}
      onClick={onClick}
      className="
        group
        flex
        w-full
        items-center
        gap-3
        rounded-2xl
        p-3
        text-left
        transition
        hover:bg-blue-50
      " >
      <motion.div
        whileHover={{
          rotateY: 15,
          rotateX: 8,
          scale: 1.08,
        }}
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-slate-100
          text-slate-600
          transition
          group-hover:bg-blue-100
          group-hover:text-blue-600
        " >
        <Icon size={17} />
      </motion.div>

      <div className="min-w-0">
        <p className="text-sm font-bold text-slate-700">
          {title}
        </p>

        <p className="truncate text-[10px] text-slate-400">
          {description}
        </p>
      </div>
    </motion.button>
  );
}

function NotificationPanel() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -15,
        scale: 0.9,
        rotateX: -8,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
      }}
      exit={{
        opacity: 0,
        y: -15,
        scale: 0.9,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 22,
      }}
      className="
        fixed
        right-3
        top-[70px]
        z-[60]
        w-[calc(100vw-24px)]
        max-w-80
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-4
        shadow-2xl
        sm:absolute
        sm:right-0
        sm:top-14
        sm:w-80
      " >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-bold text-slate-800">
            Notifications
          </h3>

          <p className="mt-1 text-xs text-slate-400">
            2 new notifications
          </p>
        </div>

        <div className="rounded-xl bg-blue-50 p-2 text-blue-600">
          <Bell size={17} />
        </div>
      </div>

      <div className="mt-4 space-y-3">
        <NotificationItem
          title="Salary received"
          text="₹58,000 credited to your account."
          type="success"  />
        <NotificationItem
          title="Card payment"
          text="₹1,299 payment made at Amazon."
          type="info"
        />
      </div>
    </motion.div>
  );
}

function NotificationItem({
  title,
  text,
  type,
}) {
  return (
    <motion.div
      whileHover={{
        y: -3,
        scale: 1.015,
        rotateY: -2,
      }}
      className="
        cursor-pointer
        rounded-2xl
        bg-slate-50
        p-3
      "
      style={{
        transformStyle: "preserve-3d",
      }} >
      <div className="flex gap-3">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className={`
            mt-1
            h-2.5
            w-2.5
            shrink-0
            rounded-full
            ${
              type === "success"
                ? "bg-emerald-500"
                : "bg-blue-500"
            }
          `} />
        <div className="min-w-0">
          <p className="text-sm font-bold text-slate-800">
            {title}
          </p>

          <p className="mt-1 text-xs leading-5 text-slate-500">
            {text}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
