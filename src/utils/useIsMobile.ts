import { useMediaQuery, useTheme } from '@mui/material'

/**
 * Observes viewport size to detect mobile/desktop transitions.
 * @returns is the current viewport mobile
 */
export default function useIsMobile(): boolean {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'), { noSsr: true })
    return isMobile
}
