export const StatsSection = () => {
  const stats = [
    { value: "10", label: "Countries" },
    { value: "4", label: "Brands" },
    { value: "4,100", label: "Employees" },
    { value: "123,000,000", label: "Monthly Traffic" },
  ];

  return (
    <section className="bg-red-600 text-white h-[40vh] flex items-center justify-center w-full px-6">
      <div className="w-full max-w-screen-2xl grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="w-full">
            <h3 className="text-3xl sm:text-4xl font-extrabold">{stat.value}</h3>
            <p className="mt-2 text-base sm:text-lg text-white/90">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
