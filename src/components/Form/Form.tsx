import React, { useState, FC, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { Button, Paper } from '@mui/material'
import { Person } from '../../store/types/appState'
import { defaultPersonSelector } from '../../store/Selectors'
import { InputControl } from '../Controls/InputControl'

type props = {
  modal?: boolean
  setPerson: (person: Person) => void
  person: Person
  handleSave: () => void
}

export const Form: FC<props> = ({ modal = false, setPerson, person, handleSave }) => {
  const defaultPerson = useSelector(defaultPersonSelector)
  const [validForm, setValidForm] = useState<Record<keyof Omit<Person, 'id'>, boolean>>({
    age: true,
    name: true,
    surname: true,
    city: true,
  })

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setPerson({ ...person, [name]: value })
      setValidForm({ ...validForm, [name]: true })
    },
    [setPerson, person, validForm],
  )

  const handleSubmit = useCallback(() => {
    const validate: Record<string, boolean> = {}
    !person.name && (validate.name = false)
    !person.surname && (validate.surname = false)
    !person.city && (validate.city = false)
    !person.age && (validate.age = false)
    if (!/^\d+$/g.test(person.age)) validate.age = false
    setValidForm((prevState) => ({
      ...prevState,
      ...validate,
    }))
    if (Object.keys(validate).length) return
    setPerson(defaultPerson)
    handleSave()
  }, [defaultPerson, handleSave, person, setPerson])

  const { id, ...keysPerson } = person
  void id
  return (
    <Paper sx={{ width: '280px', padding: '16px' }}>
      {(Object.keys(keysPerson) as Array<keyof Omit<Person, 'id'>>).map((key) => (
        <InputControl
          key={key}
          name={key}
          value={person[key]}
          handleChange={handleChange}
          valid={validForm[key]}
          isSelect={key === 'city'}
        />
      ))}
      <Button variant="outlined" fullWidth onClick={handleSubmit}>
        {modal ? 'Agree' : 'Add'}
      </Button>
    </Paper>
  )
}
