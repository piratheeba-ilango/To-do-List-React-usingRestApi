import React from 'react'
import { FaTrashAlt } from "react-icons/fa";


const LineItem = ({todos,handleChange,handleDelete}) => {


  return (
    <li className='item' key={todos.id}>
    <input 
    onChange={() => handleChange(todos.id)}
      type='checkbox'
      checked ={todos.checked}
    />
    <label
   style={(todos.checked) ? {textDecoration:'line-through'} :null}
    onDoubleClick={() => handleChange(todos.id)}
    > {todos.item}</label>
    <FaTrashAlt 
      role='button'
      tabIndex="0"
      aria-label = {`Delete ${todos.item}`}
      onClick={() => handleDelete(todos.id)}
    />
  </li>
  )
}

export default LineItem