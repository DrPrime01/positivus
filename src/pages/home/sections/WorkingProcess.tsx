import { useState } from 'react';
import Minus from '../../../components/vectors/minus.tsx';
import Plus from '../../../components/vectors/plus.tsx';
import { accordionData } from '../../../constants';

export default function WorkingProcess() {
  const [openIndexes, setOpenIndexes] = useState<boolean[]>(
    Array(accordionData.length).fill(false)
  );

  const handleToggle = (index: number) => {
    setOpenIndexes((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return (
    <div className="flex flex-col gap-y-20 mb-[140px] mx-auto container max-lg:px-6">
      <div className="flex flex-col gap-y-6 max-md:justify-center md:flex-row items-center gap-x-10">
        <h2 className="text-h2-mob md:text-h2 p-1.5 rounded-sm max-sm:bg-primary hover-effect cursor-pointer">
          Our Working Process
        </h2>
        <p className="text-base-mob md:text-base md:text-wrap max-w-[292px] max-md:text-center">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>

      <div className="flex flex-col gap-y-[30px]">
        {accordionData.map((item, index) => (
          <div
            key={item.title}
            className={`rounded-[45px] p-6 md:px-[60px] md:py-[41px] border border-dark shadow-base flex flex-col gap-y-[30px]
            ${openIndexes[index] ? 'bg-primary' : 'h-[150px] overflow-hidden bg-gray'}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-2 md:gap-x-6">
                <span className="text-h1-mob md:text-h1">{`0${index + 1}`}</span>
                <span className="text-h3-mob md:text-h3">{item.title}</span>
              </div>
              <button
                type="button"
                onClick={() => handleToggle(index)}
                className="rounded-full border border-dark size-10 md:size-[58px] bg-gray flex items-center justify-center cursor-pointer"
              >
                {openIndexes[index] ? (
                  <Minus className="max-md:size-5" />
                ) : (
                  <Plus className="max-md:size-5" />
                )}
              </button>
            </div>
            <hr />
            <p className="text-base-mob md:text-base">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
