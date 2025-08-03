import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/v1.jpg')`, // Replace with your actual image path
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-80 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* WE ARE */}
        <motion.h2
          className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-4 uppercase tracking-widest"
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          WE ARE
        </motion.h2>

        {/* Logo Text */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-4xl sm:text-7xl font-extrabold tracking-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
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
          transition={{ delay: 0.5, duration: 0.6 }}
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
