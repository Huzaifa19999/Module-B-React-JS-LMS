import 'bootstrap/dist/css/bootstrap.css'
import { sendData } from '../../config/firebaseMethods'
import {  useState } from 'react'
import LMS_Input from '../../components/LMS_Input'
import LMS_Button from '../../components/LMS_Button'
import { Link } from 'react-router-dom'
import './admission.css'; 
import LMS_Select from '../../components/LMS_Select'


function Admission() {

  const [name, setName] = useState<string>("");
  const [fname, setFname] = useState<string>("");
  const [age, setAge] = useState<string | number>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [grade, setGrade] = useState<number | string>("");
  const [lastQualification, setLastQualification] = useState<string>("");
  const [hobby, setHobby] = useState<string>("");
  const  [  status ] = useState<string>("");

  const options = [
    { value: '', label: 'Select your Class',},
    { value: '1', label: 'Class 1' },
    { value: '2', label: 'Class 2' },
    { value: '3', label: 'Class 3' },
    { value: '4', label: 'Class 4' },

  ];

       
  const handleSelectChange = (value: string | number) => {
    setGrade(value);
  };

  const sumbitData = (e: any) => {
    e.preventDefault();

    if (!name || !fname || !age || !email || !phone || !grade || !lastQualification || !hobby) {
      alert("Please fill out all fields before submitting.");
      return;
    }


    let obj = {
      name: name,
      Father_Name: fname,
      Age: age,
      Email: email,
      Mobile: phone,
      Class: grade,
      Last_Qualification: lastQualification,
      Hobby: hobby,
      Status: status
    };

    sendData('Student Data', obj)
      .then((res) => {
        console.log("Admission Successfully", res);
        alert("Admission Successfully");
        setName("");
        setFname("");
        setAge("");
        setEmail("");
        setPhone("");
        setGrade("");
        setLastQualification("");
        setHobby("");
      }).catch((err) => {
        console.log("Admission Failed", err);
      });
  }

  return (
    <>
    <h1 className='text-center fw-bold'>Admission</h1>
    <div className="admission-form container mt-5">

        <form onSubmit={sumbitData} className="">
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
              value={hobby}
              placeholder="Enter your Hobby"
              required
              onChange={(e) => setHobby(e.target.value)} 
              label='Enter your Hobby'
                          />
                          <br />
          <div className="mb-3 fw-bold">
          <LMS_Select
            className='form-control'
            options={options}
            value={grade}
            onChange={handleSelectChange}
            />
          </div>
          </div>
          <LMS_Button className='btn btn-primary' onClick={sumbitData} label='Click for Admission' type={undefined} />
        </form>
    <br />
<Link to='/home/studentlist'><h5 className='text-center fw-bold' >Check your name in Student List</h5></Link>
    </div>
              </>
  )
}

export default Admission;
