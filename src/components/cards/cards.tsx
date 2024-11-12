import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";

import { useAppSelector } from "@/hooks/typedHooks";
import useRefreshLots from "@/hooks/useRefreshLots";

import Card from "./card/card";
import s from "./cards.module.sass";

const containerClass = classNames(
  "py-1 px-4",
  s.cards
);

const innerClass = classNames(
  "d-flex flex-row",
  s.inner
);

const Cards = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { lots } = useAppSelector((state) => state.lots);
  const [scrollFromRigth, setScrollFromRigth] = useState<number | null>(null);
  useRefreshLots();

  useEffect(() => {
    const scrollContainer = containerRef.current;
    if (scrollContainer) {
      const handleWheel = (event: WheelEvent) => {
        event.preventDefault();

        scrollContainer.scrollLeft += event.deltaY;

        const scrollWidth = scrollContainer.scrollWidth;

        if (scrollContainer.scrollLeft === 0) {
          setScrollFromRigth(null);
        } else {
          setScrollFromRigth(scrollWidth - scrollContainer.scrollLeft);
        }
      };

      scrollContainer.addEventListener('wheel', handleWheel, { passive: false });

      return () => {
        scrollContainer.removeEventListener('wheel', handleWheel);
      };
    }
  }, []);

  useEffect(() => {
    const scrollContainer = containerRef.current;
    if (scrollContainer && scrollFromRigth) {
      scrollContainer.scrollLeft = scrollContainer.scrollWidth - scrollFromRigth;
    }
  }, [lots]);

  return (
    <Container
      className={containerClass}
    >
      <div
        ref={containerRef}
        className={innerClass}
      >
        {lots.map((lot, i) => <Card key={lot.uniqueId} lot={lot} index={i} />
        )}
      </div>
    </Container >
  );
};

export default Cards;
