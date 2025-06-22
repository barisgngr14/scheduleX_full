import React , { useState } from 'react';
import './LoginForm.css';
import axios from 'axios'

function LoginForm({ showLoginForm, onBack }) {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
  const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const payload = {
      email: formData.email,
      password: formData.password
    };

    try {
      const res = await axios.post('http://localhost:8000/users/login/', payload);

      alert("Login successful!");
      console.log(res.data);
    } catch (err) {
      console.error(err.response?.data || err);
      alert("Error: " + JSON.stringify(err.response?.data));
    }
  }

  return (
    <>
    <div className={`user-login-form ${showLoginForm ? 'slide-in' : ''}`}>
        <button className="back-button" onClick={onBack}><i className="fas fa-arrow-left"></i></button>
        <h1>Login</h1>
        <form id="login-form" action="">
            <input type="text" name="email" placeholder="Email" value={formData.email} onChange={handleChange}/>
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange}/>
            <button onClick={handleSubmit} >Login</button>
        </form>
    </div>
    </>
  );
}

export default LoginForm;