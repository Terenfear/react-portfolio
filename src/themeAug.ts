import { Theme, ThemeOptions } from '@mui/material/styles'

declare module '@mui/material/styles' {
    interface Theme {
        sizes: Sizes
    }
    interface ThemeOptions {
        sizes: Sizes
    }

    interface Sizes {
        itemPaddingVertical: number
    }
}
