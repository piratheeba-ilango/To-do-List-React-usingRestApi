import React from 'react'

import LineItem from './LineItem';
function ItemList({todo,handleChange,handleDelete}) {
  return (
    
    
      <ul>
        { todo.map((todos) => {
          return (
           <LineItem
       todos = {todos}
       key={todos.id}
      handleChange = {handleChange}
      handleDelete = {handleDelete}
           />
          )
                  
        })}
        </ul>
       
    
      
  )
}

export default ItemList