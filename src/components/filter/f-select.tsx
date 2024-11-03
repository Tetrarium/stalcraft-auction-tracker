import { FC } from "react";
import { Form } from "react-bootstrap";

export interface IValue {
  title: string;
  value: string;
}

interface FSelectProps {
  label: string;
  name: string;
  values: IValue[];

  className?: string;
}

const FSelect: FC<FSelectProps> = ({ label, name, values, className }) => {
  return (
    <Form.Group className={className}>
      <Form.Label>{label}</Form.Label>
      <Form.Select aria-label={`${name}-filter`}>
        {values.map(({ value, title }, i) => (
          <option key={i} value={value}>{title}</option>
        ))}
      </Form.Select>
    </Form.Group>
  );
};

export default FSelect;