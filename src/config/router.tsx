import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../screens/LogIn/login"
import Dashboard from "../screens/Dashboard/dashboard"
import Examschedule from "../screens/Exam/examschedule"
import Examresult from "../screens/Exam/examresult"
import Admission from "../screens/Admission/admission"
import Classform from "../screens/Class/classform"
import Classlist from "../screens/Class/classlist"
import Transferstudent from "../screens/Student/transferstudent"
import Studentedit from "../screens/Student/studentedit"
import Studentlist from "../screens/Student/studentlist"
import Teacherlist from "../screens/Teachers/teacherlist"
import Teacherallocation from "../screens/Teachers/teacherallocation"
import Teacheredit from "../screens/Teachers/teacheredit"
import Syllabusform from "../screens/Syllabus/syllabusform"
import Syllabuslist from "../screens/Syllabus/syllabuslist"
import Registration from "../screens/School/registration"
import Feevoucher from "../screens/Fees/feevoucher"
import Feesubmission from "../screens/Fees/feesubmission"
import Feestructure from "../screens/Fees/feestructure"

function Approuter() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        {/* Dashboard */}
        <Route path="/" element={<Dashboard/>}></Route>
        {/* Login */}
        <Route path="/login" element={<Login/>}></Route>
        {/* Exam */}
        <Route path="/examschedule" element={<Examschedule/>}></Route>
        <Route path="/examresult" element={<Examresult/>}></Route>
        {/* Admission */}
        <Route path="/admisson" element={<Admission/>}></Route>
        {/* Class */}
        <Route path="/classform" element={<Classform/>}></Route>
        <Route path="/classlist" element={<Classlist/>}></Route>
        {/* Fees */}
        <Route path="/feestructure" element={<Feestructure/>}></Route>
        <Route path="/feesubmission" element={<Feesubmission/>}></Route>
        <Route path="/feevoucher" element={<Feevoucher/>}></Route>
        {/* School */}
        <Route path="/registration" element={<Registration/>}></Route>
        {/* Subjects */}
        <Route path="/subjectedit" element={<Studentedit/>}></Route>
        <Route path="/subjectlist" element={<Studentlist/>}></Route>
        {/* Syllabus */}
        <Route path="/syllabusform" element={<Syllabusform/>}></Route>
        <Route path="/syllabuslist" element={<Syllabuslist/>}></Route>
        {/* Teacher */}
        <Route path="/teacherallocation" element={<Teacherallocation/>}></Route>
        <Route path="/teacheredit" element={<Teacheredit/>}></Route>
        <Route path="/teacherlist" element={<Teacherlist/>}></Route>
        {/* Student */}
        <Route path="/studentedit" element={<Studentedit/>}></Route>
        <Route path="/studentlist" element={<Studentlist/>}></Route>
        <Route path="/transferstudent" element={<Transferstudent/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Approuter