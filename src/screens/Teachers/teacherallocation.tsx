
// function Teacherallocation() {
//   return (
//     <div>Teacherallocation</div>
//   )
// }

// export default Teacherallocation

import 'bootstrap/dist/css/bootstrap.css'
import { sendData } from '../../config/firebaseMethods'
import { useState } from 'react'
import LMS_Input from '../../components/LMS_Input'
import LMS_Button from '../../components/LMS_Button'
import '../Admission/admission.css';
import LMS_Select from '../../components/LMS_Select'

function Teacherallocation() {

  const [teacherName, setTeacherName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [grade, setGrade] = useState<number | string>("");

  const options = [

    { value: '1', label: 'Class 1' },
    { value: '2', label: 'Class 2' },
    { value: '3', label: 'Class 3' },
    { value: '4', label: 'Class 4' },

  ];

  const handleSelectChange = ( value: string | number ) => {  

    setGrade(value)

  }

  const sumbitData = (e: any) => {
    e.preventDefault();

    let obj = {
      name: teacherName,
      Email: email,
      Mobile: phone,
      Class: grade,
      Subject:subject
  
    };

    sendData('Teacher Data', obj)
      .then((res) => {
        console.log("Admission Successfully", res);
        alert("Admission Successfully");
      }).catch((err) => {
        console.log("Admission Failed", err);
      });
  }

  return (
    <>
    <h1 className='text-center fw-bold'>Teacher Information</h1>
    <div className="admission-form container mt-5">
      {/* <center> */}

        <form onSubmit={sumbitData} className='container'>
          <div className="mb-3 fw-bold">
            <LMS_Input
              className="form-control"
              value={teacherName}
              placeholder="Enter Teacher Name"
              required
              onChange={(e) => setTeacherName(e.target.value)}
              label='Enter Teacher name'
            />
          </div>

          
          <div className="mb-3 fw-bold">
            <LMS_Input
              className="form-control"
              value={email}
              placeholder="Enter Email"
              required
              onChange={(e) => setEmail(e.target.value)}
              label='Enter Email'
            />
          </div>
          <div className="mb-3 fw-bold">
            <LMS_Input
              className="form-control"
              value={phone}
              placeholder="Enter  Mobile Number"
              required
              onChange={(e) => setPhone(e.target.value)}
              label='Enter Mobile Number'
            />
          </div>
           <div className="mb-3 fw-bold">
            <label>Enter Your Class</label>
            <br />
          <LMS_Select
            options={options}
            value={grade}
            onChange={handleSelectChange}
            className='admission-select form-control'
            />
          </div>
          <div className="mb-3 fw-bold">
            <LMS_Input
              className="form-control"
              value={subject}
              placeholder="Enter Subject"
              required
              onChange={(e) => setSubject(e.target.value)}
              label='Enter Subject'
            />
          </div>  
          <LMS_Button className='btn btn-primary' onClick={sumbitData} label='Click for Admission' type={undefined} />
        </form>
      {/* </center> */}
    </div>
              </>
  )
}

export default Teacherallocation;
