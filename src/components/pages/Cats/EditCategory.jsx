import React from 'react'
import { useParams } from 'react-router-dom'

const EditCategory = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
        <h1>Edit Category</h1>
        <p>Params id: {params.id}</p>
    </div>
  )
}

export default EditCategory