export const Hero = () => {
  return (
    <section className="min-h-screen mt-8 md:mt-14" >
      <div className="lg:grid lg:grid-cols-2 lg:gap-36">
        <h1 className="text-sz-150 leading-none font-grotesk uppercase md:max-lg:text-center">
          <span className="whitespace-nowrap"><span className="diaeresis">C</span>reative</span> Agency
        </h1>
        <div className="lg:flex lg:flex-col">
          <div className="max-w-97.5 mx-auto my-7.5 lg:mb-2 lg:scale-85 lg:self-end lg:origin-top-right">
            <div aria-hidden="true" className="relative w-full lg:w-97.5 aspect-5/1 bg-[url('/hero/hero-decor.png')] bg-cover bg-center rounded-full mb-5">
              <div className="absolute top-1 bottom-1 left-1 aspect-square rounded-full bg-background">
                <div className="absolute top-6 bottom-6 left-6 aspect-square bg-[url('/hero/play.svg')] bg-cover bg-center"></div>
              </div>
            </div>
            <div className="w-2/3 mx-auto flex justify-between opacity-30">
              <div className="w-10 aspect-square bg-[url('/hero/star.svg')] bg-cover bg-center"></div>
              <div className="w-10 aspect-square bg-[url('/hero/star.svg')] bg-cover bg-center"></div>
              <div className="w-10 aspect-square bg-[url('/hero/star.svg')] bg-cover bg-center"></div>
            </div>
          </div>
          <p className="sm:w-104 text-sz-18 leading-normal text-center lg:text-left font-nuni mx-auto">
            We don&apos;t just make ads—we craft stories that shape culture, spark conversations, and redefine what brands stand for.
          </p>
        </div>
      </div>
    </section>
  )
}
