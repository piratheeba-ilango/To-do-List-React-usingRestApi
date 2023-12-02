import React from 'react'

const Heading = ({title}) => {
  return (
    <header>
         
            <h1>{title}</h1>
        
    </header>
       
    
  )
}

Heading.defaultProps = {
  title : "To do list"
}
export default Heading