import { Link, NavLink } from 'react-router';

export default function Navbar() {
  return (
    <header className="w-full max-h-[68px] h-fit md:mt-[60px] md:mb-[70px] container mx-auto flex items-center justify-between">
      <Link to="/" className="block">
        <div className="p-2.5 flex items-center gap-x-3">
          <img src="/assets/images/logo.svg" alt="logo" className="size-9" />
          <img src="/assets/images/logo-text.svg" alt="logo-text" className="w-auto h-[29px]" />
        </div>
      </Link>
      <div className="flex items-center gap-x-5">
        <nav className="flex items-center gap-x-5">
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              `px-3 py-2 text-regular rounded-md ${isActive ? 'bg-primary' : ''}`
            }
          >
            About us
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `px-3 py-2 text-regular rounded-md ${isActive ? 'bg-primary' : ''}`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/use-cases"
            className={({ isActive }) =>
              `px-3 py-2 text-regular rounded-md ${isActive ? 'bg-primary' : ''}`
            }
          >
            Use Cases
          </NavLink>
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              `px-3 py-2 text-regular rounded-md ${isActive ? 'bg-primary' : ''}`
            }
          >
            Pricing
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `px-3 py-2 text-regular rounded-md ${isActive ? 'bg-primary' : ''}`
            }
          >
            Blog
          </NavLink>
        </nav>
        <Link
          to="#request-quote"
          className="px-9 py-5 border border-black rounded-[14px] text-regular block"
        >
          Request a quote
        </Link>
      </div>
    </header>
  );
}
