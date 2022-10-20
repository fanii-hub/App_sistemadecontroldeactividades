import React from 'react'

export interface IEjemplo{
    titulo: string;
    
}

export const Ejemplo = (props: IEjemplo) => {
  return (
    <div>{props.titulo}</div>
  )
}
