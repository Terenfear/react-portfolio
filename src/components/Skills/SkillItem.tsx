import { CircularProgress, useTheme } from '@mui/material'
import React, { memo, useMemo } from 'react'
import withBackground from '../CircularProgressHOCs/withBackground'
import withLabel from '../CircularProgressHOCs/withLabel'
import withSvgProperties from '../CircularProgressHOCs/withSvgProperties'

interface SkillItemProps {
    label: string,
    progress: number
}

const CircularProgressWithRoundCaps = withSvgProperties({ strokeLinecap: 'round' })(CircularProgress)

const SkillItem = (props: SkillItemProps): JSX.Element => {
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

export default memo(SkillItem)
