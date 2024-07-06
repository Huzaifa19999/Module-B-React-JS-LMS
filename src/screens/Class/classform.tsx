import {  useState,useEffect } from "react";
import LMS_SelectWithFirebaseDatabase from "../../components/LMS_SelectWithFirebaseDatabase";
import { getData } from "../../config/firebaseMethods";

function Classform() {
  const [  , setTeacher] = useState<any[]>([]); 
  const [teacherData, setTeacherData] = useState<any>([]); 


  useEffect(() => {
    getData('Teacher Data')
      .then((response: any) => {
        console.log(Object.values(response));
        setTeacher(Object.values(response));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClassChange = (selectedValue: string) => {
    setTeacherData(selectedValue);
  };



  return (
    <>
      {/* <select className="form-control">
        <option value="" disabled>Select</option>
        {options.map((e: any, i: number) => (
          <option key={i} value={e.value}>{e.name}</option>
        ))}
      </select> */}

       
  <div>
  <LMS_SelectWithFirebaseDatabase
        onChange={handleClassChange}
        className="form-control"
        nodeName="Student Data"
        value={teacherData}
      />
  </div>

        {teacherData}
 


  


    </>
  );
}

export default Classform;
