import { common } from '@mui/material/colors'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const hStyle = {
    fontFamily: '"Roboto Slab", serif',
    lineHeight: 1.3
}
const baseTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#313536',
            paper: '#252829'
        },
        primary: {
            main: '#00E472'
        },
        text: {
            primary: '#ABAEB0',
            secondary: common.white
        }
    },
    typography: {
        overline: {
            fontWeight: 'bold',
            fontSize: '1.25rem',
            letterSpacing: '0.13em'
        },
        h1: hStyle,
        h2: hStyle,
        h3: hStyle,
        h4: hStyle,
        h5: hStyle,
        h6: hStyle,
        body1: {
            fontSize: '1.25rem',
            lineHeight: 1.5
        }
    }
})

const mergedTheme = createTheme(baseTheme, {
    typography: {
        h1: { color: baseTheme.palette.text.secondary },
        h2: { color: baseTheme.palette.text.secondary },
        h3: { color: baseTheme.palette.text.secondary },
        h4: { color: baseTheme.palette.text.secondary },
        h5: { color: baseTheme.palette.text.secondary },
        h6: { color: baseTheme.palette.text.secondary },
        overline: { color: baseTheme.palette.primary.main }
    }
}
)
const theme = responsiveFontSizes(mergedTheme)

export default theme
