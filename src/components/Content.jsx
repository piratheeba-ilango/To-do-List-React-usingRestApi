import React, { useState } from 'react'
import ItemList from './ItemList';
const Content = ({todo,handleChange,handleDelete,search})=> {

  return (
    <>
   
    {todo.length > 0 ? 
   <ItemList  
    todo = {todo}
    handleChange = {handleChange}
    handleDelete = {handleDelete}
   />  
   :
        <p>
          The list is empty....
        </p>
    }
   
    </>
  )
}

export default Content