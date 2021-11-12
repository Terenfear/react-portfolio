import { styled } from '@mui/system'

export default styled('img')(({ theme }) => ({
    objectFit: 'contain',
    minWidth: 0,
    width: '100%',
    height: '100%',
    maxWidth: theme.spacing(60),
    maxHeight: theme.spacing(60)
}))
