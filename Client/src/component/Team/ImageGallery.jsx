import { Box } from '@mui/material';
import plans from '../../assets/plans.png';
import smartSchedule from '../../assets/smartSchedule.png';

const ImageGallery = () => (
    <>
        <Box component="img" src={plans} sx={{ width: '90%', margin: 'auto', marginBottom: '0px' }} />
        <Box component="img" src={smartSchedule} sx={{ width: '100%' }} />
    </>
);

export default ImageGallery;
