import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Terminal = ({ onComplete }: { onComplete: () => void }) => {
  const [commands, setCommands] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  const commandSequence = [
    { text: "> Loading system modules...", delay: 500 },
    { text: "> Initializing development environment...", delay: 800 },
    { text: "> npm install @richa/portfolio", delay: 1000 },
    { text: "> Compiling portfolio assets...", delay: 1200 },
    { text: "> Loading Richa Agrawal's Portfolio...", delay: 1500 },
    { text: "> Portfolio ready!", delay: 1800 },
  ];

  useEffect(() => {
    let currentIndex = 0;
    const typeCommand = () => {
      if (currentIndex < commandSequence.length) {
        const currentCommand = commandSequence[currentIndex];
        setCommands((prev) => [...prev, currentCommand.text]);
        currentIndex++;
        setTimeout(typeCommand, currentCommand.delay);
      } else {
        setIsComplete(true);
        setTimeout(onComplete, 500);
      }
    };

    typeCommand();
  }, []);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-gradient-to-r from-[#1c1c1c] via-[#121212] to-[#1c1c1c] z-50 flex items-center justify-center overflow-hidden"
        >
          {/* Dynamic Background Effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
            }}
            style={{
              backgroundImage:
                "radial-gradient(circle, #333 1%, transparent 40%)",
              backgroundSize: "300% 300%",
              opacity: 0.1,
            }}
          />

          <div className="w-full max-w-3xl bg-[#2e2e2e] text-white rounded-lg shadow-xl border border-[#444] overflow-hidden relative">
            {/* Header */}
            <div className="flex items-center px-4 py-3 bg-[#1a1a1a] border-b border-[#444]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="ml-3 text-xs font-semibold text-gray-300">
                portfolio-terminal
              </span>
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-sm text-white">
              {/* Loop through commands and display each line */}
              {commands.map((cmd, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.3, // Delay for each command
                  }}
                  className="mb-3"
                >
                  <span className="text-[#00FF00]">{cmd}</span>
                </motion.div>
              ))}

              {/* Blinking cursor */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center"
              >
                <motion.span
                  animate={{ opacity: [0, 1] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-2 h-4 bg-[#00FF00] ml-1"
                ></motion.span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Terminal;
