import React, { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import "../css/Carousel.css";

interface CarouselItemProps {
  children: ReactNode;
  width?: string;
}

export const CarouselItem = ({ children, width }: CarouselItemProps) => (
  <div className="carousel-item" style={{ width }}>
    {children}
  </div>
);

interface CarouselProps {
  children: ReactNode;
}

const Carousel = ({ children }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swipe = useRef<{ x?: number }>({});

  const slides = Array.isArray(children) ? children : [children];
  const count = slides.length;

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0 || newIndex >= count) newIndex = 0;
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const id = setInterval(() => updateIndex(activeIndex + 1), 3000);
    return () => clearInterval(id);
  });

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    swipe.current.x = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const deltaX = e.changedTouches[0].clientX - (swipe.current.x ?? 0);
    if (Math.abs(deltaX) > 50) {
      updateIndex(activeIndex + (deltaX < 0 ? 1 : -1));
    }
  };

 return (
  <div
    className="carousel"
    onTouchStart={onTouchStart}
    onTouchEnd={onTouchEnd}
  >
    <div
      className="inner"
      style={{ transform: `translateX(-${activeIndex * 100}%)` }}
    >
      {slides.map((child, i) => (
        <CarouselItem key={i} width="100%">
          {child}
        </CarouselItem>
      ))}
    </div>

    <button
      className="carousel-button prev"
      onClick={() => updateIndex(activeIndex - 1)}
    >
      &#8592;
    </button>
    <button
      className="carousel-button next"
      onClick={() => updateIndex(activeIndex + 1)}
    >
      &#8594;
    </button>
  </div>
);
};

export default Carousel;


