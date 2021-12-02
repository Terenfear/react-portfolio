import {
    Box,
    CircularProgress,
    CircularProgressProps,
    Typography,
    useTheme
} from '@mui/material'
import React, { useMemo } from 'react'
import { getDisplayName } from '../../utils/reactUtils'

const withLabel =
    (label: string) =>
        (CircularProgressDelegate: typeof CircularProgress): typeof CircularProgress => {
            const WithLabel = (props: CircularProgressProps): JSX.Element => {
                const theme = useTheme()
                const textOffset = useMemo(
                    () => calcTextOffset(props.thickness),
                    [props.thickness]
                )
                // TODO(Nov 02, 2021): make label accessible
                return (
                    <Box position='relative'>
                        <CircularProgressDelegate {...props} />
                        <Box sx={{
                            position: 'absolute',
                            ['--textOffset' as string]: textOffset,
                            top: 'var(--textOffset)',
                            right: 'var(--textOffset)',
                            bottom: 'var(--textOffset)',
                            left: 'var(--textOffset)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Typography
                                variant='caption'
                                sx={{
                                    ...theme.typography.caption,
                                    textAlign: 'center',
                                    color: theme.typography.h1.color,
                                    fontSize: 'clamp(0.2rem, 0.2rem + 2vw, 1.25rem)',
                                    lineHeight: 1.2,
                                    [theme.breakpoints.isDesktopCSSMediaQuery]: {
                                        fontSize: 'clamp(0.2rem, 0.2rem + 1vw, 1.25rem)',
                                    }
                                }}>
                                {label}
                            </Typography>
                        </Box>
                    </Box>
                )
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            WithLabel.displayName = `WithLabel(${getDisplayName(CircularProgressDelegate as any)})`
            return WithLabel
        }

// TODO(Nov 04, 2021): Is all that really needed?
const calcTextOffset = (progressThickness = 3.6): string => {
    // TODO(Nov 04, 2021): figure out the right number?
    progressThickness *= 3 // work-around for the strange SVG thickness
    const halfTextDiag = `calc(50% - ${progressThickness}px)`
    const halfTextSide = `calc(${halfTextDiag} / ${Math.sqrt(2)})`
    const gapBtwnCircleAndText = `calc(${halfTextDiag} - ${halfTextSide})`
    return `calc(${gapBtwnCircleAndText} + ${progressThickness}px)`
}

export default withLabel
