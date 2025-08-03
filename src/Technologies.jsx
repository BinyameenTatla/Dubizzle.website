// src/components/Technologies.jsx
import React from "react";

const technologies = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg", invert: true },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  { name: "Swift", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
  { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
  { name: "Rails", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg" },
  { name: "Gatsby", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-original.svg" },

];

export const Technologies = () => {
  return (
    <section className="bg-black text-white py-16 px-6 overflow-hidden">
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12 tracking-wide">
        Technologies I Work With
      </h2>

      <div className="w-full overflow-hidden">
        <div className="flex gap-16 animate-scroll-x-fast items-center">
          {technologies.map((tech, index) => (
            <img
              key={tech.name + index}
              src={tech.icon}
              alt={tech.name}
              title={tech.name}
              className={`w-24 h-24 sm:w-28 sm:h-28 transition-transform duration-300 hover:scale-110 ${
                tech.invert ? "invert" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
