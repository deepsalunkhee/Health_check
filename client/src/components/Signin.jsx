import React,{useState} from 'react';
import  {useNavigate} from 'react-router-dom';
import './Signin.css'; 

const Signin = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const[jwt, setJwt] = useState('');
    const backendUrl = "http://localhost:5000";
    const navigate = useNavigate();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const data = {email, password};
        fetch(`${backendUrl}/users/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                if(data.state){
                    setJwt(data.token);
                    localStorage.setItem('token', data.token);
                    navigate('/');
                }else{
                  alert("Invalid Credentials")
                }
                
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

  return (
    <div className="signin-page">
    <div className="signin-container">
      <h2>Sign In</h2>
      <form>
      <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required
         value={email} onChange={(e) => setEmail(e.target.value)}
        />
        

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required 
        value={password} onChange={(e) => setPassword(e.target.value)}/>
        

        <button  onClick={handleOnSubmit}type="submit">Sign In</button>
      </form>
      <p>
            Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
    </div>
  );
}

export default Signin;
