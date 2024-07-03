import { useState } from "react"
import LMS_Input from "../../components/LMS_Input"

function Registration() {

  const [ schoolName , setSchoolName ] = useState<any>([])

  return (
    <>
    <h1 className="text-center fw-bold">School Registration</h1>
    <div >
      <form className="form-control">
      <LMS_Input
        label="Enter School Name"
        placeholder="Enter School Name"
        onChange={(e) => setSchoolName(e.target.value)}
        value={schoolName}
        className="form-control fw-bold"
      />
        </form>
    </div>
  </>
  )
}

export default Registration