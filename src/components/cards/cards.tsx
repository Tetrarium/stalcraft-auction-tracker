import classNames from "classnames";
import { ReactNode, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";

import s from "./cards.module.sass";

const containerClass = classNames(
  "d-flex flex-row m-1 p-2",
  s.cards
);

/** Временная функция */
const generateCards = (count: number) => {
  const result: ReactNode[] = [];

  for (let i = 0; i < count; i++) {
    result.push(<div className="bg-dark mx-2 p-3 w-20" key={i}>Card {i + 1}</div>);
  }

  return result;
};

const Cards = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = containerRef.current;
    if (scrollContainer) {
      const handleWheel = (event: WheelEvent) => {
        event.preventDefault();

        scrollContainer.scrollLeft += event.deltaY;
      };

      scrollContainer.addEventListener('wheel', handleWheel, { passive: false });

      return () => {
        scrollContainer.removeEventListener('wheel', handleWheel);
      };
    }
  }, []);

  return (
    <Container
      className={containerClass}
      // onWheel={handleWheel}
      ref={containerRef}
    >
      {generateCards(200)}
    </Container>
  );
};

export default Cards;