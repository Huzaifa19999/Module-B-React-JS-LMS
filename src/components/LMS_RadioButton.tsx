import  { ChangeEvent } from 'react';

type Option = {
  value: string | number;
  label: string;
}

type RadioButtonProps = {
  options: Option[];
  selectedValue: string | number;
  onChange: (value: string | number) => void;
}

function LMS_RadioButton (props:RadioButtonProps)  {

  const  { options, selectedValue, onChange } = props

  const clickChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      {options.map((option) => (
        <label key={option.value}>
          <input
            type="radio"
            value={option.value}
            checked={option.value === selectedValue}
            onChange={clickChange}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default LMS_RadioButton;
