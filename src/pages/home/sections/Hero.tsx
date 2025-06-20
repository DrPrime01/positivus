export default function Hero() {
  return (
    <div className="container mx-auto max-lg:px-6 flex flex-col max-md:gap-y-5 md:flex-row items-start md:gap-x-16 lg:gap-x-20 xl:gap-x-[108.54px] mb-[70px]">
      <div className="flex flex-col gap-y-[35px] md:flex-1">
        <h1 className="text-h1-mob md:text-h1 text-black">
          Navigating the digital landscape for success
        </h1>
        <p className="text-[1rem] md:text-regular">
          Our digital marketing agency helps businesses grow and succeed online through a range of
          services including SEO, PPC, social media marketing, and content creation.
        </p>
        <button
          type="button"
          className="cursor-pointer bg-dark text-white px-[35px] py-5 rounded-[14px] text-[1rem] md:text-regular w-fit hover:text-primary transition-colors duration-300"
        >
          Book a consultation
        </button>
      </div>
      <div className="md:flex-1">
        <img
          src="/assets/images/hero-illustration.png"
          alt="hero-illustration"
          className="object-contain w-auto h-full block"
        />
      </div>
    </div>
  );
}
