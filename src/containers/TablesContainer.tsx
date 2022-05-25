import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import makeStyles from '@mui/styles/makeStyles'
import { tablesSelector } from '../store/Selectors'
import { TableComponent } from '../components/Table'
import { TableActions } from '../components/Table'

const useStyles = makeStyles({
  wrapper: { padding: '12px' },
})

export const TablesContainer: FC = () => {
  const tables = useSelector(tablesSelector)
  const classes = useStyles()
  return (
    <>
      {tables.map((table, index) => (
        <div key={uuidv4()} className={classes.wrapper}>
          <TableActions tableId={index} />
          <TableComponent tableData={table} tableId={index} />
        </div>
      ))}
    </>
  )
}
