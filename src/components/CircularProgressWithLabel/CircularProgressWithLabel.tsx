import {
    Box,
    BoxProps,
    CircularProgress,
    circularProgressClasses,
    CircularProgressProps,
    Typography,
    useTheme
} from '@mui/material'
import { Property } from 'csstype'
import React, { memo } from 'react'

export interface CircularProgressWithLabelProps extends BoxProps {
    circularProgressProps: CircularProgressProps,
    progressBackgroundColor?: Property.Color,
    label: string
}

const CircularProgressWithLabel = (
    props: CircularProgressWithLabelProps
): JSX.Element => {
    const theme = useTheme()
    const {
        circularProgressProps: { variant, value, ...progressProps },
        label,
        progressBackgroundColor,
        ...boxProps
    } = props
    let progress: number | undefined
    if (variant === 'determinate') {
        progress = value ? sanitizeProgress(value) : value
    }
    const textOffset = calcTextOffset(progressProps.thickness)
    const textOffsetKey = '--textOffset'
    const textOffsetValue = `var(${textOffsetKey})`
    // TODO(Nov 02, 2021): make progress accessible
    return (
        <Box {...boxProps} position='relative' display='flex'>
            {
                progressBackgroundColor ? (
                    <CircularProgress
                        {...progressProps}
                        variant='determinate'
                        value={100}
                        sx={{
                            ...progressProps.sx,
                            color: progressBackgroundColor,
                            // TODO(Nov 02, 2021): fix incorrect resizing
                            position: 'absolute'
                        }}
                    />
                ) : undefined
            }
            <CircularProgress
                {...progressProps}
                sx={{
                    ...progressProps.sx,
                    [`.${circularProgressClasses.circle}`]: {
                        strokeLinecap: 'round'
                    }
                }}
                variant={variant}
                value={progress} />
            <Box sx={{
                position: 'absolute',
                [textOffsetKey as string]: textOffset,
                top: textOffsetValue,
                right: textOffsetValue,
                bottom: textOffsetValue,
                left: textOffsetValue,
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
                        [theme.breakpoints.up('md')]: {
                            fontSize: '1.25rem'
                        }
                    }}>
                    {label}
                </Typography>
            </Box>
        </Box>
    )
}

const sanitizeProgress = (progress: number): number => {
    if (progress < 0) return 0
    if (progress > 100) return 100
    if (progress < 1 && progress > 0) return progress * 100
    return progress
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


export default memo(CircularProgressWithLabel)
