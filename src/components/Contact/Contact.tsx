import React from 'react'
import { useSelector } from 'react-redux'
import TitledGridPortfolioItem from '../PortfolioItem/TitledGridPortfolioItem'
import ContactOptionItem from './ContactOptionItem'
import { ContactOption, selectContactOptions, selectContactTitle } from './contactSlice'

const Contact = (): JSX.Element => {
    const title = useSelector(selectContactTitle)
    const contacts = useSelector(...selectContactOptions)
    return <TitledGridPortfolioItem title={title}
        items={contacts}
        gridItemComponent={ContactOptionItem}
        keySelector={keySelector}
        maxColumnCount={3}
        itemFlexGrow={0} />
}

const keySelector = (option: ContactOption): string => option.name

export default Contact
