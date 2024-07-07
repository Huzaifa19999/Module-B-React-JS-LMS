import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type DateProps = {
  selectedDate: Date | null; 
  onChange: (date: Date | null) => void; 
  date:string
  time:string
};

function LMS_DatePicker(props: DateProps) {



  const { selectedDate, onChange } = props;

  return (
    <DatePicker
      className='fw-bold form-control p-2'
      placeholderText='Click to Enter Date'
      selected={selectedDate}
      onChange={(date: Date | null) => onChange(date)} 
      dateFormat={"yyyy/MM/dd"}
      showTimeInput={false}
    />
  );
}

export default LMS_DatePicker;
