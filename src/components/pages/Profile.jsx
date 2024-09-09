import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();
  return (
    <div>
        <h3>Profile</h3>
        <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  )
}
