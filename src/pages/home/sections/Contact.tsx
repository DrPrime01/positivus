export default function Contact() {
  return (
    <div className="mx-auto container max-lg:px-6 mb-[140px] flex flex-col gap-y-20">
      <div className="flex flex-col gap-y-6 max-md:justify-center md:flex-row items-center gap-x-10">
        <h2 className="text-h2-mob md:text-h2 p-1.5 rounded-sm max-sm:bg-primary hover-effect cursor-pointer">
          Contact Us
        </h2>
        <p className="text-base-mob md:text-base md:text-balance max-w-[580px] max-md:text-center">
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </div>

      <div className="flex p-8 md:pl-[100px] md:pt-[60px] pb-20 rounded-[45px] bg-gray justify-between overflow-hidden">
        <div className="max-w-[556px] w-full flex flex-col gap-y-10">
          <div className="flex items-center gap-x-9">
            <div className="flex items-center gap-x-3.5">
              <input
                type="radio"
                className="appearance-none size-7 rounded-full border border-black bg-white checked:border-5 checked:border-white checked:bg-primary checked:ring-1 checked:ring-black cursor-pointer"
                id="say-hi"
                name="select"
              />
              <label htmlFor="say-hi" className="text-base cursor-pointer">
                Say Hi
              </label>
            </div>
            <div className="flex items-center gap-x-3.5">
              <input
                type="radio"
                className="appearance-none size-7 rounded-full border border-black bg-white checked:border-5 checked:border-white checked:bg-primary checked:ring-1 checked:ring-black cursor-pointer"
                id="get-quote"
                name="select"
              />
              <label htmlFor="get-quote" className="text-base cursor-pointer">
                Get a Quote
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-[1rem]">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter Your Name"
                className="w-full bg-white py-[18px] px-[30px] rounded-[14px] border border-black outline-none text-base text-black placeholder:text-gray-dark"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-[1rem]">
                Email*
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email"
                className="w-full bg-white py-[18px] px-[30px] rounded-[14px] border border-black outline-none text-base text-black placeholder:text-gray-dark"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="text-[1rem]">
                Message*
              </label>
              <textarea
                id="message"
                placeholder="Enter Your Message"
                rows={5}
                className="w-full bg-white py-[18px] px-[30px] rounded-[14px] border border-black outline-none text-base text-black placeholder:text-gray-dark"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-dark px-[35px] py-5 rounded-[14px] text-white cursor-pointer text-base hover:text-primary transition-colors duration-300"
            >
              Send Message
            </button>
          </div>
        </div>
        <div className="relative w-full hidden lg:block">
          <img
            src="/assets/images/contact-form-illustration.png"
            alt="illustration"
            className="block h-full absolute -right-1/2 -translate-x-1"
          />
        </div>
      </div>
    </div>
  );
}
