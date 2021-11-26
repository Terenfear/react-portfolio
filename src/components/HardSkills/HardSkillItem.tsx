import { CircularProgress, useTheme } from '@mui/material'
import React, { memo, useMemo } from 'react'
import withBackground from '../CircularProgressHOCs/withBackground'
import withLabel from '../CircularProgressHOCs/withLabel'
import withStyledSvg from '../CircularProgressHOCs/withStyledSvg'
import { CircularProgressWithRoundCaps } from '../utils/CircularProgressWithRoundCaps'

export interface HardSkillItemProps {
    label: string,
    progress: number
}

const CircularProgressLongAnimation =
    withStyledSvg({ transitionDuration: '1000ms' })(CircularProgressWithRoundCaps)

const HardSkillItem = (props: HardSkillItemProps): JSX.Element => {
    const theme = useTheme()
    const { label, progress } = props

    const progressBgColor = theme.palette.primary.contrastText
    const CircularProgressWithBackground = useMemo(
        () => withBackground(progressBgColor)(CircularProgressLongAnimation),
        [progressBgColor]
    )
    const CircularProgressWithLabel = useMemo(
        () => withLabel(label)(CircularProgressWithBackground),
        [label, CircularProgressWithBackground]
    )

    return (
        <CircularProgressWithLabel
            variant='determinate'
            size='100%'
            value={progress} />
    )
}

export default memo(HardSkillItem)
