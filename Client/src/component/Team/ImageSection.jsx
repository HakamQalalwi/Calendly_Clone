import {Grid, Box } from '@mui/material';

const ImageSection = ({ src, alt }) => (
    <Grid item xs={12} md={6}>
        <Box component="img" alt={alt} src={src} sx={{ height: '500px', objectFit: 'cover' }} />
    </Grid>
);

export default ImageSection;
