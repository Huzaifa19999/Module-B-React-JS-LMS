import { ChangeEvent, useEffect, useState } from 'react';
import { getData } from '../config/firebaseMethods';

type SelectProps = {
  onChange: (value: string) => void;
  className: string;
  nodeName: string;
  value: string;
};

function LMS_SelectWithFirebaseDatabase(props: SelectProps) {
  const { value, onChange, className, nodeName } = props;
  const [options, setOptions] = useState<any>([]);

  useEffect(() => {
    getData(nodeName)
      .then((res: any) => {
        const dataValues = Object.values(res); 
        setOptions(dataValues);
        console.log(dataValues);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      });
  }, [nodeName]);

  const handleClickChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <select className={className} value={value} onChange={handleClickChange}>
      <option disabled>Select below</option>
      {options.map((option: any,index:any) => (
        <option key={index.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}

export default LMS_SelectWithFirebaseDatabase;
