import  { useEffect, useState } from "react";
import { deleteData, getData } from "../../config/firebaseMethods";
import { Box } from "@mui/material";

function Feesubmission() {
  const [feeDetails, setFeeDetails] = useState<any[]>([]);

  useEffect(() => {
    getData('Fee Data')
      .then((res:any) => {
        console.log(res);
        setFeeDetails(...[Object.values(res)]); 
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteVoucher = (id:string) => {

    deleteData('Fee Data',id)
    .then(()=>{
      console.log("Voucher Deleted Successfully")
    }).catch((err)=>{
      console.log(err)
    })


  }

  return (
    <Box>
      {feeDetails.length > 0 ? (
        feeDetails.map((e: any, i: number) => (
          <div key={i} className="container mt-5">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="card">
                  <div className="card-header">
                    <h4 className="fw-bold text-center">Fee Voucher No {i+1}</h4>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="form-group">
                        <label className="fw-bold" htmlFor="studentName">Student Name: {e.StudentName}</label>
                      </div>
                      <br />
                      <div className="form-group">
                        <label className="fw-bold" htmlFor="studentID">Class: {e.Class}</label>
                      </div>
                      <br />
                      <div className="form-group">
                        <label className="fw-bold" htmlFor="amount">Amount: Rs {e.FeeAmount}</label>
                      </div>
                      <br />
                      <div className="form-group">
                        <label className="fw-bold" htmlFor="paymentMethod">Course: {e.Course}</label>
                      </div>
                      <br />
                      <div className="form-group">
                        <label className="fw-bold" htmlFor="paymentMethod">Payment Method: {e.PaymentMethod}</label>
                      </div>
                      <br />
                      <button type="submit" className="btn fw-bold btn-primary">Submit</button>
                      <button onClick={()=>deleteVoucher(e.id)} type="submit" className="btn fw-bold ms-4 btn-danger">Delete</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </Box>
  );
}

export default Feesubmission;
