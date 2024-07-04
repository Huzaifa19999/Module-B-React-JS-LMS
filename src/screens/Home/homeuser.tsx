import { Container, Grid } from "@mui/material"
import Students from "../../assets/img1.png";
import Classes from "../../assets/img2.png";
import Teachers from "../../assets/img3.png";
import Fees from "../../assets/img4.png";
import { getData } from "../../config/firebaseMethods";
import { useEffect, useState } from "react";
import '../../App.css'

function User() {

  const [ students , setStudents ] =useState<any>([])  
  const [ teachers , setTeachers ] =useState<any>([])  

  useEffect(()=>{

    getData('Student Data')
    .then((res:any)=>{
      console.log(Object.values(res))
      setStudents(...[Object.values(res)])
    })
    .catch((err)=>{
      console.log(err)
    })

    getData('Teacher Data')
    .then((res:any)=>{
      console.log(Object.values(res))
      setTeachers(...[Object.values(res)])
    })
    .catch((err)=>{
      console.log(err)
    })
    
  },[])


  return (
  
    <>
    <Container maxWidth="xl" sx={{mt:4,mb:4}}>
      <Grid className=" border border-rounded rounded border-5 p-4" container rowGap={3}  spacing={3}>
        <Grid className="text-center border rounded border-3 p-5" item xs={12} md={3} lg={3}>
          <img src={Students} alt="" />
          <br />
          <h5 className="mt-3 fw-bold">Total Students</h5>
          <h5 className="fw-bold">{students.length}</h5>
        </Grid>
        <Grid className="text-center border rounded border-3 p-5" item xs={12} md={3} lg={3}>
          <img src={Classes} alt="" />
          <br />
          <h5 className="mt-3 fw-bold">Total Classes</h5>
          <h5 className="fw-bold">j</h5>
        </Grid>
        <Grid className="text-center border rounded border-3 p-5" item xs={12} md={3} lg={3}>
          <img src={Teachers} alt="" />
          <br />
          <h5 className="mt-3 fw-bold">Total Teachers</h5>
          <h5 className="fw-bold">{teachers.length}</h5>
        </Grid>
        <Grid className="text-center border rounded border-3 p-5" item xs={12} md={3} lg={3}>
          <img src={Fees} alt="" />
          <br />
          <h5 className="mt-3 fw-bold">Fees Collection</h5>
          <h5 className="fw-bold">Rs {students.length}</h5>
        </Grid>
        </Grid>
        <br />
        <br />
        <Grid container maxWidth="xl" className="p-5 border rounded border-5 fw-bold" spacing={3}>
          No Notices to Show Right Now
        </Grid>
    </Container>
    </>
  )
}

export default User