import CloudIcon from '@mui/icons-material/Cloud';
import { Typography } from '@mui/material';

import styles from './weather.module.scss';

const Weather = () => {
  return (
    <div className={styles.weather}>
      <Typography variant='h4'>
        <span className='text-[50px]'>12</span>
        <span>°C</span>
      </Typography>
      <Typography variant='h4'>
        <div>London</div>
      </Typography>
      <CloudIcon style={{ fontSize: '50px' }} />
    </div>
  );
};

export { Weather };
