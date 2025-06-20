import ArrowRightTop from '../../../components/vectors/arrow-right-top.tsx';
import CardTilt from '../../../components/CardTilt.tsx';

export default function Services() {
  return (
    <div className="flex flex-col gap-y-20 container mx-auto max-lg:px-6 mb-[140px]">
      <div className="flex flex-col gap-y-6 max-md:justify-center md:flex-row items-center gap-x-10">
        <h2 className="text-h2-mob md:text-h2 p-1.5 rounded-sm max-sm:bg-primary hover-effect cursor-pointer">
          Services
        </h2>
        <p className="text-base-mob md:text-base md:text-balance max-w-[580px] max-md:text-center">
          At our digital marketing agency, we offer a range of services to help businesses grow and
          succeed online. These services include:
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8 xl:gap-10 mb-[100px]">
        <CardTilt className="transition-transform duration-300 ease-out">
          <div className="md:p-[50px] p-8 rounded-[45px] h-[310px] flex justify-between items-center bg-gray border border-dark shadow-base">
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-h3-mob md:text-h3 p-1.5 bg-primary rounded-md text-nowrap w-fit">
                  Search engine
                </h3>
                <h3 className="text-h3-mob md:text-h3 p-1.5 bg-primary rounded-md w-fit">
                  optimization
                </h3>
              </div>
              <button
                type="button"
                className="group flex items-center gap-x-4 text-[1rem] md:text-regular w-fit cursor-pointer bg-dark rounded-full hover:gap-x-2 text-primary arrow-btn"
              >
                <div className="size-10 flex items-center justify-center">
                  <ArrowRightTop className="group-hover:rotate-[30deg] transition-transform duration-400" />
                </div>
                Learn more
              </button>
            </div>
            <img
              src="/assets/images/seo-illustration.svg"
              alt="seo"
              className="md:w-[270px] md:h-[170px] size-32 max-md:self-end object-contain block ml-auto"
            />
          </div>
        </CardTilt>
        <CardTilt className="transition-transform duration-300 ease-out">
          <div className="p-8 md:p-[50px] rounded-[45px] h-[310px] flex justify-between items-center bg-primary border border-dark shadow-base">
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-h3-mob md:text-h3 p-1.5 bg-gray rounded-md text-nowrap w-fit">
                  Pay-per-click
                </h3>
                <h3 className="text-h3-mob md:text-h3 p-1.5 bg-gray rounded-md w-fit">
                  advertising
                </h3>
              </div>
              <button
                type="button"
                className="flex group items-center gap-x-4 text-[1rem] md:text-regular w-fit cursor-pointer bg-dark rounded-full hover:gap-x-2 text-primary arrow-btn"
              >
                <div className="size-10 flex items-center justify-center">
                  <ArrowRightTop className="group-hover:rotate-[30deg] transition-transform duration-400" />
                </div>
                Learn more
              </button>
            </div>
            <img
              src="/assets/images/pay-per-click.svg"
              alt="seo"
              className="md:w-[270px] md:h-[170px] size-32 max-md:self-end object-contain block ml-auto"
            />
          </div>
        </CardTilt>
        <CardTilt className="transition-transform duration-300 ease-out">
          <div className="p-8 md:p-[50px] rounded-[45px] h-[310px] flex justify-between items-center bg-dark border border-dark shadow-base">
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-h3-mob md:text-h3 p-1.5 bg-gray rounded-md text-nowrap w-fit">
                  Social Media
                </h3>
                <h3 className="text-h3-mob md:text-h3 p-1.5 bg-gray rounded-md w-fit">Marketing</h3>
              </div>
              <button
                type="button"
                className="flex group items-center gap-x-4 text-[1rem] md:text-regular text-black bg-gray rounded-full w-fit cursor-pointer hover:gap-x-2 arrow-btn"
              >
                <div className="size-10 flex items-center justify-center">
                  <ArrowRightTop
                    fill="#191A23"
                    className="group-hover:rotate-[30deg] transition-transform duration-400"
                  />
                </div>
                Learn more
              </button>
            </div>
            <img
              src="/assets/images/sm-marketing.svg"
              alt="seo"
              className="md:w-[270px] md:h-[170px] size-32 max-md:self-end object-contain block ml-auto"
            />
          </div>
        </CardTilt>
        <CardTilt className="transition-transform duration-300 ease-out">
          <div className="p-8 md:p-[50px] rounded-[45px] h-[310px] flex justify-between items-center bg-gray border border-dark shadow-base">
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-h3-mob md:text-h3 p-1.5 bg-primary rounded-md text-nowrap w-fit">
                  Email
                </h3>
                <h3 className="text-h3-mob md:text-h3 p-1.5 bg-primary rounded-md w-fit">
                  Marketing
                </h3>
              </div>
              <button
                type="button"
                className="flex group items-center gap-x-4 text-[1rem] md:text-regular cursor-pointer bg-dark rounded-full hover:gap-x-2 text-primary arrow-btn"
              >
                <div className="size-10 flex items-center justify-center  rounded-full">
                  <ArrowRightTop className="group-hover:rotate-[30deg] transition-transform duration-400" />
                </div>
                Learn more
              </button>
            </div>
            <img
              src="/assets/images/email-marketing.svg"
              alt="seo"
              className="md:w-[270px] md:h-[170px] size-32 max-md:self-end object-contain block ml-auto"
            />
          </div>
        </CardTilt>
        <CardTilt className="transition--mob transform duration-300 ease-out">
          <div className="p-8 md:p-[50px] rounded-[45px] h-[310px] flex justify-between items-center bg-primary border border-dark shadow-base">
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-h3-mob md:text-h3 p-1.5 bg-gray rounded-md text-nowrap w-fit">
                  Content
                </h3>
                <h3 className="text-h3-mob md:text-h3 p-1.5 bg-gray rounded-md w-fit">Creation</h3>
              </div>
              <button
                type="button"
                className="flex group items-center gap-x-4 text-[1rem] md:text-regular w-fit cursor-pointer bg-dark rounded-full hover:gap-x-2 text-primary arrow-btn"
              >
                <div className="size-10 flex items-center justify-center">
                  <ArrowRightTop className="group-hover:rotate-[30deg] transition-transform duration-400" />
                </div>
                Learn more
              </button>
            </div>
            <img
              src="/assets/images/content-creation.svg"
              alt="content-creation"
              className="md:w-[270px] md:h-[170px] size-32 max-md:self-end object-contain block ml-auto"
            />
          </div>
        </CardTilt>
        <CardTilt className="transition-transform duration-300 ease-out">
          <div className="p-8 md:p-[50px] rounded-[45px] h-[310px] flex justify-between items-center bg-dark border border-dark shadow-base">
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-h3-mob md:text-h3 p-1.5 bg-gray rounded-md text-nowrap w-fit">
                  Analytics and
                </h3>
                <h3 className="text-h3-mob md:text-h3 p-1.5 bg-gray rounded-md w-fit">Tracking</h3>
              </div>
              <button
                type="button"
                className="group flex items-center gap-x-4 text-[1rem] md:text-regular text-black bg-gray rounded-full w-fit cursor-pointer hover:gap-x-2 arrow-btn"
              >
                <div className="size-10 flex items-center justify-center">
                  <ArrowRightTop
                    fill="#191A23"
                    className="group-hover:rotate-[30deg] transition-transform duration-400"
                  />
                </div>
                Learn more
              </button>
            </div>
            <img
              src="/assets/images/analytics-illustration.svg"
              alt="analytics-illustration"
              className="md:w-[270px] md:h-[170px] size-32 max-md:self-end object-contain block ml-auto"
            />
          </div>
        </CardTilt>
      </div>
      <div className="bg-gray rounded-[45px] p-8 md:px-[60px] flex items-center justify-between max-h-[347px]">
        <div className="flex flex-col gap-y-[26px] max-w-[500px]">
          <h3 className="text-h3-mob md:text-h3">Let's make things happen</h3>
          <p className="text-base-mob md:text-mob">
            Contact us today to learn more about how our digital marketing services can help your
            business grow and succeed online.
          </p>
          <button
            type="button"
            className="px-[35px] py-5 bg-dark rounded-[14px] text-[1rem] md:text-regular text-white w-fit cursor-pointer hover:text-primary transition-colors duration-300"
          >
            Get your free proposal
          </button>
        </div>
        <img
          src="/assets/images/proposal-illustration.png"
          alt="proposal-illustration"
          className="w-auto h-full object-contain hidden md:block self-center"
        />
      </div>
    </div>
  );
}
