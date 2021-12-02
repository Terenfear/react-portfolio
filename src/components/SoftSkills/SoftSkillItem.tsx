import { Box, BoxProps, SvgIconProps, Typography, useTheme } from '@mui/material'
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices'
import ForumIcon from '@mui/icons-material/Forum'
import TranslateIcon from '@mui/icons-material/Translate'
import React from 'react'
import { SoftSkill, SoftSkillIcon } from './softSkillsSlice'
import { asRecordOrUndefined, getDynamicProperty } from '../../utils/tsUtils'

const SoftSkillItem = (props: SoftSkill & BoxProps): JSX.Element => {
    const theme = useTheme()
    const { name, description, icon, ...boxProps } = props

    const desktopMediaQuery = theme.breakpoints.isDesktopCSSMediaQuery
    const oldDMQ = boxProps.sx &&
        asRecordOrUndefined(
            getDynamicProperty(boxProps.sx, desktopMediaQuery)
        )
    return (
        <Box {...boxProps}
            sx={{
                ...boxProps.sx,
                p: 2,
                border: (t) => `2px solid ${t.palette.primary.main}`,
                background: ITEM_COLOR,
                borderRadius: 4,
                [desktopMediaQuery]: {
                    ...oldDMQ,
                    p: 4,
                    minWidth: '350px'
                }
            }}>
            <Box sx={{
                width: (t) => t.spacing(14),
                height: (t) => t.spacing(14),
                borderRadius: '50%',
                p: 2.8,
                mx: 'auto',
                mb: 2,
                color: 'primary.contrastText',
                bgcolor: 'primary.main',
                boxShadow: `inset 0px 0px 6px 12px ${SHADOW_COLOR}`
            }}>
                <MemoizedIcon iconType={icon}
                    sx={{
                        width: '100%',
                        height: '100%'
                    }} />
            </Box>
            <Typography variant='h5' textAlign='center' mb={2}>{name}</Typography>
            <Typography variant='subtitle1'>{description}</Typography>
        </Box>
    )
}

const Icon = (props: { iconType: SoftSkillIcon } & SvgIconProps): JSX.Element => {
    const { iconType, ...svgIconProps } = props
    let Component: React.FC
    switch (iconType) {
        case (SoftSkillIcon.Devices):
            Component = ImportantDevicesIcon
            break
        case (SoftSkillIcon.Communication):
            Component = ForumIcon
            break
        case (SoftSkillIcon.Language):
            Component = TranslateIcon
            break
    }
    return <Component {...svgIconProps} />

}
const MemoizedIcon = React.memo(Icon)

const SHADOW_COLOR = '#0000001c'
const ITEM_COLOR = '#00000028'

export default SoftSkillItem
