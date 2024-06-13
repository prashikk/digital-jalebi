import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CompanyPage = () => {
  const { id } = useParams();
  const [company, setCompany] = useState(null);
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchCompany = async () => {
      const response = await axios.get(`http://localhost:8000/api/companies/${id}`);
      setCompany(response.data);
    };
    fetchCompany();
  }, [id]);

  const handleInquiry = async () => {
    await axios.post(`http://localhost:8000/api/companies/${id}/inquire`, { message, email });
    alert('Inquiry sent!');
  };

  if (!company) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>{company.name}</h1>
      <p>{company.description}</p>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Your message"
      />
      <button onClick={handleInquiry}>Send Inquiry</button>
    </div>
  );
};

export default CompanyPage;
