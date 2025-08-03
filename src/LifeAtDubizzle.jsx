import React, { useEffect, useState } from "react";

const images = [
  { src: "/i1.jpg", alt: "Team Outing" },
  { src: "/i2.jpg", alt: "Gift Basket" },
  { src: "/i3.jpg", alt: "Fun Time" },
  { src: "/i4.jpg", alt: "Office Life" },
  { src: "/i5.jpg", alt: "Work Culture" },
];

export const LifeAtDubizzle = () => {
  const [index, setIndex] = useState(0);

  // Change images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 2) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Get two current images
  const currentImages = [
    images[index % images.length],
    images[(index + 1) % images.length],
  ];

  return (
    <section className="bg-red-600 py-12 min-h-screen flex flex-col items-center">
      <h2 className="text-white text-4xl font-bold text-center mb-10">
        Life at <span className="font-extrabold">dubizzlelabs</span>
      </h2>

      <div className="flex gap-6 flex-wrap justify-center items-center w-[90%] max-w-6xl">
        {currentImages.map((img, idx) => (
          <div
            key={idx}
            className="w-full md:w-[45%] h-[400px] overflow-hidden rounded-xl shadow-xl relative transition-all duration-1000 ease-in-out scale-100 hover:scale-105"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover rounded-xl transition-opacity duration-1000 opacity-100"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
