import React from 'react'

const Input = ({ id, label, setValue, value, ...props }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input 
        type="text" 
        id={id} 
        name={id} 
        value={value} 
        onChange={({target}) => setValue(target.value)} 
        {...props}/>
    </div>
  )
}

export default Input
