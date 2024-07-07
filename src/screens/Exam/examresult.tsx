import { useEffect, useState } from "react"
import { getData } from "../../config/firebaseMethods"

function Examresult() {

  const [  setStudents] = useState<any>([])
  // const [ subject1, setSubject1 ] = useState<any>([])
  // const [ subject2, setSubject2 ] = useState<any>([])
  // const [ subject3, setSubject3 ] = useState<any>([])
  // const [ subject4, setSubject4 ] = useState<any>([])

  useEffect(()=>{
    getData('Student Data')
    .then((res)=>{
      console.log(res)
      setStudents(...[res])
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <>
        {/* <h3 className="fw-bold">Enter Student Name</h3>
        <select className="form-control">
          <option value="">Select Student</option>
          {students.map((e:any,i:any)=>(
            <option key={i}>{e.name}</option>
          ))}
        </select> */}

    
    {/* <LMS_Input placeholder="Enter 1st Subject" label={""} onChange={function (e: any): void {
        throw new Error("Function not implemented.")
      } } value={student} className="form control" /> */}
    </>
  )
}

export default Examresult