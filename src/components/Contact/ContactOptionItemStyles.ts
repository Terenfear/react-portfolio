import { Theme } from '@mui/material'

export const BUTTON_CLASS = 'button'
export const TEXT_LINK_CLASS = 'textLink'
export const HOVER_TRANSITION_DURATION_MS = 300

export const HOVER_SELECTORS = {
    [`&:hover .${TEXT_LINK_CLASS}, &:focus .${TEXT_LINK_CLASS}`]: {
        textDecoration: 'underline'
    },
    [`&:hover .${BUTTON_CLASS}, &:focus .${BUTTON_CLASS}`]: {
        color: 'common.white'
    },
    [`&:hover .${BUTTON_CLASS}::before, &:focus .${BUTTON_CLASS}::before`]: {
        opacity: 1
    },
}

const BUTTON_PSEUDO_ELEMENT_STYLE = {
    content: '""',
    position: 'absolute',
    borderRadius: '50%',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
} as const

export const HOVER_EFFECT_STYLE = {
    ...BUTTON_PSEUDO_ELEMENT_STYLE,
    opacity: 0,
    background: 'radial-gradient(circle closest-side, #ffffff80 30%,transparent 100%)',
    transition: `opacity ${HOVER_TRANSITION_DURATION_MS}ms`
} as const

export const PULSE_ANIMATION = {
    ['@keyframes pulse']: {
        ['0%']: {
            opacity: 0
        },
        ['100%']: {
            opacity: 1
        }
    }
}

export const PULSE_EFFECT_STYLE = {
    ...BUTTON_PSEUDO_ELEMENT_STYLE,
    boxShadow: (t: Theme): string => `0 0 30px 4px ${t.palette.primary.dark}`,
    opacity: 0,
    animation: 'pulse 1s ease-in-out infinite alternate',
} as const
