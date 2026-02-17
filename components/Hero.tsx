import { Stats } from "./Stats";

export const Hero = () => {
  return (
    <section className="min-h-screen mt-8 md:mt-14" >
      <div className="lg:grid lg:grid-cols-2 lg:gap-36">
        <h1 className="text-sz-120 md:text-sz-150 leading-[1.1] md:leading-none font-grotesk uppercase max-lg:text-center">
          <span className="whitespace-nowrap"><span className="diaeresis">C</span>reative</span> Agency
        </h1>
        <div className="lg:flex lg:flex-col mb-12 md:mb-29.5">
          <div className="w-4/5 max-w-97.5 mx-auto my-7.5 lg:mb-2 lg:scale-85 lg:self-end lg:origin-top-right">
            <div aria-hidden="true" className="relative w-full lg:w-97.5 aspect-5/1 bg-[url('/home/hero/slinky.png')] bg-cover bg-center rounded-full mb-5">
              <div className="absolute top-1 bottom-1 left-1 aspect-square rounded-full bg-background">
                <div className="absolute top-[4.4vw] sm:top-[3.2vw] lg:top-[1.9vw] bottom-[4.4vw] sm:bottom-[3.2vw] lg:bottom-[1.9vw] left-[4.4vw] sm:left-[3.2vw] lg:left-[1.9vw] aspect-square flex items-center justify-center">
                  <svg className="w-full h-full text-brand" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.2064 9.33349L5.35494 0.442243C4.80461 0.148123 4.1808 -0.00443171 3.54697 9.8012e-05C2.91313 0.00462774 2.29189 0.16608 1.74643 0.468032C1.21502 0.752267 0.773519 1.16298 0.466782 1.65844C0.160045 2.15391 -0.00100111 2.71647 4.68239e-06 3.28899V21.0715C-0.00100111 21.644 0.160045 22.2066 0.466782 22.702C0.773519 23.1975 1.21502 23.6082 1.74643 23.8924C2.29194 24.1943 2.91316 24.3556 3.54697 24.3602C4.18077 24.3647 4.80456 24.2122 5.35494 23.9182L22.2064 15.027C22.7499 14.7454 23.2028 14.3329 23.5183 13.8323C23.8337 13.3317 24 12.7613 24 12.1802C24 11.5992 23.8337 11.0288 23.5183 10.5282C23.2028 10.0275 22.7499 9.61505 22.2064 9.33349Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-2/3 mx-auto flex justify-between opacity-30">
              <div className="w-10 aspect-square bg-[url('/home/hero/star.svg')] bg-cover bg-center" />
              <div className="w-10 aspect-square bg-[url('/home/hero/star.svg')] bg-cover bg-center" />
              <div className="w-10 aspect-square bg-[url('/home/hero/star.svg')] bg-cover bg-center" />
            </div>
          </div>
          <p className="max-w-[40ch] text-sz-18 leading-normal text-center lg:text-left font-nuni mx-auto">
            We don&apos;t just make ads—we craft stories that shape culture, spark conversations, and redefine what brands stand for.
          </p>
        </div>
      </div>

      <Stats />
    </section>
  )
}
