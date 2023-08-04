import React,{useState} from 'react';
import { useLocation } from 'react-router-dom';

function Login(props){
  
let location = useLocation();

const navigateTo = (path) => {
  window.location.href = path;
}


  const [credentials, setcredentials] = useState({email: "", password: ""})
    const handleSubmit=async (e)=>{
   e.preventDefault();


   const response = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({email: credentials.email, password: credentials.password }),
  });
  const json = await response.json()
  console.log(json);
  if(json.success){
   localStorage.setItem('token', json.authtoken);
   props.showAlert("Logged in sucessfully", "success")
   navigateTo("/")
  }
  else{
    props.showAlert("Invalid credentials", "danger")
  }
    }

    const onChange = (e) => {
      setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }


  return (
    <div>
     <form  onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control"value={credentials.email} onChange={onChange} id="email" name='email' aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control"value={credentials.password} onChange={onChange} name='password' id="password"/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  );
  }

export default Login;
