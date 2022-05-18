import React, { FC } from 'react'
import makeStyles from '@mui/styles/makeStyles'
import { TablesContainer } from './components/Table'
import { FormsContainer } from './components/Form'
import { ModalDialog } from './components/Modal'

const useStyles = makeStyles({
  container: {
    width: '100%',
    maxWidth: '692px',
    margin: '0 auto',
  },
})

const App: FC = () => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.container}>
        <FormsContainer />
        <TablesContainer />
      </div>
      <ModalDialog />
    </>
  )
}

export default App
