import React from 'react'

const Input = ({ id, label, onChange, value, ...props }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input 
        type="text" 
        id={id} 
        name={id} 
        value={value} 
        onChange={onChange} 
        {...props}/>
    </div>
  )
}

export default Input
