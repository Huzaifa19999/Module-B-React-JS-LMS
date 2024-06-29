import { Route, Routes } from 'react-router-dom'
import LMS_Dashboard from '../../components/LMS_Dashboard'
import Abcd from './abcd'
import { Box } from '@mui/material'

function Dashboard() {
  return (
    <>
    <LMS_Dashboard/>
    <Box> 
    <Routes>
      <Route path='abcd' element={<Abcd/>}></Route>
    </Routes>
    </Box>
    </>
  )
}

export default Dashboard