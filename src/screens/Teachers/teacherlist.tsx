// import axios from "axios"
import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.css'
import LMS_DataGrid from "../../components/LMS_DataGrid"
import { getData } from "../../config/firebaseMethods"

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
                    }
                ]} datasource={data} />

    </>
  )
}

export default TeacherList