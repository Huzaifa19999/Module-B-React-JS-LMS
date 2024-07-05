// import axios from "axios"
import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.css'
import LMS_DataGrid from "../../components/LMS_DataGrid"
import { Button } from "@mui/material"
import { deleteData, editData, getData } from "../../config/firebaseMethods"
import { Delete, Edit } from "@mui/icons-material"

function Studentedit() {

  const [ data, setData ] = useState<any>([])
  const [dataLoader, setDataLoader] = useState<boolean>(true)

  useEffect(()=>{

    setDataLoader(true);

    getData('Student Data',)
    .then((res:any) => {
      console.log(Object.values(res))
      setData(Object.values(res))
      setDataLoader(false)
    }).catch((err:any) => {
      console.log(err)
      setDataLoader(false)
    })
  },[])

  const deleteStudent = (id:string) => {
        deleteData('Student Data',id)
        .then(()=>{
          setData(data.filter((student: any) => student.id !== id));
          console.log("Deleted Successfully")
        }).catch((err)=>{
          console.log(err,"Error Data not found")
        })
  }

  const editStudent = (student: any) => {
    const newClass = prompt("Enter new class:", student.Class);
    if (newClass) {
      const updatedData = { ...student, Class: newClass };
      editData('Student Data', student.id, updatedData)
        .then(() => {
          setData(data.map((item: any) => (item.id === student.id ? updatedData : item)));
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
                      key: 'Father_Name',
                      label: 'Father Name'
                  },
                  {
                      key: 'Email',
                      label: 'Email'
                  },
                  {
                        key: 'Age',
                        label: 'Age'
                      },
                    {
                        key: 'Class',
                        label: 'Class'
                    },
                    {
                        key: 'Hobby',
                        label: 'Hobby'
                    },
                    {
                        key: 'Mobile',
                        label: 'Mobile No'
                    },
                    {
                        key: 'Last_Qualification',
                        label: 'Last Qualification'
                    },
                   
                    {
                        key: '',
                        label: 'Delete',
                        displayField: (row: any) => <Button startIcon={<Delete/>} onClick={() => {
                            deleteStudent(row.id)
                        }} variant="contained" color="error" sx={{fontWeight:'bold'}}>Delete</Button>
                    },
                    {
                        key: '',
                        label: 'Edit',
                        displayField: (row: any) => <Button startIcon={<Edit/>} onClick={() => {editStudent(row)
                        }} variant="contained" color="success" sx={{fontWeight:'bold'}}>Edit</Button>
                    },
                 
                  
                ]} datasource={data} />

    </>
  )
}

export default Studentedit