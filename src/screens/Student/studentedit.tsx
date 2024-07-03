import axios from 'axios'
import { useState } from 'react'
import '../../App.css'
import { useEffect } from 'react'

function Studentedit() {

  const [ products, setProducts ] = useState<any>([])


  useEffect(()=>{

    axios.get('//dummyjson.com/users')
    .then((res)=>{
      console.log(res.data.users)
      setProducts(...[res.data.users])
    }).catch((err) => {
      console.log(err)
    })
    },[])
    
  return (

    <>
    <div >
      <table className='table table-striped  table-bordered'>
        <thead className='text-center'>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Blood Group</th>
          <th>Gender</th>
          <th>Height</th>
          <th>Image</th>
          <th>University</th>
          <th>Image</th>
          <th>Weight</th>
        </thead>
        <tbody>
    {products.map((e:any,i:any)=>(
      <tr key={i}>
        <td>{e.firstName}</td>
        <td>{e.lastName}</td>
        <td>{e.email}</td>
        <td>{e.age}</td>
        <td>{e.bloodGroup}</td>
        <td>{e.gender}</td>
        <td>{e.height}cm</td>
        <td>{e.images}</td>
        <td>{e.university}</td>
        <td>
        <img src={e.image} alt="" />
        </td>
        <td>{e.weight}kg</td>
      </tr>
    ))}
    </tbody>
    </table>
    </div>
    </>

  )

}

export default Studentedit