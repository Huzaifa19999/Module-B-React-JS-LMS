
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
import { useNavigate } from 'react-router-dom'
import '../Admission/admission.css'; // Import your custom CSS file
import LMS_Dashboard from '../../components/LMS_Dashboard'
import LMS_DatePicker from '../../components/LMS_DatePicker'

function Teacherallocation() {
  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [fname, setFname] = useState<string>("");
  const [age, setAge] = useState<string | number>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [grade, setGrade] = useState<number | string>("");
  const [lastQualification, setLastQualification] = useState<string>("");
  const [hobby, setHobby] = useState<string>("");

  const sumbitData = (e: any) => {
    e.preventDefault();

    let obj = {
      name: name,
      Father_Name: fname,
      Age: age,
      Email: email,
      Mobile: phone,
      Class: grade,
      Last_Qualification: lastQualification,
      Hobby: hobby,

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
      <LMS_Dashboard/>
    <div className="admission-form container w-50 mt-5">
      {/* <center> */}
        <button onClick={() => navigate('/home')} className='btn btn-primary mb-4'>Dashboard</button>

        <form onSubmit={sumbitData} className="w-75 mx-auto">
          <div className="mb-3 fw-bold">
            <LMS_Input
              className="form-control"
              value={name}
              placeholder="Enter your Name"
              required
              onChange={(e) => setName(e.target.value)}
              label='Enter your name'
            />
          </div>
          <div className="mb-3 fw-bold">
            <LMS_Input
              className="form-control"
              value={fname}
              placeholder="Enter your Father Name"
              required
              onChange={(e) => setFname(e.target.value)}
              label='Enter your Father Name'
            />
          </div>
          <div className="mb-3 fw-bold">
            <LMS_Input
              className="form-control"
              value={age}
              placeholder="Enter your Age"
              required
              onChange={(e) => setAge(e.target.value)}
              label='Enter your Age'
            />
          </div>
          <div className="mb-3 fw-bold">
            <LMS_Input
              className="form-control"
              value={email}
              placeholder="Enter your Email"
              required
              onChange={(e) => setEmail(e.target.value)}
              label='Enter your Email'
            />
          </div>
          <div className="mb-3 fw-bold">
            <LMS_Input
              className="form-control"
              value={phone}
              placeholder="Enter your Mobile Number"
              required
              onChange={(e) => setPhone(e.target.value)}
              label='Enter your Mobile Number'
            />
          </div>
          <div className="mb-3 fw-bold">
            <LMS_Input
              className="form-control"
              value={lastQualification}
              placeholder="Enter your Last Qualification"
              required
              onChange={(e) => setLastQualification(e.target.value)}
              label='Enter your Last Qualification'
              />
          </div>
          <div className="mb-3 fw-bold">
            <LMS_Input
              className="form-control"
              value={grade}
              placeholder="Enter your Class"
              required
              onChange={(e) => setGrade(e.target.value)}
              label='Enter your Class'
            />
          </div>
          <div className="mb-3 fw-bold">
            <LMS_Input
              className="form-control"
              value={hobby}
              placeholder="Enter your Hobby"
              required
              onChange={(e) => setHobby(e.target.value)} 
              label='Enter your Hobby'            />
          </div>
          <LMS_DatePicker/>
          <LMS_Button className='btn btn-primary' onClick={sumbitData} label='Click for Admission' type={undefined} />
        </form>
      {/* </center> */}
    </div>
              </>
  )
}

export default Teacherallocation;
