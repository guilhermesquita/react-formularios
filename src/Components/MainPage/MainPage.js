//import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { MainContainer, Form, Input } from './styles'

function MainPage() {
  // const [idade, setIdade] = useState("")
  // const [email, setEmail] = useState("")

//////////////////////////////////////////////////////////////////////////////

  // const [form, setForm] = useState({nome: '', idade:'', email:''})

  // const changerForm = (event) => {
  //   // const name = event.target.name
  //   // const value = event.target.value
  //   const {name, value} = event.target
  //   setForm({...form, [name]: value})
  // }
  // console.log(form)

//////////////////////////////////////////////////////////////////////////////////

  const [form, changerForm] = useForm({nome: '', idade:'', email:'', profissao:''})

  // const onChangeNome = (event) => {
  //   setForm.nome(event.target.value)
  // }

  // const onChangeIdade = (event) => {
  //   setIdade(event.target.value)
  // }

  // const onChangeEmail = (event) => {
  //   setEmail(event.target.value)
  // }

  const handleClick = (event) => {
    event.preventDefault()

   // console.log(`nome: ${nome}, idade: ${idade}, e-mail: ${email} `)
  }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>

      <Form onSubmit={handleClick}>
        <label htmlFor="nome">Nome:</label>
        <Input 
          name='nome'
          id="nome"
          value={form.nome}
          onChange={changerForm}
        />

        <label htmlFor="idade">Idade:</label>
        <Input 
          name='idade'
          id="idade"
          value={form.idade}
          onChange={changerForm}
        />

        <label htmlFor="email">E-mail:</label>
        <Input 
          name='email'
          id="email"
          value={form.email}
          onChange={changerForm}
        />

        <label htmlFor="profissao">Profissão:</label>
        <Input 
          name='profissao'
          id="profissao"
          value={form.profissao}
          onChange={changerForm}
          required
        />
        
        
        
      <button type="submit">Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
