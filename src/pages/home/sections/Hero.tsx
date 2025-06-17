export default function Hero() {
  return (
    <div className="container mx-auto flex items-start md:gap-x-16 lg:gap-x-20 xl:gap-x-[108.54px] mb-[70px]">
      <div className="flex flex-col gap-y-[35px] md:flex-1">
        <h1 className="text-h1 text-black">Navigating the digital landscape for success</h1>
        <p className="text-regular">
          Our digital marketing agency helps businesses grow and succeed online through a range of
          services including SEO, PPC, social media marketing, and content creation.
        </p>
        <button
          type="button"
          className="cursor-pointer bg-dark text-white px-[35px] py-5 rounded-[14px] text-regular w-fit hover:text-primary"
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
