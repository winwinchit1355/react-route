import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  const isActiveStyle = ({isActive}) =>{
    return {
      textDecoration: isActive? "underline":"none",
      fontWeight: isActive? "bold":"normal",
      color: isActive? "indianred":"hotpink",
    }
    
  } 
  return (
    <div>
        <NavLink to="/" style={isActiveStyle}>Home</NavLink>
        <NavLink to="/about" style={isActiveStyle}>About</NavLink>
    </div>
  )
}
