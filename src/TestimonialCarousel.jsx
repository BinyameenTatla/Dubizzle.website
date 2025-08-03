import React, { useEffect, useState } from 'react';

const testimonials = [
  {
    name: "Hasnain Azam",
    title: "Software Architect",
    team: "Team Marvel",
    image: "/b1.jpg",
    quote: "The exposure and learning experience Dubizzle Labs has offered, helped me get to greater heights in my professional career.",
  },
  {
    name: "Zulqarnain Sabir",
    title: "Associate Software Architect",
    team: "Team Kevlar",
    image: "/b2.jpg",
    quote: "Dubizzle Labs is a great place to work. Working with great minds, in a friendly environment has helped me to grow personally and professionally.",
  },
  {
    name: "Safwan Ahmed",
    title: "Engineering Manager",
    team: "Team Mobile Apps",
    image: "/b3.jpg",
    quote: "Supportive management, ample learning opportunities and meaningful rewards and recognition makes it stand apart from others in the marketplace.",
  },
  {
    name: "Sarah Malik",
    title: "Product Designer",
    team: "Team UX",
    image: "/b4.jpg",
    quote: "Creativity is encouraged here. I’ve had the opportunity to make a real impact with my work.",
  },
  {
    name: "Ahmed Raza",
    title: "QA Engineer",
    team: "Team Quality",
    image: "/b5.jpg",
    quote: "The level of collaboration is outstanding — it truly feels like a team effort every day.",
  },
  {
    name: "Ayesha Khan",
    title: "Data Scientist",
    team: "Team Insights",
    image: "/b6.jpg",
    quote: "A data-driven culture where you're empowered to experiment, analyze, and innovate.",
  },
];

export  const TestimonialCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const nextSlide = () => {
    setStartIndex((prevIndex) =>
      (prevIndex + visibleCount) % testimonials.length
    );
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) =>
      (prevIndex - visibleCount + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000); // 10 seconds
    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = [];
  for (let i = 0; i < visibleCount; i++) {
    const index = (startIndex + i) % testimonials.length;
    visibleTestimonials.push(testimonials[index]);
  }

  return (
    <div className="bg-red-600 text-white py-16 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 transition-all duration-700 ease-in-out">
          {visibleTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-red-500 rounded-lg shadow-lg p-6 w-full md:w-1/3 text-center flex flex-col items-center"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md mb-4"
              />
              <h3 className="text-xl font-bold">{t.name}</h3>
              <p className="text-sm">{t.title}</p>
              <p className="text-sm text-white/80 mb-2">{t.team}</p>
              <p className="text-sm italic mt-2">{t.quote}</p>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-3xl font-bold text-white hover:text-gray-200"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-3xl font-bold text-white hover:text-gray-200"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};


