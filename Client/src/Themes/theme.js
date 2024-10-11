// theme.js
import { createTheme } from '@mui/material/styles';
import Button from './Button'; // Import your button styles
import Heading from './Heading'; // Import your heading styles

const theme = createTheme({
    components: {
        MuiButton: Button,
        MuiTypography: {
            styleOverrides: Heading.styleOverrides, // Add heading styles here
        },
    },
});

export default theme;
