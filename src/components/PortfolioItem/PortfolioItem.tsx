import { Box, useTheme } from '@mui/material'
import React from 'react'


const PortfolioItem = ({ children }: React.PropsWithChildren<unknown>): JSX.Element => {
    const theme = useTheme()
    return (
        <Box sx={{
            display: 'grid',
            gap: '1rem',
            gridTemplateColumns: 'minmax(1rem, 5fr) minmax(auto, 90fr) minmax(1rem, 5fr)',
            [theme.breakpoints.up('md')]: {
                gridTemplateColumns: 'minmax(1rem, 1fr) minmax(auto, 4fr) minmax(1rem, 1fr)',
            }
        }}>
            <div />
            {children}
            <div />
        </Box>
    )
}

export default PortfolioItem
