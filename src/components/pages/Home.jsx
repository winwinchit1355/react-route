import React from 'react';
import {useNavigate} from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className='main'>
        <h3>Home</h3>
        <div className="box button-box">
          <div onClick={() => navigate('/profile',{replace:true})} className="btn profile-btn">
            <span>Go to profile</span>
          </div>
        </div>
    </div>
  )
}
