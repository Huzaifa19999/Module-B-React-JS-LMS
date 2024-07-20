  import { Button, Container, Grid } from "@mui/material";
  import Students from "../../assets/img1.png";
  import Classes from "../../assets/img2.png";
  import Teachers from "../../assets/img3.png";
  import Fees from "../../assets/img4.png";
  import { deleteData, getData } from "../../config/firebaseMethods";
  import { useEffect, useState } from "react";
  import { Delete } from "@mui/icons-material";
  import "../../App.css";

  function User() {
    const [students, setStudents] = useState<any>([]);
    const [teachers, setTeachers] = useState<any>([]);
    const [period, setPeriod] = useState<any>([]);
    const [feeData, setFeeData] = useState<any>([]);



    useEffect(() => {
      const fetchData = async () => {
        try {
          const studentData = await getData("Student Data");
          setStudents(studentData ? Object.values(studentData) : []);
    
          const teacherData = await getData("Teacher Data");
          setTeachers(teacherData ? Object.values(teacherData) : []);
    
          const feeData = await getData("Fee Data");
          setFeeData(feeData ? Object.values(feeData) : []); 
    
          const scheduleData = await getData("Schedule data");
          setPeriod(scheduleData ? Object.values(scheduleData) : []);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
    
      fetchData();
    }, []);
    

    const deletedData = (id:any) => {

      deleteData(`Schedule data`,id)
      .then(()=>{
        setPeriod(period.filter((period: any) => period.id !== id));
        console.log("Deleted Successfully")
      }).catch((err)=>{
        console.log(err,"Error Data not found")
      })
    }



    return (
      <>
        <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
          <Grid
            className="rounded-4 ttt border-5 p-4"
            container
            rowGap={3}
            spacing={3}
          >
            <Grid
              className="text-center border rounded-4 border-3 p-5"
              item
              xs={12}
              sm={6}
              md={3}
              lg={3}
            >
              <img src={Students} alt="" />
              <br />
              <h5 className="mt-3 fw-bold">Total Students</h5>
              <h5 className="fw-bold">{students.length}</h5>
            </Grid>
            <Grid
              className="text-center border rounded-4 border-3 p-5"
              item
              xs={12}
              sm={6}
              md={3}
              lg={3}
            >
              <img src={Classes} alt="" />
              <br />
              <h5 className="mt-3 fw-bold">Total Classes</h5>
              <h5 className="fw-bold">{period.length}</h5>
            </Grid>
            <Grid
              className="text-center  border rounded-4 border-3 p-5"
              item
              xs={12}
              sm={6}
              md={3}
              lg={3}
            >
              <img src={Teachers} alt="" />
              <br />
              <h5 className="mt-3 fw-bold">Total Teachers</h5>
              <h5 className="fw-bold">{teachers.length}</h5>
            </Grid>
            <Grid
              className="text-center border rounded-4 border-3 p-5"
              item
              xs={12}
              sm={6}
              md={3}
              lg={3}
            >
              <img src={Fees} alt="" />
              <br />
              <h5 className="mt-3 fw-bold">Fees Collection</h5>
              <h5 className="fw-bold">Rs {feeData.reduce((total: number, student: any) => total + parseFloat(student.FeeAmount), 0)}</h5>
              </Grid>
          </Grid>
          <br />
          <br />
          <Grid
            container
            maxWidth="xl"
            className="p-5 border rounded-4 border-5 fw-bold"
            spacing={3}
          >
            {period.length === 0 ? (
              <h5 className="fw-bold">No Notices to Show Right Now</h5>
            ) : (
              <>
                <h1 className="mb-4 fw-bold">Today's Schedule</h1>
                {period.map((e: any, i: any) => (
                  <div className="rounded-3 notice mb-5 p-5 w-100" key={i}>
                    <h4 className="fw-bold">Teacher: {e.teacher}</h4>
                    <h4 className="fw-bold">Subject: {e.subject}</h4>
                    <h4 className="fw-bold">Class: {e.classValue}</h4>
                    <h4 className="fw-bold">Date: {e.date}</h4>
                    <h4 className="fw-bold">Time: {e.time}</h4>
                    <Button variant="contained" sx={{width:""}} onClick={()=>deletedData(e.id)} color="error"><Delete/></Button>
                  </div>
                ))}
              </>
            )}
          </Grid>
        </Container>
      </>
    );
  }

  export default User;
