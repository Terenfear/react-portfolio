import { Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import TextImagePortfolioItem from '../PortfolioItem/TextImagePortfolioItem'
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
                    {
                        info.split('\n')
                            .filter(t => t.length > 0)
                            .map(chunkOfText => (
                                // eslint-disable-next-line react/jsx-key
                                <Typography variant='body1' paragraph>{chunkOfText}</Typography>
                            ))
                    }
                </>
            }
        />
    )
}

export default HardSkills
