import { useEffect, useState } from "react";
import { getData, sendData } from "../../config/firebaseMethods";
import LMS_Input from "../../components/LMS_Input";
import { Button } from "@mui/material";
import { Quiz } from "@mui/icons-material";

type Student = {
  student: string;
  Class: string;
  subject1: string;
  subject2: string;
  subject3: string;
  subject4: string;
}

type Teacher = {
  name: string;
}

type ExamData = {
  student: string;
  teacher: string;
  Class: string;
  subject1: string;
  subject2: string;
  subject3: string;
  subject4: string;
  mark1?: number;
  mark2?: number;
  mark3?: number;
  mark4?: number;
}

function Examschedule() {
  const [students, setStudents] = useState<Student[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<string>("");
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [selectedTeacher, setSelectedTeacher] = useState<string>("");
  const [grade, setGrade] = useState<string>("");
  const [subject1, setSubject1] = useState<string>("");
  const [subject2, setSubject2] = useState<string>("");
  const [subject3, setSubject3] = useState<string>("");
  const [subject4, setSubject4] = useState<string>("");
  const [mark1, setMark1] = useState<string>("");
  const [mark2, setMark2] = useState<string>("");
  const [mark3, setMark3] = useState<string>("");
  const [mark4, setMark4] = useState<string>("");

  useEffect(() => {
    getData('Class Data')
      .then((res: any) => {
        const classData = Object.values(res) as Student[];
        setStudents(classData);
      }).catch((err) => {
        console.log(err);
      });

    getData('Teacher Data')
      .then((res: any) => {
        const teacherData = Object.values(res) as Teacher[];
        setTeachers(teacherData);
      }).catch((err) => {
        console.log(err);
      });
  }, []);

  const addExam = () => {
    const examData: ExamData = {
      student: selectedStudent,
      teacher: selectedTeacher,
      Class: grade,
      subject1: subject1,
      subject2: subject2,
      subject3: subject3,
      subject4: subject4,
      mark1: parseInt(mark1),
      mark2: parseInt(mark2),
      mark3: parseInt(mark3),
      mark4: parseInt(mark4),
    };

    sendData('Exam Data', examData)
      .then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="border border-3 p-5 rounded-4">
        <h3 className="fw-bold">Select Student Name</h3>
        <br />
        <select onChange={(e) => setSelectedStudent(e.target.value)} className="form-control border-3">
          <option value="">Select Student</option>
          {students.map((student, index) => (
            <option key={index} value={student.student}>{student.student}</option>
          ))}
        </select>
      </div>

      <div className="border border-3 p-5 rounded-4">
        <h3 className="fw-bold">Select Teacher Name</h3>
        <br />
        <select onChange={(e) => setSelectedTeacher(e.target.value)} className="form-control border-3">
          <option value="">Select Teacher</option>
          {teachers.map((teacher, index) => (
            <option key={index} value={teacher.name}>{teacher.name}</option>
          ))}
        </select>
      </div>

      <div className="border border-3 p-5 rounded-4">
        <h3 className="fw-bold">Select Class</h3>
        <br />
        <select onChange={(e) => setGrade(e.target.value)} className="form-control border-3">
          <option value="">Select Class</option>
          {students.map((student, index) => (
            <option key={index} value={student.Class}>{student.Class}</option>
          ))}
        </select>
      </div>

      <div className="border border-3 p-5 rounded-4">
        <h3 className="fw-bold">Select 1<sup>st</sup> Subject </h3>
        <select onChange={(e) => setSubject1(e.target.value)} className="form-control border-3">
          <option value="">Select 1<sup>st</sup> Subject</option>
          {students.map((student, index) => (
            <option key={index} value={student.subject1}>{student.subject1}</option>
          ))}
        </select>
        <br />
        <LMS_Input
          onChange={(e) => setMark1(e.target.value)}
          label="Enter 1st Subject Marks"
          placeholder="Enter 1st Subject Marks"
          className="form-control border-3"
          value={mark1}
        />
      </div>

      <div className="border border-3 p-5 rounded-4">
        <h3 className="fw-bold">Select 2<sup>nd</sup> Subject </h3>
        <select onChange={(e) => setSubject2(e.target.value)} className="form-control border-3">
          <option value="">Select 2<sup>nd</sup> Subject</option>
          {students.map((student, index) => (
            <option key={index} value={student.subject2}>{student.subject2}</option>
          ))}
        </select>
        <br />
        <LMS_Input
          onChange={(e) => setMark2(e.target.value)}
          label="Enter 2nd Subject Marks"
          placeholder="Enter 2nd Subject Marks"
          className="form-control border-3"
          value={mark2}
        />
      </div>

      <div className="border border-3 p-5 rounded-4">
        <h3 className="fw-bold">Select 3<sup>rd</sup> Subject </h3>
        <select onChange={(e) => setSubject3(e.target.value)} className="form-control border-3">
          <option value="">Select 3<sup>rd</sup> Subject</option>
          {students.map((student, index) => (
            <option key={index} value={student.subject3}>{student.subject3}</option>
          ))}
        </select>
        <br />
        <LMS_Input
          onChange={(e) => setMark3(e.target.value)}
          label="Enter 3rd Subject Marks"
          placeholder="Enter 3rd Subject Marks"
          className="form-control border-3"
          value={mark3}
        />
      </div>

      <div className="border border-3 p-5 rounded-4">
        <h3 className="fw-bold">Select 4<sup>th</sup> Subject </h3>
        <select onChange={(e) => setSubject4(e.target.value)} className="form-control border-3">
          <option value="">Select 4<sup>th</sup> Subject</option>
          {students.map((student, index) => (
            <option key={index} value={student.subject4}>{student.subject4}</option>
          ))}
        </select>
        <br />
        <LMS_Input
          onChange={(e) => setMark4(e.target.value)}
          label="Enter 4th Subject Marks"
          placeholder="Enter 4th Subject Marks"
          className="form-control border-3"
          value={mark4}
        />
      </div>

      <Button
        size="large"
        startIcon={<Quiz />}
        className="ms-3 fw-bold"
        variant="contained"
        onClick={addExam}
      >
        CheckOut Result
      </Button>
    </>
  );
}

export default Examschedule;
