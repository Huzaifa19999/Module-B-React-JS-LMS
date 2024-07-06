import { useEffect, useState } from "react";
import { getData } from "../../config/firebaseMethods";
import 'bootstrap/dist/css/bootstrap.css'

function Attendancelist() {
  const [list, setList] = useState<any>([]);
  const [selectedAttendance, setSelectedAttendance] = useState<string>('');

  useEffect(() => {
    getData('Student Data')
      .then((res: any) => {
        console.log(Object.values(res));
        setList(Object.values(res));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAttendance(e.target.value);
  };

  const filteredList = selectedAttendance
    ? list.filter((item: any) => item.Status === selectedAttendance)
    : list;

  const options = [
    { value: '', label: 'Select attendance' },
    { value: 'present', label: 'Present' },
    { value: 'absent', label: 'Absent' }
  ];

  return (
    <>
    <h1>List of Students {selectedAttendance}</h1>
      <select
        className="ms-5 attendance form-control text-center fw-bold mb-5"
        onChange={handleFilterChange}
        value={selectedAttendance}
      >
        {options.map((opt, i) => (
          <option key={i} value={opt.value}>{opt.label}</option>
        ))}
      </select>

      <table className="table text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Father Name</th>
            <th>Class</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((e: any, i: number) => (
            <tr key={i}>
              <td>{e.name}</td>
              <td>{e.Father_Name}</td>
              <td>{e.Class}</td>
              <td>{e.Status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Attendancelist;
