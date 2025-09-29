// src/utils/animations.js
export const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };
  
  export const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  export const heroAnimations = {
    title: {
      initial: { opacity: 0, y: 50, scale: 0.9 },
      animate: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: {
          duration: 0.8,
          ease: [0.6, -0.05, 0.01, 0.99], // Custom easing for bounce effect
          scale: {
            type: "spring",
            damping: 10,
            stiffness: 100,
            restDelta: 0.001
          }
        }
      }
    },
    subtitle: {
      initial: { opacity: 0, y: 30 },
      animate: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.8,
          delay: 0.4,
          ease: [0.6, -0.05, 0.01, 0.99]
        }
      }
    },
    buttons: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { 
        opacity: 1, 
        scale: 1,
        transition: {
          duration: 0.5,
          delay: 0.8,
          ease: "easeOut"
        }
      }
    },
    // Individual letter animation
    letter: {
      initial: { opacity: 0, y: 50 },
      animate: { 
        opacity: 1, 
        y: 0,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 200
        }
      }
    }
  };
  
  // For repeatable animations on scroll
  export const fadeInUpRepeatable = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: false, amount: 0.3 } // amount: how much of element must be visible
  };
  
  export const staggerContainerRepeatable = {
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    },
    viewport: { once: false, amount: 0.2 }
  };