import LinkedInIcon from '../../../components/vectors/linkedin.tsx';
import { teamData } from '../../../constants';
import { Link } from 'react-router';

export default function Team() {
  return (
    <div className="flex flex-col gap-y-20 mb-[140px] mx-auto container max-lg:px-6">
      <div className="flex items-center gap-x-10">
        <h2 className="text-h2-mob md:text-h2 p-1.5 rounded-sm max-sm:bg-primary hover-effect cursor-pointer">
          Team
        </h2>
        <p className="text-base-mob md:text-base text-wrap max-w-[473px]">
          Meet the skilled and experienced team behind our successful digital marketing strategies
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {teamData.map((team) => (
          <div
            key={team.title}
            className="border border-dark rounded-[45px] px-[35px] py-10 shadow-base flex flex-col gap-y-7"
          >
            <div className="flex items-end gap-x-5 relative">
              <div className="w-[105.65px] h-[102.82px] shadow-[0_4px_4px_0_#000000] bg-primary clover-clip-path">
                <img
                  src={team.img}
                  alt="team-profile"
                  className="object-cover mix-blend-multiply size-full shadow-base"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-h4-mob md:text-h4">{team.name}</span>
                <span className="text-[1rem] md:text-regular">{team.title}</span>
              </div>
              <LinkedInIcon className="absolute top-0 right-0" />
            </div>
            <hr />
            <p className="text-base">{team.text}</p>
          </div>
        ))}
      </div>
      <div className="self-end -mt-10">
        <Link
          to="/about-us"
          className="px-[35px] py-5 bg-dark rounded-[14px] text-[1rem] md:text-regular text-white hover:text-primary cursor-pointer block w-[269px] text-center"
        >
          See all team
        </Link>
      </div>
    </div>
  );
}
