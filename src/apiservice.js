import axios from 'axios';

var BASE_URL = process.env.SERVER_URL || "http://localhost:8080";

const register = async (email, password) => {
  return await axios.post(`${BASE_URL}/auth/register`, { email, password });
}

const login = async (email, password) => {
  return await axios.post(`${BASE_URL}/auth/login`, { email, password });
}

const uploadFile = async (file) => {
  const token = localStorage.getItem('token');
  const formData = new FormData();
  formData.append('file', file);
  return await axios.post(`${BASE_URL}/api/upload`, formData, {
    headers: { 
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`, 
    }
  });
}

const getAnalysis = async () => {
  const token = localStorage.getItem('token');

  try {
    const response = await axios.get(`${BASE_URL}/api/analysis`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch analysis');
  }
}

export default {
  register,
  login,
  uploadFile,
  getAnalysis
}