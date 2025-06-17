import ArrowRightTop from '../../../components/vectors/arrow-right-top.tsx';

export default function Services() {
  return (
    <div className="flex flex-col gap-y-20 container mx-auto mb-[140px]">
      <div className="flex items-center gap-x-10">
        <h2 className="text-h2 p-1.5 rounded-sm bg-primary">Services</h2>
        <p className="text-base text-balance max-w-[580px]">
          At our digital marketing agency, we offer a range of services to help businesses grow and
          succeed online. These services include:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 lg:gap-8 xl:gap-10 mb-[100px]">
        <div className="p-[50px] rounded-[45px] h-[310px] flex justify-between gap-x-20 bg-gray border border-dark shadow-base">
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-h3 p-1.5 bg-primary rounded-md text-nowrap w-fit">
                Search engine
              </h3>
              <h3 className="text-h3 p-1.5 bg-primary rounded-md w-fit">optimization</h3>
            </div>
            <button
              type="button"
              className="flex items-center gap-x-4 text-regular w-fit cursor-pointer"
            >
              <div className="size-10 flex items-center justify-center bg-dark rounded-full">
                <ArrowRightTop />
              </div>
              Learn more
            </button>
          </div>
          <img
            src="/assets/images/seo-illustration.svg"
            alt="seo"
            className="w-[270px] h-[170px] object-contain block self-center justify-end"
          />
        </div>
        <div className="p-[50px] rounded-[45px] h-[310px] flex justify-between gap-x-20 bg-primary border border-dark shadow-base">
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-h3 p-1.5 bg-gray rounded-md text-nowrap w-fit">Pay-per-click</h3>
              <h3 className="text-h3 p-1.5 bg-gray rounded-md w-fit">advertising</h3>
            </div>
            <button
              type="button"
              className="flex items-center gap-x-4 text-regular w-fit cursor-pointer"
            >
              <div className="size-10 flex items-center justify-center bg-dark rounded-full">
                <ArrowRightTop />
              </div>
              Learn more
            </button>
          </div>
          <img
            src="/assets/images/pay-per-click.svg"
            alt="seo"
            className="w-[270px] h-[170px] object-contain block self-center"
          />
        </div>
        <div className="p-[50px] rounded-[45px] h-[310px] flex justify-between gap-x-20 bg-dark border border-dark shadow-base">
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-h3 p-1.5 bg-gray rounded-md text-nowrap w-fit">Social Media</h3>
              <h3 className="text-h3 p-1.5 bg-gray rounded-md w-fit">Marketing</h3>
            </div>
            <button
              type="button"
              className="flex items-center gap-x-4 text-regular text-gray w-fit cursor-pointer"
            >
              <div className="size-10 flex items-center justify-center bg-gray rounded-full">
                <ArrowRightTop fill="#191A23" />
              </div>
              Learn more
            </button>
          </div>
          <img
            src="/assets/images/sm-marketing.svg"
            alt="seo"
            className="w-[270px] h-[170px] object-contain block self-center"
          />
        </div>
        <div className="p-[50px] rounded-[45px] h-[310px] flex justify-between gap-x-20 bg-gray border border-dark shadow-base">
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-h3 p-1.5 bg-primary rounded-md text-nowrap w-fit">Email</h3>
              <h3 className="text-h3 p-1.5 bg-primary rounded-md w-fit">Marketing</h3>
            </div>
            <button
              type="button"
              className="flex items-center gap-x-4 text-regular w-fit cursor-pointer"
            >
              <div className="size-10 flex items-center justify-center bg-dark rounded-full">
                <ArrowRightTop />
              </div>
              Learn more
            </button>
          </div>
          <img
            src="/assets/images/email-marketing.svg"
            alt="seo"
            className="w-[270px] h-[170px] object-contain block self-center"
          />
        </div>
        <div className="p-[50px] rounded-[45px] h-[310px] flex justify-between gap-x-20 bg-primary border border-dark shadow-base">
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-h3 p-1.5 bg-gray rounded-md text-nowrap w-fit">Content</h3>
              <h3 className="text-h3 p-1.5 bg-gray rounded-md w-fit">Creation</h3>
            </div>
            <button
              type="button"
              className="flex items-center gap-x-4 text-regular w-fit cursor-pointer"
            >
              <div className="size-10 flex items-center justify-center bg-dark rounded-full">
                <ArrowRightTop />
              </div>
              Learn more
            </button>
          </div>
          <img
            src="/assets/images/content-creation.svg"
            alt="content-creation"
            className="w-[270px] h-[170px] object-contain block self-center"
          />
        </div>
        <div className="p-[50px] rounded-[45px] h-[310px] flex justify-between gap-x-20 bg-dark border border-dark shadow-base">
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-h3 p-1.5 bg-gray rounded-md text-nowrap w-fit">Analytics and</h3>
              <h3 className="text-h3 p-1.5 bg-gray rounded-md w-fit">Tracking</h3>
            </div>
            <button
              type="button"
              className="flex items-center gap-x-4 text-regular text-gray w-fit cursor-pointer"
            >
              <div className="size-10 flex items-center justify-center bg-gray rounded-full">
                <ArrowRightTop fill="#191A23" />
              </div>
              Learn more
            </button>
          </div>
          <img
            src="/assets/images/analytics-illustration.svg"
            alt="analytics-illustration"
            className="w-[270px] h-[170px] object-contain block self-center"
          />
        </div>
      </div>
      <div className="bg-gray rounded-[45px] px-[60px] flex items-center justify-between max-h-[347px]">
        <div className="flex flex-col gap-y-[26px] max-w-[500px]">
          <h3 className="text-h3">Let's make things happen</h3>
          <p className="text-base">
            Contact us today to learn more about how our digital marketing services can help your
            business grow and succeed online.
          </p>
          <button
            type="button"
            className="px-[35px] py-5 bg-dark rounded-[14px] text-regular text-white w-fit cursor-pointer"
          >
            Get your free proposal
          </button>
        </div>
        <img
          src="/assets/images/proposal-illustration.png"
          alt="proposal-illustration"
          className="w-auto h-full object-contain block self-center"
        />
      </div>
    </div>
  );
}
