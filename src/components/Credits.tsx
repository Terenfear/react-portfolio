/* eslint-disable no-trailing-spaces */
import { Box, Link, Typography } from '@mui/material'
import React from 'react'
import GitHubButton from './GitHubButton'

const Credits: React.FC = () => (
    <Box component='footer'
        p={1}
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
                Developed by Pavel Kazlovich&nbsp;
            </Typography>
            <GitHubButton />
        </div>
    </Box>
)

export default Credits
