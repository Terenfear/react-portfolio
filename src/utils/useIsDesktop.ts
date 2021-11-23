import { useMediaQuery, useTheme } from '@mui/material'

/**
 * Observes viewport size to detect mobile/desktop transitions.
 * @returns is the current viewport desktop
 */
export default function useIsDesktop(): boolean {
    const theme = useTheme()
    const isDesktop = useMediaQuery(theme.breakpoints.isDesktopCSSMediaQuery, { noSsr: true })
    return isDesktop
}
