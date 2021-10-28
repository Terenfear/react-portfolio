import { BoxProps, useTheme } from '@mui/material'
import React, { memo } from 'react'
import CircularProgressWithLabel from '../CircularProgressWithLabel/CircularProgressWithLabel'

interface SkillItemProps extends BoxProps {
    label: string,
    progress: number
}

const SkillItem = (props: SkillItemProps): JSX.Element => {
    const theme = useTheme()
    const { label, progress, ...boxProps } = props
    return (
        <CircularProgressWithLabel
            {...boxProps}
            circularProgressProps={{
                variant: 'determinate',
                value: progress,
                size: '100%',
                sx: {
                    maxWidth: theme.spacing(16),
                    maxHeight: theme.spacing(16)
                }
            }}
            label={label}
            progressBackgroundColor={theme.palette.primary.contrastText} />
    )
}

export default memo(SkillItem)
