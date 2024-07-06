import  { useEffect, useState } from "react";
import { editData, getData } from "../../config/firebaseMethods";

function MarkAttendance() {
  const [students, setStudents] = useState<any>([]);
  const [attendanceStatus, setAttendanceStatus] = useState<any>({});

  useEffect(() => {
    getData('Student Data')
      .then((res: any) => {
        setStudents(Object.values(res));
        // Initialize attendance status for each student
        const initialStatus: any = {};
        Object.values(res).forEach((student: any) => {
          initialStatus[student.id] = '';
        });
        setAttendanceStatus(initialStatus);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const options = [
    { value: '', label: 'Select attendance' },
    { value: 'present', label: 'Present' },
    { value: 'absent', label: 'Absent' }
  ];

  const handleAttendanceChange = (e: any, studentId: string) => {
    const { value } = e.target;
    setAttendanceStatus({
      ...attendanceStatus,
      [studentId]: value
    });
  };

  const markStatus = (student: any) => {
    const { id } = student;
    const status = attendanceStatus[id];
    
    if (status !== '') {
      const updatedData = { ...student, Status: status };
      editData('Student Data', id, updatedData)
        .then(() => {
          console.log("Attendance marked successfully");
        })
        .catch((err) => {
          console.log(err, "Attendance failed");
        });
    } else {
      console.log("Please select attendance status");
    }
  };

  return (
    <>
      <table className="table table-bordered text-center table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Father Name</th>
            <th>Email</th>
            <th>Class</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student: any, index: number) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.Father_Name}</td>
              <td>{student.Email}</td>
              <td>{student.Class}</td>
              <td>
                <select
                  className="form-control text-center fw-bold"
                  value={attendanceStatus[student.id]}
                  onChange={(e) => handleAttendanceChange(e, student.id)}
                >
                  {options.map((opt, i) => (
                    <option key={i} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => markStatus(student)}
                >
                  Submit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default MarkAttendance;
