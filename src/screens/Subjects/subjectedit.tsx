import { useState } from "react";
import LMS_Select from "../../components/LMS_Select"
import { sendData } from "../../config/firebaseMethods"
import LMS_Input from "../../components/LMS_Input";
import LMS_IconButton from "../../components/LMS_IconButton";
import { ArrowCircleRight } from "@mui/icons-material";



function Subjectedit() {

  const [grade,setGrade] = useState<any>([])
  const [subject1,setSubject1] = useState<any>([])
  const [subject2,setSubject2] = useState<any>([])
  const [subject3,setSubject3] = useState<any>([])
  const [subject4,setSubject4] = useState<any>([])


  const options = [
    { value: '', label: 'Select your Class',},
    { value: '1', label: 'Class 1' },
    { value: '2', label: 'Class 2' },
    { value: '3', label: 'Class 3' },
    { value: '4', label: 'Class 4' },

  ];

  const addClass = () => {

    let obj = {

      Class:grade,
      subject1:subject1,
      subject2:subject2,
      subject3:subject3,
      subject4:subject4,
    }

    sendData('Class Data',obj)
    .then((res) =>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })

  }

  const handleSelectChange = (value: string | number) => {
    setGrade(value);
  };
  
  


  return (
    <>
    <div className="container border border-2 rounded p-5">

    <h1 className="mb-4">Enter your Class</h1>
    <LMS_Select
            className='form-control'
            options={options}
            value={grade}
            onChange={handleSelectChange}
            />
            <br />
            <h1>Enter Subject Name</h1>
            <LMS_Input
              className="form-control"
              value={subject1}
              placeholder="Enter Subject 1"
              required
              onChange={(e) => setSubject1(e.target.value)} 
              label='Enter Subject 1'
                          />
            <LMS_Input
              className="form-control"
              value={subject2}
              placeholder="Enter Subject 2"
              required
              onChange={(e) => setSubject2(e.target.value)} 
              label='Enter Subject 2'
                          />
            <LMS_Input
              className="form-control"
              value={subject3}
              placeholder="Enter Subject 3"
              required
              onChange={(e) => setSubject3(e.target.value)} 
              label='Enter Subject 3'
              />
            <LMS_Input
              className="form-control"
              value={subject4}
              placeholder="Enter Subject 4"
              required
              onChange={(e) => setSubject4(e.target.value)} 
              label='Enter Subject 4'
                          />
      <LMS_IconButton onClick={addClass} icon={<ArrowCircleRight />} label="Submit" className="p-2 fw-bold mt-3 rounded" color=""/>
            
              </div>
    </>
  )
}

export default Subjectedit