import React, { useEffect, useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import { TextField,FormControl,InputLabel,OutlinedInput,InputAdornment,IconButton, Button } from '@mui/material';
import { VisibilityOff,Visibility} from '@mui/icons-material';


export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [allusers,setAllusers]=useState([])
  const [user,setuser]=useState([])
  const [showPassword, setShowPassword] = useState(false);

  const navigate=useNavigate()


  useEffect(()=>{
    const users = JSON.parse(localStorage.getItem('login'));
    console.log("===login",users)
    setAllusers(users)
  },[])

  

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user)
    if (user && user[0].email === email && user[0].password === password) {
      navigate("/userlisting")
    } else {
      alert('Incorrect email or password. Please try again.');
    }
  };

  useEffect(()=>{
    const filtered=allusers.filter((item)=>item.email===email)
    console.log(filtered)
    setuser(filtered)
  },[email])
  return (
    <div className='main'>   
      <div className="register">
        <img src="./images/scientist.jpg" alt="" width="100%"/>
      </div>
      <div className="login">
      <form onSubmit={handleSubmit}>
      <center>
        <img src="./images/Sunday.jpg" alt="" style={{
          marginTop: "10px"
        }}/>
        <h1><span>SUNDAY</span>TECH</h1>
      <h1>Welcome</h1>
      <h4>Login to <span>Sunday</span>Tech System</h4> 
      <TextField
        type="email"
        label="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      /> <br /><br />

        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            onChange={(event) => setPassword(event.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                 {showPassword ? <VisibilityOff/> : <Visibility/>}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        <br/>


      <Button variant='contained' sx={{paddingLeft:11,paddingRight:11}} type="submit">Login</Button>
      </FormControl>

      <p><Link to="/register">Forget Password?</Link></p>
      </center>
    </form>
    </div>

    </div>
    
  );
};

