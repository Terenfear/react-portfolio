/* eslint-disable @typescript-eslint/explicit-function-return-type */
import ForumIcon from '@mui/icons-material/Forum'
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices'
import TranslateIcon from '@mui/icons-material/Translate'
import { Box, BoxProps, SvgIconProps, Typography, useTheme } from '@mui/material'
import React from 'react'
import { asRecordOrUndefined, getDynamicProperty } from '../../utils/tsUtils'
import { SoftSkill, SoftSkillIcon } from './softSkillsSlice'

const SoftSkillItem: React.FC<SoftSkill & BoxProps> = (
    { name, description, icon, ...boxProps }
) => {
    const theme = useTheme()

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

const Icon: React.FC<{ iconType: SoftSkillIcon } & SvgIconProps> = (
    { iconType, ...svgIconProps }
) => {
    let Component: React.FC
    switch (iconType) {
        case (SoftSkillIcon.Communication):
            Component = ForumIcon
            break
        case (SoftSkillIcon.Language):
            Component = TranslateIcon
            break
        default:
            Component = ImportantDevicesIcon
    }
    return <Component {...svgIconProps} />

}
const MemoizedIcon = React.memo(Icon)

const SHADOW_COLOR = '#0000001c'
const ITEM_COLOR = '#00000028'

export default SoftSkillItem
