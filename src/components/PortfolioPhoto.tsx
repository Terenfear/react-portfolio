import { styled } from '@mui/system'

export default styled('img')(({ theme }) => ({
    objectFit: 'contain',
    minWidth: 0,
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: `${theme.spacing(2)} ${theme.spacing(8)}`
}))
