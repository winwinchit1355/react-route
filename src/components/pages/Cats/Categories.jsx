import React from 'react'
import { useSearchParams } from 'react-router-dom'

export const Categories = () => {
  const [searchParams,setSearchParams] = useSearchParams();
  const name = searchParams.get('name');
  const age = searchParams.get('age');
  return (
    <div>
      <h1>Category Lists</h1>
      <p>{name} is {age} years old.</p>
      <button onClick={()=>setSearchParams({name:'Mg Mg',age:34})}>Set Params</button>
      <button onClick={()=>setSearchParams()}>Reset Params</button>
    </div>
  )
}
