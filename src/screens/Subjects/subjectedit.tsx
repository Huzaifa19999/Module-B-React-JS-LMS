import { useEffect, useState } from "react";
import { getData, sendData } from "../../config/firebaseMethods";
import LMS_Input from "../../components/LMS_Input";
import LMS_IconButton from "../../components/LMS_IconButton";
import { ArrowCircleRight } from "@mui/icons-material";

function Subjectedit() {
  const [students, setStudents] = useState<any>([]);
  const [selectedStudents, setSelectedStudents] = useState<any>([]);
  const [grade, setGrade] = useState<string>("");
  const [subject1, setSubject1] = useState<string>("");
  const [subject2, setSubject2] = useState<string>("");
  const [subject3, setSubject3] = useState<string>("");
  const [subject4, setSubject4] = useState<string>("");
  const [ mark1 ] = useState<string>("")
  const [ mark2 ] = useState<string>("")
  const [ mark3 ] = useState<string>("")
  const [ mark4 ] = useState<string>("")


  useEffect(()=>{
    getData('Student Data')
    .then((res:any)=>{
      console.log(Object.values(res))
      setStudents(...[Object.values(res)])
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  console.log(students)


  const addClass = () => {
    if (!selectedStudents || !grade || !subject1 || !subject2 || !subject3 || !subject4) {
      alert("Please fill out all fields.");
      return;
    }

    let obj = {
      student:selectedStudents,
      Class: grade,
      subject1: subject1,
      subject2: subject2,
      subject3: subject3,
      subject4: subject4,
      mark1:mark1,
      mark2:mark2,
      mark3:mark3,
      mark4:mark4,
    };

    sendData('Class Data', obj)
      .then((res) => {
        console.log(res);
        setSelectedStudents("");
        setGrade("");
        setSubject1("");
        setSubject2("");
        setSubject3("");
        setSubject4("");
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to submit data. Please try again.");
      });
  };

  const handleSelectChange = (value: string | number) => {
    setGrade(value.toString());

  };
  const handleStudentChange = (value:any) => {
    setSelectedStudents(value);
    console.log(selectedStudents)
  };

  return (
    <>
      <div className="container border border-2 rounded p-5">
        <h3 className="mb-4 fw-bold">Select Student Name </h3>
        <select className="form-control" onChange={(e)=>handleStudentChange(e.target.value)}>
          <option value="">Select Student Name</option>
          {students.map((e:any,i:any)=>(
            <option key={i} value={e.name}>{e.name}</option>
          ))}
        </select>
        <br />
        <h3 className="mb-4 fw-bold">Select your Class</h3>
        <select className="form-control" onChange={(e)=>handleSelectChange(e.target.value)}>
          <option value="">Select Class</option>
          {students.map((e:any,i:any)=>(
            <option key={i} value={e.Class}>{e.Class}</option>
          ))}
        </select>
          
        
        <br />
        <h3 className="fw-bold">Enter Subject Name</h3>
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
        <LMS_IconButton
          onClick={addClass}
          icon={<ArrowCircleRight />}
          label="Submit"
          className="p-2 fw-bold mt-3 rounded"
          color=""
        />
      </div>
    </>
  );
}

export default Subjectedit;