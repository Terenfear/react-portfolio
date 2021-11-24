import { common } from '@mui/material/colors'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'

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
    typography: (palette) => {
        const hStyle = {
            fontFamily: '"Roboto Slab", serif',
            color: palette.text.secondary
        }
        return {
            htmlFontSize: 20,
            fontSize: 20,
            h1: {
                ...hStyle,
                fontSize: '3.75rem'
            },
            h2: {
                color: palette.primary.main,
                fontWeight: 'bold',
                fontSize: '1.25rem',
                letterSpacing: '0.13em',
                textTransform: 'uppercase'
            },
            h3: hStyle,
            h4: hStyle,
            h5: hStyle,
            h6: hStyle,
            button: {
                color: palette.common.white,
                lineHeight: 1.2,
                textTransform: 'capitalize',
            }
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    padding: '0.4rem 18px',
                    borderRadius: '100vmax',
                },
                outlined: {
                    borderWidth: 3,
                    ['&:hover']: {
                        borderWidth: 3
                    }
                }
            }
        }
    }
})

const mergedTheme = createTheme(baseTheme, {
    typography: {
        button: { letterSpacing: baseTheme.typography.body1.letterSpacing }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    [baseTheme.breakpoints.up('md')]: {
                        padding: '0.5rem 25px',
                    }
                }
            }
        }
    },
    breakpoints: {
        isDesktopCSSMediaQuery: baseTheme.breakpoints.up('md'),
        isDesktopMediaQuery: baseTheme.breakpoints.up('md').replace(/^@media( ?)/m, ''),
    }
}
)
const theme = responsiveFontSizes(mergedTheme, { factor: 3 })

export default theme
