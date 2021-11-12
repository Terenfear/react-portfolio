import { Typography } from '@mui/material'
import React from 'react'

const placeholder = 'Ut excepteur incididunt exercitation sunt deserunt ut aliquip laborum eu.'

const TypeScale = (): JSX.Element => {
    return (
        <div>
            <Typography variant='h1'>{'h1 ' + placeholder}</Typography>
            <Typography variant='h2'>{'h2 ' + placeholder}</Typography>
            <Typography variant='h3'>{'h3 ' + placeholder}</Typography>
            <Typography variant='h4'>{'h4 ' + placeholder}</Typography>
            <Typography variant='h5'>{'h5 ' + placeholder}</Typography>
            <Typography variant='h6'>{'h6 ' + placeholder}</Typography>
            <Typography variant='subtitle1'>{'s1 ' + placeholder}</Typography>
            <Typography variant='subtitle2'>{'s2 ' + placeholder}</Typography>
            <Typography variant='body1'>{'b1 ' + placeholder}</Typography>
            <Typography variant='body2'>{'b2 ' + placeholder}</Typography>
            <Typography variant='button'>{'b ' + placeholder}</Typography>
            <Typography display='block' variant='caption'>{'c ' + placeholder}</Typography>
            <Typography display='block' variant='overline'>{'o ' + placeholder}</Typography>
        </div>
    )
}

export default TypeScale
