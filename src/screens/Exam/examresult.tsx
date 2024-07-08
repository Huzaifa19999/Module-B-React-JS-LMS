import { useEffect, useState } from "react"
import { getData } from "../../config/firebaseMethods"

function Examresult() {

  const [ exam , setExam ] = useState<any>([])




  useEffect(()=>{
    getData('Exam Data')
    .then((res:any)=>{
      console.log(...[Object.values(res)])
      setExam(...[Object.values(res)])
    }).catch((err:any)=>{
      console.log(err)
    })
  },[])

  
  return (
    <>
            <table className=" table text-center table-bordered">
              <thead className="">
                <tr>
              <th>Name</th>
              <th>Teacher Name</th>
              <th>Class</th>
              <th>Subject No 1</th>
              <th>Subject No 2</th>
              <th>Subject No 3</th>
              <th>Subject No 4</th>
              <th>Marks in 1st Subject</th>
              <th>Marks in 2nd Subject</th>
              <th>Marks in 3rd Subject</th>
              <th>Marks in 4th Subject</th>
              <th>Total Marks</th>
              <th>Marks Obtained</th>
              <th>Percentage</th>
                </tr>
              </thead>
              <tbody>
             {exam.map((e:any,i:any)=>(
              <tr key={i}>
                <td>{e.student}</td>
                <td>{e.teacher}</td>
                <td>{e.Class}</td>
                <td>{e.subject1}</td>
                <td>{e.subject2}</td>
                <td>{e.subject3}</td>
                <td>{e.subject4}</td>
                <td>{e.mark1}</td>
                <td>{e.mark2}</td>
                <td>{e.mark3}</td>
                <td>{e.mark4}</td>
                <td>400</td>
                <td>{e.mark1+e.mark2+e.mark3+e.mark4}</td>
                <td>{((e.mark1+e.mark2+e.mark3+e.mark4)/400)*100}%</td>
            </tr>
            ))}
            </tbody>
             </table>
    </>
  )

}
export default Examresult