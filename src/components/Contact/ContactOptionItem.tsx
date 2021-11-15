import { Box, BoxProps, createSvgIcon, SvgIconProps, Link, useTheme } from '@mui/material'
import React, { useCallback } from 'react'
import { ReactComponent as LinkedInIcon } from './linkedin.svg'
import EmailIcon from '@mui/icons-material/Email'
import { ContactOption, ContactOptionIcon } from './contactSlice'

const ContactOptionItem = (props: ContactOption & BoxProps): JSX.Element => {
    const theme = useTheme()
    const { name, url, icon, ...boxProps } = props

    const oldSx: Record<string, unknown> | undefined | null = boxProps.sx
    const desktopMediaQuery = theme.breakpoints.up('md')
    const oldDMQ = oldSx?.[desktopMediaQuery]
    let castedDMQ
    if (typeof oldDMQ === 'object' && oldDMQ !== null) {
        castedDMQ = oldDMQ
    }

    const openLink = useCallback(() => window.open(url), [url])

    return (
        <Box {...boxProps}
            sx={{
                ...boxProps.sx,
                p: 2,
                [desktopMediaQuery]: {
                    ...castedDMQ,
                    p: 4,
                }
            }}>
            <Box sx={{
                width: (t) => t.spacing(20),
                height: (t) => t.spacing(20),
                borderRadius: '50%',
                p: 5,
                mx: 'auto',
                mb: 2,
                color: 'primary.contrastText',
                bgcolor: 'primary.main',
                cursor: 'pointer',
                position: 'relative',
                ['::after']: {
                    content: '""',
                    position: 'absolute',
                    borderRadius: '50%',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    boxShadow: (t) => `0 0 30px 0 ${t.palette.primary.dark}`,
                    opacity: 0,
                    animation: 'pulse 1s alternate infinite'
                },
                ['@keyframes pulse']: {
                    ['0%']: {
                        opacity: 0
                    },
                    ['100%']: {
                        opacity: 1
                    }
                }
            }}
                onClick={openLink}>
                <MemoizedIcon iconType={icon}
                    sx={{
                        width: '100%',
                        height: '100%'
                    }} />
            </Box>
            <Link variant='h6'
                href={url}
                sx={{
                    textAlign: 'center',
                    display: 'block'
                }}>{name}</Link>
        </Box >
    )
}

const Icon = (props: { iconType?: ContactOptionIcon } & SvgIconProps): JSX.Element => {
    const { iconType, ...svgIconProps } = props
    let Component: React.FC
    switch (iconType) {
        case (ContactOptionIcon.LinkedIn):
            Component = createSvgIcon(<LinkedInIcon />, iconType)
            break
        default:
            Component = EmailIcon
    }
    return <Component {...svgIconProps} />

}
const MemoizedIcon = React.memo(Icon)

export default ContactOptionItem
