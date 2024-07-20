import { useEffect, useState } from 'react';
import { getData, sendData } from '../../config/firebaseMethods';
import { Button } from '@mui/material';
import { Payment } from '@mui/icons-material';

const FeeVoucher = () => {
  const [studentName, setStudentName] = useState<any>([]);
  const [selectedStudentName, setSelectedStudentName] = useState<string>('');
  const [course, setCourse] = useState<any>([]);
  const [grade, setGrade] = useState<any>();
  const [selectedCourse, setSelectedCourse] = useState<string>('');
  const [feeAmount, setFeeAmount] = useState<string>('');
  const [payment, setPayment] = useState<string>('');
  const [dueDate, setDueDate] = useState<string>('');

  useEffect(() => {
    getData('Class Data')
      .then((res: any) => {
          console.log(res);
          setStudentName(...[Object.values(res)]);
          console.log(studentName)
      })
      .catch((err: any) => {
        console.log(err);
      });
    getData('Course Data')
      .then((res: any) => {
          console.log(res);
          setCourse(...[Object.values(res)]);
          console.log(studentName)
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);

  const handleGenerateVoucher = () => {

    let obj = {

      StudentName: selectedStudentName,
      Course: selectedCourse,
      FeeAmount: feeAmount,
      PaymentMethod:payment,
      DueDate: dueDate,
      Class:grade
    };
  
  

    sendData('Fee Data', obj)
      .then((res: any) => {
        console.log(res, "Voucher generated Successfully");
        alert('Voucher Created Successfully')
      })
      .catch((err: any) => {
        console.log(err, "Voucher failed");
      });
  };

  return (
    <>
      <div>
        <h2 className='fw-bold text-center'>Fee Voucher Generator</h2>
        <form>
          <div>
            <label className='fw-bold'>Student Name:</label>
            <select className='form-control' onChange={(e) => setSelectedStudentName(e.target.value)}>
              <option value="">Select Student Name</option>
              {studentName.map((e: any, index: number) => (
                <option key={index} value={e.value}>
                  {e.student}
                </option>
              ))}
            </select>
          </div>
          <br />
          <div>
            <label className='fw-bold'>Course</label>
            <select className='form-control' onChange={(e) => setSelectedCourse(e.target.value)}>
              <option value="">Select Course</option>
              {course.map((courseItem: any, index: number) => (
                <option key={index} value={courseItem.value}>
                  {courseItem.course1}
                </option>
              ))}
            </select>
          </div>
          <div>
            <br />
            <label className='fw-bold'>Class:</label>
            <input
              className='form-control'
              type="number"
              placeholder='Enter Class'
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
            />
          </div>
          <div>
            <br />
            <label className='fw-bold'>Fee Amount:</label>
            <input
              className='form-control'
              placeholder='Enter Amount'
              type="number"
              value={feeAmount}
              onChange={(e) => setFeeAmount(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label className='fw-bold'>Payment Method:</label>
          <select onChange={(e) => setPayment(e.target.value)} className="form-control">
                  <option>Select payment method</option>
                  <option>Cash</option>
                  <option>Credit Card</option>
                  <option>Bank Transfer</option>
                </select>
          </div>
          <br />
          <div>
            <label className='fw-bold'>Due Date:</label>
            <input
              className='form-control'
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
          <br />
          <Button startIcon={<Payment/>} size='large' className='fw-bold'  variant='contained' onClick={handleGenerateVoucher}>
            Generate Voucher
          </Button>
        </form>
      </div>
    </>
  );
};

export default FeeVoucher;
