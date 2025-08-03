import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";

const brands = [
  { name: "Dubizzle", logo: "/m11.png" },
  { name: "Bayut", logo: "/m22.png" },
  { name: "Zameen", logo: "/m33.png" },
  { name: "OLX", logo: "/m44.png" },
  { name: "Zameen Dev", logo: "/m55.png" },
  { name: "Sector Labs", logo: "/m66.png" },
  { name: "Dubizzle Group", logo: "/m77.png" },
];

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Brand cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 justify-items-center mb-10">
          {brands.map((brand, idx) => (
            <div
              key={idx}
              className="bg-gray-800 p-3 rounded-md shadow hover:shadow-lg transition-shadow w-full flex items-center justify-center min-h-[60px]"
            >
              {brand.logo ? (
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-8 max-w-[90px] object-contain grayscale hover:grayscale-0 transition"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "block";
                  }}
                />
              ) : null}
              <span
                className="hidden text-xs uppercase tracking-wide text-gray-300 text-center"
                aria-hidden="true"
              >
                {brand.name}
              </span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2025 Dubizzle Labs. All Rights Reserved.
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-4 text-white text-xl">
            <a href="#" className="hover:text-blue-500" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-blue-600" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-pink-500" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-400" aria-label="X">
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};


