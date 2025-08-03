import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section
      className="relative h-[55vh] sm:min-h-screen flex flex-col justify-center items-center px-4 text-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/k1.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-80 backdrop-blur-sm" />

      <div className="relative z-10 pt-6 sm:pt-0">
        {/* Fancy WE ARE Heading */}
        <motion.h2
          className="text-4xl sm:text-6xl font-extrabold uppercase tracking-widest bg-gradient-to-r from-red-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg"
          initial={{ opacity: 0, y: -100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.2,
          }}
        >
          WE ARE
        </motion.h2>

        {/* Logo Text */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-4xl sm:text-7xl font-extrabold tracking-tight mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <span className="text-gray-800 flex items-center gap-1">
            du
            <span className="relative">
              <span className="text-red-600 absolute -top-4 left-1 text-2xl animate-bounce">🔥</span>
              <span className="text-gray-900">b</span>
            </span>
            izzle
          </span>
          <span className="text-red-600">labs</span>
        </motion.div>

        {/* Formerly EMPG */}
        <motion.p
          className="mt-4 text-base sm:text-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          formerly <span className="text-blue-800 font-semibold">empglabs</span>
        </motion.p>

        {/* CTA */}
        <motion.button
          className="mt-8 px-8 py-3 bg-red-600 text-white rounded-md text-base font-medium hover:bg-red-700 transition-all shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Want to work with us?
        </motion.button>
      </div>
    </section>
  );
};
