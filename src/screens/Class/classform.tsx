import {  useState } from "react";
import LMS_SelectWithFirebaseDatabase from "../../components/LMS_SelectWithFirebaseDatabase";
import { TextField } from "@mui/material";

function Classform() {
  // const [options, setOptions] = useState<any[]>([]); 
  const [data, setData] = useState<any>([]); 


  // useEffect(() => {
  //   getData('Student Data')
  //     .then((response: any) => {
  //       console.log(Object.values(response));
  //       setOptions(Object.values(response));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const handleClassChange = (selectedValue: string) => {
    setData(selectedValue);
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
        value={data}
      />
  </div>

  <div>
  <TextField
        color="error"
        variant="outlined"
        fullWidth={true}
        label='Enter Name'
        multiline={true}
      />
 
  </div>


  


    </>
  );
}

export default Classform;
