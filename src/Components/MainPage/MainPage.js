import React, { useState } from 'react'
import { MainContainer, Form, Input } from './styles'

function MainPage() {
  const [formulario, setFormulario] = useState({
    nome: '', 
    idade: '', 
    email: ''})

  const handleValues = (e) => {
    //const key = e.target.name
    const { name, value} = e.target
    setFormulario({...formulario, [name]: value})
    console.log(formulario)
  }

  const handleClick = (event) => {
    event.preventDefault()
  }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>

      <Form onSubmit={handleClick}>
        <label htmlFor="nome">Nome:</label>
        <Input 
          name='nome'
          id="nome"
          value={formulario.nome}
          onChange={handleValues}
        />

        <label htmlFor="idade">Idade:</label>
        <Input 
          name='idade'
          id="idade"
          value={formulario.idade}
          onChange={handleValues}
        />

        <label htmlFor="email">E-mail:</label>
        <Input 
          name='email'
          id="email"
          value={formulario.email}
          onChange={handleValues}
        />
        
        
      <button type="submit">Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
