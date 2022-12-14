import { useState } from "react"

export const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

    const changerForm = (event) => {
      const {name, value} = event.target
      setForm({...form, [name]: value})
    }

    console.log(form)

    return [form, changerForm]

}