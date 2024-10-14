import { Grid, Stack, Typography } from '@mui/material';
import ImageSection from './ImageSection.jsx';


const Section = ({ title, subtitle, content, imgSrc, imgAlt }) => (
    <Grid container spacing={2} sx={{ minHeight: '40vh', width: '90%', margin: 'auto', marginBottom: '10px' }}>
        <Grid item xs={12} md={6} display="flex" alignItems="center" justifyContent="center">
            <Stack spacing={3}>
                <Typography variant="h5" color="primary">{title}</Typography>
                <Typography variant="h4" color="primary.dark">{subtitle}</Typography>
                <Typography variant="body1" color="text.secondary">{content}</Typography>
            </Stack>
        </Grid>
        <ImageSection src={imgSrc} alt={imgAlt} />
    </Grid>
);

export default Section;
