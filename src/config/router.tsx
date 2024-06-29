import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../screens/LogIn/login"
import Dashboard from "../screens/Dashboard/dashboard"

function Approuter() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/home/*' element={<Dashboard/>}/>
        <Route path='/' element={<Login/>}/>
        
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Approuter