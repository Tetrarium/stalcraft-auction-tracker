import { FC } from "react";
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

const Range: FC<RangeProps> = ({ label, points, className }) => {
  return (
    <Form.Group className={className} >
      <Form.Label>{label}</Form.Label>
      <div className={s.inputs}>
        <input
          className={s.input}
          type="range"
          step={1}
          min={0}
          // value={0}
          max={points.length}
        />
        <input
          className={s.input}
          type="range"
          step={1}
          min={0}
          // value={1}
          max={points.length}
        />
        <div className={s.container}>
          <div className={s.line} />
        </div>
      </div>
    </Form.Group>
  );
};

export default Range;