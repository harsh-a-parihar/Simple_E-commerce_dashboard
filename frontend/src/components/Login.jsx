import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';  // Import the CSS file for styling

const LoginPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  useEffect(()=>{
    const auth = localStorage.getItem('user');
    if (auth){
      navigate('/')
    }
  })
  const collectData = async (event) => {
    event.preventDefault();
    console.log(email, password);
    try {
      let result = await fetch("http://localhost:5001/login", {
        method: "POST",
        body: JSON.stringify({email, password}),
        headers: {
          'Content-Type': 'application/json'
        }
      }) 

      result = await result.json();
      console.warn(result);
      if(result.name){
        localStorage.setItem('user', JSON.stringify(result));
        navigate('/');
      }else{
        alert("Please enter correct credentials.")
      }

    } catch (error) {
      console.error("Error in fetch:", error);
    }
  } 
  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Login</h2>
        <form onSubmit={collectData}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required /> 
          </div>
          <button type="submit" className="auth-button">Login</button>
        </form>
        <p className="auth-link">Don't have an account? <a href="/signup">Sign up</a></p>
      </div>
    </div>
  );
};

export default LoginPage;
