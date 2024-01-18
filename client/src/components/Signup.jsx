import React from 'react'
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Signup = () => {
    const backendUrl = "http://localhost:5000";
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const data = {username, password, email};
        fetch(`${backendUrl}/users/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
                if(data.message === "User created successfully")
                {
                    console.log('Success:', data);
                alert("Account created successful");
                navigate('/signin'); 
                }else{
                    alert("Error creating account");
                }
               
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

  return (
    <div className="signin-page">
    <div className="signin-container">
      <h2>Signup</h2>
      <form>
      <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required
         value={email} onChange={(e) => setEmail(e.target.value)}
        />
       
        
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required
            value={password} onChange={(e) => setPassword(e.target.value)}
         />

        <button onClick={handleOnSubmit} type="submit">Sign up</button>
        <p>
            Already have an account? <a href="/signin">Sign In</a>
        </p>
      </form>
    </div>
    </div>
  )
}

export default Signup
