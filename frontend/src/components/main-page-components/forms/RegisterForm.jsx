import React, {useState} from 'react';
import './RegisterForm.css';
import axios from 'axios';

function RegisterForm({ showRegisterForm, onBack }) {

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: '',
    dept: '',
    phone: ''
  });

  const handleChange = (e) => {
  const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };


  const handleSubmit = async e => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const payload = {
      name: formData.name,
      surname: formData.surname,
      email: formData.email,
      password: formData.password,
      dept: formData.dept,
      phone: formData.phone
    };

    try {
      const res = await axios.post('http://localhost:8000/users/register/', payload);

      alert("Kayıt başarılı!");
      console.log(res.data);
    } catch (err) {
      console.error(err.response?.data || err);
      alert("Hata: " + JSON.stringify(err.response?.data));
    }
  };

  return (
    <>
    
        <div className={`register-form ${showRegisterForm ? 'slide-in' : ''}`}>
        <button className="back-button" onClick={onBack}><i className="fas fa-arrow-left"></i></button>
        <h1>Register</h1>
        <form id="register-form" action="">
            <div className="name-surname">
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange}/>
                <input type="text" name="surname" placeholder="Surname"value={formData.surname} onChange={handleChange}/>
            </div>
            <input type="text" name="email" placeholder="Email" value={formData.email} onChange={handleChange}/>
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange}/>
            <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange}/>
            <input type="text" name="dept" placeholder="Department" value={formData.dept} onChange={handleChange}/>
            <input type="number" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange}/>
            <button onClick={handleSubmit}>Register</button>
        </form>
    </div>
    
    
    </>

  );
}

export default RegisterForm;