import classNames from "classnames";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { VariableSizeList } from "react-window";

import { useAppSelector } from "@/hooks/typedHooks";

import Card from "./card/card";
import s from "./cards.module.sass";
import PollingLots from "./pollingLots";

const Cards = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<VariableSizeList>(null);
  const { lots } = useAppSelector((state) => state.lots);
  const memoizedLots = useMemo(() => lots, [lots]);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();
    if (listRef.current) {
      const scrollOffset = (listRef.current.state as { scrollOffset: number; }).scrollOffset;
      listRef.current.scrollTo(scrollOffset + e.deltaY);
    }
  }, []);

  const updateWidth = useCallback(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      container.addEventListener('wheel', handleWheel, { passive: false });
      updateWidth();
      window.addEventListener('resize', updateWidth);

      return () => {
        container.removeEventListener('wheel', handleWheel);
        window.removeEventListener('resize', updateWidth);
      };
    }
  });

  const widths = lots.map(() => Math.random() * (25 * 16 - 20 * 16) + 20 * 16); // Ширина от 20rem до 25rem

  const getItemSize = useCallback((index: number) => widths[index], [widths]);

  return (
    <Container ref={containerRef} className={classNames("py-1 px-4 mb-5", s.cards)}>
      <VariableSizeList
        ref={listRef}
        className={s.inner}
        direction="horizontal"
        width={containerWidth}
        height={710} // Высота списка
        itemCount={memoizedLots.length}
        itemSize={getItemSize}
        itemData={memoizedLots}
        overscanCount={5}
      >
        {({ data, index, style }) => (
          <div style={style} key={data[index].uniqueId}>
            <Card lot={data[index]} key={data[index].uniqueId} />
          </div>
        )}
      </VariableSizeList>
      <PollingLots />
    </Container>
  );
};

export default Cards;
