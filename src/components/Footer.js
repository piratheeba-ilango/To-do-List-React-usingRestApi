import React from 'react'

const Footer = ({length}) => {

    
  return (
   <footer>{length} list of {length === 1  ? "item" :"items"}</footer>
  )
}

export default Footer