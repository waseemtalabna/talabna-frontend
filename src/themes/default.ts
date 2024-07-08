'use client';

import { createTheme } from '@mui/material/styles';
import '@fontsource/poppins'

const defaultTheme = createTheme({
    palette: {
        /* Primary Color */
        primary: {
            light: '#dc309c',
            main: '#902066',
            dark: '#5d1441',
            contrastText: '#000',
        },
        /* Secondary Color */
        secondary: {
            light: '#ffd328',
            main: '#ffc529',
            dark: '#cc9d20',
            contrastText: '#000',
        },
        /* Background color */
        background: {
            default: '#f1f1f1',
        },
        /* Text color */
        text: {
            primary: '#000',
            secondary: '#000',
            disabled: '#000',
        },
        error: {
            main: '#EE1E4E',
        },
    },
    typography: {
        fontSize: 14,
        fontWeightBold: 700,
        fontWeightMedium: 500,
        fontWeightRegular: 400,
        fontFamily: [
            'Poppins'
        ].join(','),
        h6: {
            fontSize: "1.4rem",
            fontWeight: 700
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                color: 'primary',
            },
            styleOverrides: {
                root: {
                    textTransform: 'none',
                }
            }
        },
    },
});

export default defaultTheme;