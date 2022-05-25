import React, { FC, useCallback, useState } from 'react'
import makeStyles from '@mui/styles/makeStyles'
import { useDispatch, useSelector } from 'react-redux'
import { defaultPersonSelector } from '../store/Selectors'
import { Person } from '../store/types/appState'
import { addItem } from '../store/actions'
import { Form } from '../components/Form'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  wrapper: {
    padding: '12px',
  },
})

export const FormsContainer: FC = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const defaultPerson = useSelector(defaultPersonSelector)
  const [person, setPerson] = useState<Person>(defaultPerson)

  const handleSave = useCallback(() => {
    dispatch(addItem(person))
  }, [dispatch, person])

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Form person={person} setPerson={setPerson} handleSave={handleSave} />
      </div>
      <div className={classes.wrapper}>
        <Form person={person} setPerson={setPerson} handleSave={handleSave} />
      </div>
    </div>
  )
}
