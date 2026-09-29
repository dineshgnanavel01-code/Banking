import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardView from "./views/DashboardView";
import AccountsView from "./views/AccountsView";
import TransactionsView from "./views/TransactionsView";
import CardsView from "./views/CardsView";
import AnalyticsView from "./views/AnalyticsView";
import SettingsView from "./views/SettingsView";
import ProfileView from "./views/ProfileView";
import LoginView from "./views/LoginView";
import SignUpView from "./views/SignUpView";

export default function App() {
  const [activeView, setActiveView] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleNavigation = (view) => {
    setActiveView(view);
    setSidebarOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  
  const goToDashboard = () => {
    handleNavigation("Dashboard");
  };

 
  const renderView = () => {
    switch (activeView) {
      
      case "Dashboard":
        return <DashboardView />;

      case "Accounts":
        return <AccountsView />;

      case "Transactions":
        return <TransactionsView />;

      case "Cards":
        return <CardsView />;

      case "Analytics":
        return <AnalyticsView />;

      case "Settings":
        return <SettingsView />;

      
      case "My Profile":
        return (
          <ProfileView
            onBack={goToDashboard}
          />
        );

      case "Login":
        return (
          <LoginView
            onBack={goToDashboard}
            onSignUp={() => handleNavigation("Sign Up")}
          />
        );

      case "Sign Up":
        return (
          <SignUpView
            onBack={goToDashboard}
            onLogin={() => handleNavigation("Login")}
          />
        );

     
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900">

     
      <Sidebar
        activeView={activeView}
        setActiveView={handleNavigation}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

     
      <AnimatePresence>
        {sidebarOpen && (
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
            transition={{
              duration: 0.25,
            }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>

      <div className="lg:pl-72">
        <Header
          activeView={activeView}
          setActiveView={handleNavigation}
          setSidebarOpen={setSidebarOpen}/>

        <main className="min-h-screen px-4 pb-10 pt-20 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-[1600px]">

            <AnimatePresence mode="wait">

              <motion.div
                key={activeView}
                initial={{
                  opacity: 0,
                  y: 25,
                  scale: 0.98,
                  rotateX: -2,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotateX: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                  scale: 0.98,
                  rotateX: 2,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: 1400,
                }}
                className="transform-gpu"
              >
                {renderView()}
              </motion.div>

            </AnimatePresence>

          </div>

        </main>
      </div>
    </div>
  );
}