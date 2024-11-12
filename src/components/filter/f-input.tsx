import { ChangeEvent, FC, useEffect, useRef } from "react";
import { Form } from "react-bootstrap";

interface FInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;

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
  value,
  onChange,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const field = inputRef.current;
    if (!value.includes('%') || !field) {
      return;
    }

    const cursorPosition = Math.min(
      field.selectionStart || 0,
      value.indexOf('%'),
    );

    field.setSelectionRange(cursorPosition, cursorPosition);
  }, [value]);

  return (
    <Form.Group className={className}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type || 'text'}
        aria-label={`${name}-filter`}
        placeholder={placeholder}
        min={min}
        max={max}
        value={value || ''}
        onChange={onChange}
        ref={inputRef}
      />
    </Form.Group>
  );
};

export default FInput;