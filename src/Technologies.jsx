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
  const half = Math.ceil(technologies.length / 2);
  const col1 = technologies.slice(0, half);
  const col2 = technologies.slice(half);

  return (
    <section className="bg-black text-white py-16 px-6">
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12 tracking-wide">
        Technologies I Work With
      </h2>

      <div className="flex justify-center gap-10 sm:gap-20">
        {/* Column 1 */}
        <div className="flex flex-col items-center space-y-8">
          {col1.map((tech, index) => (
            <img
              key={tech.name}
              src={tech.icon}
              alt={tech.name}
              title={tech.name}
              className={`w-20 h-20 sm:w-24 sm:h-24 transition-transform duration-300 hover:scale-110 animate-bounce-slow ${
                tech.invert ? "invert" : ""
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            />
          ))}
        </div>

        {/* Column 2 */}
        <div className="flex flex-col items-center space-y-8">
          {col2.map((tech, index) => (
            <img
              key={tech.name}
              src={tech.icon}
              alt={tech.name}
              title={tech.name}
              className={`w-20 h-20 sm:w-24 sm:h-24 transition-transform duration-300 hover:scale-110 animate-bounce-slow ${
                tech.invert ? "invert" : ""
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
