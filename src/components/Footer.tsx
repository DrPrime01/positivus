import { Link, NavLink } from 'react-router';
import { LinkedInBare } from './vectors/linkedin.tsx';
import FacebookIcon from './vectors/facebook-icon.tsx';
import XIcon from './vectors/x-icon.tsx';

export default function Footer() {
  return (
    <footer className="container mx-auto bg-dark flex flex-col  md:rounded-[45px] rounded-b-none px-6 py-6 md:pt-[55px] md:pb-[50px] md:px-[60px]">
      <div className="flex flex-col gap-y-8 md:flex-row items-center justify-center md:justify-between">
        <Link to="/" className="block">
          <div className="p-2.5 flex items-center gap-x-3">
            <img src="/assets/images/logo-white.svg" alt="logo" className="size-9" />
            <img
              src="/assets/images/logo-text-white.svg"
              alt="logo-text"
              className="w-auto h-[29px]"
            />
          </div>
        </Link>
        <nav className="flex flex-col gap-y-6 md:flex-row items-center md:gap-x-10">
          <NavLink to="/about-us" className="text-regular md:underline text-white">
            About us
          </NavLink>
          <NavLink to="/services" className="text-regular md:underline text-white">
            Services
          </NavLink>
          <NavLink to="/use-cases" className="text-regular md:underline text-white">
            Use Cases
          </NavLink>
          <NavLink to="/pricing" className="text-regular md:underline text-white">
            Pricing
          </NavLink>
          <NavLink to="/blog" className="text-regular md:underline text-white">
            Blog
          </NavLink>
        </nav>
        <div className="flex items-center gap-x-5">
          <button
            type="button"
            className="cursor-pointer bg-white size-[30px] rounded-full flex items-center justify-center"
          >
            <LinkedInBare />
          </button>
          <button
            type="button"
            className="cursor-pointer rounded-full flex items-center justify-center"
          >
            <FacebookIcon />
          </button>
          <button
            type="button"
            className="cursor-pointer bg-white size-[30px] rounded-full flex items-center justify-center"
          >
            <XIcon />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-y-8 max-md:items-center justify-center md:flex-row md:justify-stretch md:gap-x-[154px] mt-16 mb-12">
        <div className="flex flex-col max-md:items-center max-md:justify-center max-w-[332px]">
          <h4 className="p-1 rounded-md bg-primary text-h4 mb-7 w-fit">Contact us:</h4>
          <p className="text-white text-base mb-5">
            Email:{' '}
            <a href="mailto:info@positivus.com" className="appearance-none hover:text-primary">
              info@positivus.com
            </a>
          </p>
          <p className="text-white text-base mb-5">
            Phone:{' '}
            <a href="tel:555-567-8901" className="appearance-none hover:text-primary">
              555-567-8901
            </a>
          </p>
          <p className="text-white text-base max-md:text-center">
            Address: 1234 Main St Moonstone City, Stardust State 12345
          </p>
        </div>
        <div className="w-full bg-[#292A32] rounded-[14px] p-6 md:px-10 flex flex-col gap-y-5 md:flex-row items-center justify-center gap-x-5">
          <input
            type="email"
            placeholder="Email"
            className="rounded-[14px] border border-white outline-none py-[22px] px-[35px] text-white text-base w-full"
          />
          <button
            type="button"
            className="cursor-pointer rounded-[14px] text-regular py-5 px-[35px] bg-primary w-full"
          >
            Subscribe to news
          </button>
        </div>
      </div>
      <hr className="text-white" />
      <div className="flex flex-col gap-y-5 md:flex-row max-md:justify-center items-center gap-x-10 mt-[50px]">
        <p className="text-base text-white">© 2023 Positivus. All Rights Reserved.</p>
        <Link to="#" className="text-base text-white md:underline">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
