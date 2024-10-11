// Heading.js
const Heading = {
    styleOverrides: {
        root: {
            fontFamily: 'Gilroy, sans-serif', // Fallback in case the specific font isn't available
            fontWeight: 'normal', // Default weight for root, will be overridden by variants
            lineHeight: 1.5, // Default line height
        },
        h1: {
            fontFamily: 'Gilroy, sans-serif',
            fontWeight: 900,
            fontSize: '67px',
            lineHeight: '81px',
        },
        h2: {
            fontFamily: 'Gilroy, sans-serif',
            fontWeight: 700,
            fontSize: '38px',
            lineHeight: '53px',
            color: '#0b3558',
        },
        h3: {
            fontFamily: 'Gilroy, sans-serif',
            fontWeight: 900,
            fontSize: '40px',
            lineHeight: '60px',
            color: '#0b3558',
        },
        h4: {
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 600,
            fontSize: '22px',
        },
        h5: {
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
            fontSize: '30px',
            textAlign: 'center',
        },
    },
};

export default Heading;
