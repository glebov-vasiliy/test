import React, { FC, useCallback, useEffect, useState } from 'react'
import { Dialog } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { saveItem, setEditableItem } from '../../store/actions'
import { editablePersonSelector } from '../../store/Selectors'
import { Person } from '../../store/types/appState'

import { Form } from '../Form'

export const ModalDialog: FC = () => {
  const dispatch = useDispatch()
  const editablePerson = useSelector(editablePersonSelector)
  const [person, setPerson] = useState<Person | undefined>()

  const handleClose = useCallback(() => {
    dispatch(setEditableItem(undefined))
  }, [dispatch])

  const handleSave = useCallback(() => {
    if (editablePerson && person) {
      dispatch(saveItem({ tableId: editablePerson.tableId, person }))
    }
  }, [dispatch, editablePerson, person])

  useEffect(() => {
    setPerson(editablePerson?.person)
  }, [editablePerson])

  return (
    <Dialog open={!!editablePerson} onClose={handleClose}>
      {person ? <Form modal={true} person={person} setPerson={setPerson} handleSave={handleSave} /> : <></>}
    </Dialog>
  )
}
