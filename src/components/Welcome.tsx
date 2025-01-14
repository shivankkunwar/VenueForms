import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GetFreeProposal from "./GetFreeProposal";

const AnimatedPage = () => {
  const [showWelcome, setShowWelcome] = useState(true); 

  useEffect(() => {

    setTimeout(() => {
      setShowWelcome(false);
    }, 5000);
  }, []);

  const welcomePageAnimation = {
    hidden: { y: 0, opacity: 1 },
    exit: { y: "-100vh", opacity: 0 },
  };

  const envelopeAnimation = {
    hidden: { opacity: 0, y: "100vh" },
    visible: { opacity: 1, y: 0 },
    exit: { y: "-100vh", opacity: 0 },
  };

  const cardAnimation = {
    hidden: { opacity: 0, y: 200, scale: 0.9 },
    visible: { opacity: 1, y: 100, scale: 1 },
    exit: { y: "-120vh", opacity: 0, scale: 0.8 },
  };

 

  return (
    <div style={{ position: "relative", overflow: "hidden", height: "100vh" }}>
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit" 
            variants={welcomePageAnimation}
            transition={{ duration: 1 }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              flexDirection: "column",
              background: "linear-gradient(to right, #fff, #faf6e8)",
              position: "absolute",
              width: "100%",
            }}
          >
    
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 1 }}
              style={{
                position: "relative",
                width: "300px",
                height: "400px",
              }}
            >
           
              <motion.img
                src="/envelope.svg"
                alt="Envelope"
                initial={envelopeAnimation.hidden}
                animate={envelopeAnimation.visible}
                exit={envelopeAnimation.exit}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{
                  position: "absolute",
                  width: "100%",
                  bottom: 0,
                  zIndex: 1,
                }}
              />

            
              <motion.img
                src="/card1.svg"
                alt="Card"
                initial={cardAnimation.hidden}
                animate={cardAnimation.visible}
                exit={cardAnimation.exit}
                transition={{ delay: 1.5, duration: 1 }}
                style={{
                  position: "absolute",
                  zIndex: 2,
                  width: "80%",
                  left: "10%",
                }}
              />
            </motion.div>

           
          </motion.div>
        )}
      </AnimatePresence>

      
      <AnimatePresence>
        {!showWelcome && (
          <GetFreeProposal/>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedPage;
