import React, { useState } from 'react';
import ApiService from './apiservice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await ApiService.login(email, password);
      
      if (response.status === 200) {
        const token = response.data.jwt;
        // Store the token in local storage or session storage for future requests
        localStorage.setItem('token', token);
        setMessage('Login successful!');
        window.location.reload()
      } else {
        setMessage('Login failed. Please check your credentials and try again.');
      }
    } catch (error) {
      setMessage('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div style={{ border: '1px solid gray', padding: '20px', marginBottom: '20px', marginTop: '10px'}}>
      <form onSubmit={handleSubmit} style={{paddingRight: '20px'}}>
        <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ padding: '10px', marginBottom: '10px', width: '100%', borderRadius: '5px', border: '1px solid gray'}} required />
        <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ padding: '10px', marginBottom: '10px', width: '100%', borderRadius: '5px', border: '1px solid gray' }} required />
        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer' }}>Login</button>
      </form>
      {message && <p style={{ marginTop: '10px', fontStyle: 'italic' }}>{message}</p>}
    </div>
  );
}

export default Login;