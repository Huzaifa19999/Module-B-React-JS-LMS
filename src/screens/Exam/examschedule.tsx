import { useEffect, useState } from "react"
import { getData, sendData } from "../../config/firebaseMethods"
import LMS_Input from "../../components/LMS_Input"
import { Button } from "@mui/material"
import { Quiz } from "@mui/icons-material"

function Examschedule() {
  const [ students, setStudents ] = useState<any>([])
  const [ selectedStudents, setSelectedStudents ] = useState<any>("")
  const [ teachers, setTeachers ] = useState<any>([])
  const [ selectedTeachers, setSelectedTeachers ] = useState<any>("")
  const [ grade, setGrade ] = useState<any>("")
  const [ subject1, setSubject1 ] = useState<any>("")
  const [ subject2, setSubject2 ] = useState<any>("")
  const [ subject3, setSubject3 ] = useState<any>("")
  const [ subject4, setSubject4 ] = useState<any>("")
  const [ mark1, setMarks1 ] = useState<any>("")
  const [ mark2, setMarks2 ] = useState<any>("")
  const [ mark3, setMarks3 ] = useState<any>("")
  const [ mark4, setMarks4 ] = useState<any>("")

  useEffect(()=>{
    getData('Class Data')
    .then((res:any)=>{
      console.log(...[Object.values(res)])
      setStudents(...[Object.values(res)])
    }).catch((err)=>{
      console.log(err)
    })
    getData('Teacher Data')
    .then((res:any)=>{
      console.log(...[Object.values(res)])
      setTeachers(...[Object.values(res)])
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  const addExam = () => {

    let obj = {

      student:selectedStudents,
      teacher:selectedTeachers,
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

    sendData('Exam Data',obj)
    .then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })

  }

  return (
    <>    <div className="border border-3 p-5  rounded-4">
        <h3 className="fw-bold">Select Student Name</h3>
        <br />
        <select onChange={(e)=>setSelectedStudents(e.target.value)} className="form-control border-3">
          <option value="">Select Student</option>
          {students.map((e:any,i:any)=>(
            <option key={i} value={e.student}>{e.student}</option>
          ))}
        </select>
          </div>
        <br />
        <br />
           <div className="border border-3 p-5 rounded-4">
        <h3 className="fw-bold">Select Teacher Name</h3>
        <br />
        <select onChange={(e)=>setSelectedTeachers(e.target.value)} className="form-control border-3">
          <option value="">Select Teacher</option>
          {teachers.map((e:any,i:any)=>(
            <option key={i} value={e.name}>{e.name}</option>
          ))}
        </select>
        </div>
        <br />
        <br />

        <div className="border border-3 p-5 rounded-4">
        <h3 className="fw-bold">Select Class</h3>
        <br />
        <select onChange={(e)=>setGrade(e.target.value)} className="form-control border-3">
          <option value="">Select Class</option>
          {students.map((e:any,i:any)=>(
            <option key={i} value={e.Class}>{e.Class}</option>
          ))}
        </select>
          </div>
        <br />
        <br />
        <br />
        <div className="border border-3 p-5 rounded-4">

        <h3 className="fw-bold">Select 1<sup>st</sup> Subject </h3>
        <select onChange={(e)=>{setSubject1(e.target.value)}} className="form-control border-3">
          <option value="">Select 1<sup>st</sup> Subject</option>
          {students.map((e:any,i:any)=>(
            <option key={i} value={e.subject1}>{e.subject1}</option>
          ))}
        </select>
        <br />
          <h3 className="fw-bold">Enter 1<sup>st</sup> Subject Marks </h3>
              <LMS_Input onChange={(e)=>setMarks1(e.target.value)}  label="Enter 1st Subject Marks" placeholder="Enter 1st Subject Marks" className="form-control border-3" value={mark1}/>
          </div>
          <br />
          <br />
          <br />

          <div className="border border-3 p-5 rounded-4">
        <h3 className="fw-bold">Select 2<sup>nd</sup> Subject </h3>
        <select onChange={(e)=>{setSubject2(e.target.value)}}  className="form-control border-3">
        <option value="">Select 2<sup>nd</sup> Subject</option>
        {students.map((e:any,i:any)=>(
          <option key={i} value={e.subject2}>{e.subject2}</option>
        ))}
        </select>
          <br />
        <h3 className="fw-bold">Select 2<sup>nd</sup> Subject Marks </h3>
            <LMS_Input onChange={(e)=>setMarks2(e.target.value)} label="Enter 2nd Subject Marks" placeholder="Enter 2nd Subject Marks" className="form-control border-3" value={mark2} />
        </div>
      
        <br />
        <br />
        <br />
          <div className="border border-3 p-5 rounded-4">

        <h3 className="fw-bold">Select 3<sup>rd</sup> Subject </h3>
        <select onChange={(e)=>{setSubject3(e.target.value)}} className="form-control border-3">
        <option value="">Select 3<sup>rd</sup> Subject</option>
        {students.map((e:any,i:any)=>(
          <option key={i} value={e.subject3}>{e.subject3}</option>
        ))}
        </select>
        <br />
        <h3 className="fw-bold">Select 3<sup>rd</sup> Subject Marks </h3>
            <LMS_Input onChange={(e)=>setMarks3(e.target.value)} label="Enter 3rd Subject Marks" placeholder="Enter 3rd Subject Marks" className="form-control border-3" value={mark3}/>
        </div>

        <br />
        <br />
        <br />
        <div className="border border-3 p-5 rounded-4">

        <h3 className="fw-bold">Select 4<sup>th</sup> Subject </h3>
        <select onChange={(e)=>{setSubject4(e.target.value)}} className="form-control border-3">
        <option value="">Select 4<sup>th</sup> Subject</option>
        {students.map((e:any,i:any)=>(
          <option key={i} value={e.subject4}>{e.subject4}</option>
        ))}
        </select>
        <br />
        <h3 className="fw-bold">Select 4<sup>th</sup> Subject Marks </h3>
            <LMS_Input label="Enter 4th Subject Marks" placeholder="Enter 4th Subject Marks" className="form-control border-3" value={mark4} onChange={(e)=>setMarks4(e.target.value)}/>
        <br />
        </div>
        <br />
        <Button size="large" startIcon={<Quiz/>} className="ms-3 fw-bold" variant="contained" onClick={addExam}>CheckOut Result</Button>

    

    </>
  )
}

export default Examschedule