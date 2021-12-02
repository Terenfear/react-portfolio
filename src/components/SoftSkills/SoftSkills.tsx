import React from 'react'
import { useSelector } from 'react-redux'
import TitledGridPortfolioItem from '../PortfolioItem/TitledGridPortfolioItem'
import SoftSkillItem from './SoftSkillItem'
import { selectSoftSkillTitle, selectSoftSkillValues, SoftSkill } from './softSkillsSlice'

const SoftSkills = (): JSX.Element => {
    const title = useSelector(selectSoftSkillTitle)
    const skills = useSelector(...selectSoftSkillValues)
    return <TitledGridPortfolioItem title={title}
        items={skills}
        gridItemComponent={SoftSkillItem}
        keySelector={keySelector}
        maxColumnCount={3} />
}

const keySelector = (item: SoftSkill): string => item.name

export default SoftSkills
