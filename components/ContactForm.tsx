import Image from "next/image";

const contacts = [
  {
    id: "Phone",
    href: "tel:+2348024042030",
    src: "/contact/phone.svg",
    info: "+234 802 404 2030",
  },
  {
    id: "Mail",
    href: "mailto:team@spryone.com",
    src: "/contact/mail.svg",
    info: "team@spryone.com",
  },
  {
    id: "Address",
    href: "",
    src: "/contact/map-pin.svg",
    info: "80 Sparklight Estate, Ojodu, Lagos.",
  },
]

export const ContactForm = () => {
  return (
    <div className="flex items-center justify-center p-1">
      <div className="w-full max-w-299 bg-black rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-[minmax(350px,1fr)_1.5fr] border-6 md:border-8 border-card">
        <div className="p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
          <div>
            <h2 className="text-sz-28 leading-none text-white font-grotesk mb-3.5">Contact Information</h2>
            <p className="text-sz-18 leading-none font-nuni mb-20 md:mb-28.25">Say something to start a live chat!</p>
            
            <div className="text-sz-16 space-y-8 md:space-y-12.75 mb-24 md:mb-45.75">
              {contacts.map((contact) => (
                <a
                  key={contact.id}
                  href={contact.href}
                  className="flex items-center gap-4 md:gap-6.25"
                  >
                  <Image
                    src={contact.src}
                    alt={contact.id}
                    width={24}
                    height={24}
                    className="w-4 md:w-6"
                  />
                  <span>{contact.info}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex gap-6">
            <Image
              src="/contact/tiktok.svg"
              alt=""
              width={30}
              height={30}
              className="w-6 md:w-7.5"
            />
            <Image
              src="/contact/insta.svg"
              alt=""
              width={30}
              height={30}
              className="w-6 md:w-7.5"
            />
            <Image
              src="/contact/youtube.svg"
              alt=""
              width={30}
              height={30}
              className="w-6 md:w-7.5"
            />
            <Image
              src="/contact/twitter.svg"
              alt=""
              width={30}
              height={30}
              className="w-6 md:w-7.5"
            />
          </div>
        </div>

        <div className="p-8 md:p-15 bg-card">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-9.75 text-xs text-white">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <input type="text" /*id="name" name="name" value={name} onChange={}*/ className="bg-transparent border-b border-white py-2 outline-none" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input type="email"/*id="email" name="email" value={email} onChange={}*/ placeholder="abc@" className="bg-transparent border-b border-white py-2 outline-none" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone">Phone Number</label>
              <input type="text" /*id="phone" name="phone" value={phone} onChange={}*/ placeholder="+234 812 345 6789" className="bg-transparent border-b border-white py-2 outline-none" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="product_question">Product Question</label>
              <select /*id="product_question" name="product_question" value={product_question} onChange={}*/ className="bg-transparent border-b border-white py-2 outline-none cursor-pointer">
                <option value=""></option>
              </select>
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label htmlFor="message">Message</label>
              <textarea /*id="message" name="message" value={message} onChange={}*/ placeholder="Write your message.." className="bg-transparent border-b border-white py-2 outline-none resize-none" rows={1} />
            </div>

            <div className="md:col-span-2 flex items-center gap-3 mt-4">
              <input type="checkbox" className="" />
              <label className="text-foreground/60 font-nuni">subscribe to receive the latest news and exclusive offers</label>
            </div>

            <div className="w-fit bg-white rounded-md px-2 py-1.5 lg:px-4 lg:py-2 flex items-center justify-between gap-6 md:gap-10 lg:gap-14 text-black">
              <div className="flex items-center gap-2 lg:gap-4">
                <input type="checkbox" />
                <label className="text-[14px] leading-normal ">I&apos;m not a robot</label>
              </div>
              <div>
                <Image
                  src="/contact/captcha.svg"
                  alt="Captcha icon"
                  width={67}
                  height={61}
                  className="w-10 md:w-13 lg:w-16.75"
                />
              </div>
            </div>

            <div className="mt-8">
              <button type="submit" className="bg-black border border-gray-700 px-10 py-4 rounded-full font-semibold hover:bg-gray-900 transition shadow-lg active:scale-95">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

