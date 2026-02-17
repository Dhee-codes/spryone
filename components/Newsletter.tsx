import Link from "next/link";

export const Newsletter = () => {
  return (
    <section className="px-2 py-9.5 md:py-18.75">
      <div className="max-w-330 mx-auto p-6 md:p-8 lg:p-i6 bg-card rounded-2xl grid md:grid-cols-[4fr_3fr] items-center justify-between gap-8">
        <div className="text-left">
          <h2 className="text-sz-30 font-grotesk leading-nm md:leading-normal lg:leading-9.5 mb-2 md:mb-4">Join 2,000+ subscribers</h2>
          <p className="text-sz-20 leading-nm md:leading-normal lg:leading-7.5 font-nuni">Stay in the loop with everything you need to know.</p>
        </div>
        
        <div className="font-nuni">
          <form className="grid grid-cols-[1fr_auto] max-sm:grid-cols-1 max-sm:gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-[#ddd5dd] rounded-full text-background text-sz-16 leading-2 md:leading-6 px-4 py-3 outline-none"
            />
            <button className="bg-brand text-background rounded-full text-sz-16 leading-2 md:leading-6 font-semibold px-4 py-4">
              Subscribe
            </button>
          </form>
          <p className="text-sz-14 text-foreground/60 mt-2">
            We care about your data in our <Link href="" className="underline cursor-pointer">privacy policy</Link>.
          </p>
        </div>
      </div>
    </section>
  )
}