import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../screens/LogIn/login"
import Dashboard from "../screens/Dashboard/dashboard"

function Approuter() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home/*' element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Approuter