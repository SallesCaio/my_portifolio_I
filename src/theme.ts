import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
    typography: {
        fontFamily: 'apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    }
});

theme = responsiveFontSizes(theme);

export default theme;