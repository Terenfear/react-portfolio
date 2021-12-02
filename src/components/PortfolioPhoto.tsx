import { styled } from '@mui/system'

export default styled('img')(({ theme }) => ({
    objectFit: 'contain',
    minWidth: 0,
    maxWidth: theme.spacing(100),
    width: '100%',
    maxHeight: theme.spacing(100),
    borderRadius: `${theme.spacing(2)} ${theme.spacing(8)}`
}))
