import Slider from "rc-slider";
import { FC, useCallback, useState } from "react";
import { Form } from "react-bootstrap";

import s from "./style.module.sass";

interface SliderProps {
  label: string;
  className?: string;
  values: number[];
  name: string;
  min: number;
  max: number;
}

const MinMaxRangeSlider: FC<SliderProps> = ({ label, values, min, max, className }) => {
  const [range, setRange] = useState<number[]>(values);

  const handleRangeChange = useCallback((value: number | number[]) => {
    if (Array.isArray(value)) {
      setRange(value);
    }
  }, []);

  const changeMin = (value: number) => {
    const maxV = range[1];
    const newV = Math.max(min, Math.min(value, maxV));
    setRange([newV, range[1]]);
  };

  const changeMax = (value: number) => {
    const minV = range[0];
    const newV = Math.min(Math.max(minV, value), max);
    setRange([range[0], newV]);
  };

  return (
    <Form.Group className={className}>
      <Form.Label>{label}</Form.Label>
      <div className={s.slider}>
        <Slider
          range
          min={min}
          max={max}
          step={1}
          value={range}
          onChange={handleRangeChange}
        />
      </div>
      <div className={s.inputs}>
        <div>
          <Form.Control
            className={s.number}
            type="number"
            value={range[0].toString()}
            min={min}
            max={range[1]}
            onChange={e => changeMin(+e.target.value)}
          />
          {' '}
          min
        </div>
        <div>
          <Form.Control
            className={s.number}
            type="number"
            value={range[1].toString()}
            min={range[0]}
            max={max}
            onChange={e => changeMax(+e.target.value)}
          />
          {' '}
          max
        </div>
      </div>
    </Form.Group>
  );
};

export default MinMaxRangeSlider;