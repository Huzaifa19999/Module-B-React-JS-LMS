import { Payments } from "@mui/icons-material";
import LMS_IconButton from "../../components/LMS_IconButton";
import { useNavigate } from "react-router-dom";

function Feestructure() {

  const navigate = useNavigate()

  const classsubject = [
    {
      subject: "Computer Science",
      admissionFee: 3000,
      registrationFee: 2500,
      admissionProcessingFee: 500,
    },
    {
      subject: "English",
      admissionFee: 3000,
      registrationFee: 2500,
      admissionProcessingFee: 500,
    },
    {
      subject: "Physics",
      admissionFee: 3000,
      registrationFee: 2500,
      admissionProcessingFee: 500,
    },
    {
      subject: "Mathematics",
      admissionFee: 3000,
      registrationFee: 2500,
      admissionProcessingFee: 500
    },
    {
      subject: "Chemistry",
      admissionFee: 5000,
      registrationFee: 2500,
      admissionProcessingFee: 500,
    },
    {
      subject: "Urdu",
      admissionFee: 7000,
      registrationFee: 2500,
      admissionProcessingFee: 500,     
    },
    {
      subject: "Islamiat",
      admissionFee: 7000,
      registrationFee: 2500,
      admissionProcessingFee: 500
    },
    {
      subject: "Sindhi",
      admissionFee: 3000,
      registrationFee: 0,
      admissionProcessingFee: 500,
    },
    {
      subject: "Pakistani Studies",
      admissionFee: 3000,
      registrationFee: 0,
      admissionProcessingFee: 500,
    },
   
  ];
  

  return (
    <>
      <table className="table table-bordered text-center rounded">
        <thead>
            <tr>

          <th>Subjects</th>
          <th>Admission Fee</th>
          <th>Registration Fee</th>
          <th>Admission Proccessing  Fee</th>
          </tr>
        </thead>
      <tbody>
      {classsubject.map((e:any,i:any)=>(
        <tr key={i}>
          <td className="fw-bold">{e.subject}</td>
          <td>{e.admissionFee}</td>
          <td>{e.registrationFee}</td>
          <td>{e.admissionProcessingFee}</td>
        </tr>    
      ))}
      </tbody>
      </table>
      <br />
      <h4 className="text-center fw-bold">Disclaimer: The Institute reserves the right to change fee structure from time to time.
      </h4>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <LMS_IconButton onClick={() => { navigate('/home/feesubmission'); } } icon={<Payments />} label="fee submission" className="p-3 fw-bold mt-3 rounded" color=""/>
      </div>

    </>
  )
}

export default Feestructure