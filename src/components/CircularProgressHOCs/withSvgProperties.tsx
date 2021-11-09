import {
    CircularProgress,
    circularProgressClasses,
    CircularProgressProps
} from '@mui/material'
import { SvgProperties } from 'csstype'
import React from 'react'
import { getDisplayName } from '../../utils'

const withSvgProperties =
    (svgProperties: SvgProperties) =>
        (CircularProgressDelegate: typeof CircularProgress): typeof CircularProgress => {
            const WithSvgProperties = (props: CircularProgressProps): JSX.Element => (
                <CircularProgressDelegate
                    {...props}
                    sx={{
                        ...props.sx,
                        [`.${circularProgressClasses.circle}`]: {
                            ...svgProperties
                        }
                    }} />
            )
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            WithSvgProperties.displayName = `WithSvgProperties(${getDisplayName(CircularProgressDelegate as any)})`
            return WithSvgProperties
        }

export default withSvgProperties
