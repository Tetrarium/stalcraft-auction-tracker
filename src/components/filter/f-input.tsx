import { FC } from "react";
import { Form } from "react-bootstrap";

interface FInputProps {
  label: string;
  name: string;

  className?: string;
  type?: 'number';
  placeholder?: string;
  min?: number;
  max?: number;
}

const FInput: FC<FInputProps> = ({
  label,
  name,
  type,
  placeholder,
  className,
  min,
  max,
}) => {
  return (
    <Form.Group className={className}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type || 'text'}
        aria-label={`${name}-filter`}
        placeholder={placeholder}
        min={min}
        max={max}
      />
    </Form.Group>
  );
};

export default FInput;