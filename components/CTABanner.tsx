import { Button } from "./ui/Button";

export const CTABanner = () => {
  return (
    <section className="bg-brand rounded-[20px] py-12 md:py-25 flex flex-col items-center text-center my-14.5">
      
        <div className="flex items-center mb-12 md:mb-25 w-full px-8">
          <div className="h-px grow bg-black/30" />
          <div className="flex gap-7 md:gap-14 mx-4 opacity-30">
            <div className="w-5 sm:w-8 md:w-10 aspect-square bg-[url('/home-decor/secondary/star-black.svg')] bg-cover bg-center" />
            <div className="w-5 sm:w-8 md:w-10 aspect-square bg-[url('/home-decor/secondary/star-black.svg')] bg-cover bg-center" />
            <div className="w-5 sm:w-8 md:w-10 aspect-square bg-[url('/home-decor/secondary/star-black.svg')] bg-cover bg-center" />
          </div>
          <div className="h-px flex-1 bg-black/30" />
        </div>

        <h2 className="text-sz-32  md:text-sz-48 md:leading-17.5 tracking-wide font-grotesk text-black uppercase mb-8 md:mb-13">
          Your Vision. Our 35+ Years of Expertise. <br />
          Unstoppable Results.
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-black">Connect Now</Button>
          <Button className="text-black border-black border-[1.5px]">Follow us</Button>
        </div>
    </section>
  );
}