import { Box, BoxProps, createSvgIcon, SvgIconProps, Theme, Typography, useTheme } from '@mui/material'
import { alpha } from '@mui/system'
import React, { useCallback } from 'react'
import { ReactComponent as LinkedInIcon } from './linkedin.svg'
import EmailIcon from '@mui/icons-material/Email'
import { ContactOption, ContactOptionIcon } from './contactSlice'
import {
    BUTTON_CLASS,
    HOVER_SELECTORS,
    HOVER_TRANSITION_DURATION_MS,
    HOVER_EFFECT_STYLE,
    PULSE_EFFECT_STYLE,
    PULSE_ANIMATION,
    TEXT_LINK_CLASS
} from './ContactOptionItemStyles'
import { asObjectOrUndefined, getDynamicProperty } from '../../utils/tsUtils'

const ContactOptionItem = (props: ContactOption & BoxProps): JSX.Element => {
    const theme = useTheme()
    const { name, url, icon, ...boxProps } = props

    const desktopMediaQuery = theme.breakpoints.isDesktopCSSMediaQuery
    const oldDMQ = boxProps.sx ?
        asObjectOrUndefined(
            getDynamicProperty(boxProps.sx, desktopMediaQuery)
        ) :
        undefined

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
                    ...oldDMQ,
                    p: 4,
                }
            }}>
            <Box sx={{
                display: 'inline-block',
                textAlign: 'center',
                cursor: 'pointer',
                ...HOVER_SELECTORS
            }}
                role='link'
                aria-label={name}
                tabIndex={0}
                onKeyDown={openLink}
                onClick={openLink}>
                <Box className={BUTTON_CLASS}
                    sx={{
                        width: (t) => t.spacing(20),
                        height: (t) => t.spacing(20),
                        mb: 2,
                        lineHeight: 0,
                        borderRadius: '50%',
                        p: 5,
                        boxShadow: '0 3px 9px #00000080',
                        color: 'primary.contrastText',
                        bgcolor: 'primary.main',
                        position: 'relative',
                        transition: `color ${HOVER_TRANSITION_DURATION_MS}ms`,
                        ['::before']: { ...HOVER_EFFECT_STYLE },
                        ['::after']: { ...PULSE_EFFECT_STYLE },
                        ...PULSE_ANIMATION,
                    }}>
                    <MemoizedIcon iconType={icon}
                        sx={{
                            zIndex: 1,
                            width: '100%',
                            height: '100%',
                            position: 'relative' // make icon rendered on top of ::before
                        }} />
                </Box>
                <Typography variant='h6' sx={{
                    textDecoration: 'underline',
                    textDecorationColor: (t) => alpha(t.palette.text.secondary, 0.4)
                }}
                    className={TEXT_LINK_CLASS}>{name}</Typography>
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

export default ContactOptionItem
