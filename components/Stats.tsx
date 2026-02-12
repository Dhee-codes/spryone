const stats = [
  {
    value: "723",
    label: "Game-Changing Projects Delivered",
  },
  {
    value: "30",
    label: "Years of Industry-Defining Expertise",
  },
  {
    value: "500",
    label: "Products & Campaigns Launched",
  },
  {
    value: "100",
    label: "Startups Empowered",
  },
];

export const Stats = () => {
  return (
    <section className="relative grid grid-cols-2 place-items-center md:grid-cols-4 gap-10">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="relative flex flex-col items-start md:items-center text-left md:text-center pl-6 group"
        >
          {index !== 0 && (
            <span className="absolute left-0 top-1/4 h-1/2 w-0.5 bg-transparent md:bg-feint"></span>
          )}
          <h3 className="text-sz-64 leading-none tracking-wide font-grotesk">
            {stat.value}
            <span className="text-brand">+</span>
          </h3>

          <p className="text-sz-18 md:text-sz-20 leading-normal tracking-wide min-h-12 mt-2 max-w-[20ch]">
            {stat.label}
          </p>
        </div>
      ))}
    </section>
  );
}