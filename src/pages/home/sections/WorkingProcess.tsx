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
    <div className="flex flex-col gap-y-20 mb-[140px] mx-auto container">
      <div className="flex items-center gap-x-10">
        <h2 className="text-h2 p-1.5 rounded-sm bg-primary">Our Working Process</h2>
        <p className="text-base text-wrap max-w-[292px]">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>

      <div className="flex flex-col gap-y-[30px]">
        {accordionData.map((item, index) => (
          <div
            key={item.title}
            className={`rounded-[45px] px-[60px] py-[41px] border border-dark shadow-base flex flex-col gap-y-[30px]
            ${openIndexes[index] ? 'bg-primary' : 'h-[150px] overflow-hidden bg-gray'}`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-6">
                <span className="text-h1">{`0${index + 1}`}</span>
                <span className="text-h3">{item.title}</span>
              </div>
              <button
                type="button"
                onClick={() => handleToggle(index)}
                className="rounded-full border border-dark size-[58px] bg-gray flex items-center justify-center cursor-pointer"
              >
                {openIndexes[index] ? <Minus /> : <Plus />}
              </button>
            </div>
            <hr />
            <p className="text-base">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
