type HeaderProps = {
  head: string
  main: string
  desc: string
  variant?: "main" | "sub"
};

export const Heading = ({ head, main, desc, variant = "main" }: HeaderProps) => {
  return (
    <section className="my-10 md:my-20 text-center">
      <span className={`${variant === "sub" ? "text-sz-16 leading-normal md:leading-6 font-nuni font-semibold" : "text-sz-20 leading-none tracking-wide font-grotesk"} text-brand mb-2.5 block`}>
        {head}
      </span>
      <h1 className={`${variant === "sub" ? "text-sz-36 leading-4 md:leading-11 tracking-tight" : "text-sz-48 tracking-wide"} font-grotesk font-medium mb-3.5`}>
        {main}
      </h1>
      <p className="text-sz-18 md:leading-6 font-nuni">
        {desc}
      </p>
    </section>
  )
}
