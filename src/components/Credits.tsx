/* eslint-disable no-trailing-spaces */
import { Box, IconButton, Link, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import React from 'react'

const Credits = (): JSX.Element => (
    <Box p={1}
        textAlign='end'>
        <Typography variant='caption'>
            Based on original design by{' '}
            <Link href={'https://www.figma.com/community/file/1027932277903474996'}>
                Joynal&nbsp;Abedin
            </Link>
            &nbsp;👍
        </Typography>
        <div>
            <Typography variant='caption'>
                Developed by Terenfear&nbsp;
            </Typography>
            <IconButton component='a' href='https://github.com/Terenfear/react-portfolio'>
                <GitHubIcon />
            </IconButton>
        </div>
    </Box>
)

export default Credits
