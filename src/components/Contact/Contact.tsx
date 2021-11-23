import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { useSelector } from 'react-redux'
import { calculateFlexBasisExpr } from '../../utils/reactUtils'
import SimplePortfolioItem from '../PortfolioItem/SimplePortfolioItem'
import ContactOptionItem from './ContactOptionItem'
import { selectContactOptions, selectContactTitle } from './contactSlice'

const Contact = (): JSX.Element => {
    const theme = useTheme()
    const title = useSelector(selectContactTitle)
    const skills = useSelector(...selectContactOptions)
    const itemGap = theme.spacing(8)
    const itemGapNumber = Number(itemGap.replace('px', '')) || 0
    const flexBasisExpr = calculateFlexBasisExpr(IDEAL_COLUMN_COUNT, itemGapNumber)
    return (
        <SimplePortfolioItem>
            <Typography variant='h3' mb={3} textAlign='center'>{title}</Typography>
            <Box sx={{
                display: 'flex',
                flexFlow: 'row wrap',
                justifyContent: 'center',
                gap: itemGap
            }}>
                {skills.map(s =>
                    <ContactOptionItem {...s}
                        key={s.name}
                        sx={{
                            [theme.breakpoints.up('md')]: {
                                flex: `0 1 ${flexBasisExpr}`
                            }
                        }} />
                )}
            </Box>
        </SimplePortfolioItem>
    )
}

const IDEAL_COLUMN_COUNT = 3

export default Contact
