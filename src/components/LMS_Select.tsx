import  { ChangeEvent } from 'react';

type SelectProps =  {
  options: any;
  value: any ;
  onChange: (value: string | number ) => void;
  className:string
}

function LMS_Select (props:SelectProps) {

    

    const {  options, value, onChange, className } = props

  const ClickChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <select  className={className} value={value} onChange={ClickChange}>
      {options.map((option:any) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default LMS_Select;
