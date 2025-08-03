import { motion } from "framer-motion";

export const BrandsSection = () => {
  const brands = [
    {
      name: "dubizzle",
      logo: "/p2.jpg",
    },
    {
      name: "bayut",
      logo: "/p2.png",
    },
    {
      name: "zameen.com",
      logo: "/p3.png",
    },
    {
      name: "olx",
      logo: "/p4.png",
    },
  ];

  return (
    <section className="bg-[#111] text-white min-h-[90vh] flex flex-col items-center justify-center px-4">
      {/* Animated Title */}
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold mb-12 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Our <span className="text-red-500">Brands</span>
      </motion.h2>

      {/* Brand Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-6xl">
        {brands.map((brand, index) => (
          <motion.div
            key={index}
            className="group bg-[#1a1a1a] rounded-xl flex flex-col items-center justify-center h-40 shadow transition-all duration-300 hover:bg-white hover:text-black cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-12 object-contain transition duration-300 mb-2"
            />
            <motion.span
              className="font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
            >
              {brand.name}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
