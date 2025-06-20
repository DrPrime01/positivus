import { Link } from 'react-router';
import ArrowRightTop from '../../../components/vectors/arrow-right-top.tsx';

export default function CaseStudies() {
  return (
    <div className="flex flex-col gap-y-20 mb-[140px] mx-auto container">
      <div className="flex flex-col gap-y-6 max-md:justify-center md:flex-row items-center gap-x-10">
        <h2 className="text-h2-mob md:text-h2 p-1.5 rounded-sm max-sm:bg-primary hover-effect cursor-pointer">
          Case Studies
        </h2>
        <p className="text-base-mob md:text-base md:text-wrap max-w-[520px] max-md:text-center">
          Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case
          Studies
        </p>
      </div>
      <div className="px-[60px] py-[70px] flex items-center gap-x-16 bg-dark rounded-[45px] divide-x divide-white">
        <div className="flex flex-col gap-y-5 pr-16">
          <p className="text-base-mob md:text-base text-white">
            For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50%
            increase in website traffic and a 25% increase in sales.
          </p>
          <Link
            to="/case-studies"
            className="group flex items-center gap-x-3.5 text-[1rem] md:text-regular text-primary w-fit"
          >
            <span>Learn more</span>
            <ArrowRightTop className="group-hover:rotate-[30deg] transition-transform duration-300 size-4" />
          </Link>
        </div>
        <div className="flex flex-col gap-y-5 pr-16">
          <p className="text-base-mob md:text-base text-white">
            For a B2B software company, we developed an SEO strategy that resulted in a first page
            ranking for key keywords and a 200% increase in organic traffic.
          </p>
          <Link
            to="/case-studies"
            className="group flex items-center gap-x-3.5 text-[1rem] md:text-regular text-primary w-fit"
          >
            <span>Learn more</span>
            <ArrowRightTop className="group-hover:rotate-[30deg] transition-transform duration-300 size-4" />
          </Link>
        </div>
        <div className="flex flex-col gap-y-5">
          <p className="text-base-mob md:text-base text-white">
            For a national retail chain, we created a social media marketing campaign that increased
            followers by 25% and generated a 20% increase in online sales.
          </p>
          <Link
            to="/case-studies"
            className="group flex items-center gap-x-3.5 text-[1rem] md:text-regular text-primary w-fit"
          >
            <span>Learn more</span>
            <ArrowRightTop className="group-hover:rotate-[30deg] transition-transform duration-300 size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
