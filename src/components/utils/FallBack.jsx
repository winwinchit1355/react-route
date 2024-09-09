import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function FallBack() {
    const navigate = useNavigate();
  return (
    <div>
        <h3>No route detected!</h3>
        <button onClick={() => navigate('/')}>Go Back Home</button>
    </div>
  )
}
