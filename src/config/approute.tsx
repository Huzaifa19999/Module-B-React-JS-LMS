import { BrowserRouter, Route, Routes } from "react-router-dom"
import LMS_Dashboard from "../components/LMS_Dashboard"

function Approute() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/*' element={<LMS_Dashboard/>}/>
        
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Approute