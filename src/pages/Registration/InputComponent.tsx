interface Props {
	type: string;
	className: string;
	value: string;
	placeholder: string;
	name: string;
	required: boolean;
	disabled: boolean;
	onChange: (params: any) => void;
}
const InputComponent = (props: Props) => {
	const { type, className, value, placeholder, name, required, disabled, onChange } =
		props;
	return (
		<input
			type={type}
			className={className}
			value={value}
			placeholder={placeholder}
			name={name}
			required={required}
			disabled={disabled}
            onChange={onChange}
		/>
	);
};

export default InputComponent;
