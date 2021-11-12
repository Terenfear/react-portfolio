import { Box, styled } from '@mui/system'

export default styled(Box)<{ isReverse?: boolean }>(({ theme, isReverse = false }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
        flexDirection: isReverse ? 'row-reverse' : 'row',
        gap: theme.spacing(8),
    }
}))
