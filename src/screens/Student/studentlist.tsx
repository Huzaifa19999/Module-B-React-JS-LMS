import axios from "axios"
import { useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.css'
import LMS_DataGrid from "../../components/LMS_DataGrid"
import { Button } from "@mui/material"

function Studentlist() {

  const [ data, setData ] = useState<any>([])
  const [dataLoader, setDataLoader] = useState<boolean>(false)


  useEffect(() => {

  axios.get('https://jsonplaceholder.typicode.com/comments')
  .then((res) => {
    console.log(res.data)
    setData(...[res.data])
  })
  .catch((err)=>{
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

<LMS_DataGrid
                loading={dataLoader}
                gridCols={[
                    {
                        key: 'name',
                        label: 'User Name'
                    },
                    {
                        key: 'email',
                        label: 'User Email'
                    },
                    {
                        key: 'id',
                        label: 'ID'
                    },
                    {
                        key: 'postId',
                        label: 'Post ID'
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