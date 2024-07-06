import  { useEffect, useState } from "react";
import { getData } from "../../config/firebaseMethods";
import LMS_Select from "../../components/LMS_Select";

function Subjectlist() {
  const [details, setDetails] = useState<any>([]);
  const [selectedClass, setSelectedClass] = useState<any>("");

  const options = [
    { value: '', label: 'Select your Class' },
    { value: '1', label: 'Class 1' },
    { value: '2', label: 'Class 2' },
    { value: '3', label: 'Class 3' },
    { value: '4', label: 'Class 4' },
  ];

  useEffect(() => {
    getData(`Class Data`)
      .then((res: any) => {
        console.log(Object.values(res));
        setDetails(Object.values(res));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSelectChange = (value: string | number) => {
    setSelectedClass(value);
  };

  // Function to filter subjects based on selected class
  const getSubjectsForClass = (className: string) => {
    const classDetails = details.find((classInfo: any) => classInfo.Class === className);
    if (classDetails) {
      return [
        classDetails.subject1,
        classDetails.subject2,
        classDetails.subject3,
        classDetails.subject4,
      ];
    }
    return [];
  };

  // Loading state condition
  const isLoading = details.length === 0;

  return (
    <div>
      <h2>Select Class to Show Subjects List</h2>
      <LMS_Select
        className='form-control mb-3 mt-3'
        options={options}
        value={selectedClass}
        onChange={handleSelectChange}
      />
      <h2>Subject List</h2>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <table className="table table-bordered rounded table-striped text-center">
          <thead>
            <tr>
              <th>Class</th>
              <th>Subject One</th>
              <th>Subject Two</th>
              <th>Subject Three</th>
              <th>Subject Four</th>
            </tr>
          </thead>
          <tbody>
            {selectedClass && (
              <tr>
                <td>{selectedClass}</td>
                {getSubjectsForClass(selectedClass).map((subject: string, index: number) => (
                  <td key={index}>{subject}</td>
                ))}
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Subjectlist;
