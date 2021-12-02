import {
    Box,
    CircularProgress,
    CircularProgressProps
} from '@mui/material'
import { Property } from 'csstype'
import React from 'react'
import { getDisplayName } from '../../utils/reactUtils'

const withBackground =
    (progressBackgroundColor?: Property.Color) =>
        (CircularProgressDelegate: typeof CircularProgress): typeof CircularProgress => {
            const WithBackground = (props: CircularProgressProps): JSX.Element => {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const { id, ...propsWithoutId } = props
                return (
                    progressBackgroundColor ? (
                        // lineHeight=0 fixes a wrong background positioning, caused
                        // by an automatic bottom padding of CircularProgress, in turn
                        // caused by the fact that it's a span which reserves some
                        // space for descender chars
                        <Box position='relative'
                            lineHeight={0}>
                            <CircularProgress
                                {...propsWithoutId}
                                variant='determinate'
                                value={100}
                                aria-hidden={true}
                                sx={{
                                    ...propsWithoutId.sx,
                                    color: progressBackgroundColor,
                                    position: 'absolute'
                                }} />
                            <CircularProgressDelegate {...props} />
                        </Box>
                    ) : <CircularProgressDelegate {...props} />
                )
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            WithBackground.displayName = `WithBackground(${getDisplayName(CircularProgressDelegate as any)})`
            return WithBackground
        }

export default withBackground
