import  { ChangeEvent } from 'react';

type SelectProps =  {
  options: { value: string | number ; label: string }[];
  value: string | number ;
  onChange: (value: string | number ) => void;
}

function LMS_Select (props:SelectProps) {

    const { options, value, onChange } = props

  const ClickChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <select value={value} onChange={ClickChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default LMS_Select;
