// import axios from "axios"
import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.css'
import LMS_DataGrid from "../../components/LMS_DataGrid"
import { Button } from "@mui/material"
import { getData } from "../../config/firebaseMethods"

function Studentlist() {

  const [ data, setData ] = useState<any>([])
  const [dataLoader, setDataLoader] = useState<boolean>(false)


  // useEffect(() => {

  // axios.get('https://jsonplaceholder.typicode.com/comments')
  // .then((res) => {
  //   console.log(res.data)
  //   setData(...[res.data])
  // })
  // .catch((err)=>{
  //   console.log(err)
  // })

  // },[])

  useEffect(()=>{
    getData('Jawan')
    .then((res:any) => {
      console.log(Object.values(res))
      setData(...[Object.values(res)])
    }).catch((err:any) => {
      console.log(err)
    })
  },[])
    
  setDataLoader

  return (
    <>
    {/* <table className="table table-striped table-bordered table-dark">
      <thead className="">
        <th>ID</th>
        <th>Post ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Body</th>
      </thead>
      <tbody>
        {data.map((e:any,i:any) => (
          <tr key={i}>
            <td>{e.id}</td>
            <td>{e.postId}</td>
            <td>{e.name}</td>
            <td>{e.email}</td>
            <td>{e.body}</td>
          </tr>
        ))}
      </tbody>
    </table> */}

<LMS_DataGrid   className="table table-bordered table-striped"
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
                        key: '',
                        label: 'Delete',
                        displayField: (row: any) => <Button onClick={() => {
                            console.log(row)
                        }} variant="contained">Delete</Button>
                    },
                ]} datasource={data} />

    </>
  )
}

export default Studentlist