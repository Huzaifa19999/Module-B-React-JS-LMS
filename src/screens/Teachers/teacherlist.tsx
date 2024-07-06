// import axios from "axios"
import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.css'
import LMS_DataGrid from "../../components/LMS_DataGrid"
import { deleteData, editData, getData } from "../../config/firebaseMethods"
import { Button } from "@mui/material"
import { Delete, Edit } from "@mui/icons-material"

function TeacherList() {

  const [ data, setData ] = useState<any>([])
  const [dataLoader, setDataLoader] = useState<boolean>(true)

  useEffect(()=>{

    setDataLoader(true);

    getData('Teacher Data')
    .then((res:any) => {
      console.log(Object.values(res))
      setData(Object.values(res))
      setDataLoader(false)
    }).catch((err:any) => {
      console.log(err)
      setDataLoader(false)
    })
  },[])


  const deleteTeacher = (id:string) => {

      deleteData('Teacher Data',id)
      .then((res)=>{
        setData(data.filter((teacher:any)=>(teacher.id!==id)))
        console.log("Teacher Data deleted Successfully",res)
      })
      .catch((err)=>{
        console.log(err)
      });
  }


    const editTeacher = (teacher: any) => {
      const newClass = prompt("Enter new class:", teacher.Class);
      const newSubject = prompt("Enter new subject:", teacher.Subject);
      if (newClass && newSubject) {
        const updatedData = { ...teacher, Class: newClass, Subject: newSubject };
        editData('Teacher Data', teacher.id, updatedData)
          .then(() => {
            setData(data.map((item: any) => (item.id === teacher.id ? updatedData : item)));
            console.log("Updated Successfully");
          })
          .catch((err) => {
            console.log(err, "Error updating data");
          });
      }
    };
    


  return (
    <>
   

<LMS_DataGrid  className="table table-bordered table-striped text-center"
                loading={dataLoader}
                gridCols={[
                  {
                      key: 'name',
                      label: 'Name'
                  },
                  {
                      key: 'Email',
                      label: 'Email'
                  },
                  {
                      key: 'Class',
                      label: 'Class'
                  },
                  {
                      key: 'Subject',
                      label: 'Subject'
                  },
                  {
                        key: 'Mobile',
                        label: 'Mobile No'
                    },
                    {
                      key: '',
                      label: 'Delete',
                      displayField: (row: any) => <Button startIcon={<Delete/>} onClick={() => {
                          deleteTeacher(row.id)
                      }} variant="contained" color="error" sx={{fontWeight:'bold'}}>Delete</Button>
                  },
                    {
                      key: '',
                      label: 'Edit',
                      displayField: (row: any) => <Button startIcon={<Edit/>} onClick={() => {
                          editTeacher(row)
                      }} variant="contained" color="success" sx={{fontWeight:'bold'}}>Edit</Button>
                  },
               
                ]} datasource={data} />

    </>
  )
}

export default TeacherList