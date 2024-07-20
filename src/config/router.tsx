import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../screens/LogIn/login"
import Dashboard from "../screens/Dashboard/dashboard"
import Protected from "../screens/protected"
import Signup from "../screens/Signup/signup"

function Approuter() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/home/*' element={<Protected Component={Dashboard}/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Approuter