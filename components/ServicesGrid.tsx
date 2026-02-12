export type Service = {
  id: string
  title: string
  description: string
  detail: string
}

type ServicesGridProps = {
  services: Service[]
}

export function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <section className="grid grid-cols-1 place-items-center lg:grid-cols-3 gap-7.5 font-grotesk mb-16 md:mb-24 lg:mb-45">
        {services.map((service) => (
          <div 
            key={service.id}
            className="w-64 sm:w-84 lg:w-105 aspect-9/10 md:h-118 bg-card p-5 rounded-[20px] border border-feint hover:border-feint/20 drop-shadow group cursor-pointer flex flex-col justify-end"
          >
            <span className="absolute top-5 left-5 text-feint text-sz-32 leading-none tracking-wide">
              {service.id}
            </span>

            <div className="space-y-4">
              <h2 className="text-sz-55 leading-none tracking-wide">
                {service.title}
              </h2>
              
              <p className="text-sz-16 text-foreground/40 font-nunito max-w-[30ch] mb-4">
                {service.description}
              </p>
              
              <p className="text-sz-16 text-foreground/40 leading-nm tracking-wide font-nunito max-w-[35ch]">
                {service.detail}
              </p>
            </div>
          </div>
        ))}
    </section>
  );
}