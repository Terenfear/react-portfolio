import {
    CircularProgress,
    circularProgressClasses,
    CircularProgressProps
} from '@mui/material'
import { SxProps } from '@mui/system'
import React from 'react'
import { getDisplayName } from '../../utils/reactUtils'

const svgCircleClass = `.${circularProgressClasses.circle}`

const withStyledSvg =
    (sxProperties: SxProps) =>
        (CircularProgressDelegate: typeof CircularProgress): typeof CircularProgress => {
            const WithStyledSvg = (props: CircularProgressProps): JSX.Element => {
                const oldSx: Record<string, unknown> | undefined | null = props.sx
                const oldSvgCircle = oldSx?.[svgCircleClass]
                let castedOldSvgCircle
                if (typeof oldSvgCircle === 'object' && oldSvgCircle !== null) {
                    castedOldSvgCircle = oldSvgCircle
                }
                return (
                    <CircularProgressDelegate
                        {...props}
                        sx={{
                            ...props.sx,
                            [svgCircleClass]: {
                                ...castedOldSvgCircle,
                                ...sxProperties,
                            }
                        }} />
                )
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            WithStyledSvg.displayName = `WithStyledSvg(${getDisplayName(CircularProgressDelegate as any)})`
            return WithStyledSvg
        }

export default withStyledSvg
