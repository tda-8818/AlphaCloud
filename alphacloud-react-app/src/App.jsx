/* src/App.jsx */
import React, { useState } from "react";

/* ────────────────────── Re‑usable UI ────────────────────── */
import Header      from "./components/Header";
import Footer      from "./components/Footer";
import MessageBox  from "./components/MessageBox";

/* ────────────────────── Section components ────────────────────── */
import Home        from "./pages/Home";        
import Services    from "./pages/Services";    
import Solutions   from "./pages/Solutions";
import Contact     from "./pages/Contact";
import About       from "./pages/About";
import Experience  from "./pages/Experience";

/* ────────────────────── App component ────────────────────── */
const App = () => {
  /* ---------------------------------------------------------
   * 1️⃣  STATE
   * ------------------------------------------------------- */
  // Message‑box state (used by the contact form)
  const [message, setMessage]           = useState("");
  const [messageColor, setMessageColor] = useState("");
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  // Mobile menu toggle (controlled by Header)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /* ---------------------------------------------------------
   * 2️⃣  HELPERS
   * ------------------------------------------------------- */
  // Show a temporary toast‑style message
  const showMessage = (text, colorClass) => {
    setMessage(text);
    setMessageColor(colorClass);
    setIsMessageVisible(true);
    setTimeout(() => setIsMessageVisible(false), 3000);
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Account for fixed header
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    // Close mobile menu after clicking
    if (isMenuOpen) setIsMenuOpen(false);
  };

  /* ---------------------------------------------------------
   * 3️⃣  RENDER
   * ------------------------------------------------------- */
  return (
    <div className="scroll-smooth">
      {/* Global page‑wide CSS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
          background-color: #121212;
          color: #e5e7eb;
        }
        .hero-bg {
          background-color: #262626;
          background-image: radial-gradient(at 50% 100%, rgba(255,0,0,0.25) 0%, transparent 60%);
        }
        html {
          scroll-behavior: smooth;
        }

        @keyframes glow {
          from {
            text-shadow: 0 0 20px rgba(239, 68, 68, 0.5);
          }
          to {
            text-shadow: 0 0 30px rgba(239, 68, 68, 0.8), 0 0 40px rgba(239, 68, 68, 0.3);
          }
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #1f2937;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #dc2626;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #ef4444;
        }
      `}</style>

      {/* Header – receives scroll helper */}
      <Header
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      {/* Toast / Message Box */}
      <MessageBox
        message={message}
        color={messageColor}
        visible={isMessageVisible}
      />

      {/* Main content - All sections on one page */}
      <main>
        {/* Home/Hero Section */}
        <section id="home">
          <Home />
        </section>

        {/* Services Section */}
        <section id="services">
          <Services />
        </section>

        {/* Solutions Section */}
        <section id="solutions">
          <Solutions />
        </section>

        {/* Experience Section */}
        <section id="experience">
          <Experience />
        </section>

        {/* About Section */}
        <section id="about">
          <About />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Contact showMessage={showMessage} />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;