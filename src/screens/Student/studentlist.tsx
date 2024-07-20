// import axios from "axios"
import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.css'
import LMS_DataGrid from "../../components/LMS_DataGrid"
import { Button } from "@mui/material"
import { deleteData, getData } from "../../config/firebaseMethods"
import { Delete } from "@mui/icons-material"

function Studentlist() {

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



  return (
    <>
   

<LMS_DataGrid  className="table bg-primary text-white aligns-items-center table-bordered table-striped text-center"
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
                 
                  
                ]} datasource={data} />

    </>
  )
}

export default Studentlist