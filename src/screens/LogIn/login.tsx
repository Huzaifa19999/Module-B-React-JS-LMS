import 'bootstrap/dist/css/bootstrap.css';
import LMS_Input from '../../components/LMS_Input';
import { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
// import LMS_Button from '../../components/LMS_Button';
import { sendData, signUpUser } from '../../config/firebaseMethods';
import { Button } from '@mui/material';

function Login() {
  const [email, setEmail] = useState<any>('');
  const [password, setPassword] = useState<any>('');
  const navigate = useNavigate();



  const enterLogin = (e: any) => {
    e.preventDefault();
    if (email && password) {
      let obj = {
        Email: email,
        Password: password
      };

      signUpUser(email,password)
      
      sendData('Login', obj)
      .then((res) => {
        console.log("Successfully Added", res);
        navigate('/home/user');
        alert("Successfully Log In");
      })
      .catch((err) => {
        console.log("Data not Added", err);
        alert("Login failed");
      });
      
      setEmail('');
      setPassword('');
    } else {
      alert("Fill the field");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        <form onSubmit={enterLogin}>
          <div className="mb-3 text-center fw-bold">
            <LMS_Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='form-control' 
              placeholder='Enter your Email'/>
          </div>
          <div className="mb-3 text-center fw-bold">
            <LMS_Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='form-control'
              placeholder='Enter your password'
            />
          </div>
          {/* <LMS_Button onClick={enterLogin} className='login-button fw-bold' label='Login' type={undefined}/>*/}
          <Button className='w-100 fw-bold' variant='contained' onClick={enterLogin}>Login</Button>
          </form>
      </div>
    </div>
  );
}

export default Login;
