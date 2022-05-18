import React, { FC } from 'react'
import makeStyles from '@mui/styles/makeStyles'
import { FormControl, FormHelperText, MenuItem, TextField, Theme } from '@mui/material'

type StyleProps = {
  valid: boolean
}

const useStyles = makeStyles<Theme, StyleProps>({
  root: {
    '& .MuiFormHelperText-root': {
      color: ({ valid }) => (valid ? 'transparent' : 'rgb(211, 47, 47)'),
    },
  },
})

type props = {
  name: string
  value: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  isSelect?: boolean
  valid: boolean
}

export const InputControl: FC<props> = ({ name, value, handleChange, isSelect, valid }) => {
  const classes = useStyles({ valid })
  return (
    <FormControl variant="outlined" classes={classes} fullWidth>
      <TextField
        select={isSelect}
        size="small"
        fullWidth
        name={name}
        label={name.charAt(0).toUpperCase() + name.slice(1)}
        value={value}
        onChange={handleChange}
      >
        {isSelect &&
          ['Riga', 'Daugavpils', 'Jurmala', 'Ventspils'].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
      </TextField>
      <FormHelperText>Bad {name}</FormHelperText>
    </FormControl>
  )
}
