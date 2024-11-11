import { FC } from "react";
import { Form } from "react-bootstrap";

export interface IValue {
  title: string;
  value: string;
}

interface FSelectProps {
  label: string;
  name: string;
  value: string;
  values: IValue[];
  onChange: (name: string, value: string) => void;

  className?: string;
}

const FSelect: FC<FSelectProps> = ({
  label,
  name,
  value,
  values,

  onChange,
  className
}) => {
  return (
    <Form.Group className={className}>
      <Form.Label>{label}</Form.Label>
      <Form.Select
        aria-label={`${name}-filter`}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
      >
        {values.map(({ value, title }, i) => (
          <option key={i} value={value}>{title}</option>
        ))}
      </Form.Select>
    </Form.Group>
  );
};

export default FSelect;