import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        secondary: {
            light: '#F23005',
            main: '#A62205',
            dark: '#591E11',
            contrastText: '#D9B1AD',
        },
        primary: {
            light: '#d2d2d2',
            main: '#0D0D0D',
            dark: '#0D0D0D',
            contrastText: '#B9B7BD',
        },
    },
    typography: {
        fontFamily: 'apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    }
});

theme = responsiveFontSizes(theme);

export default theme;