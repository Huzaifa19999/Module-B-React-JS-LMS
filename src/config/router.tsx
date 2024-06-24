import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../screens/LogIn/login"
import Dashboard from "../screens/Dashboard/dashboard"

function Approuter() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Approuter