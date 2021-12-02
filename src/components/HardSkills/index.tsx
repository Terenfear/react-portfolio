import { Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { MultilineTextTypographiesList } from '../../utils/reactUtils'
import TextImagePortfolioItem from '../PortfolioItems/TextImagePortfolioItem'
import HardSkillItemList from './HardSkillItemList'
import { selectHardSkillInfo } from './hardSkillsSlice'

const HardSkills: React.FC = () => {
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
