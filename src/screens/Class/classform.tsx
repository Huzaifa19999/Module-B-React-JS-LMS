import React, { useState, useEffect } from "react";
import { getData, sendData } from "../../config/firebaseMethods";
import LMS_IconButton from "../../components/LMS_IconButton";
import { ArrowCircleRight } from "@mui/icons-material";

function Classform() {
  const [teacher, setTeacher] = useState<any>([]);
  const [subjects, setSubjects] = useState<any>([]);
  const [selectedTeacher, setSelectedTeacher] = useState<string>("");
  const [selectedClass, setSelectedClass] = useState<string>("");
  const [selectedSubject, setSelectedSubject] = useState<string>("");


  const grade = [
    { value: '', label: 'Select your Class' },
    { value: '1', label: 'Class 1' },
    { value: '2', label: 'Class 2' },
    { value: '3', label: 'Class 3' },
    { value: '4', label: 'Class 4' },
  ];

  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();

  useEffect(() => {
    getData('Teacher Data')
      .then((response: any) => {
        setTeacher(Object.values(response));
      })
      .catch((err) => {
        console.log(err);
      });


    getData('Class Data')
      .then((response: any) => {
        setSubjects(Object.values(response));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const handleTeacherChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTeacher(event.target.value);
  };

  const handleClassChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedClass(event.target.value);
  };

  const handleSubjectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSubject(event.target.value);
  };

  const handleSubmit = () => {
    if (!selectedTeacher || !selectedClass || !selectedSubject) {
      alert('Fill All the Fields');
    } else {
      const obj = {
        teacher: selectedTeacher,
        classValue: selectedClass,
        subject: selectedSubject,
        date: date, 
        time: time 
      };
  
      sendData('Schedule data', obj)
        .then((res) => {
          console.log(res);
          setSelectedTeacher("");
          setSelectedClass("");
          setSelectedSubject("");
          alert('Data submitted successfully!');
        })
        .catch((err) => {
          console.error(err);
          alert('Failed to submit data. Please try again.');
        });
    }
  };

  return (
    <>
      <h3>Select Teacher</h3>
      <select className="form-control" onChange={handleTeacherChange}>
        <option value="">Select Teacher</option>
        {teacher.map((t: any, i: number) => (
          <option key={i} value={t.value}>{t.name}</option>
        ))}
      </select>
      <br />
      <h3>Select Class</h3>
      <select className="form-control" onChange={handleClassChange}>
        {grade.map((g: any, i: number) => (
          <option key={i} value={g.value}>{g.label}</option>
        ))}
      </select>
      <br />
      <h3>Select Subject</h3>
      <select className="form-control" onChange={handleSubjectChange}>
        <option value={""}>Select Subjects</option>
        {subjects.map((s: any, i: number) => (
          <option key={i} value={s.value}>{s.subject1}</option>
        ))}
      </select>
      <br />
      <br />
      <LMS_IconButton
        onClick={handleSubmit}
        icon={<ArrowCircleRight />}
        label="Submit"
        className="p-2 fw-bold mt-3 rounded"
        color=""
      />
      <div>
        {/* <h1>{selectedClass}</h1>
        <h1>{selectedTeacher}</h1>
        <h1>{subjects}</h1> */}
      </div>
    </>
  );
}

export default Classform;
