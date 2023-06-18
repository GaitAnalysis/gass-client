import React, { useState } from 'react';
import ApiService from './apiservice';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== repeatPassword) {
      setMessage('Passwords do not match. Please try again.');
      return;
    }

    try {
      const response = await ApiService.register(email, password);

      if (response.status === 200) {
        setMessage('Registration successful!');
      } else {
        setMessage('Registration failed. Please try again.');
      }
    } catch (error) {
      setMessage('Registration failed. Please try again.');
    }
  };

  return (
    <div style={{ border: '1px solid gray', padding: '20px', marginBottom: '20px', marginTop: '10px'}}>
      <form onSubmit={handleSubmit} style={{paddingRight: '20px'}}>
      <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ padding: '10px', marginBottom: '10px', width: '100%', borderRadius: '5px', border: '1px solid gray' }} required />
        <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ padding: '10px', marginBottom: '10px', width: '100%', borderRadius: '5px', border: '1px solid gray' }} required />
        <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>Repeat Password:</label>
        <input type="password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} style={{ padding: '10px', marginBottom: '10px', width: '100%', borderRadius: '5px', border: '1px solid gray' }} required />
        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>Register</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Register;