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

            <div className="md:col-span-2">
              <label className="flex items-center gap-3">
                <span className="w-4 aspect-square border border-brand rounded-full flex items-center justify-center">
                  <input type="checkbox" className="sr-only peer" />
                  <svg className="opacity-0 peer-checked:opacity-100" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C7.34784 20 4.8043 18.9464 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10H0ZM9.42933 14.28L15.1867 7.08267L14.1467 6.25067L9.23733 12.3853L5.76 9.488L4.90667 10.512L9.42933 14.2813V14.28Z" fill="#D5FF3F"/>
                  </svg>
                </span>
                <span className="text-foreground/60 font-nuni select-none">subscribe to receive the latest news and exclusive offers</span>
              </label>
            </div>

            <div className="w-fit bg-white rounded-md px-4 py-2 flex items-center justify-between gap-4 md:gap-10 lg:gap-14 text-black">
              <div className="flex items-center gap-4">
                <input type="checkbox" className="scale-150" />
                <label className="text-sz-1e leading-normal ">I&apos;m not a robot</label>
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

            <div className="md:col-start-1">
              <button type="submit" className="bg-black px-12 py-3.75 rounded-full text-sz-16 leading-none font-nuni active:scale-95">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

