import "rc-slider/assets/index.css";

import Slider from "rc-slider";
import { FC, memo, ReactNode, useCallback, useMemo, useState } from "react";
import { Form } from "react-bootstrap";

import s from "./style.module.sass";

interface Point {
  title?: string;
  value: number;
}

interface RangeProps {
  label: string;
  name: string;
  values: number[];
  points: Point[];
  className?: string;
}

const StepRangeSlider: FC<RangeProps> = memo(({ label, className, values, points }) => {
  const [range, setRange] = useState<number[]>(values);

  const handleRangeChange = useCallback((value: number | number[]) => {
    if (Array.isArray(value))
      setRange(value);
  }, []);

  const marks = useMemo(
    () => points.reduce((acc, point, i) => {
      acc[i] = <div>{point.title || point.value}</div>;
      return acc;
    }, {} as { [key: number]: ReactNode; }),
    [points]
  );

  return (
    <Form.Group className={className} >
      <Form.Label>{label}</Form.Label>
      <div className={s.slider}>
        <Slider
          // className={s.slider}
          dots
          range
          marks={marks}
          min={0}
          max={points.length - 1}
          step={1}
          value={range}
          onChange={handleRangeChange}
        />
      </div>
    </Form.Group>
  );
});

export default StepRangeSlider;