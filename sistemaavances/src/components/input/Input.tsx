import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react'

interface IInput 
{ 
  className?: string;
   key?: React.Key;
  type: 'text' | 'password ' | 'email ' | 'file' | 'color'  | 'number' | 'search ' |'tel' | 'time' | 'url';
  placeholder?:string;
  value?:string;
  disabled?:boolean;
  id?: string;
  name?: string;
  required?:boolean;
  autofocus?:boolean;
  max?:string;
  min?:string;
  maxlength?:number;
  multiple?:boolean;
  pattern?:string;
  title?:string;
  step?:string;   
  onChange?:React.ChangeEventHandler<HTMLInputElement>;
  onKeyUp?:React.KeyboardEventHandler<HTMLInputElement>;
   
}
export const Loginn =() =>{
  
    
}

export const Input = (props:IInput) => {
  return (
    <Input
    type={props.type}
    id={props.id}
    className="from-control"
    value={props.value}
    onChange={props.onChange}
    name={props.name}
    required />
  )
}
