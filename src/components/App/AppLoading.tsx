import { Stack } from '@mui/material'
import React from 'react'
import { CircularProgressWithRoundCaps } from '../CircularProgressHOCs/withStyledSvg'

const AppLoading: React.FC = () => {
    return (
        <Stack sx={{
            height: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'background.paper'
        }}>
            <CircularProgressWithRoundCaps size={150} variant='indeterminate' />
        </Stack>
    )
}

export default AppLoading
