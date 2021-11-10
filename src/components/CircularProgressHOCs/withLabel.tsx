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
                const textOffsetKey = '--textOffset'
                const textOffsetVar = `var(${textOffsetKey})`
                // TODO(Nov 02, 2021): make label accessible
                return (
                    <Box position='relative'>
                        <CircularProgressDelegate {...props} />
                        <Box sx={{
                            position: 'absolute',
                            [textOffsetKey as string]: textOffset,
                            top: textOffsetVar,
                            right: textOffsetVar,
                            bottom: textOffsetVar,
                            left: textOffsetVar,
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
                                    fontSize: '0.8rem',
                                    lineHeight: '1.8rem',
                                    [theme.breakpoints.up('sm')]: {
                                        fontSize: '1.25rem'
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
