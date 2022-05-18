import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import makeStyles from '@mui/styles/makeStyles'
import { tablesSelector } from '../../store/Selectors'
import { TableComponent } from './TableComponent'
import { TableActions } from './TableActions'

const useStyles = makeStyles({
  wrapper: { padding: '12px' },
})

export const TablesContainer: FC = () => {
  const tables = useSelector(tablesSelector)
  const classes = useStyles()
  return (
    <>
      {tables.map((table, index) => (
        <div key={index} className={classes.wrapper}>
          <TableActions tableId={index} />
          <TableComponent tableData={table} tableId={index} />
        </div>
      ))}
    </>
  )
}
