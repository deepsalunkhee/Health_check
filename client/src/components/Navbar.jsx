import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
    }
    console.log(token);

    fetch("http://localhost:5000/users/verify", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUsername(data.user['username']);
        if (!data.state) {
          navigate("/signin");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [navigate]);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <div className="navbar">
      <div className="left">
        <h1>Project Name</h1>
      </div>
      <div className="right">
        <p>{username}</p>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    </div>
  );
};

export default Navbar;
