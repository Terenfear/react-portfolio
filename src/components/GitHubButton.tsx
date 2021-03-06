import GitHubIcon from '@mui/icons-material/GitHub'
import { IconButton } from '@mui/material'
import React from 'react'

const GitHubButton: React.FC = () => (
    <IconButton component='a'
        href='https://github.com/Terenfear/react-portfolio'
        aria-label={'This GitHub repo'}>
        <GitHubIcon />
    </IconButton>
)

export default GitHubButton
