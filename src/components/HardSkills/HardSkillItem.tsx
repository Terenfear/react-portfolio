import { CircularProgress, useTheme } from '@mui/material'
import React, { memo, useMemo } from 'react'
import withBackground from '../CircularProgressHOCs/withBackground'
import withLabel from '../CircularProgressHOCs/withLabel'
import withStyledSvg from '../CircularProgressHOCs/withStyledSvg'

export interface HardSkillItemProps {
    label: string,
    progress: number
}

const CircularProgressLongAnimation = withStyledSvg({ transitionDuration: '1000ms' })(CircularProgress)
const CircularProgressWithRoundCaps = withStyledSvg({ strokeLinecap: 'round' })(CircularProgressLongAnimation)

const HardSkillItem = (props: HardSkillItemProps): JSX.Element => {
    const theme = useTheme()
    const { label, progress } = props

    const progressBgColor = theme.palette.primary.contrastText
    const CircularProgressWithBackground = useMemo(
        () => withBackground(progressBgColor)(CircularProgressWithRoundCaps),
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
