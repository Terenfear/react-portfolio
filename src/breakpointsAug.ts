import { Breakpoints, BreakpointsOptions } from '@mui/material/styles'

declare module '@mui/material/styles' {
    interface Breakpoints {
        isDesktopMediaQuery: string,
        isDesktopCSSMediaQuery: string
    }
    interface BreakpointsOptions {
        isDesktopMediaQuery: string,
        isDesktopCSSMediaQuery: string
    }
}
