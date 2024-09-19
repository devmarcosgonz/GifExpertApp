import React, { useState } from 'react'

export default function AddCategory({onNewCategory}) {
  const [inputValue, setInputValue] = useState('')

  const onInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()// Evita que el formulario se envíe y la página se recargue
    if(inputValue.trim().length <= 1) return

    onNewCategory(inputValue.trim())

    setInputValue('')
  }

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
          type="text"
          placeholder='Buscar gif'
          value={inputValue}
          onChange={(event) => {
            onInputChange(event)
          }}
      />
    </form>
  )
}
