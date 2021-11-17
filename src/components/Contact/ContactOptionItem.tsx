import { Box, BoxProps, createSvgIcon, SvgIconProps, Typography, useTheme } from '@mui/material'
import { alpha } from '@mui/system'
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

    const openLink = useCallback((e: { type?: string, key?: string }) => {
        if (e.type === 'click' || e.key === 'Enter') {
            window.open(url)
        }
    }, [url])

    return (
        <Box {...boxProps}
            sx={{
                ...boxProps.sx,
                textAlign: 'center',
                p: 2,
                [desktopMediaQuery]: {
                    ...castedDMQ,
                    p: 4,
                }
            }}>
            <Box sx={{
                display: 'inline-block',
                textAlign: 'center',
                cursor: 'pointer',
                ['&:hover > h6, &:focus > h6']: {
                    textDecorationColor: 'inherit'
                },
                [`&:hover .${HOVER_BUTTON_CLASS}, &:focus .${HOVER_BUTTON_CLASS}`]: {
                    maskSize: '100% 100%',
                    // ['-webkit-mask-size']: '100% 100%'
                    // color: '#ff0000'
                },
            }}
                role='link'
                aria-label={name}
                tabIndex={0}
                onKeyDown={openLink}
                onClick={openLink}>
                <Box sx={{
                    width: (t) => t.spacing(20),
                    height: (t) => t.spacing(20),
                    mb: 2,
                    position: 'relative',
                    lineHeight: 0
                }}>
                    <Box sx={{
                        ...COMMON_BUTTON_SX_PROPS,
                        color: 'primary.contrastText',
                        bgcolor: 'primary.main',
                        position: 'relative',
                        ['::after']: {
                            content: '""',
                            position: 'absolute',
                            borderRadius: '50%',
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                            boxShadow: (t) => `0 0 30px 4px ${t.palette.primary.dark}`,
                            opacity: 0,
                            animation: 'pulse 1s ease-in-out infinite alternate'
                        },
                        ['@keyframes pulse']: {
                            ['0%']: {
                                opacity: 0
                            },
                            ['100%']: {
                                opacity: 1
                            }
                        }
                    }}>
                        <MemoizedIcon iconType={icon}
                            sx={{
                                width: '100%',
                                height: '100%'
                            }} />
                    </Box>
                    <Box sx={{
                        ...COMMON_BUTTON_SX_PROPS,
                        color: 'common.white',
                        bgcolor: 'primary.light',
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        // display: 'none',
                        mask: 'radial-gradient(circle closest-side,#fff 99%,transparent 100%) center/0% 0% no-repeat',
                        transition: '300ms ease-out'
                    }}
                        className={HOVER_BUTTON_CLASS}>
                        <MemoizedIcon iconType={icon}
                            sx={{
                                width: '100%',
                                height: '100%'
                            }} />
                    </Box>
                </Box>
                <Typography variant='h6' sx={{
                    textDecoration: 'underline',
                    textDecorationColor: (t) => alpha(t.palette.text.secondary, 0.4)
                }}>{name}</Typography>
            </Box>
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

const HOVER_BUTTON_CLASS = 'hoverButton'
const COMMON_BUTTON_SX_PROPS = {
    borderRadius: '50%',
    p: 5,
    boxShadow: '0 3px 9px #00000080',
}

export default ContactOptionItem
