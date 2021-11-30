import { Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import TextImagePortfolioItem from '../PortfolioItem/TextImagePortfolioItem'
import { MultilineTextTypographiesList } from '../../utils/reactUtils'
import HardSkillItemList from './HardSkillItemList'
import { selectHardSkillInfo } from './hardSkillsSlice'

const HardSkills = (): JSX.Element => {
    const { info, title } = useSelector(selectHardSkillInfo)
    return (
        <TextImagePortfolioItem
            imageAreaChildren={
                <HardSkillItemList width='100%' />
            }
            textAreaChildren={
                <>
                    <Typography variant='h3' mb={3}>{title}</Typography>
                    <MultilineTextTypographiesList multilineText={info}
                        variant='body1'
                        paragraph />
                </>
            }
        />
    )
}

export default HardSkills
