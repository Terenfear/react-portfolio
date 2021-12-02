import {
    CircularProgress,
    circularProgressClasses,
    CircularProgressProps
} from '@mui/material'
import { SxProps } from '@mui/system'
import React from 'react'
import { getDisplayName } from '../../utils/reactUtils'
import { asRecordOrUndefined, getDynamicProperty } from '../../utils/tsUtils'

const svgCircleClass = `.${circularProgressClasses.circle}`

const withStyledSvg =
    (sxProperties: SxProps) =>
        (CircularProgressDelegate: typeof CircularProgress): typeof CircularProgress => {
            const WithStyledSvg = (props: CircularProgressProps): JSX.Element => {
                const oldSvgCircle = props.sx &&
                    asRecordOrUndefined(
                        getDynamicProperty(props.sx, svgCircleClass)
                    )
                return (
                    <CircularProgressDelegate
                        {...props}
                        sx={{
                            ...props.sx,
                            [svgCircleClass]: {
                                ...oldSvgCircle,
                                ...sxProperties,
                            }
                        }} />
                )
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            WithStyledSvg.displayName = `WithStyledSvg(${getDisplayName(CircularProgressDelegate as any)})`
            return WithStyledSvg
        }

export const CircularProgressWithRoundCaps =
    withStyledSvg({ strokeLinecap: 'round' })(CircularProgress)

export default withStyledSvg
