interface Props {
  type: string;
  value: any;
  onChange: (param: any) => void;
  placeHolder: string;
  className: string;
  name: string;
  required: boolean;
  disabled: boolean;
}

export const InputField = (props: Props) => {
  const {
    type,
    value,
    onChange,
    placeHolder,
    className,
    name,
    required,
    disabled,
  } = props;

  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeHolder}
      className={className}
      name={name}
      required={required}
      disabled={disabled}
    />
  );
};
