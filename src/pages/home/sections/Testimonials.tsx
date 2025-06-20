import { useRef, useState, useEffect } from 'react';

import Arrow from '../../../components/vectors/arrow.tsx';
import CarouselStar from '../../../components/vectors/carousel-star.tsx';

const ITEM_COUNT = 6;

export default function Testimonials() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;

    const container = carouselRef.current;
    const containerWidth = container.offsetWidth;

    const items = container.querySelectorAll('.carousel-item');
    if (!items || !items.length) return;

    const item = items[index] as HTMLElement;
    const itemWidth = item.offsetWidth;

    const itemLeft = item.offsetLeft;
    const scrollPosition = itemLeft - containerWidth / 2 + itemWidth / 2;

    container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
  };

  const prev = () => {
    setActiveIndex((prev) => {
      const newIndex = Math.max(prev - 1, 0);
      scrollToIndex(newIndex);
      return newIndex;
    });
  };

  const next = () => {
    setActiveIndex((prev) => {
      const newIndex = Math.min(prev + 1, ITEM_COUNT - 1);
      scrollToIndex(newIndex);
      return newIndex;
    });
  };

  useEffect(() => {
    scrollToIndex(activeIndex);
  }, []);

  return (
    <div className="mx-auto container max-lg:px-6 mb-[140px] flex flex-col gap-y-20">
      <div className="flex flex-col gap-y-6 max-md:justify-center md:flex-row items-center gap-x-4 lg:gap-x-10">
        <h2 className="text-h2-mob md:text-h2 p-1.5 rounded-sm max-lg:bg-primary hover-effect cursor-pointer">
          Testimonials
        </h2>
        <p className="text-base-mob md:text-base lg:text-balance lg:max-w-[580px] max-md:text-center">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital
          Marketing Services
        </p>
      </div>

      <div className="flex flex-col gap-y-20 md:gap-y-[124px] bg-dark rounded-[45px] pt-10 pb-8 px-6 md:pt-[84px] md:pb-[68px] md:px-[50px]">
        <div
          ref={carouselRef}
          className="flex items-center gap-x-[50px] overflow-x-auto scroll-smooth w-full scrollbar-hide"
        >
          {Array(ITEM_COUNT)
            .fill('')
            .map((_, index) => (
              // eslint-disable-next-line react-x/no-array-index-key
              <div key={index} className="carousel-item flex flex-col shrink-0 w-[606px]">
                <div>
                  <div className="border border-primary py-5 px-7 md:py-12 md:px-[52px] rounded-4xl max-h-[238px]">
                    <p className="text-white text-base">
                      "We have been working with Positivus for the past year and have seen a
                      significant increase in website traffic and leads as a result of their
                      efforts. The team is professional, responsive, and truly cares about the
                      success of our business. We highly recommend Positivus to any company looking
                      to grow their online presence."
                    </p>
                  </div>
                  <div className="chat-clip size-10 bg-primary relative left-[52px]"></div>
                </div>
                <div className="flex flex-col ml-16">
                  <span className="text-primary text-h4">John Smith</span>
                  <span className="text-white text-base">Marketing Director at XYZ Corp</span>
                </div>
              </div>
            ))}
        </div>

        <div className="flex items-center justify-center gap-x-[180px]">
          <button type="button" onClick={prev} className="cursor-pointer">
            <Arrow className="rotate-180" />
          </button>
          <div className="flex items-center gap-x-5">
            {Array(ITEM_COUNT)
              .fill('')
              .map((_, index) => (
                // eslint-disable-next-line react-x/no-array-index-key
                <CarouselStar key={index} fill={activeIndex === index ? '#B9FF66' : '#FFFFFF'} />
              ))}
          </div>
          <button type="button" onClick={next} className="cursor-pointer">
            <Arrow />
          </button>
        </div>
      </div>
    </div>
  );
}
