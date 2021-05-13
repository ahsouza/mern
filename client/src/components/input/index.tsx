import React, { InputHTMLAttributes, useCallback } from 'react'
import { cep } from './masks'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  mask: "cep"
}

const Input: React.FC<InputProps> = ({ ...props }) =>{
  const handleKeyUp = useCallback((event: React.FormEvent<HTMLInputElement>) => {
    cep(event)
  },[])
  return(
    <div className="group">      
      <input {...props} onKeyUp={handleKeyUp}/>
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>CEP</label>
    </div>
  )
}
export default Input
