import Slider from "rc-slider";
import { FC, useState } from "react";
import { Form } from "react-bootstrap";

import s from "./range.module.sass";

interface Point {
  title?: string;
  value: string | number;
}

interface RangeProps {
  label: string;
  name: string;
  values: (string | number)[];
  points: Point[];
  className?: string;
}

const LabeledRange: FC<RangeProps> = ({ label, className }) => {
  const [range, setRange] = useState<number[]>([20, 80]);

  const handleRangeChange = (value: number | number[]) => {
    if (Array.isArray(value))
      setRange(value);
  };

  return (
    <Form.Group className={className} >
      <Form.Label>{label}</Form.Label>
      <Slider
        className={s.slider}
        dots
        range
        dotStyle={{
          width: '10px',
          height: '10px',
          background: 'green'
        }}
        min={0}
        max={100}
        step={1}
        value={range}
        onChange={handleRangeChange}
        styles={{
          track: {
            backgroundColor: "#4caf50",
            height: 5,
            position: 'absolute',
            transform: 'translateY(-50%)'
          },
          handle: {
            backgroundColor: "#4caf50",
            height: 20,
            width: 20,
            position: 'absolute',
            borderRadius: '50%',
            transform: 'translateY(-50%)'
          },
          rail: {
            backgroundColor: "#ddd",
            height: 2,
            // position: 'absolute',
            transform: 'translateY(50%)'
          },
        }}
      />
    </Form.Group>
  );
};

export default LabeledRange;