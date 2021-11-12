import { Box, BoxProps, Typography, useTheme } from '@mui/material'
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices'
import React from 'react'
import { SoftSkill } from './softSkillsSlice'

const SoftSkillItem = (props: SoftSkill & BoxProps): JSX.Element => {
    const theme = useTheme()
    const { name, description, ...boxProps } = props
    const oldSx: Record<string, unknown> | undefined | null = boxProps.sx
    const desktopMediaQuery = theme.breakpoints.up('md')
    const oldDMQ = oldSx?.[desktopMediaQuery]
    let castedDMQ
    if (typeof oldDMQ === 'object' && oldDMQ !== null) {
        castedDMQ = oldDMQ
    }
    return (
        <Box {...boxProps}
            sx={{
                ...boxProps.sx,
                p: 2,
                border: (t) => `2px solid ${t.palette.primary.main}`,
                borderRadius: 4,
                [desktopMediaQuery]: {
                    ...castedDMQ,
                    p: 4
                }
            }}>
            <Box sx={{
                width: (t) => t.spacing(7),
                height: (t) => t.spacing(7),
                borderRadius: '50%',
                p: 1.3,
                mx: 'auto',
                mb: 2,
                color: 'primary.contrastText',
                bgcolor: 'primary.main'
            }}>
                <ImportantDevicesIcon sx={{
                    width: '100%',
                    height: '100%'
                }} />
            </Box>
            <Typography variant='h5' textAlign='center' mb={2}>{name}</Typography>
            <Typography variant='subtitle1'>{description}</Typography>
        </Box>
    )
}

export default SoftSkillItem
