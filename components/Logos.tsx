import Image from "next/image";

const logos = [
    {
        company: "Layers",
        src: "/about/layers.svg",
        width: 146,
        height: 48,
    },
    {
        company: "Sisyphus",
        src: "/about/sisyphus.svg",
        width: 169,
        height: 48,
    },
    {
        company: "Circooles",
        src: "/about/circooles.svg",
        width: 183,
        height: 48,
    },
    {
        company: "Catalog",
        src: "/about/catalog.svg",
        width: 180,
        height: 48,
    },
    {
        company: "Quotient",
        src: "/about/quotient.svg",
        width: 187,
        height: 48,
    },
]

export const Logos = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(80px,1fr))] justify-center gap-6">
        {logos.map((logo) => (
            <Image
                key={logo.company}
                src={logo.src}
                alt={logo.company}
                width={logo.width}
                height={logo.height}
                className="h-8 md:h-12"
            />
        ))}
    </div>
  )
}
