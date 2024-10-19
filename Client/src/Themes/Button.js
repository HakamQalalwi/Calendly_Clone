import { createTheme } from '@mui/material/styles';
import { Button as MUIButton } from '@mui/material';

// Define the custom theme
const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '4px',
                },
                contained: {
                    fontFamily: 'Gilroy, sans-serif',
                    fontSize: '18px',
                    fontWeight: 600,
                    lineHeight: '29px',
                    textAlign: 'center',
                    transform: 'translateX(-5px)',
                    backgroundColor: '#006bff',
                    color: 'white',
                    height: '59px',
                    marginBottom: '4px',
                },
                containedError: {
                    backgroundColor: '#f44336',
                    color: 'white',
                    '&:hover': {
                        backgroundColor: '#d32f2f',
                    },
                },
                outlined: {
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '67px',
                    fontWeight: 700,
                    lineHeight: '81px',
                },
                text: {
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '26px',
                    fontWeight: 600,
                    fontStyle: 'italic',
                },

                smooth: {
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '22px',
                    fontWeight: 600,
                    fontStyle: 'normal',
                },

                normal: {
                    fontFamily: 'Gilroy, sans-serif',
                    fontSize: '16px',
                    fontWeight: 600,
                    lineHeight: '19px',
                    color: '#006bff',
                    fontStyle: 'normal',
                },
            },
        },
    },
});

export { theme, MUIButton };
