import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Category = () => {
  return (
    <div>
        <ul>
            <li><Link to='categories'>All Categories</Link></li>
            <li><Link to='create'>Create</Link></li>
            <li><Link to='Edit'>Edit</Link></li>
        </ul>
        <Outlet />
    </div>
  )
}

export default Category