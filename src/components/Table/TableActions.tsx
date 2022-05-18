import React, { FC, useCallback } from 'react'
import { updateTables } from '../../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { tablesSelector } from '../../store/Selectors'
import { Button, IconButton } from '@mui/material'
import { Close } from '@mui/icons-material'
import makeStyles from '@mui/styles/makeStyles'

type props = {
  tableId: number
}

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingBottom: '12px',
  },
})

export const TableActions: FC<props> = ({ tableId }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const tables = useSelector(tablesSelector)

  const handleDrop = useCallback(() => {
    const newTables = [...tables]
    newTables.splice(tableId, 1)
    dispatch(updateTables(newTables))
  }, [dispatch, tableId, tables])

  const handleCopy = useCallback(() => {
    const newTables = [...tables]
    newTables.splice(tableId + 1, 0, tables[tableId])
    dispatch(updateTables(newTables))
  }, [dispatch, tableId, tables])

  return (
    <div className={classes.container}>
      <Button variant={'contained'} size={'medium'} onClick={() => handleCopy()}>
        Copy table
      </Button>
      {tableId !== 0 && (
        <IconButton color="error" component="span" onClick={() => handleDrop()}>
          <Close />
        </IconButton>
      )}
    </div>
  )
}
