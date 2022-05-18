import React, { useCallback, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import makeStyles from '@mui/styles/makeStyles'
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { Person } from '../../store/types/appState'
import { setEditableItem, updateTable } from '../../store/actions'

const useStyles = makeStyles({
  table: {
    '& .MuiTableCell-root': {
      padding: '0 12px',
      height: '32px',
      minWidth: '80px',
    },
  },
})

type props = {
  tableId: number
  tableData: Person[]
}

export const TableComponent: React.FC<props> = ({ tableId, tableData }) => {
  const dispatch = useDispatch()
  const classes = useStyles()

  const handleDrop = useCallback(
    (id: number) => {
      dispatch(
        updateTable({
          tableId,
          persons: tableData.filter((e) => e.id !== id),
        }),
      )
    },
    [dispatch, tableData, tableId],
  )

  const handleEdit = useCallback(
    (personId: number) => {
      dispatch(setEditableItem({ tableId, personId }))
    },
    [dispatch, tableId],
  )

  const columns: Array<keyof Person> = ['name', 'surname', 'age', 'city']

  const addedRow = useMemo(() => {
    const row: null[] = []
    while (row.length < 6 - tableData.length) {
      row.push(null)
    }
    return row
  }, [tableData.length])

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 236 }}>
        <Table stickyHeader className={classes.table}>
          <TableHead>
            <TableRow>
              {columns.map((value, index) => (
                <TableCell key={index} align={'left'}>
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </TableCell>
              ))}
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {[...tableData, ...addedRow].map((row, index) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                {columns.map((value, index) => (
                  <TableCell key={index} align={'left'}>
                    {row && row[value]}
                  </TableCell>
                ))}
                <TableCell key={index} align={'right'}>
                  {row && (
                    <>
                      <Button color={'primary'} size={'small'} variant={'text'} onClick={() => handleEdit(row.id)}>
                        Edit
                      </Button>
                      <Button color={'error'} size={'small'} variant={'text'} onClick={() => handleDrop(row.id)}>
                        Delete
                      </Button>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}
