import React from 'react'
import { useForm } from 'react-hook-form'

function Input({ name, type, id, className, register }) {
    return (
        <input
            {...register}
            type={type} 
            className={className} 
            id={id}
            name={name}
        />
    )
}

export default Input