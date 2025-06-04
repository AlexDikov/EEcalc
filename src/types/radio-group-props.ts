export type RadioGroupProps = {
  name: string;
  options: { value: string; label: string }[];
  onChange?: (value: string) => void;
};
